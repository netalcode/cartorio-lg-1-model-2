/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss";
import data from "../../../data/texts.json";
import Button from "../../Utils/Buttons/index";
import Input from "../../Utils/Inputs/index";
import { Form } from "@unform/web";
import axios from "axios";
import { useState, useRef } from "react";
import * as Yup from "yup";

export default function Contact(props) {
  const { title, mainPhone, phone2, phone3, whatsapp, email1, email2 } = data.contacts;
  const { openingHours } = data

  const [sendStatus, setSendStatus] = useState("");

  const formRef = useRef(null);

  const handleSubmit = async (data, { reset }) => {
    setSendStatus('')

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    try {
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string()
          .min(3, "O nome deve ter pelomenos 3 caracteres")
          .required("O 'nome' é obrigatório"),
        lastName: Yup.string()
          .min(3, "O Sobrenome deve ter pelomenos 3 caracteres")
          .required("O 'sobrenome' é obrigatório"),
        phone: Yup.string()
          .matches(phoneRegExp, "Telefone inválido")
          .required("O campo 'telefone' é obrigatorio")
          .min(10, "Número muito pequeno")
          .max(11, "Número muito grande"),
        email: Yup.string().email().required("O campo 'e-mail' é obrigatorio"),
        subject: Yup.string()
          .min(5)
          .required("O campo 'assunto' é obrigatorio"),
        message: Yup.string()
          .min(10)
          .required("O campo 'mensagem' é obrigatorio"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // Validation passed
      setSendStatus("loading");
      await axios
        .post("/api/sendMail", data)
        .then(function (response) {
          setSendStatus("done");
        })
        .catch(function (error) {
          setSendStatus("error");
        });

      reset();
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  };
  console.log(props)
  return (
    
    <div className={styles.container}>
      <section>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <strong>{(props.title) ? props.title : 'Fale conosco'}</strong>
          <div className={styles.blockName}>
            <div className={styles.name}>
              <Input name={"name"} type={"text"} label="Nome" />
            </div>

            <div className={styles.lastName}>
              <Input name={"lastName"} type={"text"} label={"Sobrenome"} />
            </div>
          </div>

          <Input name={"email"} type={"text"} label={"E-mail"} />
          <Input name={"phone"} type={"text"} label={"Telefone"} />
          <Input name={"subject"} type={"text"} label={"Assunto"} />
          <Input name={"message"} type={"textArea"} label={"Mensagem"} />
          <div className={styles.status}>
            {sendStatus === "loading" && (
              <span className={styles.loading}>Enviando...</span>
            )}
            {sendStatus === "done" && (
              <span className={styles.done}>Enviado!</span>
            )}
            {sendStatus === "error" && (
              <span className={styles.error}>
                Algo deu errado, por favor tente novamente ou entre em contato
                pelos outros canis de atendimento.
              </span>
            )}
          </div>

          <div className={styles.btn}>
            <Button status={sendStatus} type={["send"]}/>
          </div>
        </Form>
      </section>
    </div>
  );
}
