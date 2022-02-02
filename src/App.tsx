import styles from './styles/global.module.scss';
import rocket from './assets/rocket.png';
import { BannerSkill } from './components/BannerSkill';
import { Tech } from './components/Tech';
import { Contact } from './components/Contact';

export function App() {
  return (
    <div>
      <main className={styles.mainContent}>
        <div className={styles.presentation}>
          <div className={styles.person}>
          <img className={styles.personIcon} src="./assets/icon.png" />
          <h1>Daniel Duarte</h1>
          <h3 className={styles.welcome}>Developer</h3>
          <div className={styles.social}>
            <a href="https://www.linkedin.com/in/daniel-duarte-398996166/" target="_blank"><img src="src/assets/social/linkedin.png" /></a>
            <a href="https://github.com/danrib27" target="_blank" ><img src="src/assets/social/github.png" /></a>
            <a href="https://stackoverflow.com/users/15269357/furius" target="_blank" ><img src="src/assets/social/stack-overflow.png" /></a>
          </div>
          </div>
          <img src={rocket} />
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.about}>
            <h2>SOBRE MIM</h2>
            <p>Foi como estudande de Engenharia da Computação que descobri a minha paixão pelo mundo da programação. E por mais que nunca tivesse de fato trabalhado em uma empresa de verdade, isso nunca me impediu de tentar ajudar outras pessoas, na verdade, isso me motiva a ir cada vez mais fundo no <b>universo de desenvolvimento</b>.</p>
          </div>
          <div className={styles.personalContainer}>
            <h3><p>O que me torna diferente de outras pessoas? Bem...</p></h3>
            <div className={styles.bannerSkillConteiner}>
              <BannerSkill src="src/assets/skills/team_icon.png" text="Gosto de trabalhar em equipe, sempre tentando extrair delas o que há de melhor."/>
              <BannerSkill src="src/assets/skills/help_icon.png" text="Procuro ajudar as pessoas com problemas e dúvidas. Aliás, um desafio é sempre bem vindo!"/>
              <BannerSkill src="src/assets/skills/exercise.png" text="Paciênte e calmo, perfeito para situações de estresse. Afinal, a pressa é inimiga da perfeição."/>
              <BannerSkill src="src/assets/skills/otimizacao.png" text="Código limpo, documentado e de preferência otimizado."/>
              <BannerSkill src="src/assets/skills/kanban_icon.png" text="Familiarizado com metodologias agéis, em especial com Kanban."/>
              <BannerSkill src="src/assets/skills/mind_icon.png" text="Fácil aprendizado e compreensão."/>
            </div>
          </div>
          <div className={styles.techSkillsContainer}>
            <h2>HABILIDADES</h2>
            <div className={styles.techSkills}>
              <Tech src="src/assets/tech-icons/react.png" bg="97,218,251" progr={45} />
              <Tech src="src/assets/tech-icons/typescript.png" bg="49,120,198" progr={60} />
              <Tech src="src/assets/tech-icons/html.png" bg="228,79,38" progr={88} />
              <Tech src="src/assets/tech-icons/css.png" bg="21,114,182" progr={72} />
              <Tech src="src/assets/tech-icons/js.png" bg="255,223,0" progr={66 } />
              <Tech src="src/assets/tech-icons/node-js.png" bg="85,164,69" progr={30} />
            </div>
            <div className={styles.techsGrey}>
              <img src="src/assets/tech-icons-grey/docker.png"/>
              <img src="src/assets/tech-icons-grey/python.png"/>
              <img src="src/assets/tech-icons-grey/prisma.png"/>
              <img src="src/assets/tech-icons-grey/php.png"/>
              <img src="src/assets/tech-icons-grey/git.png"/>
              <img src="src/assets/tech-icons-grey/mysql.png"/>
              <img src="src/assets/tech-icons-grey/sass.png"/>
              <img src="src/assets/tech-icons-grey/vscode.png"/>
            </div>
          </div>
          <div className={styles.Contact}>
            <h2>CONTATO</h2>
            <div className={styles.ContactContainer}>
              <Contact src="src/assets/contact/location.png" name="ADDRESS" text="Belém, Pará, BR"/>
              <Contact src="src/assets/contact/smartphone.png" name="PHONE NUMBER" text="+55 (91) 98518-8080"/>
              <Contact src="src/assets/contact/email.png" name="E-MAIL" text="danielduarte.dev@protonmail.com"/>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}