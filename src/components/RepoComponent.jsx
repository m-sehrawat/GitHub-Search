import { Link } from "react-router-dom";
import { setItem } from "../functions/localStorage";


export const RepoComponent = ({ style, owner, name, description, id, data }) => {

    const handleSingleRepoData = () => {
        setItem('singleRepo', data);
    };

    return (
        <>
            <Link onClick={handleSingleRepoData} className={style.link} to={`/details/${id}`}>

                <div className={`${style.gridItem} ${style.cursor}`}>

                    <div className={style.imgBox}>
                        <img src={owner.avatar_url} />
                    </div>

                    <div className={style.textBox}>
                        <h4>{name}</h4>
                        <p>{description}</p>
                    </div>
                </div>
            </Link>
        </>
    )
};