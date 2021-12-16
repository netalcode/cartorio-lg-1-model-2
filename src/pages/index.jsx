/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Services from "../components/Features/index";
import Welcome from "../components/Welcome";
import Location from "../components/Location/Location";
import Contact from "../components/Contact/Contact";
import Layout from "../components/Layout/Layout";
import Aboult from "../components/Aboult";
import data from "../../data/texts.json";

const {fantasyName} = data.business

export default function Home() {
    return (
        <div className={styles.container} >
            <Head>
                <title>{fantasyName}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="favicon.ico" />
            </Head>

            <main>
                <section>
                    <Welcome />
                </section>

                 <section>
                    <Services />
                </section>

                <section>
                    <Aboult />
                </section>

               <section>
                    <Location />
                </section>
            </main>
        </div>
    );
}

Home.layout = Layout
