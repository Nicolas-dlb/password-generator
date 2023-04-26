import { describe } from "vitest";
import { screen } from "@testing-library/react";
import Length from "../components/Form/Length/Length";
import renderWithStore from "./utils/renderWithStore";
import { store } from "../redux/store";
import { setLength } from "../redux/reducers/optionsSlice";

describe("Password", () => {
	it("should display an input type range", () => {
		renderWithStore(<Length />);

		expect(document.querySelector("input")).toHaveAttribute("type", "range");
	});

	it("should display the length selected", () => {
		store.dispatch(setLength(10));

		renderWithStore(<Length />, store);

		expect(screen.getByText("10")).toBeInTheDocument();
	});
});
