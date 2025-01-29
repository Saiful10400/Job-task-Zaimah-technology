import { recommendedProducts } from "../data";
import { Tproduct } from "../types";
import Button from "../ui/Button";
import ProductCart from "../ui/ProductCart";
import Tittle from "../ui/Tittle";

const RecommandedProduct = () => {
  return (
    <div className="text-center mb-[57px]">
      <Tittle text="RECOMMENDED FOR YOU" />
      <section className="grid lg:grid-cols-4 gap-[58px] grid-cols-1 mt-[47px] mb-[28px]">
        {recommendedProducts.map((item: Tproduct) => (
          <ProductCart key={item.name} data={item} />
        ))}
      </section>
      <Button text="SHOP MORE" />
    </div>
  );
};

export default RecommandedProduct;
