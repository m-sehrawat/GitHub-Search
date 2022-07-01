export const RepoComponent = ({ style, owner, name, description }) => {

    return (
        <>
            <div className={style.gridItem}>

                <div className={style.imgBox}>
                    <img src={owner.avatar_url} />
                </div>

                <div className={style.textBox}>
                    <h4>{name}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </>
    );
};