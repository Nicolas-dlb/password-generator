import { evaluatePassword, getGrade } from "../../../utils/helpers";
import Indicator from "./Indicator/Indicator";
import "./Strength.scss";

interface StrengthProps {
	password: string;
}

function Strength({ password }: StrengthProps) {
	const score = evaluatePassword(password);

	const grade = getGrade(score);
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
