import { useEffect, useState } from "react";
import { useContext } from 'react';
import Context from "../../store/Context";

const InputPop = (props) => {
    const { id, placeholder, type, className, data } = props
    const [value, setValue] = useState(data);

    const { handleUpdateCart } = useContext(Context);

    const handleOnChange = (e) => {
        setValue(e.target.value);
    }

    useEffect(() => {
        handleUpdateCart(id, value)
        console.log(id)
    }, [value])

    useEffect(() => {
        setValue(data)
    }, [data])

    return (
        <input id={id} className={className} type={type} placeholder={placeholder} value={value} onChange={(e) => handleOnChange(e)} />
    )
}

export default InputPop;
