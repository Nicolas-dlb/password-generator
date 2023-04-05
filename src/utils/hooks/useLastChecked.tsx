import { useAppSelector } from '../../redux/hooks';
import {
  selectLowercase,
  selectNumbers,
  selectSymbols,
  selectUppercase,
} from '../../redux/reducers/optionsSlice';
import { OptionT } from '../types';

function useLastChecked(optionName: OptionT) {
  const isUppercaseChecked = useAppSelector(selectUppercase);
  const isLowercaseChecked = useAppSelector(selectLowercase);
  const isNumbersChecked = useAppSelector(selectNumbers);
  const isSymbolsChecked = useAppSelector(selectSymbols);

  const checkedOptions = [
    { name: 'Uppercase', isChecked: isUppercaseChecked },
    { name: 'Lowercase', isChecked: isLowercaseChecked },
    { name: 'Numbers', isChecked: isNumbersChecked },
    { name: 'Symbols', isChecked: isSymbolsChecked },
  ].filter((option) => option.isChecked);

  const isLastChecked =
    checkedOptions.length === 1 && checkedOptions[0].name === optionName;

  return isLastChecked;
}

export default useLastChecked;
