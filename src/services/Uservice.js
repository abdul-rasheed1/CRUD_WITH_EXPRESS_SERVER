import {User} from '../models/User.js'

export const Uservice = ()=>{

	const users = [new User("Rasheed","rash@hmail.com", "1234er")];


	return{
		getUsers(){
			return [...users];
		},


		createUser(name,email){
			const id = Date.now().toString(36);
			const newUser = new User(name,email,id);
			users.push(newUser);
			return newUser;
		},


	delUser(id){
			const userIndex = users.findIndex((item)=>item.id === id);
			if (userIndex !== -1){
			return users.splice(userIndex,1);
		}

		else {
			return  null;
		}
		}

	}
}