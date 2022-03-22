import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../common/Footer';
import Header from '../common/Header';
import './Default.css';
const Layout = () => {
    return (
        <Fragment>
            <div>
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </Fragment>
    )
}
export default Layout;