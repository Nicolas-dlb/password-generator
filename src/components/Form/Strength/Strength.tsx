import { evaluatePassword } from '../../../utils/helpers';
import Indicator from './Indicator/Indicator';
import './Strength.scss';

interface StrengthProps {
  password: string;
}

function Strength({ password }: StrengthProps) {
  const score = evaluatePassword(password);

  let grade = '';

  if (score === 1) grade = 'TOO WEAK';
  if (score === 2) grade = 'WEAK';
  if (score === 3) grade = 'MEDIUM';
  if (score === 4) grade = 'STRONG';

  return (
    <div className="strength">
      <p className="strength__title">STRENGTH</p>
      <div className="strength__indicator">
        <p className="strength__indicator__grade">{grade}</p>
        <Indicator strength={score} />
      </div>
    </div>
  );
}

export default Strength;
