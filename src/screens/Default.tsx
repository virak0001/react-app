import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import './Default.css';
const Layout = () => {
    return (
        <Fragment>
            <div>
                <Header />
                <main className='p-5'>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </Fragment>
    )
}
export default Layout;