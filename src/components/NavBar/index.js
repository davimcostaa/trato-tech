import styles from './NavBar.module.scss'
import {ReactComponent as Logo} from '../../assets/logo.svg'
import classNames from 'classnames'
import {
    RiShoppingCart2Line,
    RiShoppingCartFill
  } from 'react-icons/ri';
import Busca from 'components/Busca';
  
  const iconeProps = {
    color: 'white',
    size: 24
  }

const NavBar = () => {
  return (
    <nav className={styles.nav}>
        <Logo className={styles.logo} />
        <div className={styles.links}>
            <div>
                <a href='/' className={classNames(styles.link, {
                    [styles.selected]: window.location.pathname === '/'
                })}>
                    Pagina Inicial
                </a>
            </div>
        </div>

        <div className={styles.busca}>
            <Busca />
        </div>

        <div className={styles.icones}>
            <a>
                { window.location.pathname === '/carrinho'
                    ? <RiShoppingCartFill {...iconeProps} />
                    : <RiShoppingCart2Line {...iconeProps} />
                }
            </a>
        </div>
    </nav>
  )
}

export default NavBar