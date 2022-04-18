import styles from "../styles/ContactForm.module.css"
import { FunctionComponent, ChangeEvent, SyntheticEvent, useState } from 'react';
import axios from 'axios';

export const ContactForm: FunctionComponent = () => {
  const [form, setForm ] = useState({});
  const inputHandler = (
    e: ChangeEvent<HTMLInputElement> |
    ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value })
  };
  
  const submitHandler = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      let res = await axios.post('/api/contact', form);
      console.log(res)
      alert('Success!');
    } catch (error) {
      alert('An error occured')
    }
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <form 
          className={styles.contactForm}
          onSubmit={submitHandler}
        >
          <div className={styles.formSection}>
            <label className={styles.label} htmlFor='name'>
              Name
            </label>
            <input
              onChange={inputHandler}
              className={styles.input}
              type='text'
              name='name'
              id='name'
            />
          </div>
          <div className={styles.formSection}>
            <label className={styles.label} htmlFor='email'>
              Email
            </label>
            <input
              onChange={inputHandler}
              className={styles.input}
              type='email'
              name='email'
              id='email'
            />
          </div>
          <div className={styles.formSection}>
            <label className={styles.label} htmlFor='subject'>
              Subject
            </label>
            <input
              onChange={inputHandler}
              className={styles.input}
              type='text'
              name='subject'
              id='subject'
            />
          </div>
          <div className={styles.formSection}>
            <label className={styles.label} htmlFor='message'>
              Message
            </label>
            <textarea
              onChange={inputHandler}
              className={styles.input}
              name='message'
              id='message'
              cols={30}
              rows={10}></textarea>
          </div>
          <div
            className=
            {`${styles.formSection}
            ${styles.submitDiv}`}>
              <button className={styles.submitBtn}>
                Send
              </button>
            </div>
        </form>
      </main>
    </div>
  )
}

export default ContactForm