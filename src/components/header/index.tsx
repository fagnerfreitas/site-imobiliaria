
import styles from './styles.module.scss';

import Link from 'next/link';

export const Header = () => {
    return (
        <div className={styles.container}>
            <header>
                <span>Dev.</span>
                <ul>
                    <Link href="/">
                        <li className={styles.active}>Home</li>
                    </Link>
                    <Link href="/sobre">
                        <li>Sobre</li>
                    </Link>
                    <Link href="/">
                        <li>Anunciar meu imóvel</li>
                    </Link>
                    <Link href="/">
                        <li>Favoritos</li>
                    </Link>
                    <Link href="/">
                        <li>Contatos</li>
                    </Link>
                </ul>
            </header>
        </div>
    )
}



