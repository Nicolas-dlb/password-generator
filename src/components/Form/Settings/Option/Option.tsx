import React from "react";
import { KeyboardEvent } from "react";
import { OptionT } from "../../../../utils/types";
import useLastChecked from "../../../../utils/hooks/useLastChecked";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { functions } from "../../../../utils/constants";
import { GreenCheckbox } from "../../../StyledComponents/StyledComponents";
import "./Option.scss";

interface OptionProps {
	name: OptionT;
}

function Option({ name }: OptionProps) {
	const selectProperty = functions[name].getter;
	const setProperty = functions[name].setter;
	const checked = useAppSelector(selectProperty);
	const isLastChecked = useLastChecked(name);
	const isLetterProperty = name === "Uppercase" || name === "Lowercase";

	const dispatch = useAppDispatch();

	const handleChange = () => dispatch(setProperty(!checked));

	const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
		if (event.key === "Enter") {
			event.preventDefault();

			handleChange();
		}
	};
	return (
		<div className={`option ${isLastChecked && "disabled"}`}>
			<label htmlFor={name}>
				Include {name}{" "}
				<span className="letters"> {isLetterProperty && "Letters"}</span>
			</label>
			<GreenCheckbox
				disableFocusRipple
				disableRipple
				id={name}
				tabIndex={0}
				inputProps={{ onKeyDown: handleKeyDown }}
				disabled={isLastChecked}
				checked={checked}
				onChange={handleChange}
			/>
		</div>
	);
}

export default Option;
