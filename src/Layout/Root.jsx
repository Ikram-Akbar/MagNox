
import Nav from '../SharedComponents/Header/Nav';
import { Outlet } from 'react-router-dom';
import Footer from "../SharedComponents/Footer/Footer";

const Root = () => {
    return (
        <div>
            <Nav/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;