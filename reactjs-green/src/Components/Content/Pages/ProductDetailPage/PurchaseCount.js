// Mục thứ 3 từ trái sang của trang điều hướng, tính toán số lượng hàng mà sản phẩm được bấm mua

import { useState, forwardRef, useLayoutEffect, useContext } from "react"
import Context from '../../../../store/Context'
import Button from '../../../Button'
import Input from '../../../Input'

function PurchaseCount(props, ref) {

    const { handleAddCarts, value, setValue, handlePlusItem, handleMinusItem, popCont } = useContext(Context)
    const { item } = props

    let number

    if (ref.current) {
        const numberString = ref.current
        number = parseFloat(numberString.replace(/\./g, ''));
    }

    const [price, setPrice] = useState(number)

    const handleAddCartsToStore = (item) => {
        handleAddCarts(item)
    }

    const handleMovePopCont = (item) => {
        popCont.current.style.display = 'block'
        handleAddCarts(item)
    }

    useLayoutEffect(() => {
        setPrice(number * value);
    }, [value, number])

    return (
        <div className="purchase-container">
            <div className="purchase-container-content">
                <div className="add-to-cart">
                    <div className="quantity_input-wrapper">
                        <p className="label">Số lượng</p>
                        <div className="group-input">
                            <Button onClick={handleMinusItem} className="disable">
                                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg"
                                    alt="" />
                            </Button>
                            <Input type="text" value={value} setValue={setValue} className="input typeNumber" />
                            <Button onClick={handlePlusItem} className="disable">
                                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-add.svg"
                                    alt="" />
                            </Button>
                        </div>
                    </div>
                    <div className="price-container">
                        <div className="price-count">Tạm tính</div>
                        <div className="total-price">
                            <div>
                                {Number(price).toLocaleString('vi-VN')}
                                <sup style={{ textDecoration: 'underline' }}>đ</sup>
                            </div>
                        </div>
                    </div>
                    <Button onClick={() => handleMovePopCont(item)} style={{ height: '40px' }} className="btn btn-danger">Mua ngay</Button>
                    <Button onClick={() => handleAddCartsToStore(item)} className="btn" style={{ border: '1px solid #0a68ff', height: '40px' }}>
                        <span style={{ color: '#0a68ff' }}>Thêm vào giỏ</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default forwardRef(PurchaseCount)