import reducer, {
	setLength,
	setUppercase,
	setLowercase,
	setNumbers,
	setSymbols,
} from "../../redux/reducers/optionsSlice";

describe("options reducer", () => {
	const initialState = {
		length: 8,
		uppercase: true,
		lowercase: false,
		numbers: true,
		symbols: false,
	};

	it("should return the initial state", () => {
		expect(
			reducer(undefined, {
				type: undefined,
			})
		).toEqual(initialState);
	});

	it("should handle setLength", () => {
		const length = 10;
		const expectedState = {
			...initialState,
			length,
		};
		expect(reducer(initialState, setLength(length))).toEqual(expectedState);
	});

	it("should handle setUppercase", () => {
		const uppercase = false;
		const expectedState = {
			...initialState,
			uppercase,
		};
		expect(reducer(initialState, setUppercase(uppercase))).toEqual(
			expectedState
		);
	});

	it("should handle setLowercase", () => {
		const lowercase = true;
		const expectedState = {
			...initialState,
			lowercase,
		};
		expect(reducer(initialState, setLowercase(lowercase))).toEqual(
			expectedState
		);
	});

	it("should handle setNumbers", () => {
		const numbers = false;
		const expectedState = {
			...initialState,
			numbers,
		};
		expect(reducer(initialState, setNumbers(numbers))).toEqual(expectedState);
	});

	it("should handle setSymbols", () => {
		const symbols = true;
		const expectedState = {
			...initialState,
			symbols,
		};
		expect(reducer(initialState, setSymbols(symbols))).toEqual(expectedState);
	});
});
