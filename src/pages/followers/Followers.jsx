import style from './followers.module.css';

export const Followers = () => {

    return (
        <>
            <div className={style.main}>
                <div className={style.textBox}>
                    <h3>Followers</h3>
                </div>

                <div className={style.grid}>
                    {[[1, 2, 3, 4].map((follower) => (
                        <div>1</div>
                    ))]}
                </div>
            </div>
        </>
    );
};