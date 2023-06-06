import PropTypes from 'prop-types'
import css from './Filter.module.css'



export const Filter = ({value, onChangeFilter}) => {
    return (
        <label className= {css.filter}>
            Find contacts by name
            <input
                className={css.filter__input}
                type="text"
                value={value}
                onChange={onChangeFilter} />
        </label>
    )
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChangeFilter: PropTypes.func.isRequired,
}