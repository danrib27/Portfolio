import styles from './style.module.scss';

type Tech = {
    src: string;
    bg: string;
}
export function Tech({src, bg}: Tech) {
    return(
        <div className={styles.Shape} style={{background: `${bg}`}}>
            <img src={ src }/>
        </div>
    );
}