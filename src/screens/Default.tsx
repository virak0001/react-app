import { Fragment } from 'react';
import Header from '../components/Header';
import './Default.css';
const Layout = ({ children }: any) => {
    return (
        <Fragment>
            <div>
                <Header />
            </div>
            <main className="background-landing h-full">{children}</main>
        </Fragment>
    )
}
export default Layout;