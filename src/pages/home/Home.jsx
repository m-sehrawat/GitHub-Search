import style from './home.module.css'

export const Home = () => {

    return (
        <>
            <div className={style.main}>
                <input
                    type={'text'}
                    className={style.input}
                    placeholder='type username here'
                />
                <button
                    className={style.btn}
                >Search</button>
            </div>
        </>
    );
};