import {useParams} from "react-router";
import '../Style/detail.css'
export default function Detail(){
    const {id} = useParams();
    return(
        <div className='detail'>
            Detail Product {id}
        </div>
    )
}