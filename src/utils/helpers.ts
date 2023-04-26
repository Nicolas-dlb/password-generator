import { hasLowercase, hasNumbers, hasSymbols, hasUppercase } from "./regex";

export const getAlphabet = (style: "uppercase" | "lowercase") =>
	[...Array(26).keys()].map((i) =>
		String.fromCharCode(i + (style === "lowercase" ? 97 : 65))
	);

export const getNumbers = () => [...Array(10).keys()];

export const getSymbols = () =>
	Array.from({ length: 94 }, (_, i) => String.fromCharCode(i + 33)).filter(
		(char) => !/^[a-zA-Z0-9]+$/.test(char)
	);

export const evaluatePassword = (password: string) => {
	let score = 0;

	// Vérifie la longueur du mot de passe
	if (password.length >= 8) {
		score += 1;
	}

	// Vérifie la présence de chiffres
	if (hasNumbers.test(password)) {
		score += 1;
	}

	// Vérifie la présence de lettres majuscules
	if (hasUppercase.test(password)) {
		score += 1;
	}

	// Vérifie la présence de lettres minuscules
	if (hasLowercase.test(password)) {
		score += 1;
	}

	// Vérifie la présence de caractères spéciaux
	if (hasSymbols.test(password)) {
		score += 1;
	}

	// Baisse le score si le mot de passe contient les différents characters mais est trop court
	if (score === 4 && password.length < 5) {
		score -= 1;
	}

	if (score > 4) {
		score = 4;
	}

	return score;
};
