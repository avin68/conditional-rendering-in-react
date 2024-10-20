import "./Notif.css";

// function Notif({notifCount}) {
//     if(notifCount>0) 
//         return (
        
//             <a href="#" className="notification">
//                 <span>Notification</span>
//                 <span className="badge">{notifCount}</span>
//             </a>
            
//         );
// }

///////////////////////////////////////////////

function Notif({notifCount}) {
        return (
            <>
                {notifCount>0 &&  (
                <a href="#" className="notification">
                    <span>Notification</span>
                    <span className="badge">{notifCount}</span>
                </a>)}
            </>
        );
}

export default Notif;
