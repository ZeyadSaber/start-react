import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './portfolio.module.css';
import img1 from './../../images/cabin.png';
import img2 from './../../images/circus.png';
import img3 from './../../images/cake.png';
import img4 from './../../images/game.png';
import img5 from './../../images/safe.png';
import img6 from './../../images/submarine.png';

export const Portfolio = () => {
  return (
    <>
      <section id="portfolio">
        <div className="container py-5">
        <div className={`${styles.sectiontitle} text-center`}>
          <h1>portfolio</h1>
          <div className='w-100 my-4'>
            <div className={styles.line}></div>
            <FontAwesomeIcon icon={['fas', 'star']}/>
          <div className={styles.line}></div>
          </div>
        </div>
        <div className="row gy-5 gx-5">
          <div className="col-4">
            <div className='position-relative rounded overflow-hidden'>
            <img src={img1} className='w-100' />
            <div className={`${styles.layer} position-absolute`}>+</div>
            </div>
          </div>
          <div className="col-4">
          <div className='position-relative rounded overflow-hidden'>
            <img src={img2} className='w-100' />
            <div className={`${styles.layer} position-absolute`}>+</div>
            </div>
          </div>
          <div className="col-4">
          <div className='position-relative rounded overflow-hidden'>
            <img src={img3} className='w-100' />
            <div className={`${styles.layer} position-absolute`}>+</div>
            </div>
          </div>
          <div className="col-4">
          <div className='position-relative rounded overflow-hidden'>
            <img src={img4} className='w-100' />
            <div className={`${styles.layer} position-absolute`}>+</div>
            </div>
          </div>
          <div className="col-4">
          <div className='position-relative rounded overflow-hidden'>
            <img src={img5} className='w-100' />
            <div className={`${styles.layer} position-absolute`}>+</div>
            </div>
          </div>
          <div className="col-4">
          <div className='position-relative rounded overflow-hidden'>
            <img src={img6} className='w-100' />
            <div className={`${styles.layer} position-absolute`}>+</div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  )
}
