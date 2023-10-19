import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import logo from '../../../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple, faUser, faCartShopping, faUsers, faCrow } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.module.scss';
const cx = classNames.bind(styles);
const Sidebar = () => {
    return (
        <div className={cx('sidebar')}>
            <div className={cx('top')}>
                <span className={cx('logo')}>
                    <span>Bird Cage</span>
                </span>
            </div>
            <hr />
            <div className={cx('center')}>
                <ul>
                    <p className={cx('title')}>MAIN</p>
                    <li>
                        <FontAwesomeIcon icon={faChartSimple} className={cx('icon')}></FontAwesomeIcon>
                        <span>Daskboard</span>
                    </li>
                    <p className={cx('title')}>SERVICE</p>
                    <li>
                        <FontAwesomeIcon icon={faUsers} className={cx('icon')}></FontAwesomeIcon>
                        <span>Customer</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCartShopping} className={cx('icon')}></FontAwesomeIcon>
                        <span>Order</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCrow} className={cx('icon')}></FontAwesomeIcon>
                        <span>Products</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faUser} className={cx('icon')}></FontAwesomeIcon>
                        <span>Account</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default Sidebar;
