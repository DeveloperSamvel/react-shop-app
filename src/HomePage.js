import { Outlet } from 'react-router-dom';
import Header from "./components/Header/Header.component";
import Footer from "./components/Footer/Footer.component";

function Root ({cartItems}) {
    return (
        <div>
            <Header cartItems={cartItems}></Header>
            <Outlet />
            <Footer />
        </div>
    );
}

export default Root;