import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
        <div>JS Weekly Challenge</div>
        <div className={styles.underline}></div>
    </div>
  )
}

export default Header