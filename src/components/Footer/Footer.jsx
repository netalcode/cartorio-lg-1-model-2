/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss"
import Link from "next/link"
import dataJSON from "../../../data/texts.json"

export default function Footer() {
    const { social } = JSON.parse(JSON.stringify(dataJSON))
    const { business } = JSON.parse(JSON.stringify(dataJSON))

    const { fantasyName } = business
    

    const socialComponents = () => {
        const networks = Object.keys(social)
        const components = networks.map(item => <a className={styles.social} key={item.toString()} href={social[item]} rel="noreferrer" target="_blank">
            <img src={`/icons/${item}.svg`} alt={item} />
        </a>
        )
        return <>{[...components]}</>
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div>
                    <img src="/images/logo_full_dark.svg" alt="" />
                </div>

                <div>
                    <div className={styles.pagesLinks}>
                        <Link href="/contact">
                            <a href="">Fale conosco</a>
                        </Link>
                        <span>|</span>
                        <Link href="/privacy">
                            <a href="">Políticas de privacidade</a>
                        </Link>
                    </div>
                    {socialComponents()}
                </div>
            </div>
        </div>
    )
}