import React from 'react'
import styles from './page.module.css'
import Header from '../src/components/Header/Header'
import ChallengeButton from '../src/components/ChallengeButton/ChallengeButton'

const Home: React.FC = () => {
  return (
    <div className={styles.mainDiv}>
        <Header/>
        <div className={styles.seasonBox}>
          <div className={styles.season}>Season 1</div>
          <div className={styles.buttonBox}>
            <ChallengeButton number={1}/>
            <ChallengeButton number={2}/>
            <ChallengeButton number={3}/>
            <ChallengeButton number={4}/>
            <ChallengeButton number={5}/>
            <ChallengeButton number={6}/>
            <ChallengeButton number={7}/>
            <ChallengeButton number={8}/>
          </div>
        </div>
        <div className={styles.seasonBox}>
          <div className={styles.season}>Season 2</div>
          <div className={styles.buttonBox}>
            <ChallengeButton number={9}/>
          </div>
        </div>
    </div>
  );
}

export default Home;


