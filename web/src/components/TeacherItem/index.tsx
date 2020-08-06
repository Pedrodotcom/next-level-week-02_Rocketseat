import React from 'react';
import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem() {
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars1.githubusercontent.com/u/60163084?s=460&u=ccb490683eed73b7e74af24f5c8829201abd2386&v=4" alt="Pedro Luis"/>
                        <div>
                            <strong>Pedro Luis</strong>
                            <span>Química</span>
                        </div>
                    </header>
                    <p>
                        Entusiasta das melhores tecnologias de química avançada.
                    </p>

                    <footer>
                        <p>Preço/hora 
                           <strong>R$80.00</strong> 
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem;