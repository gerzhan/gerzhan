const Hapi = require('hapi');
const server = new Hapi.Server();
const path = require('path');
const port_ = process.env.PORT || 5000;

server.connection({port: port_}); 
 
server.register([require('inert')],
    (err)=>{
        if(err){
            console.log(`Server run error`,err);
            throw err; 
        }
     server.route({
         path: '/{params*}',
         method: 'GET',
         config: {
             handler: {
                 directory: {
                     path: path.join(__dirname,'public')
                 }
             }
         }
     });

     server.start(()=>{
         console.log(`Server run ${server.info.uri}`);
     });   
        
    }
);