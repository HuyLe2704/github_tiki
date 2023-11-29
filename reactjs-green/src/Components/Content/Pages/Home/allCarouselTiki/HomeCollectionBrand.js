import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export function HomeCollectionBrand() {
    const [data, setData] = useState([]);

    const get_data = async () => {
        fetch("http://localhost:8000/api/v1/homeCollectionBrand")
            .then((res) => res.json())
            .then((resp) => setData(resp));
    };

    useEffect(() => {
        get_data();
    }, []);

    // const timeout = setTimeout(() => {
    //   console.log('1')
    //   handleNext()
    // }, 3000)

    const [a, b, c, d, e, f] = data
    const arr = (data.filter((item) => item === a || item === b || item === c || item === d || item === e || item === f))

    const handleNext = () => {
        // clearTimeout(timeout)
        const [a, ...rest] = data;
        setData([...rest, a])
    }

    const handlePrev = () => {
        // clearTimeout(timeout)
        const a = data.at(-1)
        const arrNew = data.filter((item) => item !== a)
        setData([a, ...arrNew])
    }

    return (
        <div className="col-md-12 homeCollection homeCollectionBrand">
            <div className="collectionTitle brandTitle d-flex">
                <span>Thương hiệu chính hãng</span>
                <div className="container">
                    <div className="brand-official">
                        <img src="https://salt.tikicdn.com/ts/tka/71/61/5d/dee57a81920f1f4e4dcc3b5878d9bfed.png" alt="" width="70" height="16" />
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="carouselContainer">
                    <div className="carousel-inner d-flex" role="listbox">
                        {
                            arr.map((item, index) => {
                                return (
                                    <div key={index} className='col-md-2 carousel-brand'>
                                        <NavLink to={`product/homeCollectionBrand/${item.id}`}>
                                            <img src={item.img} alt="Slide" className="w-100 d-block" />
                                        </NavLink>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="position-relative">
                        <div className="carousel-prev-btn2 bg-transparent" onClick={handlePrev}>
                            <div className="carousel-control-container"></div>
                            <span className="carousel-control-prev-icon2" aria-hidden="true"></span>
                        </div>
                        <div className="carousel-next-btn2 bg-transparent" onClick={handleNext}>
                            <div className="carousel-control-container"></div>
                            <span className="carousel-control-next-icon2" aria-hidden="true"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

