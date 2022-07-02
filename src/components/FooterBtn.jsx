export const FooterBtn = ({ title, link, style }) => {
    return (
        <>
            <a href={link} target={'_blank'}>
                <button className={style.btn}>{title}</button>
            </a>
        </>
    );
};