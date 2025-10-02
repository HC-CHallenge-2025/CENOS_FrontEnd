import React from "react";
import './login.css';
import Footer from "../../components/Footer/Footer";

const Login: React.FC = () =>{
    return(
        <>
        <div className="page-content">
            <h2>Conteúdo para Login</h2>
            {/* Seu Dashboard e filtros viriam aqui */}
            <p>Este é o conteúdo principal da rota /login.</p>
        </div>
        <Footer/>            
        </>
    );
};

export default Login