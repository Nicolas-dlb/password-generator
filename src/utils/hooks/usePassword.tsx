import { FormEvent, useCallback, useState } from 'react';
import {
  selectLength,
  selectLowercase,
  selectNumbers,
  selectSymbols,
  selectUppercase,
} from '../../redux/reducers/optionsSlice';
import { getAlphabet, getNumbers, getSymbols } from '../helpers';
import { useAppSelector } from '../../redux/hooks';

function usePassword() {
  const [password, setPassword] = useState('');
  const length = useAppSelector(selectLength);
  const uppercaseSelected: boolean = useAppSelector(selectUppercase);
  const lowercaseSelected: boolean = useAppSelector(selectLowercase);
  const numbersSelected: boolean = useAppSelector(selectNumbers);
  const symbolsSelected: boolean = useAppSelector(selectSymbols);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!length) {
        setPassword('');
        return;
      }

      const uppercaseLetters = getAlphabet('uppercase');
      const lowercaseLetters = getAlphabet('lowercase');
      const numbers = getNumbers();
      const symbols = getSymbols();

      const characters = [];

      if (uppercaseSelected) {
        characters.push(...uppercaseLetters);
      }

      if (lowercaseSelected) {
        characters.push(...lowercaseLetters);
      }

      if (numbersSelected) {
        characters.push(...numbers);
      }

      if (symbolsSelected) {
        characters.push(...symbols);
      }

      let newPassword = '';

      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        newPassword += characters[randomIndex];
      }

      setPassword(newPassword);
    },
    [
      length,
      uppercaseSelected,
      lowercaseSelected,
      numbersSelected,
      symbolsSelected,
    ]
  );

  return {
    password,
    handleSubmit,
  };
}

export default usePassword;
