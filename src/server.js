import { createServer, Model } from "miragejs";

export default function(){
    createServer({
        
        //Declaring Models
        models: {
            user: Model,
        },

        //Declaring Initial Values for Models
        seeds(server){
       server.create('user', {
         
       })
        }
    })
}