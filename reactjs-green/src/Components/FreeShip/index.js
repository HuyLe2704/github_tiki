function FreeShip() {
    return (
        <>
            <div>
                <div style={
                    {
                        backgroundColor: '#ffe880',
                        height: '40px',
                    }
                }>
                    <div style={
                        {
                            display: 'flex',
                            justifyContent: 'center',
                            padding: '8px 16px',
                            borderColor: 'rgb(235, 235, 240)',
                            zIndex: 1
                        }
                    }>
                        <a href="https://tiki.vn/khuyen-mai/freeship"
                            style={{textDecoration: 'none', color: '#27272a'}}
                        >
                            <img src="https://salt.tikicdn.com/ts/upload/5e/ec/fb/150f3c633781ed1da9921e45db90c62d.png"
                             alt="" width="81" height="12" 
                            />
                            <span style={
                                    {
                                        fontSize:'14px', 
                                        fontWeight: '600', 
                                        marginLeft: '6px'
                                    }
                                }
                            >mỗi ngày, tự động áp dụng không cần săn 
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FreeShip