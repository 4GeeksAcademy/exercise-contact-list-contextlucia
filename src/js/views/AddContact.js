import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

//decretar 4 estados
//crear funcion agregarcontacto y vincular a onSubmit
//dentroo de la funcion pedir a api

export const AddContact = () => {
	const [fullName, setFullName] = useState(""); //declare los 4 estados
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	const [phone, setPhone] = useState("");
	const { store, actions } = useContext(Context); //traigo lo q estoy haciendo en al flux
	// const params = useParams();
	// useEffect(function () {
	// 	//hace que se ejecute cuando carga la pagina
	// 	actions.agregarContacto(fullName, email, address, phone);
	// }, []);
	function handleFullname(e) {
		e.preventDefault();
		setFullName(e.target.value);
	}

	function handleEmail(e) {
		e.preventDefault();
		setEmail(e.target.value);
	}

	function handleAddres(e) {
		e.preventDefault();
		setAddress(e.target.value);
	}
	function handlePhone(e) {
		e.preventDefault();
		setPhone(e.target.value);
	}
	function agregar(e) {
		e.preventDefault;
		params.id
			? actions.editarcontacto(fullName, email, address, phone)
			: actions.agragarContacto(fullName, email, address, phone);
	}

	const agregarTareas = event => {
		if (event.key === "Enter") {
			let nuevoarray = lista.concat({ label: tarea });
			setLista(nuevoarray);
			setTarea(""); //luego de dar enter el espacio del input vuelve a quedar en blanco
			ActualizarLista(nuevoarray); //nuevo array llega a la funcion actualizar y se envia
		}

		return (
			<div className="container">
				<div>
					<h1 className="text-center mt-5">{params.id ? "Edit" : "Add a new"} contact</h1>
					<form>
						<div className="form-group">
							<label>Full Name</label>
							<input
								type="text"
								className="form-control"
								onChange={handleFullname}
								placeholder="Full Name"
							/>
						</div>
						<div className="form-group">
							<label>Email</label>
							<input
								type="email"
								className="form-control"
								onChange={handleEmail}
								placeholder="Enter email"
							/>
						</div>
						<div className="form-group">
							<label>Phone</label>
							<input
								type="phone"
								className="form-control"
								onChange={handlePhone}
								placeholder="Enter phone"
							/>
						</div>
						<div className="form-group">
							<label>Address</label>
							<input
								type="text"
								className="form-control"
								onChange={handleAddres}
								placeholder="Enter address"
							/>
						</div>
						<button type="button" className="btn btn-primary form-control" onClick={agregar}>
							save
						</button>
						<Link className="mt-3 w-100 text-center" to="/">
							or get back to contacts
						</Link>
					</form>
				</div>
			</div>
		);
	};
};
