import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../Assets/Group3.png"
import { handleHome } from "../../router/cordinator";
import { StyledHeader } from "./styled";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const logout = ()=>{
        localStorage.clear()
        handleHome(navigate)
    }
    return(
        <StyledHeader>
            <div></div>
        <img src={logo} alt="Logo Labenu"/>
        {
            location.pathname==="/signup"?
            <button onClick={()=>handleHome(navigate)}>Entrar</button>
            :
            <button onClick={logout} >Logout</button>
        }
        
        </StyledHeader>
    )
}
export default Header