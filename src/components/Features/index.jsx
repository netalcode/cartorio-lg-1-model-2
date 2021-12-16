/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import styles from "./styles.module.scss"
import data from "../../../data/texts.json"
import Button from "../../Utils/Buttons"
import { useRouter } from "next/router"


export default function Features() {
    const router = useRouter()
    const { title, body, list } = data.features


    const cards = list.map(card => {
        const { id, title, subtitle, body, iconHref } = card

        return (
            <Link exact key={card.id.toString()} href={`/features?id=${id}`} passHref>
                <div className={styles.card}>
                    <div className={styles.icon}>
                        <img src="/icons/paper.svg" alt="icone" />
                    </div>
                    <div className={styles.texts}>
                        <strong>{title}</strong>
                        <p>{body}</p>
                    </div>
                </div>
            </Link>
        )
    })

    return (
        <div className={styles.container}>
            <span>{title}</span>
            <p>{body}</p>

            <div className={styles.cardsContainer}>
                {cards}
            </div>

            <div className={styles.btn}>
                <Button type={["seeAll"]} func={() => router.push("/features") } />
            </div>
        </div>
    )
}