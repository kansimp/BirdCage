import Sidebar from '../NavSideBar/sidebar/Sidebar';
import styles from './AdminHome.module.scss';
import classNames from 'classnames/bind';
import './AdminHome.module.scss';
import Navbar from '../NavSideBar/navbar/Navbar';
import Widget from '../Widget/Widget';
const cx = classNames.bind(styles);

const AdminHome = () => {
    return (
        <div className={cx('home')}>
            <Sidebar />
            <div className={cx('homeContainer')}>
                <Navbar />
                <div className={cx('widgets')}>
                    <Widget />
                    {/* <Widget />
                    <Widget />
                    <Widget /> */}
                </div>
            </div>
        </div>
    );
};
export default AdminHome;
