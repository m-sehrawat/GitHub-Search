import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDataRequest } from '../../redux/action';
import { RepoList } from '../repoList/RepoList';
import style from './home.module.css'


export const Home = () => {

    const [username, setUsername] = useState('');
    const dispatch = useDispatch();

    const handleGetData = () => {
        dispatch(getDataRequest(username));
        setUsername('');
    };

    return (
        <>
            <div className={style.main}>
                <input
                    onChange={(e) => { setUsername(e.target.value) }}
                    value={username}
                    type={'text'}
                    className={style.input}
                    placeholder='Username'
                />
                <button
                    onClick={handleGetData}
                    className={style.btn}
                >
                    Search
                </button>
            </div>

            <RepoList />
        </>
    );
};