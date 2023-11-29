import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

export const HomeTabContent = (props) => {

    const [tabsData1, setTabsData1] = useState([]);
    const [tabsData2, setTabsData2] = useState([]);

    const { tabRef } = props


    const get_tabsData1 = async () => {
        fetch("http://localhost:8000/api/v1/homeTabsContent")
            .then((res) => res.json())
            .then((resp) => setTabsData1(resp));
    };

    const get_tabsData2 = async () => {
        fetch("http://localhost:8000/api/v1/homeTabsContent2")
            .then((res) => res.json())
            .then((resp) => setTabsData2(resp));
    };

    useEffect(() => {
        get_tabsData1();
        get_tabsData2();
    }, []);

    useEffect(() => {
        const tabContents = document.querySelectorAll('.homeTabContent');

        tabRef.current.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                tabContents.forEach(content => content.classList.remove('show'));

                tabRef.current.forEach(otherTab => otherTab.classList.remove('active'));

                tabContents[index].classList.add('show');

                tab.classList.add('active');
            });
        });
    });
    return (
        <>
            <div className='homeTabContent collapse multi-collapse show'>
                <div className="row content">
                    {tabsData1.map((item, index) => {
                        return (
                            <div key={index} className="col-xl-2 d-flex">
                                <Link to={`/product/homeTabContent/${item.id}`} className="productItem">
                                    <span className="productItemWrap">
                                        <div className="thumbnailItem">
                                            <div className="imageWrapper">
                                                <img src={item.img} alt="" />
                                            </div>
                                        </div>
                                        <div style={{ height: '188px', minHeight: '188px', display: 'flex', flexDirection: 'column' }}>
                                            <div className="info">
                                                <div className="badgesList">
                                                    <img src="https://salt.tikicdn.com/ts/upload/f0/68/87/8b851bd4e439a34de96a6152cffcd1b3.png"
                                                        alt="" width="72" height="20"
                                                    />
                                                    <p className="badgesListp">Tài trợ</p>
                                                </div>
                                                <div className="nameProduction">
                                                    <div className="name">
                                                        <h3>{item.name}</h3>
                                                    </div>
                                                </div>
                                                <div className="ratingList">
                                                    <div className="ratingListStar">
                                                        <div className="listStarWrapper d-flex">
                                                            {Array(5).fill(null).map((_, index) =>
                                                                <div key={index} style={{ width: '12px', height: '12px' }}>
                                                                    <i style={{ color: '#ffc400', fontSize: '10px' }} className="fa-solid fa-star"></i>
                                                                </div>
                                                            )}
                                                            <span className="quantity has-border">
                                                                {`Đã bán ${item.sold}`}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="price-discount has-discount d-flex">
                                                    <div className="price-discount__price">
                                                        <span>{(item.price).toLocaleString('vi-VN')}</span>
                                                        <sup style={{ textDecoration: 'underline' }}>đ</sup>
                                                    </div>
                                                    <div className="price-discount__discount">
                                                        <span>{item.discount}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ marginInline: '8px' }}>
                                                <div className="deliveryInfo">
                                                    <span>Giao thứ 3, ngày 15/08</span>
                                                </div>
                                            </div>
                                        </div>
                                    </span>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='homeTabContent collapse multi-collapse'>
                <div className="row content">
                    {tabsData2.map((item, index) => {
                        return (
                            <div key={index} className="col-xl-2 d-flex">
                                <a className="productItem" href="https://tiki.vn/tinh-chat-duong-trang-da-chong-tham-nam-melano-cc-whitening-essence-20ml-p1313905.html?itm_campaign=HMP_YPD_TKA_PLA_UNK_ALL_UNK_UNK_UNK_UNK_X.233852_Y.1816172_Z.3682781_CN.PA---Group---Serum&itm_medium=CPC&itm_source=tiki-ads&spid=10862625">
                                    <span className="productItemWrap">
                                        <div className="thumbnailItem">
                                            <div className="imageWrapper">
                                                <img src={item.img} alt="" />
                                            </div>
                                        </div>
                                        <div style={{ height: '188px', minHeight: '188px', display: 'flex', flexDirection: 'column' }}>
                                            <div className="info">
                                                <div className="badgesList">
                                                    <img src="https://salt.tikicdn.com/ts/upload/f0/68/87/8b851bd4e439a34de96a6152cffcd1b3.png"
                                                        alt="" width="72" height="20"
                                                    />
                                                    <p className="badgesListp">Tài trợ</p>
                                                </div>
                                                <div className="nameProduction">
                                                    <div className="name">
                                                        <h3>{item.name}</h3>
                                                    </div>
                                                </div>
                                                <div className="ratingList">
                                                    <div className="ratingListStar">
                                                        <div className="listStarWrapper d-flex">
                                                            {Array(5).fill(null).map((_, index) =>
                                                                <div key={index} style={{ width: '12px', height: '12px' }}>
                                                                    <i style={{ color: '#ffc400', fontSize: '10px' }} className="fa-solid fa-star"></i>
                                                                </div>
                                                            )}
                                                            <span className="quantity has-border">
                                                                {`Đã bán ${item.sold}`}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="price-discount has-discount d-flex">
                                                    <div className="price-discount__price">
                                                        <span>{(item.price).toLocaleString('vi-VN')}</span>
                                                        <sup style={{ textDecoration: 'underline' }}>đ</sup>
                                                    </div>
                                                    <div className="price-discount__discount">
                                                        <span>{item.discount}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ marginInline: '8px' }}>
                                                <div className="deliveryInfo">
                                                    <span>Giao thứ 3, ngày 15/08</span>
                                                </div>
                                            </div>
                                        </div>
                                    </span>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='homeTabContent collapse multi-collapse'>
                <div className="row content">
                    {tabsData1.map((item, index) => {
                        return (
                            <div key={index} className="col-xl-2 d-flex">
                                <a className="productItem" href="https://tiki.vn/tinh-chat-duong-trang-da-chong-tham-nam-melano-cc-whitening-essence-20ml-p1313905.html?itm_campaign=HMP_YPD_TKA_PLA_UNK_ALL_UNK_UNK_UNK_UNK_X.233852_Y.1816172_Z.3682781_CN.PA---Group---Serum&itm_medium=CPC&itm_source=tiki-ads&spid=10862625">
                                    <span className="productItemWrap">
                                        <div className="thumbnailItem">
                                            <div className="imageWrapper">
                                                <img src={item.img} alt="" />
                                            </div>
                                        </div>
                                        <div style={{ height: '188px', minHeight: '188px', display: 'flex', flexDirection: 'column' }}>
                                            <div className="info">
                                                <div className="badgesList">
                                                    <img src="https://salt.tikicdn.com/ts/upload/f0/68/87/8b851bd4e439a34de96a6152cffcd1b3.png"
                                                        alt="" width="72" height="20"
                                                    />
                                                    <p className="badgesListp">Tài trợ</p>
                                                </div>
                                                <div className="nameProduction">
                                                    <div className="name">
                                                        <h3>{item.name}</h3>
                                                    </div>
                                                </div>
                                                <div className="ratingList">
                                                    <div className="ratingListStar">
                                                        <div className="listStarWrapper d-flex">
                                                            {Array(5).fill(null).map((_, index) =>
                                                                <div key={index} style={{ width: '12px', height: '12px' }}>
                                                                    <i style={{ color: '#ffc400', fontSize: '10px' }} className="fa-solid fa-star"></i>
                                                                </div>
                                                            )}
                                                            <span className="quantity has-border">
                                                                {`Đã bán ${item.sold}`}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="price-discount has-discount d-flex">
                                                    <div className="price-discount__price">
                                                        <span>{(item.price).toLocaleString('vi-VN')}</span>
                                                        <sup style={{ textDecoration: 'underline' }}>đ</sup>
                                                    </div>
                                                    <div className="price-discount__discount">
                                                        <span>{item.discount}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ marginInline: '8px' }}>
                                                <div className="deliveryInfo">
                                                    <span>Giao thứ 3, ngày 15/08</span>
                                                </div>
                                            </div>
                                        </div>
                                    </span>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='homeTabContent collapse multi-collapse'>
                <div className="row content">
                    {tabsData2.map((item, index) => {
                        return (
                            <div key={index} className="col-xl-2 d-flex">
                                <a className="productItem" href="https://tiki.vn/tinh-chat-duong-trang-da-chong-tham-nam-melano-cc-whitening-essence-20ml-p1313905.html?itm_campaign=HMP_YPD_TKA_PLA_UNK_ALL_UNK_UNK_UNK_UNK_X.233852_Y.1816172_Z.3682781_CN.PA---Group---Serum&itm_medium=CPC&itm_source=tiki-ads&spid=10862625">
                                    <span className="productItemWrap">
                                        <div className="thumbnailItem">
                                            <div className="imageWrapper">
                                                <img src={item.img} alt="" />
                                            </div>
                                        </div>
                                        <div style={{ height: '188px', minHeight: '188px', display: 'flex', flexDirection: 'column' }}>
                                            <div className="info">
                                                <div className="badgesList">
                                                    <img src="https://salt.tikicdn.com/ts/upload/f0/68/87/8b851bd4e439a34de96a6152cffcd1b3.png"
                                                        alt="" width="72" height="20"
                                                    />
                                                    <p className="badgesListp">Tài trợ</p>
                                                </div>
                                                <div className="nameProduction">
                                                    <div className="name">
                                                        <h3>{item.name}</h3>
                                                    </div>
                                                </div>
                                                <div className="ratingList">
                                                    <div className="ratingListStar">
                                                        <div className="listStarWrapper d-flex">
                                                            {Array(5).fill(null).map((_, index) =>
                                                                <div key={index} style={{ width: '12px', height: '12px' }}>
                                                                    <i style={{ color: '#ffc400', fontSize: '10px' }} className="fa-solid fa-star"></i>
                                                                </div>
                                                            )}
                                                            <span className="quantity has-border">
                                                                {`Đã bán ${item.sold}`}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="price-discount has-discount d-flex">
                                                    <div className="price-discount__price">
                                                        <span>{(item.price).toLocaleString('vi-VN')}</span>
                                                        <sup style={{ textDecoration: 'underline' }}>đ</sup>
                                                    </div>
                                                    <div className="price-discount__discount">
                                                        <span>{item.discount}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ marginInline: '8px' }}>
                                                <div className="deliveryInfo">
                                                    <span>Giao thứ 3, ngày 15/08</span>
                                                </div>
                                            </div>
                                        </div>
                                    </span>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='homeTabContent collapse multi-collapse'>
                <div className="row content">
                    {tabsData1.map((item, index) => {
                        return (
                            <div key={index} className="col-xl-2 d-flex">
                                <a className="productItem" href="https://tiki.vn/tinh-chat-duong-trang-da-chong-tham-nam-melano-cc-whitening-essence-20ml-p1313905.html?itm_campaign=HMP_YPD_TKA_PLA_UNK_ALL_UNK_UNK_UNK_UNK_X.233852_Y.1816172_Z.3682781_CN.PA---Group---Serum&itm_medium=CPC&itm_source=tiki-ads&spid=10862625">
                                    <span className="productItemWrap">
                                        <div className="thumbnailItem">
                                            <div className="imageWrapper">
                                                <img src={item.img} alt="" />
                                            </div>
                                        </div>
                                        <div style={{ height: '188px', minHeight: '188px', display: 'flex', flexDirection: 'column' }}>
                                            <div className="info">
                                                <div className="badgesList">
                                                    <img src="https://salt.tikicdn.com/ts/upload/f0/68/87/8b851bd4e439a34de96a6152cffcd1b3.png"
                                                        alt="" width="72" height="20"
                                                    />
                                                    <p className="badgesListp">Tài trợ</p>
                                                </div>
                                                <div className="nameProduction">
                                                    <div className="name">
                                                        <h3>{item.name}</h3>
                                                    </div>
                                                </div>
                                                <div className="ratingList">
                                                    <div className="ratingListStar">
                                                        <div className="listStarWrapper d-flex">
                                                            {Array(5).fill(null).map((_, index) =>
                                                                <div key={index} style={{ width: '12px', height: '12px' }}>
                                                                    <i style={{ color: '#ffc400', fontSize: '10px' }} className="fa-solid fa-star"></i>
                                                                </div>
                                                            )}
                                                            <span className="quantity has-border">
                                                                {`Đã bán ${item.sold}`}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="price-discount has-discount d-flex">
                                                    <div className="price-discount__price">
                                                        <span>{(item.price).toLocaleString('vi-VN')}</span>
                                                        <sup style={{ textDecoration: 'underline' }}>đ</sup>
                                                    </div>
                                                    <div className="price-discount__discount">
                                                        <span>{item.discount}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ marginInline: '8px' }}>
                                                <div className="deliveryInfo">
                                                    <span>Giao thứ 3, ngày 15/08</span>
                                                </div>
                                            </div>
                                        </div>
                                    </span>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='homeTabContent collapse multi-collapse'>
                <div className="row content">
                    {tabsData2.map((item, index) => {
                        return (
                            <div key={index} className="col-xl-2 d-flex">
                                <a className="productItem" href="https://tiki.vn/tinh-chat-duong-trang-da-chong-tham-nam-melano-cc-whitening-essence-20ml-p1313905.html?itm_campaign=HMP_YPD_TKA_PLA_UNK_ALL_UNK_UNK_UNK_UNK_X.233852_Y.1816172_Z.3682781_CN.PA---Group---Serum&itm_medium=CPC&itm_source=tiki-ads&spid=10862625">
                                    <span className="productItemWrap">
                                        <div className="thumbnailItem">
                                            <div className="imageWrapper">
                                                <img src={item.img} alt="" />
                                            </div>
                                        </div>
                                        <div style={{ height: '188px', minHeight: '188px', display: 'flex', flexDirection: 'column' }}>
                                            <div className="info">
                                                <div className="badgesList">
                                                    <img src="https://salt.tikicdn.com/ts/upload/f0/68/87/8b851bd4e439a34de96a6152cffcd1b3.png"
                                                        alt="" width="72" height="20"
                                                    />
                                                    <p className="badgesListp">Tài trợ</p>
                                                </div>
                                                <div className="nameProduction">
                                                    <div className="name">
                                                        <h3>{item.name}</h3>
                                                    </div>
                                                </div>
                                                <div className="ratingList">
                                                    <div className="ratingListStar">
                                                        <div className="listStarWrapper d-flex">
                                                            {Array(5).fill(null).map((_, index) =>
                                                                <div key={index} style={{ width: '12px', height: '12px' }}>
                                                                    <i style={{ color: '#ffc400', fontSize: '10px' }} className="fa-solid fa-star"></i>
                                                                </div>
                                                            )}
                                                            <span className="quantity has-border">
                                                                {`Đã bán ${item.sold}`}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="price-discount has-discount d-flex">
                                                    <div className="price-discount__price">
                                                        <span>{(item.price).toLocaleString('vi-VN')}</span>
                                                        <sup style={{ textDecoration: 'underline' }}>đ</sup>
                                                    </div>
                                                    <div className="price-discount__discount">
                                                        <span>{item.discount}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ marginInline: '8px' }}>
                                                <div className="deliveryInfo">
                                                    <span>Giao thứ 3, ngày 15/08</span>
                                                </div>
                                            </div>
                                        </div>
                                    </span>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}