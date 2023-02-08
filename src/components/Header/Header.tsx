import styles from './Header.module.css'

export function Header() {
    return (
        <>
            <header>
                <div>
                    Rafael
                </div>
                <nav>

                    <ul className={styles.rightSideHeader}>
                        <li>Home</li>
                        <li>Serviços</li>
                        <li>Projetos</li>
                        <li>Contato</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}