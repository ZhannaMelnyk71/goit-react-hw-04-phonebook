import css from './ContactList.module.css'
import PropTypes from 'prop-types'
import { Contact } from 'components/Phonebook/Contact/Contact'

export const ContactsList = ({ contacts, onDeleteContact}) => {
    return (
        <ul className= {css.contactList}>{contacts.map(contact =>
            <li className={css.contactList__item}
                key={contact.id}>
                <Contact
                    name={contact.name}
                    number={contact.number}
                    id={contact.id}
                    onDeleteContact={onDeleteContact}
                />
            </li>)}
        </ul>
    );
}

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    onDeleteContact: PropTypes.func,
}
