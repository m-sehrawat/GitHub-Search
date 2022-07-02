import { FooterBtn } from '../../components/FooterBtn';
import { social } from '../../utils/links';
import style from './footer.module.css';


export const Footer = () => {
    return (
        <>
            <div className={style.main}>
                <div>
                    <p>Made with ❤ by <b>Mohit Sehrawat</b></p>
                </div>
                <div>
                    <FooterBtn title={'GitHub'} link={social.github} style={style} />
                    <FooterBtn title={'LinkedIn'} link={social.linkedin} style={style} />
                    <FooterBtn title={'Portfolio'} link={social.portfolio} style={style} />
                </div>
            </div>
        </>
    );
};