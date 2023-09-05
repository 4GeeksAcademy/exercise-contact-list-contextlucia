import React, { useState, useEffect, useContext } from "react"; //importe useContext
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js"; // importe contexto

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

export const Contacts = () => {
	const { store, actions } = useContext(Context); //ejecuto el contexto y desempaco

	// hace que cada vez que se cargue se ejecute una funcion, en este caso quiero que se ejecute obtenerdatos
	console.log(useContext(Context));
	//console.log(store.contacts);
	const [state, setState] = useState({
		showModal: false,
		id: undefined
	});
	useEffect(function() {
		actions.obtenerdatos();
	}, []);
	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contacts.map((item, id) => (
							<ContactCard
								full_name={item.full_name}
								email={item.email}
								address={item.address}
								phone={item.phone}
								key={item.id}
								id={item.id}
								onDelete={() => setState({ showModal: true, id: item.id })}
							/>
						))}
					</ul>
				</div>
			</div>
			<Modal id={state.id} show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
