import { useState } from "react"
import "./App.css"
import Notif from "./Notif"

function App(){
    // let[isLogin , setIsLogin] = useState(true)
    
        // if(isLogin == true){
        // if(isLogin){
        //     return <h2>user has logined</h2>
        // }
        // else{
        //     return <h2>user has not logined</h2>
        // }

        //////////////////////////////////////////

        // let[isLogin , setIsLogin] = useState(true)
        // return(isLogin && <h2>user has logined</h2>)

        //////////////////////////////////////////////

        // let[age , setAge]= useState(19)
        // if(age>18){
        //     return <h2>شما مجاز به ورود به سایت هستید</h2>
        // }else{
        //     return <h2>شما مجاز به ورود به سایت نیستید</h2>
        // }
        ///////////////////////////////////////////////////
        // let[age , setAge]= useState(19)
        
        // return(age>18 && <h2>شما مجاز به ورود به سایت هستید</h2>)
        //////////////////////////////////////////////////

        // let[age , setAge]= useState(16)
        
        // return(
        //     <h2>شما مجاز به ورود به سایت {age>18 ? 'هستید' : 'نیستید'}</h2>
        // )

        return(
        
            <navbar>
                <h2>AvinaCode</h2>
                <Notif notifCount={3} />
            </navbar>
            
        )

    }
export default App