import { shallowEqual } from 'react-redux';
import { useSelector } from 'react-redux';
import { Error } from '../../components/Error';
import { Loaidng } from '../../components/Loading';
import style from './repoList.module.css';


export const RepoList = () => {

    const { isLoading, isError, repoData } = useSelector((state) => state, shallowEqual)

    return isLoading ? (
        <Loaidng />
    ) : isError ? (
        <Error />
    ) : (
        <>
            <div className={style.listBox}>

                <div>

                </div>

            </div>
        </>
    );
};