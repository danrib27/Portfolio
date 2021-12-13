import style from './style.module.scss';

type Banner = {
    src: string;
    text: string;
}

export function BannerSkill({src, text}: Banner) {
    return(
        <div className={style.banner}>
            <img src={ src }/>
            <p>{ text }</p>
        </div>
    );
}