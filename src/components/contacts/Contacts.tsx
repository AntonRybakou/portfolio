import React, {FormEvent, useRef} from 'react';
import style from './Contacts.module.scss';
import styleContainer from "../../common/styles/Container.module.scss";
import styleButton from "../../common/styles/Buttons.module.scss";
import {Title} from "../../common/components/title/Title";
import emailjs from '@emailjs/browser';

export const Contacts = React.memo(() => {
    const form = useRef() as React.MutableRefObject<HTMLFormElement>;
    const sendEmail = (e: FormEvent) => {
        e.preventDefault();
        emailjs.sendForm('service_fuzsh09', 'template_nvww3si', form.current, '1_IsLIEfF25NBzdkq')
            .then((response) => {
                console.log(response.text);
                alert('Message successfully sent!')
                window.location.reload()
            }, (error) => {
                alert('Failed to send the message, please try again')
                console.log(error.text);
            });
    };

    return (
        <div className={`${styleContainer.block} ${style.contactsBlock}`} id={'contacts'}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={'Contact me'}/>
                <form ref={form} className={style.formBlock} onSubmit={sendEmail}>
                    <div className={style.formContainer}>
                        <div className={style.formInputs}>
                            <input type={'text'}
                                   placeholder={'Name'}
                                   name={'user_name'}
                                   required/>
                            <input type={'email'}
                                   placeholder={'E-mail'}
                                   name={'user_email'}
                                   required/>
                            <input type={'text'}
                                   placeholder={'Subject'}
                                   name={'subject'}
                                   required/>
                        </div>
                        <div className={style.formMessage}>
                        <textarea placeholder={'Message'}
                                  name={'message'}
                                  required/>
                        </div>
                    </div>
                    <button type={'submit'}
                            className={styleButton.primary}>
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
})
