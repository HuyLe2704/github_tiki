import { Fragment } from "react"
import { useState, useRef, useContext } from "react"
import Button from "../Button"
import Input from "../Input"
import HeaderHome from "./HeaderHome"
import Context from '../../store/Context'
import '../../CSS/HeaderTiki.css'
import { headerListItem } from "../../Data"
import PopupStore from "../PopUpStore"


function HeaderTiki() {
    const locationShip = useRef()
    const { popCont } = useContext(Context)
    const { cartValue } = useContext(Context)

    const [placeholder, setPlaceholder] = useState("Giao hàng nhanh 100%")

    const handleShowPop = () => {
        // eslint-disable-next-line no-cond-assign
        if (popCont.current.style.display = 'none') {
            popCont.current.style.display = 'block'
        }
    }

    return (
        <Fragment>
            <PopupStore />
            <div className="container mt-2 header_container">
                <div className="row">
                    <a href="/" className="col-lg-1 tiki-logo">
                        <img src="https://salt.tikicdn.com/ts/upload/c1/64/f7/4e6e925ea554fc698123ea71ed7bda26.png" alt=""></img>
                    </a>

                    <div className="col-lg-7">
                        <Input
                            setValue={setPlaceholder}
                            className="main_search_form_input form-control"
                            placeholder={placeholder}
                        />
                        {/* <Button className="btn input-search_icon">
                            <img src="https://salt.tikicdn.com/ts/upload/33/d0/37/6fef2e788f00a16dc7d5a1dfc5d0e97a.png"
                                alt="icon-search" width="20" height="20"
                            ></img>
                        </Button> */}
                        <Button className="input-search-btn btn text-primary">Tìm kiếm</Button>
                    </div>

                    <div className="col-lg-4 d-flex mt-2">
                        <div className="ms-4">
                            <HeaderHome />
                        </div>

                        <div className="ms-4 cart-wrapper" style={{ cursor: 'pointer' }}>
                            <div onClick={() => handleShowPop()}>
                                <img src="https://salt.tikicdn.com/ts/upload/51/e2/92/8ca7e2cc5ede8c09e34d1beb50267f4f.png"
                                    width="24" height="24" alt=""
                                />
                            </div>
                            <span className="item_cart_user">{cartValue}</span>
                        </div>
                    </div>
                </div>

                <div className="row d-flex header_list-items-container">
                    <div className="col-lg-7 header_list-items">
                        <ul style={{ listStyle: 'none', fontSize: '14px', opacity: '0.8' }}
                            className="d-flex"
                        >
                            {headerListItem.map((item, index) => {
                                return (
                                    <li key={index} className="ms-2"
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {item}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <div className="d-flex" style={{ marginLeft: '72px' }}>
                            <img src="https://salt.tikicdn.com/ts/upload/88/5c/9d/f5ee506836792eb7775e527ef8350a44.png"
                                alt="" width="20" height="20" />
                            <p
                                style={{ marginTop: '-2px', marginLeft: '4px', fontSize: '14px' }}
                            >Giao đến: <span ref={locationShip} style={{ textDecoration: 'underline', fontWeight: "600", cursor: 'pointer' }}>Q. Thanh Xuân, P. Thượng Đình, Hà Nội</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    )
}

export default HeaderTiki