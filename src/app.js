 const express = require('express');
 const taskRouter = require('./routes/tasks');
 const logger = require('./utils/logger');
 const fs = require('fs');
 const path = require('path');
 const soap = require('soap');
 const taskSoap = require('./soap/tasks');

 const app = express();
 app.use(express.json());


 app.use('/api/tasks',taskRouter);

 app.use((request,response)=>{
   logger.warn("Not Found");
   response.status(404).json();
 });

 const server =app.listen(3000,()=>{
    logger.info("El servidor esta corriendo en el puerto 3000");
   const wsdlPath = path.join(__dirname, 'soap','taskService.wsdl');
    const wsdl = fs.readFileSync(wsdlPath, 'utf8');

   soap.listen(server, '/wsdl', taskSoap, wsdl);
 });
 