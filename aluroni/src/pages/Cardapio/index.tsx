import styles from './Cardapio.module.scss';
import { ReactComponent as Logo} from 'assets/logo.svg'

export default function Cardapio() {
    return (
        <main>
            <nav className={styles.menu}>
                <Logo />
            </nav>
            <header className={styles.menu}>
                <div className={styles.header__text}>
                </div>
            </header>
        </main>
    )
}