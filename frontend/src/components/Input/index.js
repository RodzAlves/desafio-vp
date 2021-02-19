import React, { useEffect, useRef } from 'react';

import InputMask from 'react-input-mask';

import { FiAlertCircle } from 'react-icons/fi';

import { useField } from '@unform/core';

import { Container, Error } from './styles';

const Input = ({ name, icon: Icon, mask, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
    console.log(fieldName);
  }, [fieldName, registerField]);
  return (
    <>
      <Container>
        {Icon && <Icon size={20} />}
        {mask !== '' ? (
          <InputMask
            type="text"
            mask={mask}
            defaultValue={defaultValue}
            ref={inputRef}
            {...rest}
          />
        ) : (
          <input
            type="text"
            defaultValue={defaultValue}
            ref={inputRef}
            {...rest}
          />
        )}
      </Container>
      {error && (
        <Error>
          <FiAlertCircle color="#c53030" size={13} /> <span>{error}</span>
        </Error>
      )}
    </>
  );
};

export default Input;
