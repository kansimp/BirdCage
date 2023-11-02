import styles from './AdminHome.module.scss';
import classNames from 'classnames/bind';
import Widget from '../Widget/Widget';
import AdminLayout from '../AdminLayout';
const cx = classNames.bind(styles);

const AdminHome = () => {
    return (
        <AdminLayout>
            <div className={cx('widgets')}>
                <Widget />
            </div>
        </AdminLayout>
    );
};
export default AdminHome;
