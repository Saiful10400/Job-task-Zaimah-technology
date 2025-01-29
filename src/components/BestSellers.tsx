import { bestSellsProducts } from "../data";
import { Tproduct } from "../types";
import ProductCart from "../ui/ProductCart";
import Tittle from "../ui/Tittle";

 

const BestSellers = () => {
    return (
        <div className="text-center mb-[57px]">
        <Tittle text="BEST SELLERS" />
        <section className="grid lg:grid-cols-4 gap-[58px] grid-cols-1 mt-[47px] mb-[28px]">
          {bestSellsProducts.map((item: Tproduct) => (
            <ProductCart key={item.name} data={item} />
          ))}
        </section>
        
      </div>
    );
};

export default BestSellers;