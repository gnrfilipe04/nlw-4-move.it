import { useContext } from 'react'
import { ChallengesContext } from '../context/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile({name, avatar}) {
  const {level} = useContext(ChallengesContext)

return (
  <div className={styles.profileContainer}>
    <img src={avatar} alt="Filipe Souza"/>
  <div>
    <strong>{name}</strong>
    <p>
      <img src="icons/level.svg" alt="level"/>
      Level {level}
    </p>
  </div>
  </div>
)
}