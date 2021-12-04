import styles from './styles/global.module.scss';
import rocket from './assets/rocket.png';
import { BannerSkill } from './components/BannerSkill';

export function App() {
  return (
    <main className={styles.mainContent}>
      <div className={styles.presentation}>
        <h1 className={styles.welcome}><span>I'm</span> Daniel Duarte</h1>
        <img src={rocket} />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.about}>
          <h2>ABOUT ME</h2>
          <p>Foi como estudande de Engenharia da Computação que descobri a minha paixão pelo mundo da programação. E por mais que nunca tivesse de fato trabalhado em uma empresa de verdade, isso nunca me impediu de tentar ajudar outras pessoas, na verdade,   isso me motiva a ir cada vez mais fundo no <b>universo de desenvolvimento</b>.</p>
        </div>
        <div className={styles.personalSkills}>
          <h3>O que me torna diferente de outras pessoas? Bem... </h3>
          <div className={styles.bannerSkillConteiner}>
            <BannerSkill />
            <BannerSkill />
            <BannerSkill />
            <BannerSkill />
            <BannerSkill />
            <BannerSkill />
          </div>
        </div>
      </div>
    </main>
  )
}