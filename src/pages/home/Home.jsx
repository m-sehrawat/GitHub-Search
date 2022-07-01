import { shallowEqual } from 'react-redux';
import { useSelector } from 'react-redux';
import style from './home.module.css'

export const Home = () => {

    const { isLoading, isError, repoData } = useSelector((state) => state, shallowEqual);


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