"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import SentSuccessfully from "./SentSuccessfully";
import styles from "../styles/ContactForm.module.css";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className={styles.container}>
      {submitted ? (
        <SentSuccessfully />
      ) : (
        <>
          <h4 className={styles.text}>Formulario de contacto</h4>
          <Formik
            initialValues={{ firstName: "", lastName: "", email: "", message: "" }}
            validate={(values) => {
              const errors: any = {};
              if (!values.firstName) {
                errors.firstName = "Required";
              }
              if (!values.lastName) {
                errors.lastName = "Required";
              }
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              if (!values.message) {
                errors.message = "Required";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                setSubmitted(true);
                setSubmitting(false);
                setTimeout(() => {
                  setSubmitted(false);
                  resetForm();
                }, 2000);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form className={styles.form}>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <Field type="text" name="firstName" required />
                    <div className={styles.underline}></div>
                    <label className={styles.label} htmlFor="firstName">First Name</label>
                    <ErrorMessage className={styles.error} name="firstName" component="p" />
                  </div>
                  <div className={styles.field}>
                    <Field type="text" name="lastName" required />
                    <div className={styles.underline}></div>
                    <label className={styles.label} htmlFor="lastName">Last Name</label>
                    <ErrorMessage className={styles.error} name="lastName" component="p" />
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <Field type="email" name="email" placeholder=" " required />
                    <div className={styles.underline}></div>
                    <label className={styles.label} htmlFor="email" >Email Address</label>
                    <ErrorMessage className={styles.error} name="email" component="p" />
                  </div>
                </div>
                <br />
                <div className={styles.row}>
                  <div className={styles.field}>
                    <Field className={styles.textarea} as="textarea" name="message" required />
                    <div className={styles.underline}></div>
                    <label className={`${styles.label} ${styles.textarea}`} htmlFor="message">Write your message</label>
                    <ErrorMessage className={styles.error} name="message" component="p" />
                  </div>
                </div>
                <br />
                <div className={styles.row}>
                    <div className={styles.field}>
                        <button className={styles.submit_btn} type="submit" disabled={isSubmitting}>Enviar</button>
                    </div>
                </div>
              </Form>
            )}
          </Formik>
        </>
      )}
    </div>
  );
}
