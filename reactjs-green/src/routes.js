import { Home, Astra, Account } from './Components/Content/Pages'
import { HomeCollectionPage, HomeCollectionDealsPage, HomeCollectionBrandPage, HomeCollectionBrandRealPage, HomeCollectionBestSellersPage, HomeTabContentPage } from './Components/Content/Pages/ProductDetailPage'

export const publicRoute = [
    { path: '/', component: Home },
    { path: '/astra', component: Astra },
    { path: '/account', component: Account },
    { path: '/product/homeCollection/:id', component: HomeCollectionPage },
    { path: '/product/homeCollectionDeals/:id', component: HomeCollectionDealsPage },
    { path: '/product/homeCollectionBrand/:id', component: HomeCollectionBrandPage },
    { path: '/product/homeCollectionBrandReal/:id', component: HomeCollectionBrandRealPage },
    { path: '/product/homeCollectionBestSellers/:id', component: HomeCollectionBestSellersPage },
    { path: '/product/homeTabContent/:id', component: HomeTabContentPage },
]