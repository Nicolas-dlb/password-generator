import {
  selectLowercase,
  selectNumbers,
  selectSymbols,
  selectUppercase,
  setLowercase,
  setNumbers,
  setSymbols,
  setUppercase,
} from '../redux/reducers/optionsSlice';
import { OptionT } from './types';

export const options: OptionT[] = [
  'Uppercase',
  'Lowercase',
  'Numbers',
  'Symbols',
];

export const functions = {
  Uppercase: { getter: selectUppercase, setter: setUppercase },
  Lowercase: { getter: selectLowercase, setter: setLowercase },
  Numbers: { getter: selectNumbers, setter: setNumbers },
  Symbols: { getter: selectSymbols, setter: setSymbols },
};
