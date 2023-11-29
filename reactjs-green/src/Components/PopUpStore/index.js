import { useContext, forwardRef, useState, useEffect } from 'react'
import './index.scss'
import Input from '../Input'
import Context from '../../store/Context'
import { Link } from 'react-router-dom'
import PurchaseCountPop from './PurchaseCountPop'

function PopupStore() {

    const { setValue, popCont, carts, cartValue, handleRemoveCarts } = useContext(Context)
    const [isCheckedAll, setIsCheckedAll] = useState(false)
    const [isCheckTrading, setIsCheckTrading] = useState(false)
    const [isItemChecked, setIsItemChecked] = useState([])

    const handleClosePop = () => {
        setValue(1)
        popCont.current.style.display = 'none'
    }

    const handleRemoveItem = (item) => {
        handleRemoveCarts(item)
    }

    const handleCheckboxAllChange = (checked) => {
        setIsCheckedAll(checked);

        if (checked) {
            const newCheckedItems = {};
            carts.forEach(item => {
                newCheckedItems[item.id] = true;
            });
            setIsItemChecked(newCheckedItems);
        } else {
            setIsItemChecked([]);
        }
    }

    const handleCheckboxTradeChange = () => {
        setIsCheckTrading(!isCheckTrading)
    }

    const handleCheckboxItemChange = (item) => {
        const newCheckedItems = { ...isItemChecked };
        newCheckedItems[item.id] = !newCheckedItems[item.id];
        setIsItemChecked(newCheckedItems);

        // Kiểm tra xem tất cả sản phẩm có được tick hay không
        const allChecked = carts.every(cartItem => newCheckedItems[cartItem.id]);
        setIsCheckedAll(allChecked);
    }

    const getTotalPrice = () => {
        return carts.reduce((acc, currentItem) => {
            console.log(currentItem.price)
            return acc + parseInt(currentItem.price.replace(/\./g, '')) * currentItem.quantity
        }, 0);
    }

    useEffect(() => {
        const handleBackButtonEvent = () => {
            setValue(1)
        }
        window.addEventListener('popstate', handleBackButtonEvent);

        return () => {
            window.removeEventListener('popstate', handleBackButtonEvent);
        };
    }, [setValue]);

    return (
        <div id="popupContainer" className="popup" ref={popCont}>
            <div id="popupContent" className="popup-content">
                <span onClick={() => handleClosePop()} id="closePopup" className="close-button">
                    <i class="icofont-ui-close"></i>
                </span>
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-12 main-title">
                            <h4>GIỎ HÀNG</h4>
                        </div>
                        <div className="items-container">
                            <div className="col-lg-8 container-left">
                                <div className="item-cart-header">
                                    <div className="style_progress-container">
                                        <div className="progress_bar">
                                            <div className="milestone">
                                                <div className='milestone-info milestone-info--bottom'>Mua</div>
                                            </div>
                                            <div className="milestone">
                                                <div className='milestone-info milestone-info--top'>Freeship 15K</div>
                                                <span className='milestone-info milestone-info__checked'>
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512"
                                                        size="8" color="#fff" height={8} width={8} xmlns="http://www.w3.org/2000/svg"
                                                        style={{ color: "rgb(255, 255, 255)" }}
                                                    >
                                                        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                                    </svg>
                                                </span>
                                                <div className='milestone-info milestone-info--bottom'>149k</div>
                                            </div>
                                            <div className="milestone">
                                                <div className="milestone-info milestone-info--top me-5">Freeship 30K</div>
                                                <span className="milestone-info milestone-info__checked">
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512"
                                                        size="8" color="#fff" height={8} width={8} xmlns="http://www.w3.org/2000/svg"
                                                        style={{ color: "rgb(255, 255, 255)" }}
                                                    >
                                                        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                                    </svg>
                                                </span>
                                                <div className="milestone-info milestone-info--bottom">299K</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="all-item__check justify-content-between">
                                    <label className="all-item__checkbox">
                                        <Input type="checkbox" setValue={handleCheckboxAllChange} checked={isCheckedAll} className="check" />
                                        <span className='label'>{`Tất cả ( sản phẩm)`}</span>
                                    </label>
                                    <span>Đơn giá</span>
                                    <span>Số lượng</span>
                                    <span>Thành tiền</span>
                                    <span className='remove-all-item'>
                                        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg" alt="deleted" />
                                    </span>
                                </div>
                                {/* Những sản phẩm trong giỏ hàng được list ra ở đây */}
                                {cartValue === 0 ? (<h1>Không có sản phẩm</h1>) : (
                                    <div className="infinite-scroll-component">
                                        <div className="seller-items-trading">
                                            <div className="seller-group">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <label className="checkbox_style">
                                                            <Input type="checkbox" setValue={handleCheckboxTradeChange} checked={isCheckTrading} />
                                                            <span className="checkbox-fake"></span>
                                                        </label>
                                                        <img src="https://salt.tikicdn.com/ts/upload/30/24/79/8317b36e87e7c0920e33de0ab5c21b62.png"
                                                            alt="" className="seller-icon_home" />
                                                        <a href="https://tiki.vn/cua-hang/tiki-trading" className="seller-name" >
                                                            Tiki Trading
                                                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/Path.svg"
                                                                alt="" className="seller-icon_arrow" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="seller-items-container">
                                                <div>
                                                    <div className="seller-items_product">
                                                        <div className="row">
                                                            {
                                                                carts.map((item, index) => {
                                                                    return (
                                                                        <div key={index} className='d-flex justify-content-between'>
                                                                            <div className="col-lg-4">
                                                                                <div className="d-flex">
                                                                                    <div className="product_checkbox">
                                                                                        <label className="checkbox_style">
                                                                                            <Input id={item.id} type="checkbox" setValue={() => handleCheckboxItemChange(item)} checked={isItemChecked[item.id]} />
                                                                                            <span className="checkbox-fake"></span>
                                                                                        </label>
                                                                                    </div>


                                                                                    <div className="d-flex">
                                                                                        <Link to="" alt="" className="product_img">
                                                                                            <img src={item.img} alt="" width={100} className='mb-4' />
                                                                                        </Link>
                                                                                        <div className="products_desc mt-3">
                                                                                            <Link to="" className="product_name" target="_blank">
                                                                                                {item.name}
                                                                                            </Link>

                                                                                        </div>
                                                                                    </div>

                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-3 ms-5 mt-3">
                                                                                <span style={{ fontSize: '14px' }}>{item.price}₫</span>
                                                                                <del style={{ fontSize: '12px', color: '#999' }} className="ms-1">10.000.000 ₫</del>
                                                                            </div>
                                                                            <div className="col-lg-2 mt-3">
                                                                                <PurchaseCountPop item={item} />
                                                                            </div>
                                                                            <div className="col-lg-2 mt-3">
                                                                                <span className='product-final_prices'>{`${(parseFloat(item.price.replace(/\./g, '')) * item.quantity).toLocaleString('vn-VI')} ₫`}</span>
                                                                            </div>
                                                                            <div className="col-lg-1 mt-3" style={{ cursor: 'pointer' }}>
                                                                                <span onClick={() => handleRemoveItem(item)} className="product_delete">
                                                                                    <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg" alt="deleted" />
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                                }
                            </div>
                            <div className="col-lg-4 container-right">
                                <div className='right-inner' style={{ top: '20px' }}>
                                    <div>
                                        <div className='price-container'></div>
                                        <div className="section-container">
                                            <div className="block-header">
                                                <div className='block-header__title'>
                                                    Tiki Khuyến Mãi
                                                </div>
                                                <div className='block-header__usage'>
                                                    <span>Có thể chọn 2</span>
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/1200px-Infobox_info_icon.svg.png"
                                                        alt="" width={18} height={18}
                                                    />
                                                </div>
                                            </div>
                                            <div className="show-more mt-3">
                                            </div>
                                        </div>
                                        <div>
                                            <span>Tổng số tiền:
                                                <span> {getTotalPrice().toLocaleString('vi-VN')} ₫</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default forwardRef(PopupStore)