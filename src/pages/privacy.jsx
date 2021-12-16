/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Privacy.module.scss"
import Layout from "../components/Layout/Layout";
import Dev from "../components/Dev";
import dataJSON from "../../data/texts.json"
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import Contact from "../components/Contact/Contact"


const {title} = dataJSON.privacy
const {emailLGPD} = dataJSON.contacts

export default function Privacy() {
    const { privacy } = JSON.parse(JSON.stringify(dataJSON))
    const { list } = privacy
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

    return  (
        <div className={styles.container}>
            <button onClick={handleNavMenu} className={styles.btnMenuNav}>
                <img src="/icons/menu_nav.svg" alt="Menu" />
            </button>
            <nav ref={navRef}>
                <h1>{title}</h1>
                <div>
                    <ul>
                        {list.map((feature, index) => (
                            <li onClick={() => handleMainContent(feature.id)} key={index}>{feature.title}</li>
                        ))}
                    </ul>
                </div>
            </nav>

            <section>
                <main onClick={() => navRef.current.classList.remove(styles["active"])}>
                    <div className={styles.dev}>
                        {/* <Dev /> */}
                    </div>

                    {mainContent && <div>
                        <h1>{mainContent.title}</h1>
                        {/* <p>{mainContent.body}</p> */}
                        {/* <Dev /> */}

                    </div>}
                    
                    <div className={styles.formsContact}>
                        <section>
                            <h1>{dataJSON.privacy.list[0].lgpd.title}</h1>
                            <p>{dataJSON.privacy.list[0].lgpd.body}</p>
                            <p className={styles.emailLGPD}>Email: {emailLGPD}</p>
                        </section>
                        <Contact title=" " />
                    </div>
                </main>
            </section>

        </div>
    )
}

Privacy.layout = Layout
