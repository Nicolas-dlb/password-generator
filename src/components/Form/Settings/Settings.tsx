import './Settings.scss';
import Option from './Option/Option';
import { options } from '../../../utils/constants';

function Settings() {
  return (
    <div className="settings">
      {options.map((option) => (
        <Option key={option} name={option} />
      ))}
    </div>
  );
}

export default Settings;
