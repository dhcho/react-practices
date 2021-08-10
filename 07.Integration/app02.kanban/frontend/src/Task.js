import React from 'react';
import PropTypes from 'prop-types';
import styles from './assets/css/Task.css';

export default function Task({ cardNo, taskNo, name, notifyTask }) {
    const handleClick = (e) => {
        e.preventDefault();
        notifyTask.delete(cardNo, taskNo);
    }

    return (
        <li className= { styles.TaskList__Task }>
            <input type='checkbox' defaultChecked={ true } />
            { name }
            <a href='#' onClick={ handleClick } className={styles['TaskList__Task--remove']}></a>
        </li> 
    );
}

Task.propTypes = {
    name: PropTypes.string.isRequired
}