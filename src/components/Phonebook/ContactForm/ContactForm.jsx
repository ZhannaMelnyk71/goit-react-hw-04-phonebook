import { Component } from "react";
import css from './ContactForm.module.css'


const INITIAL_STATE = {
    name: '',
    number: '',
};

export class ContactForm extends Component{
    state = { ...INITIAL_STATE };
    

    handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

    handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;
    console.log(`name: ${name}, number: ${number}`);
        
        // if (this.props.contacts.some(contact => contact.name === name))
        // this.callAlert(name)
        // else
            this.props.onSubmit({ ...this.state });
    
    this.reset();
    };
    
    reset = () => {
    this.setState({ ...INITIAL_STATE });
    };
    
    // callAlert = () => alert(`${this.state.name} is already in contacts`);


    render() {
        const { name, number } = this.state;
        return (
            <form className={css.form} onSubmit={this.handleSubmit}>
                <label className= {css.form__label} htmlFor='name'>Name
                    <input
                        // id={this.loginInputId}
                        className={css.form__input}
                        onChange={this.handleChange}
                        value= {name}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        />
                </label>
                <label className= {css.form__label} htmlFor='number'>Number
                    <input
                        // id={this.loginInputId}
                        className={css.form__input}
                        onChange={this.handleChange}
                        value={number}
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
    }
}