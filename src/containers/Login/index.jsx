
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { api } from "../../services/api";

import Logo from '../../assets/Logo 1.svg';
import {
    Container,
    LeftContainer,
    RightContainer,
    Title,
    Form,
    InputContainer,
} from './styles';

import {Button} from '../../components/Button';


export function Login() {

  const schema = yup
  .object({
    email: yup.string().email('Digite um email válido').required('Campo obrigatório'),
    password: yup.string().min(6, 'Senha deve ter no mínimo 6 caracteres').required('Campo obrigatório'),
  })
  .required()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
      })
  const onSubmit = async (data) => {
    const response = await api.post('/session',{
      email:data.emal,
      password:data.password,

    })


  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="Logo-DevBurger" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span>Dev Burguer!</span> 
          <br />
          Acesse com seu <span>Login e senha.</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label htmlFor="login">Email</label>
            <input type="email" {...register("email")} />
            <p>{errors.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label htmlFor="login">Senha</label>
            <input type="password" {...register("password")} />
            <p>{errors.password?.message}</p>
          </InputContainer>
          <Button  type="submit" >Entrar</Button>
        </Form>
        <p>
            Não possui conta? <a href="">Clique Aqui</a>
        </p>
      </RightContainer>
    </Container>
  );
  }
}  
