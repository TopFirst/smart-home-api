const express= require('express');

const homeRoutes=require('./routes/home.js');

const bodyParser= require('body-parser');
const cors= require('cors');
const app= express();

const middlewareAuth=require('./middleware/auth.js');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/test',(req,res)=>{
    res.send('yeay! berhasil');
});

app.use(middlewareAuth);

app.use('/api/home',homeRoutes);


app.listen(3001, ()=>{
    console.log('server berjalan pada port 3001');
});