/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss"
import data from "../../../data/texts.json"

export default function Aboult() {
    const { title, subtitle, body } = data.about

    return (
        <div className={styles.container}>
            <span>{title}</span>
            <sub>{subtitle}</sub>
            <p>{body}</p>
        </div>
    )
}