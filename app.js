const express = require('express');
const bodyParser = require('body-parser');

const categoriesRoutes = require('./routes/categories-routes');
const chefsRoutes = require('./routes/chefs-routes');
const locationsRoutes = require('./routes/locations-routes');
const bannersRoutes = require('./routes/banners-routes');

const app = express();

app.use(bodyParser.json());

app.use('/',(req, res, next) => {
    res.json({ message: 'Hello!' });
});

app.use('/api/categories',categoriesRoutes);
app.use('/api/chefs',chefsRoutes);
app.use('/api/banners',bannersRoutes);
app.use('/api/locations',locationsRoutes);


app.use((error,req,res,next) => {
    if(res.headerSent){
        return next(error);
    }
    res.status(error.code || 500)
    res.json({message: error.message || 'An unknown error occured!'});
});

app.listen(process.env.port || 3000, () => {
    console.log("Server");
});