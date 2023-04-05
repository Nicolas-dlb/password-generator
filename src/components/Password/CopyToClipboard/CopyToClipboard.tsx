import React from "react";
import { toast } from "react-toastify";
import { useCopyToClipboard } from "usehooks-ts";
import CopyToClipboardIcon from "./CopyToClipboardIcon/CopyToClipboardIcon";
import "./CopyToClipBoard.scss";

interface CopyToClipboardProps {
	valueToCopy: string;
}

function CopyToClipboard({ valueToCopy }: CopyToClipboardProps) {
	const [value, copy] = useCopyToClipboard();

	const handleClick = () => {
		if (!valueToCopy) return;

		copy(valueToCopy);

		const toastId = "copied";

		const toastStyle = {
			fontFamily: "inherit",
		};

		toast.success("Copied to clipboard", {
			position: toast.POSITION.TOP_RIGHT,
			hideProgressBar: true,
			autoClose: 3000,
			toastId,
			style: toastStyle,
		});
	};

	return (
		<button
			type="button"
			disabled={!valueToCopy}
			aria-label="copy password to clipboard"
			className="btn-copy-to-clipboard"
			onClick={handleClick}
		>
			<CopyToClipboardIcon className="copy-to-clipboard-icon" />
		</button>
	);
}

export default CopyToClipboard;
