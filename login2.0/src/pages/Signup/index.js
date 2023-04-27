import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "reat-router-dom";
import useAuth from '../../hooks/useAuth';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [emailConf, setEmailConf] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        if (!email | !emailConf | !senha) {
            setError("Preencha todos os campos")
            return;
        } else if (email !== emailConf){
            setError("Os -emails não são iguais")
            return;
        }
    

       const res = signin(email, senha);

       if (res) {
          setError(res);
          return;
        }

        alert("Usuário cadastrado com sucesso!");
        navigate("/");
    };



    return (
        <C.Container>
        <C.Label>SISTEMA DE LOGIN</C.Label>
        <C.Content>
            <Input
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
            />
            <Input
            type="email"
            placeholder="Confirme seu email"
            value={emailConf}
            onChange={(e) => [setEmailConf(e.target.value), setError("")]}
            />
            <Input
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}
            />
            <C.LabelError>{error}</C.LabelError>
            <Button Text="Inscrever-se" onClick={handleLogin} />
            <C.labelSignin>
                Já tem uma conta?
                <C.Strong>
                    <Link to="/">&nbsp;Entre</Link>
                </C.Strong>
            </C.labelSignin>
        </C.Content>
    </C.Container>
    );
};

export default Signup;