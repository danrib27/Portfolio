import styles from './styles/global.module.scss';
import rocket from './assets/rocket.png';
import { BannerSkill } from './components/BannerSkill';
import { Tech } from './components/Tech';

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
          <p>Foi como estudande de Engenharia da Computação que descobri a minha paixão pelo mundo da programação. E por mais que nunca tivesse de fato trabalhado em uma empresa de verdade, isso nunca me impediu de tentar ajudar outras pessoas, na verdade, isso me motiva a ir cada vez mais fundo no <b>universo de desenvolvimento</b>.</p>
        </div>
        <div className={styles.personalSkills}>
          <h3><p>O que me torna diferente de outras pessoas? Bem...</p></h3>
          <div className={styles.bannerSkillConteiner}>
            <BannerSkill src="src/assets/team_icon.png" text="Gosto de trabalhar em equipe, sempre tentando extrair delas o que há de melhor."/>
            <BannerSkill src="src/assets/help_icon.png" text="Procuro ajudar as pessoas com problemas e dúvidas. Aliás, um desafio é sempre bem vindo!"/>
            <BannerSkill src="src/assets/exercise.png" text="Paciênte e calmo, perfeito para situações de estresse. Afinal, a pressa é inimiga da perfeição."/>
            <BannerSkill src="src/assets/otimizacao.png" text="Código limpo, documentado e de preferência otimizado."/>
            <BannerSkill src="src/assets/kanban_icon.png" text="Familiarizado com metodologias agéis, em especial com Kanban."/>
            <BannerSkill src="src/assets/mind_icon.png" text="Fácil aprendizado e compreensão."/>
          </div>
        </div>
        <div className={styles.techSkillsContainer}>
          <h2>SKILLS</h2>
          <div className={styles.techSkills}>
            <Tech />
            <Tech />
            <Tech />
            <Tech />
          </div>
        </div>
      </div>
    </main>
  )
}