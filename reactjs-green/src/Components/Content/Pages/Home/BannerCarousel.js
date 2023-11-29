import { Fragment } from 'react'
import { carouselItems } from '../../../../Data'

function BannerCarousel() {
    return (
        <>
            <div className="mainGridContainer d-flex">
                <div className="col-sm-9 col-md-9 col-lg-9 col-xl-9 carouselContainer">
                    <div id="carouselId" className="carousel slide" data-bs-ride="carousel" data-bs-pause="hover">
                        <ol className="carousel-indicators">
                            {[...Array(carouselItems.length + 1).keys()].map((index) => (
                                <li
                                    key={index}
                                    data-bs-target="#carouselId"
                                    data-bs-slide-to={index}
                                    className={index === 0 ? 'active' : ''}
                                    aria-current={index === 0 ? 'true' : 'false'}
                                    aria-label={`Slide ${index}`}
                                ></li>
                            ))}
                        </ol>
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <img src="https://salt.tikicdn.com/cache/w1080/ts/tikimsp/e7/46/fd/6dbcdf69215fe2252c3c2401b28c38a0.png.webp" height="280px" className="w-100 d-block" alt="First slide" />
                            </div>
                            {carouselItems.map((item) => {
                                return (
                                    <Fragment key={item.id}>
                                        <div className="carousel-item">
                                            <img src={item.img} height="281px" className="w-100 d-block" alt={item.alt} />
                                        </div>
                                    </Fragment>
                                )
                            })}

                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <div className="carousel-control-container">
                                <span className="visually-hidden">Previous</span>
                            </div>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <div className="carousel-control-container">
                                <span className="visually-hidden">Next</span>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 salePicture">
                    <a href=
                        "https://tiki.vn/khuyen-mai/khuyen-mai-hot-lam-dep-suc-khoe?itm_campaign=HMP_YPD_TKA_BNA_UNK_ALL_ALL_UNK_UNK_UNK_TMSX.df6b3fe8-9906-4a47-b6a7-0c6d5e247fff&itm_medium=CPD&itm_source=tiki-ads&tmsx=df6b3fe8-9906-4a47-b6a7-0c6d5e247fff"
                    >
                        <div>
                            <img src="https://salt.tikicdn.com/ts/tikimsp/7b/8b/8e/11130ebd3b55e4846866e5a6621a00a9.png"
                                alt="" height="280"
                            />
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default BannerCarousel