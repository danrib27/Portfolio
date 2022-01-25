import style from './style.module.scss';

type Banner = {
    src: string;
    name: string;
    text: string;
}

export function Contact({src, name, text}: Banner) {
    return(
        <div className={style.banner}>
            <img src={ src }/>
            <h4>{ name }</h4>
            <p>{ text }</p>
        </div>
    );
}