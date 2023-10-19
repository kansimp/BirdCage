import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '../Header';
import Footer from '../Footer';
import images from '../../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsUpToLine } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Sử dụng "smooth" để có hiệu ứng cuộn mượt hơn
        });
    }
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('content')}>{children}</div>
            <FontAwesomeIcon icon={faArrowsUpToLine} className={cx('navigate')} onClick={scrollToTop}></FontAwesomeIcon>
            <div className={cx('mes-logo')}>
                <img src={images.messenger}></img>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
