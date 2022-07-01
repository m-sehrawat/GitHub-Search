import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { shallowEqual } from 'react-redux';
import { useSelector } from 'react-redux';
import { getDataRequest } from '../../redux/action';
import { RepoList } from '../repoList/RepoList';
import style from './home.module.css'

export const Home = () => {

    const { isLoading, isError, repoData } = useSelector((state) => state, shallowEqual);
    console.log('repoData:', repoData)
    const [username, setUsername] = useState('');
    const dispatch = useDispatch();


    const handleGetData = () => {
        dispatch(getDataRequest(username));
    };


    return (
        <>
            <div className={style.main}>
                <input
                    onChange={(e) => { setUsername(e.target.value) }}
                    type={'text'}
                    className={style.input}
                    placeholder='type username here'
                />
                <button
                    onClick={handleGetData}
                    className={style.btn}
                >Search</button>
            </div>

            {repoData.length > 0 && <RepoList />}
        </>
    );
};