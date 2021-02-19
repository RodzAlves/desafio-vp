import React, { useState, useCallback } from 'react';

import { FiUserPlus, FiLogOut, FiList } from 'react-icons/fi';

import { Container, StyledLink, StyledButton } from './styles';

import Modal from '../Modal';

import * as Yup from 'yup';

import api from '../../services/api';

import logoImg from '../../assets/vp.png';

import { useAuth } from '../../hooks/auth';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const { signOut } = useAuth();

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleAddUser = useCallback(async (user) => {
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

      await schema.validate(user, {
        abortEarly: false,
      });

      await api.post('/users', user);

      window.location.reload();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        console.log('Error aqui: ' + err.message);

        return;
      }
      console.log(err);
    }
  }, []);

  return (
    <Container>
      <header>
        <img src={logoImg} alt="Logo" />

        <nav>
          <StyledLink to="/dashboard">
            {' '}
            <FiList /> Usuários
          </StyledLink>

          <StyledButton onClick={openModal}>
            {' '}
            <FiUserPlus /> Novo usuário
          </StyledButton>

          <StyledButton onClick={signOut}>
            {' '}
            <FiLogOut /> Sair
          </StyledButton>

          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            handleAddUser={handleAddUser}
          />
        </nav>
      </header>
    </Container>
  );
};

export default Header;
