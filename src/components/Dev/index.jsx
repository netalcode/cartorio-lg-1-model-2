/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss"


export default function Dev(props) {
    return (
        <div className={styles.container}>
            <p>
                {(props.title ? props.title : "Página em desenvolvimento") }
                <img className={styles.gear_1} src="icons/gear_1.png" alt="Icon" />
                <img className={styles.gear_2} src="icons/gear_2.png" alt="Icon" />
            </p>
        </div>
    )
}