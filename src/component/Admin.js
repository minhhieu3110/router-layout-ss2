import '../Style/admin.css'
import {useNavigate} from "react-router";
export default function Admin(){
    const navigate = useNavigate();
     return(
         <div className='admin'>
             <button className='btn-back-user' onClick={() => navigate('/user')}>Back to User</button>
             Admin Page
         </div>
     )
}