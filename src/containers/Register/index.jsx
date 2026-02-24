import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';

import { api } from '../../services/api.js';
import {
  Container,
  LeftContainer,
  RightContainer,
  Title,
  Form,
  InputContainer,
} from './styles.js';

import { Button } from '../../components/Button/index.jsx';
import Logo from '../../assets/Logo1.svg';

export function Register() {
  const schema = yup
    .object({
      name: yup.string().required('Campo obrigatório'),
      email: yup
        .string()
        .email('Digite um email válido')
        .required('Campo obrigatório'),
      password: yup
        .string()
        .min(6, 'Senha deve ter no mínimo 6 caracteres')
        .required('Campo obrigatório'),
        confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'As senhas devem ser iguais')
        .required('Campo obrigatório'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    const response = await toast.promise(
      api.post('/users', {
        name: data.name,
        email: data.email,
        password: data.password,
      }),
      {
        pending: 'Verificando suas credenciais...',
        success: 'Cadastro realizado com sucesso!',
        error: 'Falha no cadastro. Verifique suas credenciais.',
      },
    );
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="Logo-DevBurger" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Criar conta
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label htmlFor="login">Email</label>
            <input type="email" {...register('email')} />
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label htmlFor="login">Senha</label>
            <input type="password" {...register('password')} />
            <p>{errors?.password?.message}</p>
          </InputContainer>
          <Button type="submit">Entrar</Button>
        </Form>
        <p>
          Não possui conta? <a href="">Clique Aqui</a>
        </p>
      </RightContainer>
    </Container>
  );
}
