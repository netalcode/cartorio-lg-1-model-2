import styles from "./styles.module.scss";
import data from "../../../data/texts.json";

export default function Location() {
  const { title, street, number, district, city, uf, CEP, map } =
    data.address;

  const { mainPhone, phone2, email1 } = data.contacts

  return (
    <div className={styles.container}>
      <span>{title}</span>

      <div className={styles.content}>
        <section>
          <div className={styles.map}>
            <iframe
              src={map}
              className={styles.map}
            />
          </div>
        </section>

        <section>
          <div>
            <p className={styles.address}>
              {`${mainPhone} | ${phone2}`} <br />
              {`${email1}`}
              <div />
              {`${street}, nº ${number}`} <br />
              {`Bairro: ${district}`} <br />
              {`${city}/${uf}`} <br />
              {`CEP: ${CEP}`}
              <div />
              {`${data.openingHours.title}`}<br />
              {`${data.openingHours.plain}`}<br />
              {/* {`${data.openingHours.hour}`}<br /> */}
              {/* {`${data.openingHours.days}`}<br /> */}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}



/* <div>
  <a href={mapLink} target="_blank" rel="stylesheet noreferrer">
  <Button type={["seeOnMap"]} label="Ver no mapa" width="fit-content" padding="0.5rem" height="2.5rem"/>
  </a>
</div> */