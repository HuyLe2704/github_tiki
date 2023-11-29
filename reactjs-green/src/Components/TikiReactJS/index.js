// Import tất cả các Header, FreeShip, Content, Footer vào trong này

import FreeShip from "../FreeShip"
import HeaderTiki from "../Header"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { publicRoute } from "../../routes"

function TikiReactJS() {
    return (
        <>
            <BrowserRouter>
                {/* { Phần header} */}
                <HeaderTiki />
                {/* { Phần FreeShip } */}
                <FreeShip />
                <Routes>
                    {/* { Phần thân trang } */}
                    {publicRoute.map((value, index) => {
                        const Page = value.component
                        return (
                            <Route key={index} path={value.path} element={<Page />} />
                        )
                    })}
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default TikiReactJS