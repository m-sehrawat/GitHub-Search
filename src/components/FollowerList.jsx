export const FollowerList = ({avatar_url, type, login, style}) => {

    return (
        <>
            <div className={style.gridItem}>
                <div>
                    <img className={style.img} src={avatar_url} />
                </div>
                <div className={style.followerText}>
                    <h4>{login}</h4>
                    <p><i>{type}</i></p>
                </div>
            </div>
        </>
    );
};