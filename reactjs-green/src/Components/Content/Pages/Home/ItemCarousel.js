import { HomeCollection } from "./allCarouselTiki/HomeCollection";
import { HomeCollectionDeals } from "./allCarouselTiki/HomeCollectionDeals";
import { HomeCollectionBrand } from "./allCarouselTiki/HomeCollectionBrand"
import { HomeCollectionBrandReal } from "./allCarouselTiki/HomeCollectionBrandReal"
import { HomeCollectionBestSellers } from "./allCarouselTiki/HomeCollectionBestSellers"

function ItemCarousel() {

  return (
    <>
      <HomeCollection />
      <HomeCollectionDeals />
      <HomeCollectionBrand />
      <HomeCollectionBrandReal />
      <HomeCollectionBestSellers />
    </>
  );
}

export default ItemCarousel;
