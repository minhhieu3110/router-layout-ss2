import '../Style/user.css'
import {Outlet, useLocation} from "react-router";
import {Link} from "react-router-dom";
export default function User(){
    const showUser = useLocation().pathname === '/user'
    return(
        <div className='container'>
            <div className="nav">
                <nav>
                    <ul>
                        <li><Link to='/user'>Home</Link></li>
                        |
                        <li><Link to='hot-product'>Hot</Link></li> |
                        <li><Link to='category'>Category</Link></li> |
                        <li><Link to='/admin'>Admin</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="body">
                <Outlet/>
                {showUser ?
                    <>
                        <div className="side">Sides</div>
                        <div className="list-product">List Product</div>
                        <div className="top-product">Top Product</div>
                    </>
                : null}
            </div>
            <div className="footer">Footer</div>
        </div>
    )
}