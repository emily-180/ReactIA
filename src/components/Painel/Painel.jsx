import React, { useState } from "react";
import "./Painel.css";
import { assets } from "../../assets/assets";
import getApiData from "../../config/apigemini";

const suggestions = [
    "Quem é você?",
    "Quem pode participar das avaliações?",
    "Quais são os resultados mais recentes?",
    "Qual a importância da avaliação?",
    "Contato de email",
    "Base Legal",
    "Instagram",
    "Quando geralmente ocorre as avaliações?"
];

const Painel = () => {
    const [input, setInput] = useState("");
    const [chat, setChat] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSuggestionClick = (text) => {
        setInput(text);
    };

    const onSentApi = async () => {
        if (!input.trim()) return;

        const userMessage = { from: "user", text: input };
        setChat(prev => [...prev, userMessage]);
        setLoading(true);

        try {
            let response = await getApiData(input);
            let responseArray = response.split("**");
            let formatedResponse = "";

            for (let i = 0; i < responseArray.length; i++) {
                formatedResponse += i % 2 === 0
                    ? responseArray[i]
                    : `<b>${responseArray[i]}</b>`;
            }

            const botMessage = { from: "bot", text: formatedResponse.replace(/\n/g, "<br />") };
            setChat(prev => [...prev, botMessage]);
        } catch (err) {
            console.error(err);
        }

        setInput("");
        setLoading(false);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            onSentApi();
        }
    };

    return (
        <div className="main">
            
            <div className="main-container">
                <div className="greet">
                    <h1>
                        Olá, sou <span>Caira</span>
                        
                    </h1>
                    <h3>Sou Assistente da CPA do IFSULDEMINAS</h3>
                </div>

                <div className="suggestions">
                    <h2>No que posso lhe ajudar hoje?</h2>
                    <div className="suggestion-buttons">
                        {suggestions.map((s, idx) => (
                            <button key={idx} onClick={() => handleSuggestionClick(s)}>{s}</button>
                        ))}
                    </div>
                </div>

                <div className="chat-box">
                    {chat.map((msg, index) => (
                        <div
                            key={index}
                            className={`chat-bubble ${msg.from === "user" ? "user-msg" : "bot-msg"}`}
                        >
                            {msg.from === "bot"
                                ? <p dangerouslySetInnerHTML={{ __html: msg.text }}></p>
                                : <p>{msg.text}</p>
                            }
                        </div>
                    ))}
                    {loading && <div className="chat-bubble bot-msg"><p>Digitando...</p></div>}
                </div>

                <div className="main-bottom">
                    <div className="search-box">
                        <input
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            value={input}
                            type="text"
                            placeholder="Digite sua pergunta aqui"
                        />
                        <div>
                            <img
                                onClick={() => onSentApi()}
                                src={assets.send_icon} alt="enviar"
                            />
                        </div>
                    </div>
                    <p className="bottom-info">
                        A Caira Assistente utiliza uma base de dados própria com
                        pesquisa gerada através de embeddings do Gemini.
                        Algumas informações podem estar desatualizadas. Verifique sempre as fontes oficiais.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Painel;
