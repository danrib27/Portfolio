import styles from './style.module.scss';

type Tech = {
    src: string;
    bg: string;
    progr: number;
}
export function Tech({src, bg, progr}: Tech) {
    let css = {
        container: {
            boxShadow: `0 6px 9px 0 rgba(${bg},0.3)`,
        },
        bar: {
            width: `${progr}%`,
            background: `rgba(${bg},0.7)`,
        },
    }
    return(
        <div className={styles.Shape}>
            <div className={styles.Container} style={css.container}>
                <img src={ src }/>
                <span className={styles.percentage}>{progr}%</span>
                <div className={styles.ProgressBar}>
                    <div className={styles.Bar} style={css.bar}></div>
                </div>
            </div>
        </div>
    );
}