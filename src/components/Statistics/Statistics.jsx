import PropTypes from 'prop-types';
import s from './Statistics.module.css'

function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <>
        <p className={s.text}>Good: {good}</p>
        <p className={s.text}>Neutral: {neutral}</p>
        <p className={s.text}>Bad: {bad}</p>
        <p className={s.text}>Total: {total}</p>
        <p className={s.text}>Positive feedback: { positivePercentage } %</p>
        </>
    )
}

Statistics.propTypes = {
  positivePercentage: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
}

export default Statistics