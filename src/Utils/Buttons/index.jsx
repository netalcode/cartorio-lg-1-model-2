/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss";
import Image from "next/image";

export default function Button({ type, label = "", func, ...rest }) {

  if (!type) {
    return <span>unspecified parameters</span>;
  }

  const components = {
    save: function btnSave(key) {
      return (
        <button
          className={styles.key}
          type="submit"
          key={key}
          onClick={func}
          style={rest}
        >
          <img src="/icons/save.svg" alt="Salvar" />
          Salvar
        </button>
      );
    },

    back: function btnBack(key) {
      return (
        <button
          className={styles.key}
          type="submit"
          key={key}
          onClick={func}
          style={rest}
        >
          <img src="/icons/back.svg" alt="Voltar" />
          Voltar
        </button>
      );
    },

    add: function btnAdd(key) {
      return (
        <button
          className={styles.key}
          type="submit"
          key={key}
          onClick={func}
          style={rest}
        >
          <img src="/icons/add.svg" alt="Adicionar" />
          Adicionar
        </button>
      );
    },

    send: function btnSend(key) {
      return (
        <button
          style={rest}
          className={styles.key}
          type="submit"
          key={key}
          onClick={func}
        >
          Enviar
          <img src="/icons/send.svg" alt="Enviar" />
        </button>
      );
    },

    seeAll: function seeAll(key) {
      return (
        <button
          className={styles.key}
          type="submit"
          key={key}
          onClick={func}
          {...rest}
        >
          Ver todos
          <img src="/icons/go.svg" alt="Ver todos"  />
        </button>
      );
    },

    seeOnMap: function seeOnMap(key) {
      return (
        <button
          className={styles.key}
          type="submit"
          key={key}
          onClick={func}
          style={rest}
        >
          {label}
          <img src="/icons/location.svg" alt="Mapa" />
        </button>
      );
    },
  };

  const elements = type.map((item, index) =>
    components[item](index.toString())
  );

  return <div className={styles.container}>{elements}</div>;
}
