import { shallowEqual } from 'react-redux';
import { useSelector } from 'react-redux';
import { Error } from '../../components/Error';
import { Loaidng } from '../../components/Loading';
import { RepoComponent } from '../../components/RepoComponent';
import style from './repoList.module.css';


export const RepoList = () => {

    const { isLoading, isError, repoData } = useSelector((state) => state, shallowEqual)
    console.log('repoData:', repoData)

    return isLoading ? (
        <Loaidng />
    ) : isError ? (
        <Error />
    ) : (
        <>
            <div className={style.listBox}>

                <div className={style.userBox}>
                    <div className={style.gridItem}>

                        <div className={style.imgBox}>
                            <img src={repoData[0].owner.avatar_url} />
                        </div>

                        <div className={style.textBox}>
                            <h4>{repoData[0].owner.login}</h4>
                            <button className={style.btn}>Followers</button>

                        </div>
                    </div>
                </div>

                <div className={style.grid}>

                    {repoData.map((data) => (

                        <RepoComponent key={data.id} style={style} {...data} />
                    ))}

                </div>

            </div>
        </>
    );
};