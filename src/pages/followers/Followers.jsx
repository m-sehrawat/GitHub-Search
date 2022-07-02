import { useSelector } from 'react-redux';
import { FollowerList } from '../../components/FollowerList';
import style from './followers.module.css';

export const Followers = () => {

    const followersData = useSelector((state) => state.followersData);
    console.log('followersData:', followersData)

    return (
        <>
            <div className={style.main}>
                <div className={style.textBox}>
                    <h3>Followers</h3>
                </div>

                <div className={style.grid}>
                    {followersData.map((data) => (
                        <FollowerList key={data.id} {...data} style={style} />
                    ))}
                </div>
            </div>
        </>
    );
};