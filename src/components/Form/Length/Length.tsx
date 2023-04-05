/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { useCallback, useRef } from "react";
import { selectLength, setLength } from "../../../redux/reducers/optionsSlice";
import { GreenSlider } from "../../StyledComponents/StyledComponents";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import "./Length.scss";

function Length() {
	const length = useAppSelector(selectLength);
	const dispatch = useAppDispatch();
	const slider = useRef<HTMLSpanElement>(null);

	const handleChange = useCallback(
		(e: Event) => {
			const value = parseFloat((e.target as HTMLInputElement).value);
			dispatch(setLength(value));

			// Keep focus-visible on change
			const sliderContainer = slider.current?.children[2] as HTMLSpanElement;
			setTimeout(() => sliderContainer.classList.add("Mui-focusVisible"), 150);
		},
		[dispatch]
	);

	const focusSlider = () => {
		const sliderContainer = slider.current?.children[2] as HTMLSpanElement;
		const input = sliderContainer?.children[0] as HTMLInputElement;
		input.focus();
		sliderContainer.classList.add("Mui-focusVisible");
	};

	const removeFocusStyle = () => {
		const sliderContainer = slider.current?.children[2] as HTMLSpanElement;
		sliderContainer.classList.remove("Mui-focusVisible");
	};

	return (
		<div className="length">
			<div className="length__header">
				<label htmlFor="length" onClick={focusSlider}>
					Character Length
				</label>
				<p className="length__value">{length}</p>
			</div>

			<GreenSlider
				min={0}
				max={20}
				ref={slider}
				aria-valuetext="length"
				aria-labelledby="length"
				onBlur={removeFocusStyle}
				value={length}
				onChange={handleChange}
			/>
		</div>
	);
}

export default Length;
