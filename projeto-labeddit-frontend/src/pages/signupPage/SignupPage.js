import axios from "axios";
import useForm from "../../Hook/useForm"
import { useNavigate } from "react-router-dom";
import { handlePosts } from "../../router/cordinator";
import Header from "../../components/header/Header";
import { ButtonCadastrar, ContainerSignin, StyledForm, StyledInput, StyledTitulo } from "./styled";


const SignupPage = () => {
    const { form, onChange } = useForm({nickName: "", name: "", email: "", password: "" });
    const navigate = useNavigate();

    const fazerCadastro = (event) => {
        event.preventDefault();
        axios.post("https://labeddit-backend-saie.onrender.com/users/signup",form).then(
            (response)=>{
                localStorage.setItem("token",response.data.token)
                alert(response.data.message ||response.data )
                handlePosts(navigate)
            }
        ).catch((error)=>{alert("Não foi possível criar conta")});
      };
    return (
        <ContainerSignin>
            <Header/>
            <StyledTitulo>Olá, boas vindas ao LabEddit ;</StyledTitulo>
            <StyledForm onSubmit={fazerCadastro}>
                <StyledInput
                    name="nickName"
                    value={form.nickName}
                    onChange={onChange}
                    type="text"
                    placeholder=" Apelido"

                />
                <StyledInput
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    type="text"
                    placeholder=" Nome"
                    required
                />
                <StyledInput
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    type="email"
                    placeholder=" E-mail"
                    required
                />

                <StyledInput
                    name="password"
                    value={form.password}
                    onChange={onChange}
                    type="password"
                    placeholder=" Senha"
                    required
                />
                <p>Ao continuar, você concorda com o nosso{" "}
                    <a href="a">Contrato de usuário</a> e nossa
                    <a href="a"> Política de Privacidade</a>
                </p>
                <div>
                <input type="checkbox" id="cadastro" name="cadastro" value="cadastro" />
                <label htmlFor="cadastro"> Eu concordo em receber emails sobre coisas legais no Labeddit</label><br />
                </div>
                <ButtonCadastrar type="submit" value="Cadastrar">Cadastrar</ButtonCadastrar>

            </StyledForm>


        </ContainerSignin>
    )
}
export default SignupPage