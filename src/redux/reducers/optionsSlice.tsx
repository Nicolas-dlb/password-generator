import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface OptionsState {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
}

const initialState: OptionsState = {
  length: 8,
  uppercase: true,
  lowercase: false,
  numbers: true,
  symbols: false,
};

const optionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    setLength: (state, action: PayloadAction<number>) => {
      state.length = action.payload;
    },
    setUppercase: (state, action: PayloadAction<boolean>) => {
      state.uppercase = action.payload;
    },
    setLowercase: (state, action: PayloadAction<boolean>) => {
      state.lowercase = action.payload;
    },
    setNumbers: (state, action: PayloadAction<boolean>) => {
      state.numbers = action.payload;
    },
    setSymbols: (state, action: PayloadAction<boolean>) => {
      state.symbols = action.payload;
    },
  },
});

export const { setLength, setUppercase, setLowercase, setNumbers, setSymbols } =
  optionsSlice.actions;

export const selectLength = (state: RootState) => state.options.length;
export const selectUppercase = (state: RootState) => state.options.uppercase;
export const selectLowercase = (state: RootState) => state.options.lowercase;
export const selectNumbers = (state: RootState) => state.options.numbers;
export const selectSymbols = (state: RootState) => state.options.symbols;

export default optionsSlice.reducer;
