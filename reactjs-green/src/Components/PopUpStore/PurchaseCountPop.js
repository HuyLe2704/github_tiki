import './index.scss'
import InputPop from './InputPop'
import { Fragment, useContext } from 'react'
import Context from '../../store/Context'

const PurchaseCountPop = (props) => {
    const { item } = props
    const { handleAddCarts, handleRemoveCarts, handleMinusOneItem } = useContext(Context)

    const handlePlusPop = () => {
        handleAddCarts(item)
    }

    const handleMinusPop = () => {
        if (item.quantity === 1) {
            handleRemoveCarts(item);
        } else {
            handleMinusOneItem(item);
        }
    }


    return (
        <div className="product-qty">
            <div className="quantity-container">
                <Fragment >
                    <span onClick={() => handleMinusPop()} className="qty-decrease">
                        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/decrease.svg"
                            alt="" width={23} height={23}
                        />
                    </span>
                    <InputPop id={item.id} type="text" className="qty-input" data={item.quantity} />
                    <span onClick={() => handlePlusPop()} className="qty-increase">
                        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/increase.svg"
                            alt="" width={23} height={23} className='d-block'
                        />
                    </span>
                </Fragment>
            </div>
        </div>
    )
}

export default PurchaseCountPop