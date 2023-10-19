import styles from './Widget.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faArrowDown, faArrowUp, faDollarSign, faBoxOpen, faCoins } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
const Widget = () => {
    return (
        <div className={cx('widget')}>
            <div className={cx('total-user')}>
                <div className={cx('total-user-left')}>
                    <span className={cx('title')}>TOTAL USERS</span>
                    <span className={cx('counter')}>1.5k</span>
                    <span className={cx('percentage')}>
                        <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
                        <span className={cx('percentage-in4')}>
                            <span>12%</span>
                            <span className={cx('percentage-in4-text')}>Since last month</span>
                        </span>
                    </span>
                </div>
                <div className={cx('total-user-right')}>
                    <div className={cx('boder-icon')}>
                        <FontAwesomeIcon icon={faUsers} className={cx('icon-total-users')}></FontAwesomeIcon>
                    </div>
                </div>
            </div>
            <div className={cx('total-product')}>
                <div className={cx('total-product-left')}>
                    <span className={cx('title')}>TOTAL PRODUCTS</span>
                    <span className={cx('counter')}>1.5k</span>
                    <span className={cx('percentage')}>
                        <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
                        <span className={cx('percentage-in4')}>
                            <span>12%</span>
                            <span className={cx('percentage-in4-text')}>Since last month</span>
                        </span>
                    </span>
                </div>
                <div className={cx('total-product-right')}>
                    <div className={cx('boder-icon')}>
                        <FontAwesomeIcon icon={faBoxOpen} className={cx('icon-total-products')}></FontAwesomeIcon>
                    </div>
                </div>
            </div>
            <div className={cx('budget')}>
                <div className={cx('budget-left')}>
                    <span className={cx('title')}>BUDGET</span>
                    <span className={cx('counter')}>1.5k</span>
                    <span className={cx('percentage')}>
                        <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
                        <span className={cx('percentage-in4')}>
                            <span>12%</span>
                            <span className={cx('percentage-in4-text')}>Since last month</span>
                        </span>
                    </span>
                </div>
                <div className={cx('budget-right')}>
                    <div className={cx('boder-icon')}>
                        <FontAwesomeIcon icon={faDollarSign} className={cx('icon-budgets')}></FontAwesomeIcon>
                    </div>
                </div>
            </div>
            <div className={cx('total-product-sold')}>
                <div className={cx('total-product-sold-left')}>
                    <span className={cx('title')}>TOTAL PRODUCT SOLD</span>
                    <span className={cx('counter')}>1.5k</span>
                    <span className={cx('percentage')}>
                        <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
                        <span className={cx('percentage-in4')}>
                            <span>12%</span>
                            <span className={cx('percentage-in4-text')}>Since last month</span>
                        </span>
                    </span>
                </div>
                <div className={cx('total-product-sold-right')}>
                    <div className={cx('boder-icon')}>
                        <FontAwesomeIcon icon={faCoins} className={cx('icon-total-product-solds')}></FontAwesomeIcon>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Widget;
