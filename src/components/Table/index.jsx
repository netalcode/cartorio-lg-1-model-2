import styles from "./styles.module.scss"
import dataJSON from "../../../data/transparence.json"
 
const Head = ({ head }) => {
  const values = Object.keys(head).map(key => head[key])
  return (
    <thead className={styles.h}>
      <tr>
        {values.map((value, index) => <th key={index.toString()}>{value}</th>)}
      </tr>
    </thead>)
}

const Rows = ({ data }) => {
  return data.map(row => {
    const values = Object.values(row).slice(1)
    const td = values.map((value, index) => <td key={index.toString()}>{value}</td>)

    return (
      <tr key={row.id}>
        {td}
      </tr>
    )
  })
}

const Table = ({ head, data }) => {
  return (
    <table>
      <Head head={head} />
      <tbody>
        <Rows data={data} />
      </tbody>
    </table>
  )
}

export default function TableComponent() {
  
  const data = JSON.parse(JSON.stringify(dataJSON))

  const head = {
    ref: "Refência",
    amol: "Emolumentos",
    outrasRec: "Outras Receitas",
    desp: "Total de Despesas",
  }

  return (
    <div className={styles.container}>
      <Table head={head} data={data} />
    </div>
  )
}
