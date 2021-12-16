import styles from './styles.module.scss'
export default function Dropdown({ options }) {

    const optionsElement = () => {
        if (!options || options.lenght === 0)
            return <option>without options</option>

        return options.map((option, index) => (
            <option key={index}>
                <input type="checkbox" />
                {option}
            </option>
        ))
    }

    return (
        <div className={styles.container}>
            <select>
                {optionsElement()}
            </select>
        </div>
    )
}