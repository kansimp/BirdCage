import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import images from '../../../assets/images';
import logo from '../../../assets/images/logo.png';
import { useContext } from 'react';
import { ShopContext } from '../../../context/Shop-Context';
import { List } from '../../../pages/Cart/List';

const cx = classNames.bind(styles);

function Header() {
    const { cartItem, calculateTotalQuantity } = useContext(ShopContext);
    const totalQuantityInCart = calculateTotalQuantity(cartItem, List());
    return (
        <header className={cx('header')}>
            {/* <!-- navbar --> */}
            <nav className={cx('header__navbar')}>
                {/* <!-- logo --> */}
                <img src={logo} alt="logo" className={cx('logo')} />
                {/* <!-- subnav --> */}
                <div className={cx('subnav')}>
                    <Link to={'/'} className={cx('link')}>
                        HOME
                    </Link>
                    <Link to={'/products'} className={cx('link')}>
                        PRODUCTS
                    </Link>
                </div>
                {/* <!-- search --> */}
                <div className={cx('search')}>
                    <input type="text" placeholder="Type to search ..." className={cx('subsearch')} />
                    <a href="#!" className={cx('search-logo')}>
                        <img src={images.search_logo} alt="search-logo" />
                    </a>
                </div>
                {/* <!-- login --> */}
                <div className={cx('login')}>
                    <div className={cx('sign-in')}>
                        <a href="#!">Sign in</a>
                        <a href="#!" className={cx('sign-in-logo')}>
                            <FontAwesomeIcon icon={faRightToBracket} className={cx('sign-in-icon')}></FontAwesomeIcon>
                        </a>
                    </div>
                    <div className={cx('sign-up')}>
                        <a href="#!">Sign up</a>
                        <a href="#!" className={cx('sign-up-logo')}>
                            <FontAwesomeIcon icon={faUserPlus} className={cx('sign-up-icon')}></FontAwesomeIcon>
                        </a>
                    </div>
                    {/* // Cart */}
                    <Link to="/Cart" className={cx('buy-logo')}>
                        <FontAwesomeIcon icon={faCartShopping} className={cx('buy-icon')}></FontAwesomeIcon>
                        {totalQuantityInCart > 0 && <div className={cx('total-quantity')}>{totalQuantityInCart}</div>}
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;
