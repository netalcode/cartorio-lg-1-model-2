/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss"
import data from "../../../data/texts.json"

export default function Welcome() {
    const { title, subtitle, body } = data.welcome

    return (
        <div className={styles.container}>
            <span>{title}</span>
            <div/>
            <p>{body}</p>
            <img className={styles.workspace} src="images/workspace.png" alt="Ambiente de trabalho" />
        </div>
    )
}