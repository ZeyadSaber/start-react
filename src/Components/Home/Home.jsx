import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import avatar from "./../../images/avataaars.svg";
import styles from './home.module.css';


export const Home = () => {
  return (
    <div className={`vh-100 ${styles.bg} d-flex align-items-center justify-content-center text-white text-center`}>
        <div>
          <img src={avatar} alt="" className='w-50 my-3'/>
          <h1 className=' my-3'>Start React</h1>
          <div className='w-100 my-3'>
            <div className={styles.line}></div>
            <FontAwesomeIcon icon={['fas', 'star']}/>
          <div className={styles.line}></div>
          </div>
          <p className='my-3'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </div>
  )
}
