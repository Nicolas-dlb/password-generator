import React, { FormEvent } from 'react';
import './Form.scss';
import Length from './Length/Length';
import Settings from './Settings/Settings';
import Strength from './Strength/Strength';
import ButtonSubmit from './ButtonSubmit/ButtonSubmit';

interface FormProps {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  password: string;
}

function Form({ onSubmit, password }: FormProps) {
  return (
    <form onSubmit={onSubmit} className="form">
      <Length />
      <Settings />
      <Strength password={password} />
      <ButtonSubmit />
    </form>
  );
}

export default Form;
