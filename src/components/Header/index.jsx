/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import styles from "./styles.module.scss";
import Link from "next/link"
import data from "../../../data/texts.json"
import { useRef } from 'react';
import Image from 'next/image'

export default function Header() {
    const { whatsapp } = data.contacts
    const { street, number, district, city, uf, CEP } = data.address
    const dropDownRef = useRef(null)
    const whats = `https://api.whatsapp.com/send?phone=55${(whatsapp)}`

    const handleDropMenu = () => {
        const isActive = dropDownRef.current.classList.contains(styles["dropActive"])

        isActive ? dropDownRef.current.classList.remove(styles["dropActive"]) :
            dropDownRef.current.classList.add(styles["dropActive"])
    }

    const router = useRouter()

    const handlePages = (e) => {
        const url = e.target.id
        try {
            router.push(url)
        } catch {
            router.push("/")
        }
    }
    return (
        <div className={styles.container}>
            <header>
                <span>{`${street}, nº ${number} - ${district}. ${city}/${uf}. CEP: ${CEP}`}</span>
                <div className={styles.whatsapp}>
                    <img src="/icons/whatsapp_dark.svg" alt="Whatsapp" />
                    <a href={whats}  target="_blank" rel="noreferrer">
                        <span>{whatsapp}</span>
                    </a>
                </div>
            </header>
            <main>
                <div className={styles.content}>
                    <div >
                        <Link href="/" >
                            <a href="" style={{ cursor: "pointer" }}>
                                <img src="/images/logo.png" alt="logo chã de alegria" />
                                <img src="/images/logo_name.svg" alt="logo chã de alegria" />
                            </a>
                        </Link>
                    </div>

                    {/* Para larguras de tela inferiores a 1024px */}
                    <div onClick={handleDropMenu} ref={dropDownRef} className={styles.respDropMenu}>
                        <ul>
                            <li>
                                <img src="/icons/menu.svg" alt="Menu" />
                                <ul>
                                    <li>
                                        <Link href="/"><a href="">Início</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/services"><a href="">Serviços</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/transparence"><a href="">Transparência</a></Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    {/* Para larguras de tela superiores a 1024px */}
                    <div>
                        <div className={styles.login}>
                            <Link href="" >
                                <a href="" style={{ border: "none", opacity: "0.5", cursor: "auto" }}>
                                    <img src="/icons/account_icon.svg" alt="Usuário" />
                                    <strong>Entrar</strong>
                                </a>
                            </Link>
                        </div>
                        <div className={styles.buttons}>
                            <button id="/" onClick={handlePages}>INÍCIO</button>
                            <button id="features" onClick={handlePages}>SERVIÇOS</button>
                            {/* <button disabled="disabled" id="aboult" onClick={handlePages} style={{ border: "none", opacity: "0.5", cursor: "auto" }}>SOBRE</button> */}
                            {/* <button disabled="disabled" id="contacts" onClick={handlePages} style={{ border: "none", opacity: "0.5", cursor: "auto" }}>CONTATOS</button> */}
                            <button id="transparence" onClick={handlePages}>TRANSPARÊNCIA</button>
                            {/* <div>
                            <img src="/icons/search_icon.svg" alt="Buscar" />
                        </div> */}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
