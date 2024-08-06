import './App.css';
import {Route, Routes} from "react-router";
import User from "./component/User";
import HotProduct from "./component/Hot-Product";
import ListCategory from "./component/ListCategory";
import Detail from "./component/Detail";
import Admin from "./component/Admin";

function App() {
    return (
        <Routes>
            <Route path={'user'} element={<User/>}>
                <Route path={'hot-product'} element={<HotProduct/>}/>
                <Route path={'category'} element={<ListCategory/>}/>
                <Route path={'detail-product/:id'} element={<Detail/>}/>
            </Route>
            <Route path={'admin'} element={<Admin/>}/>
        </Routes>
    );
}

export default App;
