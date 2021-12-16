/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Features.module.scss"
import Layout from "../components/Layout/Layout"
import dataJSON from "../../data/texts.json"
import { useRouter } from "next/router"
import Dev from "../components/Dev/index"
import { useEffect, useRef, useState } from "react"

export default function Feature() {
    const { features } = JSON.parse(JSON.stringify(dataJSON))
    const { list } = features
    const router = useRouter()
    const { id } = router.query

    const [mainContent, setMainContent] = useState(null)
    const navRef = useRef(null)

    const handleMainContent = id => {
        const content = list.find(feature => feature.id === id)
        content ? setMainContent(content) : null
        navRef.current.classList.remove(styles["active"]) // fecha nav quando clica no item
    }

    const handleNavMenu = () => {
        const nav = navRef.current
        const navState = nav.classList.contains(styles["active"])

        navState ?
            nav.classList.remove(styles["active"]) :
            nav.classList.add(styles["active"])
    }

    useEffect(() => {
        if (id) {
            handleMainContent(id)
        } else {
            handleNavMenu() //iniciar nav menu aberto na ausencia de id
        }
    }, [])

    return (
        <div className={styles.container}>
            <button onClick={handleNavMenu} className={styles.btnMenuNav}>
                <img src="/icons/menu_nav.svg" alt="Menu" />
            </button>
            <nav ref={navRef}>
                <h1>Serviços</h1>
                <div>
                    <ul>
                        {list.map((feature, index) => (
                            <li onClick={() => handleMainContent(feature.id)} key={index}>{feature.title}</li>
                        ))}
                    </ul>
                </div>
            </nav>

            <main onClick={() => navRef.current.classList.remove(styles["active"])}>
                <div className={styles.dev}>
                    <Dev />
                </div>
                {mainContent && <div>
                    <h1>{mainContent.title}</h1>
                    <p>{mainContent.body}</p>
                </div>}
            </main>
        </div>
    )
}

Feature.layout = Layout
