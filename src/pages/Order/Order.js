import classNames from 'classnames/bind';
import styles from './Order.module.scss';
import images from '../../assets/images';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import OrderList from './OrderList/OrderList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import { ShopContext } from '../../context/Shop-Context';
const cx = classNames.bind(styles);
export const Order = () => {
    const host = 'https://provinces.open-api.vn/api/';

    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [selectedProvince, setSelectedProvince] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const { calculateTotalQuantity } = useContext(ShopContext);

    useEffect(() => {
        axios.get(`${host}?depth=1`).then((response) => {
            setProvinces(response.data);
        });
    }, []);

    const callAPI = (api, type) => {
        axios.get(api).then((response) => {
            if (type === 'districts') {
                setDistricts(response.data.districts);
            }
        });
    };

    const handleProvinceChange = (event) => {
        const selectedProvince = event.target.value;
        setSelectedProvince(selectedProvince);
        setSelectedDistrict('');
        callAPI(`${host}p/${selectedProvince}?depth=2`, 'districts');
    };
    const handleDistrictChange = (event) => {
        const selectedDistrict = event.target.value;
        setSelectedDistrict(selectedDistrict);
    };
    return (
        <div className={cx('container')}>
            <div className={cx('content')}>
                <div className={cx('left')}>
                    <div className={cx('in4')}>
                        <h1 className={cx('text')}>Shipping details</h1>
                        <div className={cx('user-in4')}>
                            <div className={cx('name')}>
                                <p className={cx('user-in4-text')}>Name</p>
                                <input type="text" placeholder="Nguyen Thanh " />
                            </div>
                            <div className={cx('phone')}>
                                <p className={cx('user-in4-text')}>Phone</p>
                                <input type="text" placeholder="0912*******" />
                            </div>
                        </div>
                        <div className={cx('address')}>
                            <p>Street address</p>
                            <input type="text" placeholder="200 Nguyen Hue" />
                        </div>
                        <div className={cx('city-address')}>
                            <div className={cx('city')}>
                                <p className={cx('text')}>Province</p>
                                <select
                                    id="province"
                                    onChange={handleProvinceChange}
                                    value={selectedProvince}
                                    className={cx('select')}
                                >
                                    <option disabled value="">
                                        Select Provinces ...
                                    </option>
                                    {provinces.map((province) => (
                                        <option key={province.code} value={province.code}>
                                            {province.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className={cx('district')}>
                                <p className={cx('text')}>District</p>
                                <select
                                    id="district"
                                    onChange={handleDistrictChange}
                                    value={selectedDistrict}
                                    className={cx('select')}
                                >
                                    <option disabled value="">
                                        Select Districts ...
                                    </option>
                                    {districts.map((district) => (
                                        <option key={district.code} value={district.code}>
                                            {district.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className={cx('email')}>
                            <p>Email address</p>
                            <input type="text" placeholder="thanhcong@gmail.com" />
                        </div>
                    </div>
                    {/* thanh toan  */}
                    <div className={cx('payment')}>
                        <div className={cx('payment-title')}>
                            <h1>Payment details</h1>
                        </div>
                        <div className={cx('payment-content')}>
                            <div className={cx('payment-content-radio-box')}>
                                <div className={cx('cod')}>
                                    <div className={cx('cod-content')}>
                                        <input className={cx('radio')} type="radio" name="paymentMethod" value="" />
                                        <img
                                            src="https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=5"
                                            className={cx('image')}
                                        />
                                        <div className={cx('text')}>Payment on delivery</div>
                                    </div>
                                </div>
                                <div className={cx('atm')}>
                                    <div className={cx('atm-content')}>
                                        <input className={cx('radio')} type="radio" name="paymentMethod" value="" />
                                        <img
                                            src="https://hstatic.net/0/0/global/design/seller/image/payment/vnpay_new.svg?v=5"
                                            className={cx('image')}
                                        />
                                        <div className={cx('text')}>VNPAY Payment Gateway</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('right')}>
                    <div className={cx('right-content')}>
                        <div className={cx('right-content-header')}>
                            <div className={cx('list-order-in4')}>
                                <OrderList />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
