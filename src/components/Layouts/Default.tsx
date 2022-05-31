import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../common/Footer';
import Header from '../common/Header';
import './Default.css';
const Layout = () => {
    return (
        <Fragment>
            <div>
                <Footer />
                <Header />
                <main>
                    <Outlet />
                </main>
            </div>
        </Fragment>
    )
}
export default Layout;