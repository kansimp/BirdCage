import classNames from 'classnames/bind';
import styles from './UserInfo.module.scss';
import images from '../../assets/images';

const cx = classNames.bind(styles);
function UserInfo() {
    return (
        <div>
            <img src={images.product_header} style={{ width: 100 + '%', height: 330 + 'px' }}></img>
            <div className={cx('personal-page')}>Personal Page</div>
            <div className={cx('content')}>
                <div className={cx('avatar')}>khoa</div>
            </div>
        </div>
    );
}

export default UserInfo;
