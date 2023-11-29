import { categoryItem, categoryFeatured } from "../../../../Data"

function Category() {

    return (
        <>
            <div className="category_contaier-content">
                <div className="styled_title">Danh mục</div>
                {categoryItem.map((item) => {
                    return (
                        <ul key={item.id} style={{listStyle: 'none', marginBottom: "0"}}>
                            <a href="/#" title={item.title} style={{textDecoration: 'none', color: "#000"}}
                                className="style_item"
                            >
                                <li className="d-flex">
                                    <div>
                                        <img srcSet={item.image} alt=""
                                            width="32" height="32" 
                                            style={{objectFit: 'contain'}}
                                        />
                                    </div>
                                    <div className="style_content" title={item.title}>{item.title}</div>
                                </li>
                            </a>
                        </ul>
                    )
                })}
            </div>
            <div className="category_contaier-content">
                <div className="styled_title">Nổi bật</div>
                {categoryFeatured.map((item) => {
                    return (
                        <ul key={item.id} style={{listStyle: 'none', marginBottom: "0"}}>
                            <a href="/#" title="item.title" style={{textDecoration: 'none', color: "#000"}}
                                className="style_item"
                            >
                                <li className="d-flex">
                                    <div>
                                        <img srcSet={item.img} alt=""
                                            width="32" height="32" 
                                            style={{objectFit: 'contain'}}
                                        />
                                    </div>
                                    <div className="style_content" title={item.title}>{item.title}</div>
                                </li>
                            </a>
                        </ul>
                    )
                })}
            </div>
            <div className="category_contaier-content">
                <div>
                    <ul style={{listStyle: 'none', marginBottom: "0"}}>
                        <a href="/#" title="Bán hàng cùng Tiki" style={{textDecoration: "none",  color: "#000"}}
                            className="style_item"
                        >
                            <div className="d-flex">
                                <div>
                                    <img srcSet="https://salt.tikicdn.com/cache/100x100/ts/upload/08/2f/14/fd9d34a8f9c4a76902649d04ccd9bbc5.png.webp" alt="" 
                                        width="32" height="32"
                                        style={{objectFit: 'contain'}}
                                    />
                                </div>
                                <div className="style_content" title="Bán hàng cùng Tiki">Bán hàng cùng Tiki</div>
                            </div>
                        </a>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Category