import { Link } from 'react-router-dom';
import style from './navbar.module.css'

export const Navbar = () => {

    return (
        <>
            <div className={style.display}>
                <p className={style.heading}>GitHub Search</p>
                <Link to={'/'}>
                    <button className={style.btn}>Home</button>
                </Link>
            </div>
        </>
    );
};