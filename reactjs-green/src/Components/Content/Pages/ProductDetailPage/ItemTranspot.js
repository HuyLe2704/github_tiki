// Mục thứ hai của trang điều hướng, mô tả thương hiệu và các hãng, công ty vận chuyển

export function ItemTranspot() {
    return (
        <div className='item-transpot-container'>
            <div className='item-transpot-info'>
                Thông tin vận chuyển
            </div>
            <div className="item-transpot-location-container">
                <div className='item-transpot-location d-flex'>
                    <div className="current-location">Giao đến Q. Hoàn Kiếm, P. Hàng Trống, Hà Nội </div>
                    <span style={{ color: "rgb(10, 104, 255)" }}>Đổi</span>
                </div>
            </div>
            <div className="now-transpot">
                <div className="shipping-info">
                    <div className="shipping-info_item d-flex">
                        <div className="shipping-info_item_header">
                            <div className="shipping-info_item_header-logo">
                                <img src="https://salt.tikicdn.com/ts/upload/04/da/1e/eac32401f048ffd380e50dfeda2a1c55.png" alt="" width="32" height="16" />
                            </div>
                            <div className='shipping-info_item_header-highlight'>
                                Giao siêu tốc 2h
                            </div>
                        </div>
                        <div className='shipping-info_item-fee'>
                            <div className='shipping-info_item-fee_name'>
                                <span style={{ color: "#27272A" }}>
                                    Trước 10h ngày mai:
                                    <span style={{ color: "#00AB56", marginLeft: "4px" }}>Miễn phí</span>
                                    <span style={{ color: "#808089", marginLeft: "4px" }}>

                                        <del>
                                            25000
                                            <sup>
                                                <small>đ</small>
                                            </sup>
                                        </del>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="shipping-info_item d-flex">
                        <div className="shipping-info_item_header">
                            <div className="shipping-info_item_header-logo">
                                <img src="https://salt.tikicdn.com/ts/upload/6b/59/d9/783a8f53f8c251dbe5f644df40c21c15.png" alt="" width="32" height="16" />
                            </div>
                            <div className='shipping-info_item_header-highlight'>
                                Giao đúng chiều nay
                            </div>
                        </div>
                        <div className='shipping-info_item-fee'>
                            <div className='shipping-info_item-fee_name'>
                                <span style={{ color: "#27272A" }}>
                                    13h - 18h, 26/09:
                                    <span style={{ color: "#00AB56", marginLeft: "4px" }}>Miễn phí</span>
                                    <span style={{ color: "#808089", marginLeft: "4px" }}>
                                        <del>
                                            14000
                                            <sup>
                                                <small>đ</small>
                                            </sup>
                                        </del>
                                    </span>
                                </span>
                                <div style={{ color: "#27272A" }}>Nếu đặt trong 11 phút nữa</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}