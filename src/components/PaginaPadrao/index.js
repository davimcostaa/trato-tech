import styles from './PaginaPadrao.module.scss';
import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer';
import NavBar from 'components/NavBar';

const PaginaPadrao = () => {
    return (
        <div className={
            styles.container
        }>
            <NavBar />
            <div className={
                styles['container-outlet']
            }>
                <Outlet/>
            </div>
            <Footer />
        </div>
    )
}

export default PaginaPadrao
