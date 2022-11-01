import PropTypes from 'prop-types';
import s from "./FeedbackOptions.module.css"

function FeedbackOptions({options, onLeaveFeedback,}) {
    return (
        <ul className={s.options}>
            {options.map((option) => <li key={option} className={s.options__item}>
                <button className={s.options__dtn} type='button' onClick={() => onLeaveFeedback(option)}>{option}
                </button>
            </li>)}
            
        </ul>
    )

}

export default FeedbackOptions

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}