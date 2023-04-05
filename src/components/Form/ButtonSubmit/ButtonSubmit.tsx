import React from "react";
import RightArrow from "../../../assets/RightArrow";
import "./ButtonSubmit.scss";

function ButtonSubmit() {
	return (
		<button
			aria-label="Generate the password"
			className="btn-submit"
			type="submit"
		>
			<p>Generate</p>
			<RightArrow />
		</button>
	);
}

export default ButtonSubmit;
