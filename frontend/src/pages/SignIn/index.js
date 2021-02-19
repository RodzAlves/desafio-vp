import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiMail, FiLock, FiUserPlus } from 'react-icons/fi';

import { Form } from '@unform/web';

import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Content, AnimationContainer } from './styles';

import logoImg from '../../assets/vp.png';

import Button from '../../components/Button';
import Input from '../../components/Input';

const SignIn = () => {
  const formRef = useRef(null);
  const { signIn } = useAuth();
  const history = useHistory();

  const handleSubmitUserLogin = useCallback(
    async (data) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido.'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });

        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          console.log('Error aqui: ' + err.message);

          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }
      }
    },
    [signIn, history]
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Link to="/">
            <img src={logoImg} alt="Logo" />
          </Link>
          <Form ref={formRef} onSubmit={handleSubmitUserLogin}>
            <h1>Faça seu login</h1>

            <Input name="email" icon={FiMail} placeholder="E-mail" mask="" />
            <Input
              name="password"
              icon={FiLock}
              placeholder="Senha"
              type="password"
              mask=""
            />
            <Button type="submit">
              Entrar <FiLogIn />{' '}
            </Button>
          </Form>

          <Link to="/signup">
            <FiUserPlus />
            Criar minha conta
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignIn;
