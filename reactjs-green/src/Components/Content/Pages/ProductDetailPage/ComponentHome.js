import { useParams } from 'react-router-dom';
import { ItemTranspot } from './ItemTranspot';
import { Link } from 'react-router-dom';
import PurchaseCount from './PurchaseCount';

function ComponentHome(props) {

    const { priceItem, priceItemText, data } = props

    let { id } = useParams();

    return (
        <div className="category-container">
            <div className='container'>
                {
                    // eslint-disable-next-line eqeqeq
                    data.map((item) => item.id == id && (
                        <div className='row' key={item.id}>
                            <div className='col-lg-3 mt-3 item-container'>
                                <img src={item.img} alt="" className='d-block border' height="450" />
                            </div>
                            <div className='col-lg-5 ms-4 mt-3 category-desc '>
                                <div className='item-desc'>
                                    <div className='d-flex'>
                                        <img src="https://salt.tikicdn.com/ts/upload/d7/56/04/b93b8c666e13f49971483596ef14800f.png" alt="" width="89" height="20" />
                                        <span className="brand-and-author">
                                            <h6>Thương hiệu: <span style={{ color: "rgb(13, 92, 182)" }}>Friso</span></h6>
                                        </span>
                                    </div>
                                    <h1 className="item-desc_title">{item.name}</h1>
                                    <div className="item-desc_sold">{`Đã bán ${item.sold}`}</div>
                                    <div className='d-flex item-desc_price-container'>
                                        <p ref={priceItem} className="item-desc_price">{item.price}</p>
                                        <span style={{ textDecoration: "underline", fontWeight: '600', marginTop: '-28px', marginLeft: '-6px' }}>đ</span>
                                        <span className='item-desc_discount'>{item.discount}</span>
                                    </div>
                                </div>

                                <ItemTranspot />

                                <div className="shop-info-container item-desc">
                                    <div className="shop-info">Thông tin nhà bán</div>
                                    <div className="shop-info-tiki_trading">
                                        <Link to="https://tiki.vn/cua-hang/tiki-trading?source_screen=product_detail&source_engine=organic">
                                            <img src="https://vcdn.tikicdn.com/cache/w100/ts/seller/21/ce/5c/b52d0b8576680dc3666474ae31b091ec.jpg.webp"
                                                alt="" width={40} height={40} style={{ borderRadius: '50%', objectFit: 'contain' }}
                                            />
                                        </Link>
                                        <div className="d-flex flex-column">
                                            <span className='seller-name d-flex'>
                                                <Link to="https://tiki.vn/cua-hang/tiki-trading?source_screen=product_detail&source_engine=organic">
                                                    <span>Tiki Trading</span>
                                                    <img src="https://salt.tikicdn.com/cache/w100/ts/upload/6b/25/fb/c288b5bcee51f35f2df0a5f5f03de2e1.png.webp"
                                                        alt="" width={72} height={20} />
                                                </Link>
                                                <div className="seller-action">
                                                    <div className="seller-action-container">
                                                        <img src="https://salt.tikicdn.com/ts/upload/5d/8b/29/1a3494657a631b3ae2712fd9d1d78c6e.png"
                                                            alt="" width={16} height={16} />
                                                        <span style={{ whiteSpace: "nowrap" }}>Theo dõi</span>
                                                    </div>
                                                </div>
                                            </span>
                                            <div className="seller-detail d-flex">
                                                <div className="item review">
                                                    <div className="title d-flex">
                                                        <img src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                                                            alt="" width={16} height={16} />
                                                        <span>4.7</span>
                                                    </div>
                                                    <div className="sub-title">(5.4tr+ đánh giá)</div>
                                                </div>
                                                <div className="item normal">
                                                    <div className="title">
                                                        <span>487.1k+</span>
                                                    </div>
                                                    <div className="sub-title">Theo dõi</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 mt-3 ms-2 d-flex flex-column'>
                                <PurchaseCount ref={priceItemText} item={item} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default ComponentHome

