import { useState, useEffect, useRef } from 'react'
import { HomeTabContent } from './TabContent/homeTabContent'

export const ContainerSuggest = () => {

    const [data, setData] = useState([]);
    const tabRef = useRef([])

    const get_data = async () => {
        fetch("http://localhost:8000/api/v1/containerSuggest")
            .then((res) => res.json())
            .then((resp) => setData(resp));
    };

    useEffect(() => {
        get_data();
    }, []);

    return (
        <div className="containerSuggest">
            <div className="suggestWraper">
                <h2 className="suggestToday">
                    Gợi ý hôm nay
                </h2>
                <div className="widgetHeaderTabs">
                    {data.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className={`tab ${index === 0 ? 'active' : 'false'}`} data-bs-toggle="collapse"
                                    href={item.href} data-bs-target={item.href} role="button" aria-expanded="false"
                                    aria-controls={item.href}
                                    ref={el => tabRef.current[index] = el}
                                >
                                    <img src={item.img}
                                        alt="" height="40" width="40"
                                    />
                                    <div className="tab-text">{item.desc}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <HomeTabContent tabRef={tabRef} />
            </div>
        </div>
    )
}
