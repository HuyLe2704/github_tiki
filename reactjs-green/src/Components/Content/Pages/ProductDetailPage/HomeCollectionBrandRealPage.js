import { useEffect, useRef, useState } from 'react'
import './index.scss'
import ComponentHome from './ComponentHome'

export const HomeCollectionBrandRealPage = () => {

    const [data, setData] = useState([]);

    const get_data = async () => {
        fetch("http://localhost:8000/api/v1/homeCollectionBrandReal")
            .then((res) => res.json())
            .then((resp) => setData(resp));
    };

    useEffect(() => {
        get_data();
    }, []);

    const priceItem = useRef()
    const priceItemText = useRef(null)

    useEffect(() => {
        if (data.length > 0) {
            priceItemText.current = priceItem.current.textContent
        }
    }, [data])

    return (
        <ComponentHome priceItem={priceItem} priceItemText={priceItemText} data={data} setData={setData} />
    )
}

