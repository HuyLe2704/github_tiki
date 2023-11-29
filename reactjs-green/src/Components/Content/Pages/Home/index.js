// Phần thân trang sẽ import vào đây

import './BannerCarousel.css'
import './Home.css'
import BannerCarousel from './BannerCarousel'
import Category from './Category'
import ItemCarousel from './ItemCarousel'
import { ContainerSuggest } from "./WidgetTabContent/ContainerSuggest"


export function Home() {
    return (
        <div style={{ backgroundColor: '#f5f5fa', height: '100%' }}>
            <div className="container">
                <div className="row">
                    <div className="category_container col-lg-3 col-xl-2 mt-4">
                        <Category />
                    </div>
                    <div className="col-lg-9 mainGrid mt-4">
                        <BannerCarousel />
                        <ItemCarousel />
                        <ContainerSuggest />
                    </div>
                </div>
            </div>
        </div>
    )
}
