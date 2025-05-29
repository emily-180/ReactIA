import React, { useState } from "react";
import "./Painel.css";
import { assets } from "../../assets/assets";
const Painel = () => {
    const [input, setInput] = React.useState('');
    const handleCardClick = (text) => {
        setInput(text);
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            //chamar api
        }
    };
    return (
        <div className="main">
            <div className="nav">

                <p>IFSULDEMINAS Assistente</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p>
                        <span>Olá estudante.</span>
                    </p>
                    <p>Como posso lhe ajudar hoje?</p>
                </div>
                {/* Inicio cards */}
                <>
                    <div className="cards" >
                        <div className="card" onClick={() =>
                            handleCardClick('Sugestões de cursos e atividades')}>
                            <p>Sugestões de cursos e atividades</p>
                            <img src={assets.compass_icon} alt="" />
                        </div>
                        <div className="card" onClick={() =>

                            handleCardClick('Informações sobre vestibular e inscrições')}>
                            <p>Informações sobre vestibular e inscrições</p>
                            <img src={assets.bulb_icon} alt="" />
                        </div>
                        <div className="card" onClick={() =>

                            handleCardClick('Localização dos campi da instituição')}>
                            <p>Localização dos campi da instituição</p>
                            <img src={assets.message_icon} alt="" />
                        </div>
                        <div className="card" onClick={() =>
                            handleCardClick('Conheça mais sobre a instituição')}>
                            <p>Conheça mais sobre a instituição</p>
                            <img src={assets.code_icon} alt="" />
                        </div>
                    </div>
                    {/* Fim dos Cards - mostra se nao tiver resultado */}
                </>
                {/* Inicio mostra resultado */}
                {/* Fim mostra resultado */}
                <div className="main-bottom">
                    <div className="search-box">
                        <input
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            value={input}
                            type="text"
                            placeholder="Entre com sua pergunta aqui"
                        />

                        <div>
                            <img src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className="bottom-info">
                        IFSULDEMINAS Assistente utiliza uma base de dados própria

                        com pesquisa gerada através de embeddings do Gemini. Algumas
                        informações podem ser incorretas, sempre verifique as fonte
                        recomendadas.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Painel;