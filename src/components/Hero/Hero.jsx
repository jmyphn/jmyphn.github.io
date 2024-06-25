import styles from './HeroStyles.module.css';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import linkedinIconLight from '../../assets/linkedin-light.svg';
import linkedinIconDark from '../../assets/linkedin-dark.svg';
import githubIconLight from '../../assets/github-light.svg';
import githubIconDark from '../../assets/github-dark.svg';
import instagramIconLight from '../../assets/instagram-light.svg';
import instagramIconDark from '../../assets/instagram-dark.svg';
import mailIconLight from '../../assets/mail-light.svg';
import mailIconDark from '../../assets/mail-dark.svg';
import CV from '../../assets/jimmy_phan_resume.pdf';
import { useTheme } from '../../common/ThemeContext';

const Hero = () => {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubIconLight: githubIconDark ;
  const instagramIcon = theme === 'light' ? instagramIconLight: instagramIconDark;
  const linkedinIcon = theme === 'light' ? linkedinIconLight: linkedinIconDark;
  const mailIcon = theme === 'light' ? mailIconLight : mailIconDark;

  return (
    <>
      <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}> 
          {/* TODO: add headshot here */}
          <img 
          className={styles.colorMode}
          src={themeIcon}
          alt="Light/Dark mode icon"
          onClick={toggleTheme}/>
        </div>
        <div className={styles.info}>
          <h1>hi, i&apos;m jimmy</h1>
          <h2>computer science student at cornell university</h2>
          <span>
            <a href="https://www.linkedin.com/in/jimmy-phan-cs" target="_blank">
              <img src={linkedinIcon} alt="LinkedIn Icon"/>
            </a>
            <a href="https://www.github.com/jmyphn" target="_blank">
              <img src={githubIcon} alt="LinkedIn Icon"/>
            </a>
            <a href="https://www.instagram.com/jmyphn" target="_blank">
              <img src={instagramIcon} alt="LinkedIn Icon"/>
            </a>
            <a href="mailto:jp2369@cornell.edu">
              <img src={mailIcon} alt="Mail Icon"/>
            </a>
          </span>
          <p className={styles.description}>
            i entered cornell as a chemical engineering major, but soon fell in
            love with computer systems and algorithms.
            <br />
            <br />
            my current interests lie in fullstack development, distributed systems, 
            cloud computing, algorithms, and parallel computing. 
            <br />
            <br />
            outside of the classroom, i&apos;m a lifter, f1 enthusiast,
             and nba fan (go celtics!)
          </p>
          <a href={CV} target="_blank">
            <button className="hover resume">
              Resume
            </button>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;