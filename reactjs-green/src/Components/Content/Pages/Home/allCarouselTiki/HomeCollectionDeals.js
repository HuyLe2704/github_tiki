import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CountDownPrice } from './CountDownPrice'

export function HomeCollectionDeals() {
  const [data, setData] = useState([]);
  const [checkClick, setCheckClick] = useState(true)

  const get_data = async () => {
    fetch("http://localhost:8000/api/v1/homeCollectionDeals")
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

  if (checkClick === false) {
    callTimeOutAgain()
  }

  useEffect(() => {
    get_data();
  }, []);

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
    <div className="col-md-12 homeCollection">
      <CountDownPrice />
      <div className="row mt-3">
        <div className="carouselContainer">
          <div className="carousel-inner d-flex" role="listbox">
            {
              arr.map((item, index) => {
                return (
                  <div key={index} className='col-md-2 carousel-deals'>
                    <NavLink to={`product/homeCollectionDeals/${item.id}`} style={{ textDecoration: 'none' }}>
                      <img src={item.img} alt="Slide" className="w-100 d-block deals-img" />
                      <img
                        src="https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png"
                        alt=""
                        className="styledDynamic"
                      />
                      <span className="deals__price__discount">
                        {item.priceDiscount}
                      </span>
                      <div className="deals__price has-discount">
                        <span
                          style={{
                            fontSize: "16px",
                            margin: "-65px auto -12px auto",
                          }}
                        >
                          {item.price}
                          <sup> đ</sup>
                        </span>
                      </div>
                      <div className="deals__qty">
                        <div
                          className="deals__progress"
                          style={{ width: item.progress }}
                        ></div>
                        <span>{item.status}</span>
                        <img
                          className="fire-icon"
                          src="https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg"
                          alt=""
                        />
                      </div>
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
