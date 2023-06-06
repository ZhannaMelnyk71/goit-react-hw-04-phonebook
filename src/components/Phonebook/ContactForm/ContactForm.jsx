// import { Component } from "react";
import css from './ContactForm.module.css'
import PropTypes from 'prop-types'


export const ContactForm = ({ onSubmit }) => {
    return (
        <form className={css.form} onSubmit={onSubmit}>
            <label className={css.form__label} htmlFor='name'>Name
                <input
                    id="name"
                    className={css.form__input}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label>
            <label className={css.form__label} htmlFor='number'>Number
                <input
                    id="number"
                    className={css.form__input}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <button className={css.formBtn} type="submit">Add contact</button>
        </form>
            
    )
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}