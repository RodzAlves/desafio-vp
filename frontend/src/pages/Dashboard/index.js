import React, { useState, useEffect } from 'react';

import { FiEdit, FiX } from 'react-icons/fi';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import {
  Container,
  CardContainer,
  Card,
  TableContainer,
  ButtonOptions,
  OptionsContainer,
} from './styles';

import Modal from '../../components/Modal';
import Header from '../../components/Header';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState({});
  const [showModal, setShowModal] = useState(false);
  const { user, signOut } = useAuth();
  const deletedsNumber = parseInt(localStorage.getItem('deleteds'));

  useEffect(() => {
    async function loadUsers() {
      const { data } = await api.get('/users');

      const usersFormatted = data.map((user) => ({
        ...user,
        formattedName: `${user.first_name} ${user.last_name}`,
        formattedDate: new Date(user.createdAt).toLocaleDateString('pt-br'),
      }));

      setUsers(usersFormatted);
    }

    loadUsers();
  }, []);

  async function handleUpdateUser(user) {
    if (
      user.first_name !== '' &&
      user.last_name !== '' &&
      user.password !== '' &&
      user.phone !== '' &&
      user.cpf !== ''
    ) {
      await api.put(`/users/${editingUser.id}`, user);
    }

    window.location.reload();
  }

  async function openModal(user) {
    try {
      setShowModal((prev) => !prev);
      setEditingUser(user);
    } catch (err) {
      console.log(err.message);
    }
  }

  async function handleDeleteUser(id) {
    try {
      await api.delete(`/users/${id}`);

      var deleteds = parseInt(localStorage.getItem('deleteds'));

      localStorage.setItem('deleteds', `${(deleteds = deleteds + 1)}`);

      user.id === id ? signOut() : window.location.reload();
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <>
      <Header />
      <Container>
        <CardContainer>
          <Card>
            <header>
              <p>Usuários cadastrados ativos</p>
            </header>
            <h1 data-testid="balance-income">{users.length}</h1>
          </Card>
          <Card deleted>
            <header>
              <p>Total de usuários deletados</p>
            </header>
            <h1 data-testid="balance-outcome">
              {deletedsNumber === null ? 0 : deletedsNumber}
            </h1>
          </Card>
        </CardContainer>

        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Telefone</th>
                <th>CPF</th>
                <th>Data</th>
                <th>Opções</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.formattedName}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.cpf}</td>
                  <td>{user.formattedDate}</td>
                  <td>
                    <OptionsContainer>
                      <ButtonOptions onClick={() => openModal(user)}>
                        <FiEdit size={24} />
                      </ButtonOptions>
                      <Modal
                        showModal={showModal}
                        setShowModal={setShowModal}
                        edit
                        user={user}
                        editingUser={editingUser}
                        handleUpdateUser={handleUpdateUser}
                      />
                      <ButtonOptions
                        delete
                        onClick={() => handleDeleteUser(user.id)}
                      >
                        <FiX size={32} />
                      </ButtonOptions>
                    </OptionsContainer>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Dashboard;
