import { getItem } from '../../functions/localStorage';
import style from './repoDetails.module.css';


export const RepoDetails = () => {

    const data = getItem('singleRepo');
    const { owner: { avatar_url }, name, topics, full_name, description, clone_url, forks, language, watchers, visibility } = data;


    return (
        <>
            <div className={style.container}>

                <div className={style.grid}>

                    <div className={style.imgBox}>
                        <img src={avatar_url} />
                    </div>

                    <div>
                        <h1>{name}</h1>
                        <p>Link: <i>{full_name}</i></p>
                        <p>{description}</p>
                        <p>You want to clone it: <i>{clone_url}</i></p>

                    </div>

                    <div className={style.textBox}>
                        <h4>Verified by GitHub</h4>
                        <h3>{name}</h3>
                        <p>Category</p>
                        <ul>
                            {topics.map((e, i) => (
                                <li key={i}>{e}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4>Other details</h4>
                        <p>Language: <i>{language}</i></p>
                        <p>Visibility: <i>{visibility}</i></p>
                        <p>Forks: <i>{forks}</i></p>
                        <p>Watchers: <i>{watchers}</i></p>
                    </div>

                </div>
            </div>
        </>
    );
};