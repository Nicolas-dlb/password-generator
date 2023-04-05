import RightArrow from '../../../assets/RightArrow';
import './ButtonSubmit.scss';

function ButtonSubmit() {
  return (
    <button className="btn-submit" type="submit">
      <p>Generate</p>
      <RightArrow />
    </button>
  );
}

export default ButtonSubmit;
