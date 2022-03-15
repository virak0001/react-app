import { Fragment } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './Default.css';
const Layout = ({ children }: any) => {
    return (
        <Fragment>
            <div>
                <Header />
                <main className="background-landing">{children}</main>
                <Footer />
            </div>
        </Fragment>
    )
}
export default Layout;