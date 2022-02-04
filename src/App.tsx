import styles from './styles/global.module.scss';
// Components
import { BannerSkill } from './components/BannerSkill';
import { Tech } from './components/Tech';
import { Contact } from './components/Contact';
// Images
import icon from './assets/icon.png';

import linkedinImg from './assets/social/linkedin.png';
import githubImg from './assets/social/github.png';
import stackOverflowImg from './assets/social/stack-overflow.png';

import rocket from './assets/rocket.png';

import teamIcon from './assets/skills/team_icon.png';
import helpIcon from './assets/skills/team_icon.png';
import patienceIcon from './assets/skills/team_icon.png';
import otimizationIcon from './assets/skills/otimizacao.png';
import kanbanIcon from './assets/skills/kanban_icon.png';
import mindIcon from './assets/skills/mind_icon.png';

import reactIcon from './assets/tech-icons/react.png';
import tsIcon from './assets/tech-icons/typescript.png';
import htmlIcon from './assets/tech-icons/html.png';
import cssIcon from './assets/tech-icons/css.png';
import jsIcon from './assets/tech-icons/js.png';
import nodeIcon from './assets/tech-icons/node-js.png'

import dockerIcon from './assets/tech-icons-grey/docker.png';
import pythonIcon from './assets/tech-icons-grey/python.png';
import prismaIcon from './assets/tech-icons-grey/prisma.png';
import phpIcon from './assets/tech-icons-grey/php.png';
import gitIcon from './assets/tech-icons-grey/git.png';
import mysqlIcon from './assets/tech-icons-grey/mysql.png';
import sassIcon from './assets/tech-icons-grey/sass.png';
import vscodeIcon from './assets/tech-icons-grey/vscode.png';

import addressIcon from './assets/contact/location.png';
import phoneIcon from './assets/contact/smartphone.png';
import emailIcon from './assets/contact/email.png';

export function App() {
  return (
    <div>
      <main className={styles.mainContent}>
        <div className={styles.presentation}>
          <div className={styles.person}>
          <img className={styles.personIcon} src={icon} />
          <h1>Daniel Duarte</h1>
          <h3 className={styles.welcome}>Developer</h3>
          <div className={styles.social}>
            <a href="https://www.linkedin.com/in/daniel-duarte-398996166/" target="_blank"><img src={linkedinImg} /></a>
            <a href="https://github.com/danrib27" target="_blank" ><img src={githubImg} /></a>
            <a href="https://stackoverflow.com/users/15269357/furius" target="_blank" ><img src={stackOverflowImg} /></a>
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
              <BannerSkill src={teamIcon} text="Gosto de trabalhar em equipe, sempre tentando extrair delas o que há de melhor."/>
              <BannerSkill src={helpIcon} text="Procuro ajudar as pessoas com problemas e dúvidas. Aliás, um desafio é sempre bem vindo!"/>
              <BannerSkill src={patienceIcon} text="Paciênte e calmo, perfeito para situações de estresse. Afinal, a pressa é inimiga da perfeição."/>
              <BannerSkill src={otimizationIcon} text="Código limpo, documentado e de preferência otimizado."/>
              <BannerSkill src={kanbanIcon} text="Familiarizado com metodologias agéis, em especial com Kanban."/>
              <BannerSkill src={mindIcon} text="Fácil aprendizado e compreensão."/>
            </div>
          </div>
          <div className={styles.techSkillsContainer}>
            <h2>HABILIDADES</h2>
            <div className={styles.techSkills}>
              <Tech src={reactIcon} bg="97,218,251" progr={45} />
              <Tech src={tsIcon} bg="49,120,198" progr={60} />
              <Tech src={htmlIcon} bg="228,79,38" progr={80} />
              <Tech src={cssIcon} bg="21,114,182" progr={72} />
              <Tech src={jsIcon} bg="255,223,0" progr={66} />
              <Tech src={nodeIcon} bg="85,164,69" progr={30} />
            </div>
            <div className={styles.techsGrey}>
              <img src={dockerIcon}/>
              <img src={pythonIcon}/>
              <img src={prismaIcon}/>
              <img src={phpIcon}/>
              <img src={gitIcon}/>
              <img src={mysqlIcon}/>
              <img src={sassIcon}/>
              <img src={vscodeIcon}/>
            </div>
          </div>
          <div className={styles.Contact}>
            <h2>CONTATO</h2>
            <div className={styles.ContactContainer}>
              <Contact src={addressIcon} name="ADDRESS" text="Belém, Pará, BR"/>
              <Contact src={phoneIcon} name="PHONE NUMBER" text="+55 (91) 98518-8080"/>
              <Contact src={emailIcon} name="E-MAIL" text="danielduarte.tech@protonmail.com"/>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}