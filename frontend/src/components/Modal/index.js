import React, { useRef, useCallback } from 'react';

import {
  FiMail,
  FiLock,
  FiUserCheck,
  FiUser,
  FiPhone,
  FiArrowRight,
} from 'react-icons/fi';

import { Container, ModalWrapper, CloseButton } from './styles';

import { Form } from '@unform/web';

import Input from '../Input';
import Button from '../Button';

const Modal = ({
  showModal,
  setShowModal,
  edit,
  editingUser,
  handleUpdateUser,
  handleAddUser,
}) => {
  const formRef = useRef(null);

  const handleSubmitUpdate = useCallback(
    async (data) => {
      handleUpdateUser(data);
      setShowModal(false);
    },
    [handleUpdateUser, setShowModal]
  );
  const handleSubmitCreate = useCallback(
    async (data) => {
      handleAddUser(data);
      setShowModal(false);
    },
    [handleAddUser, setShowModal]
  );

  return (
    <>
      {showModal ? (
        <Container>
          <ModalWrapper edit={edit}>
            {edit ? <h1>Editar usuário</h1> : <h1>Criar usuário</h1>}

            <Form
              ref={formRef}
              onSubmit={edit ? handleSubmitUpdate : handleSubmitCreate}
              initialData={editingUser}
            >
              <Input
                name="first_name"
                icon={FiUser}
                placeholder={edit ? editingUser.first_name : 'Nome'}
                mask=""
              />
              <Input
                name="last_name"
                icon={FiArrowRight}
                placeholder={edit ? editingUser.last_name : 'Sobrenome'}
                mask=""
              />
              {edit ? null : (
                <Input
                  name="email"
                  icon={FiMail}
                  placeholder="E-mail"
                  mask=""
                />
              )}

              {edit ? null : (
                <Input
                  name="password"
                  type="password"
                  icon={FiLock}
                  placeholder="Senha"
                  mask=""
                />
              )}

              <Input
                name="phone"
                mask="(99) 99999-9999"
                icon={FiPhone}
                placeholder={edit ? editingUser.phone : 'Telefone'}
              />
              <Input
                name="cpf"
                mask="999.999.999-99"
                icon={FiUserCheck}
                placeholder={edit ? editingUser.cpf : 'CPF'}
              />
              <Button type="submit">{edit ? 'Salvar' : 'Cadastrar'}</Button>
            </Form>
            <CloseButton
              aria-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
            />
          </ModalWrapper>
        </Container>
      ) : null}
    </>
  );
};

export default Modal;
