import express  from "express";
import bodyParser from "body-parser";
import users from './routes/users.js';

const app = express();
const PORT = 5001;

app.use(bodyParser.json());
app.use('/users',users);
app.get('/',(req,res)=>{
    res.send('Hello World!');
})
app.listen(PORT,()=>console.log(`Server running successfully at PORT:${PORT}`));