import styles from './styles/global.module.scss';
import profile from './assets/teste_profile.png'
import rocket from './assets/rocket_redimentation_400h.png';

export function App() {
  return (
    <main className={styles.mainContent}>
      <div className={styles.presentation}>
        <img className={styles.profile} src={profile} />
        <h1 className={styles.welcome}><span>I'm</span> Daniel Duarte</h1>
        <img src={rocket} />
      </div>
      <div className={styles.separator}></div>
      <div className={styles.info}>
        <h1>Hello World</h1>
      </div>
    </main>
  )
}