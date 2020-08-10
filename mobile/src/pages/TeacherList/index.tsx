import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { Feather } from '@expo/vector-icons';

import api from '../../services/Api';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';
import { useFocusEffect } from '@react-navigation/native';

function TeacherList() {
    const [teachers, setTeachers] = useState([]);
    const [isFiltersVisible, setIsFiltersVisible] = useState(true);
    const [favorites, setFavorites] = useState<number[]>([]);

    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible);
    };

    function loadFavorites() {
        AsyncStorage.getItem('favorites')
            .then(response => {
                if(response) {
                    const favoritedTeachers = JSON.parse(response);
                    const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => teacher.id);
                    setFavorites(favoritedTeachersIds);
                }
            });
    };

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    async function handleFiltersSubmit() {
        loadFavorites();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
        });

        setTeachers(response.data);

        setIsFiltersVisible(!isFiltersVisible);
    };

    return (
        <View style={styles.container}>
            <PageHeader 
                title="Proffys disponíveis" 
                headerRight={(
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                        <Feather name="filter" size={20} color="#FFF"/>
                    </BorderlessButton>
                )}
            >
                { isFiltersVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput 
                            style={styles.input} 
                            placeholder='Qual a matéria?'
                            placeholderTextColor='#C1BCCC'
                            value={subject}
                            onChangeText={text => setSubject(text)}
                        />

                        <View style={styles.inputGroup}>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da Semana</Text>
                                <TextInput 
                                    style={styles.input} 
                                    placeholder='Qual o dia?'
                                    placeholderTextColor='#C1BCCC'
                                    value={week_day}
                                    onChangeText={text => setWeekDay(text)}
                                /> 
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput 
                                    style={styles.input} 
                                    placeholder='Que horas?' 
                                    placeholderTextColor='#C1BCCC'
                                    value={time}
                                    onChangeText={text => setTime(text) }
                                /> 
                            </View>
                        </View>

                        <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Buscar</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                {teachers.map((teacher: Teacher) => {
                    return (
                        <TeacherItem 
                            key={teacher.id} 
                            teacher={teacher}
                            favorited={favorites.includes(teacher.id)}
                        />
                    )
                })}

            </ScrollView>
        </View>
    );
};

export default TeacherList;