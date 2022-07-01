import { getItem } from '../../functions/localStorage';
import style from './repoDetails.module.css';


export const RepoDetails = () => {

    const data = getItem('singleRepo');
    const { owner: { avatar_url }, name, topics, full_name, description, clone_url, forks, language, watchers, visibility } = data;
    console.log('data:', data)

    return (
        <>
            <div className={style.container}>

                <div className={style.grid}>

                    <div className={style.imgBox}>
                        <img src={avatar_url} />
                    </div>

                    <div>
                        <h1>{name}</h1>
                        <p>Link: {full_name}</p>
                        <p>{description}</p>
                        <p>You want to clone it: {clone_url}</p>

                    </div>

                    <div className={style.textBox}>
                        <h4>Verified by GitHub</h4>
                        <h3>{name}</h3>
                        <p>Category</p>
                        <ul>
                            {topics.map((e) => (
                                <li>{e}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4>Other details</h4>
                        <p>Language: {language}</p>
                        <p>Visibility: {visibility}</p>
                        <p>Forks: {forks}</p>
                        <p>Watchers: {watchers}</p>
                    </div>

                </div>
            </div>
        </>
    );
};