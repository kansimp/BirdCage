import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import header_img from '../../assets/images/header_img.svg';

const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-img')}>
                <img src={header_img}></img>
            </div>
            <div className={cx('kk')}></div>
        </div>
    );
}

export default Home;
