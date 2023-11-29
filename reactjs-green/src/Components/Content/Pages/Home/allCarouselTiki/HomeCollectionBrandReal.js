import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export function HomeCollectionBrandReal() {
    const [data, setData] = useState([]);
    const [checkClick, setCheckClick] = useState(true)
    const get_data = async () => {
        fetch("http://localhost:8000/api/v1/homeCollectionBrandReal")
            .then((res) => res.json())
            .then((resp) => setData(resp));
    };

    function callTimeOut() {
        return setTimeout(() => {
            const [a, ...rest] = data;
            setData([...rest, a])
        }, 4000)
    }

    function callTimeOutAgain() {
        setTimeout(() => {
            setCheckClick(true)
        }, 4000)
    }

    useEffect(() => {
        get_data();
    }, []);

    if (!checkClick) {
        callTimeOutAgain()
    }

    const [a, b, c, d, e, f] = data
    const arr = (data.filter((item) => item === a || item === b || item === c || item === d || item === e || item === f))

    if (data.length > 0 && checkClick) {
        callTimeOut()
    }

    const handleNext = () => {
        clearTimeout(callTimeOut())
        setCheckClick(false)
        const [a, ...rest] = data;
        setData([...rest, a])
    }

    const handlePrev = () => {
        clearTimeout(callTimeOut())
        setCheckClick(false)
        const a = data.at(-1)
        const arrNew = data.filter((item) => item !== a)
        setData([a, ...arrNew])
    }

    return (
        <div className="col-md-12 homeCollection homeCollectionBrandReal">
            <div className="collectionTitle brandRealTitle d-flex">
                <span>Hàng chính hãng & giao nhanh</span>
            </div>
            <div className="row mt-2">
                <div className="carouselContainer">
                    <div className="carouselInner d-flex" role="listbox">
                        {
                            arr.map((item, index) => {
                                return (
                                    <div key={index} className='col-md-2'>
                                        {item.class = 'right' && (!item.img) ?
                                            <NavLink to={`product/homeCollectionBrandReal/${item.id}`}>
                                                <div className="right">
                                                    <div>
                                                        <img src={item.imgfirst} className="w-100 d-block" alt="Second slide" />
                                                    </div>
                                                    <div>
                                                        <img src={item.imgsecond} className="w-100 d-block" alt="Second slide" />
                                                    </div>
                                                </div>
                                            </NavLink>
                                            :
                                            <NavLink to={`product/homeCollectionBrandReal/${item.id}`}>
                                                <img src={item.img} className="w-100 d-block" alt="First slide" height={245} />
                                            </NavLink>
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="position-relative">
                        <div className="carousel-prev-btn bg-transparent" onClick={handlePrev}>
                            <div className="carousel-control-container"></div>
                            <span className="carousel-control-prev-icon2" aria-hidden="true"></span>
                        </div>
                        <div className="carousel-next-btn bg-transparent" onClick={handleNext}>
                            <div className="carousel-control-container"></div>
                            <span className="carousel-control-next-icon2" aria-hidden="true"></span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default HomeCollectionBrandReal