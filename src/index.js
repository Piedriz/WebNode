const express = require('express');
const app = express();
const path = require('path');

//Configuraciones
app.set('port', 3000);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//Servidor escucha
app.listen(app.get('port'), () => {
    console.log('Server en puerto', app.get('port'));
});

//Routes
app.use(require('./routes/routes.js'));

//Static files
app.use(express.static(path.join(__dirname,'public')))