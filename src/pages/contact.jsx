import styles from "../styles/Contact.module.scss"
import Layout from "../components/Layout/Layout";
import Contact from "../components/Contact/Contact"
export default function Privacy() {
    return (
        <div className={styles.container}>
                
            <Contact/>
        
        </div>
    )

}

Privacy.layout = Layout
