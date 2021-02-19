import React, { useCallback, useRef } from 'react';
import {
  FiMail,
  FiLock,
  FiUser,
  FiPhone,
  FiUserCheck,
  FiArrowRight,
  FiNavigation,
} from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import api from '../../services/api';

import getValidationErrors from '../../utils/getValidationErrors';

import { Link, useHistory } from 'react-router-dom';

import { Container, Content, AnimationContainer } from './styles';

import logoImg from '../../assets/vp.png';

import Button from '../../components/Button';
import Input from '../../components/Input';

const SignUp = () => {
  const formRef = useRef(null);
  const history = useHistory();

  const handleSubmitUserRegistration = useCallback(
    async (data) => {
      try {
        const schema = Yup.object().shape({
          first_name: Yup.string().required('Primeiro nome obrigatório'),
          last_name: Yup.string().required('Sobrenome nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido.'),
          password: Yup.string().min(6, 'No minimo 6 digitos.'),
          phone: Yup.string().required('Telefone obrigatório.'),
          cpf: Yup.string().required('CPF obrigatório.'),
        });
        console.log(data);

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);

        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          console.log('Error aqui: ' + err.message);

          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }
        console.log(err);
      }
    },
    [history]
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Link to="/">
            <img src={logoImg} alt="Logo" />
          </Link>
          <Form ref={formRef} onSubmit={handleSubmitUserRegistration}>
            <h1>Faça seu cadastro</h1>

            <Input name="first_name" icon={FiUser} placeholder="Nome" mask="" />
            <Input
              name="last_name"
              icon={FiArrowRight}
              placeholder="Sobrenome"
              mask=""
            />
            <Input name="email" icon={FiMail} placeholder="E-mail" mask="" />
            <Input
              name="password"
              icon={FiLock}
              placeholder="Senha"
              type="password"
              mask=""
            />
            <Input
              name="phone"
              mask="(99) 99999-9999"
              icon={FiPhone}
              placeholder="Telefone"
            />
            <Input
              name="cpf"
              mask="999.999.999-99"
              icon={FiUserCheck}
              placeholder="CPF"
            />
            <Button type="submit">
              Cadastrar <FiNavigation />{' '}
            </Button>
          </Form>

          <Link to="/">
            <FiUser />
            Entrar na minha conta
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
