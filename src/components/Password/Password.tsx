import CopyToClipboard from "./CopyToClipboard/CopyToClipboard";
import "./Password.scss";
import React from "react";

interface PasswordProps {
	password: string;
}

function Password({ password }: PasswordProps) {
	return (
		<section className="password__wrapper">
			<p className={`password ${!password && "placeholder-color"}`}>
				{password || "P4$5W0rD!"}
			</p>
			<CopyToClipboard valueToCopy={password} />
		</section>
	);
}

export default Password;
