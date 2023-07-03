"use client"
import styles from './ChallengeButton.module.css'
import { useRouter } from 'next/navigation'

interface ChallengeButtonProps {
  number: number;
}

const ChallengeButton: React.FC<ChallengeButtonProps> = ({ number }) => {
  const buttonText = `Week ${number}`
  const router = useRouter()

  const openChallenge = () => {
    console.log("clicked");
    router.push(`/week-${number}`)
  }

  return (
    <button className={styles.ChallengeButton} onClick={openChallenge}>
      {buttonText}
    </button>
  )
}

export default ChallengeButton