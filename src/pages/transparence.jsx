/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import styles from "../styles/Transparence.module.scss"
import Table from "../components/Table"
import Layout from "../components/Layout/Layout"
import Image from "next/image"

export default function transparence() {


    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <section>
                    <span>Transparência</span>
                    <p>
                        Informações Disponibilizados em cumprimento à resolução CNJ 389/2021
                    </p>
                </section>

                <section>
                    <div>
                        <div className={styles.dropContainer}>
                            <select>
                                <option value="2021">2021</option>
                            </select>
                        </div>
                        <Table />
                    </div>
                </section>
            </div>
        </div>
    )
}


transparence.layout = Layout
