import { useState } from "react"
import { headerHomeContent } from "../../Data"
import { Link } from 'react-router-dom'

function HeaderHome(props) {
    const { className } = props
    const [activeTab, setActiveTab] = useState('Trang chủ')

    const handleActiveTab = (content) => {
        setActiveTab(content);
    }

    return (
        <div>
            <div className="d-flex">
                {headerHomeContent.map((item) => (
                    <Link
                        to={item.path}
                        style={{ cursor: "pointer", textDecoration: 'none', color: '#000', fontSize: '14px' }}
                        key={item.id}
                        path={item.path}
                        content={item.name}
                        onClick={() => handleActiveTab(item.content)}
                    >
                        <img src={item.img} className={className} width="24" height="24" alt="" />
                        <span
                            className={`ms-1 me-4 ${activeTab === item.content ? 'active' : ''}`}
                        >
                            {item.content}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default HeaderHome