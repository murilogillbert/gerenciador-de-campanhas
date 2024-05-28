import { Outlet } from "react-router-dom";

//Dentro do gerenciador haverá as páginas de visualizar campanhas e criar campanhas
export default function Gerenciador() {
    return(<>
    
    <div id="radioButtons">
        <label htmlFor="visualizar">Visualizar Campanhas</label>
        <Link to="/minhasCampanhas"><input type="radio" name="Visualizar" id="visualizar" /></Link>
        <label htmlFor="criar">Criar</label>
        <Link to="/criacaoCampanhas"><input type="radio" name="criar" id="criar" /></Link>
    </div>
    <Outlet></Outlet>
    </>)
}