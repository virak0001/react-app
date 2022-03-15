import { Fragment } from 'react';
import Header from '../components/Header';
import './Default.css';
const Layout = ({ children }: any) => {
    return (
        <Fragment>
            <div>
                <Header />
                <main className="background-landing">{children}</main>
            </div>
        </Fragment>
    )
}
export default Layout;