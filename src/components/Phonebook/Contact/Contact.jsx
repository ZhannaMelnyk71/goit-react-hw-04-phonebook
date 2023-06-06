import { Fragment } from "react";
import PropTypes from 'prop-types';

// import css from './Contact.module.css'

export const Contact = ({name,number,id, onDeleteContact}) => {
    return (
        <Fragment>
            <span>{name}: {number}</span>
            <button
                    type="button"
                onClick={() => onDeleteContact(id)}>Delete</button>
        </Fragment>
    )
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}