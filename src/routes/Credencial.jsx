import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";
const Span = styled.span`
display: flex;
justify-content: center;
align-items: center;
font-weight: bold;`;

export default function Credencial() {
    const [login, setLogin] = useState(true);

    const toggleLogin = () => setLogin(!login);

    return (
        <div className="container">
            <Outlet />
            <div>
                {login ? (
                    <Span>
                        Possui uma conta? 
                        <Link to="Login" onClick={toggleLogin}>Logue aqui</Link>
                    </Span>
                ) : (
                    <Span>
                        Não possui uma conta? 
                        <Link to="Cadastro" onClick={toggleLogin}>Cadastre aqui</Link>
                    </Span>
                )}
            </div>
        </div>
    );
}
