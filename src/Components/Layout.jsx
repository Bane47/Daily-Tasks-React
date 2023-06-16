import { Outlet,Link } from "react-router-dom";
import '../App.css'
const Layout=()=>{
    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <Link id="link1" to="/Function">Functional components example</Link>
                    </li>
                    <li >
                        <Link id="link2" to="/Blogs">Class components</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    )
}
export default Layout;

