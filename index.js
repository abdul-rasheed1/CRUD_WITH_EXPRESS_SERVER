import express from 'express';
import {Uservice} from './src/services/Uservice.js';


const Usservice = Uservice();
const app = express();
const port = 3000;

const logger = (req,res,next)=>{
	console.log(`the ${req.method} has been made at ${Date.now()}`);
	next();
};

app.use(express.json());
app.use(logger);

app.get('/api/users',(req,res)=>{
	const allUsers = Usservice.getUsers();
	res.json(allUsers);

});

app.post('/api/users', (req,res)=>{
	const {name, email} = req.body;

if (name && email){
	const newUser = Usservice.createUser(name,email);
	res.status(201).json(newUser);
	}
else{
	res.status(400).send('Bad request');
}

})

app.listen(port, ()=>{
	console.log(`Server is running at http://localhost ${port}`);
})
