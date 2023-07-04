import styles from './Header.module.css'
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const Header = () => {
  return (
    <div className={styles.header}>
        <div>JS Weekly Challenge</div>
    {/*     <div className={styles.darkmode}>
          <DarkModeToggle />
        </div> */}
        <div className={styles.underline}></div>
    </div>
  )
}

export default Header