import { Checkbox, Slider, styled } from '@mui/material';

export const GreenCheckbox = styled(Checkbox)({
  color: 'white',
  padding: '5px',
  cursor: 'pointer',

  // Disabled
  '&.Mui-disabled .MuiSvgIcon-root': {
    color: '#848387 !important',
    cursor: 'default',
  },

  '.MuiSlider-thumb:focus .Mui-focusVisible': {
    outline: 'none !important',
  },

  '&.Mui-focusVisible': {
    boxShadow: 'none !important',
    background: 'transparent !important',
    borderRadius: '5px',
    outline: '2px solid var(--primary-color)',
  },

  // hover
  '&:hover:not(:has(input:disabled)) .MuiSvgIcon-root': {
    color: 'var(--primary-color)',
  },

  // Checked
  '&.Mui-checked .MuiSvgIcon-root': {
    color: 'var(--primary-color)',
  },
});

export const GreenSlider = styled(Slider)({
  height: '8px',

  // Effet de focus
  '& .Mui-focusVisible, & .Mui-active, &:focus, &:focus-visible': {
    boxShadow: '0 0 0 3px var(--primary-color) !important',
  },

  // Curseur
  '& .MuiSlider-thumb': {
    backgroundColor: 'white',
    borderRadius: '50%',
    transition: 'all 0.1s ease',
    boxShadow: '0 0 0 0px var(--primary-color)',

    '&:hover, &:active, &:focus': {
      boxShadow: '0 0 0 3px var(--primary-color) !important',
    },
  },

  // Piste
  '& .MuiSlider-track': {
    backgroundColor: 'var(--primary-color)',
    border: 'none',
  },

  // Piste qui reste à parcourir
  '& .MuiSlider-rail': {
    backgroundColor: 'var(--main-bg-color)',
  },
});
