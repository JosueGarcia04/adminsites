import { CorsOptions } from "cors";
export const corsConfig : CorsOptions = {
    origin : function (origin, callback){
        console.log(origin)
        if(!origin ||origin === process.env.FRONTEND_URL){
            callback(null, true)
        }else{
            callback(new Error('error de cors'))
        }
    }
}