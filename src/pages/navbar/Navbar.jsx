import { Link } from 'react-router-dom';
import style from './navbar.module.css'

export const Navbar = () => {

    return (
        <>
            <div className={style.display}>
                <Link className={style.link} to={'/'}>
                    <p className={style.heading}>GitHub Search</p>
                </Link>
                <Link className={style.link} to={'/'}>
                    <button className={style.btn}>Home</button>
                </Link>
            </div>
        </>
    );
};