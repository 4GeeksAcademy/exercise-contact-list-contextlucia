const getState = ({ getStore, setStore, getActions }) => {
	//obtener las acciones de action y obtengo la funcion
	//la funcion setStore se encarga de actualizar el Contacts de abajo
	return {
		store: {
			//Your data structures, A.K.A Entities

			//contactos estado que se va a leer para todos
			contacts: []
		},

		actions: {
			obtenerdatos: async function() {
				//accion, funcion que puedo volver a utilizar cuando quiera
				try {
					let response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/lucia"); //esto me regresa una respuesta, que la guerdo en un espacio de memoira
					//le digo que espere por esa respuesta
					let data = await response.json(); //le digo que convierta esa respuesta en un jason y lo guardo en un espacio de memoira y que espere por la convercion de esa respuesta
					console.log(data);
					setStore({ contacts: data }); //({propiedad:el valor que quiero actuaizar})
				} catch (error) {
					console.log(error);
				}
			},

			agragarContacto: async function(fullName, email, address, phone) {
				try {
					let response = await fetch("https://playground.4geeks.com/apis/fake/contact/", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							full_name: fullName,
							email: email,
							agenda_slug: "lucia",
							address: address,
							phone: phone
						})
					});
					let data = await response.json();

					console.log(data); // se creo un usuario en esa url usando el metodo post, al crear ese usuario el console.log de data
					//que es un objeto, me trae una propiedad msg, de que se creo el usuario
					if (data.msg === "Contact created successfully") {
						//si ese mensaje dice que el usuario se creo, me trae las tares que existan
						getActions().obtenerdatos();
					}
				} catch (error) {
					console.log(error);
				}
			},

			borrarcontacto: async function(id) {
				try {
					let response = await fetch("https://playground.4geeks.com/apis/fake/contact/" + id, {
						method: "DELETE",
						headers: {
							"Content-Type": "application/json"
						}
						//borro el nuevo contacto para que la actualice en la appi
					});
					let data = await response.json();
					if (data.msg === "Contact deleted successfully") {
						//si ese mensaje dice que el usuario se creo, me trae las tares que existan
						getActions().obtenerdatos();
					}
					//me falta que hace la funcion creo
				} catch (error) {
					console.log(error);
				}
			},

			editarcontacto: async function(fullName, email, address, phone, id) {
				try {
					let response = await fetch("https://playground.4geeks.com/apis/fake/contact/" + id, {
						method: "PUT",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							full_name: fullName,
							email: email,
							agenda_slug: "lucia",
							address: address,
							phone: phone
						})
						//borro el nuevo contacto para que la actualice en la appi
					});

					let data = await response.json();
					console.log(data);
					//me falta que hace la funcion creo
				} catch (error) {
					console.log(error);
				}
			}

			// ActualizarContacto: async function(toDolist) {
			// 	try {
			// 		let response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/lucia", {
			// 			method: "PUT",
			// 			headers: {
			// 				"Content-Type": "application/json"
			// 			},
			// 			body: JSON.stringify(toDolist) //mando la nueva tarea para que la actualice en la appi
			// 		});
			// 		let data = await response.json();
			// 		if (response.status === 200) {
			// 			//el 200 es un numero que da si todo salio bien, si response(que es resuesta).status da 200
			// 			obtenerdatos(); //voy a llamar a obtener tareas para que me traiga toda la lista actualizada
			// 		}
			// 		console.log(response);
			// 	} catch (error) {
			// 		console.log(error);
			// 	}
			// }
		}
		//creo funcion y le afrego los parametros q quiero
	}; //(Arrow) Functions that u,date the Store
	// Remember to use the scope: scope.state.store & scope.setState()
};

export default getState;
