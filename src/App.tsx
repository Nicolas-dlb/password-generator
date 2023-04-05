import "./App.scss";
import React from "react";
import { ToastContainer } from "react-toastify";
import Password from "./components/Password/Password";
import Form from "./components/Form/Form";
import usePassword from "./utils/hooks/usePassword";

function App() {
	const { password, handleSubmit } = usePassword();

	return (
		<div className="app">
			<div className="app__layout">
				<h3 className="app__title">PASSWORD GENERATOR</h3>
				<Password password={password} />
				<Form onSubmit={handleSubmit} password={password} />
				<ToastContainer />
			</div>
		</div>
	);
}

export default App;
