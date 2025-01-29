import { productAdsCards } from "../data";
import { TproductCollectionCard } from "../types";
import Button from "../ui/Button";
import Tittle from "../ui/Tittle";

const ShopCollection = () => {
  return (
    <>
      <div className="text-center mb-[50px]">
        <Tittle text="Shop Our COLLECTION"/>
        <p className="text-[15px] font-light mt-3 mb-8">
          Our delicious, limited-edition collection
        </p>
        <Button text="SHOP ALL"/>
      </div>

      <div className="grid lg:grid-cols-3 gap-[31px] grid-cols-1 mb-[57px]  ">
        {productAdsCards.map((item: TproductCollectionCard) => (
          <div
            key={item.name}
            className="min-h-[316px]  bg-cover flex flex-col items-center justify-center gap-[22px] text-white"
            style={{
              background: `url(${item.image})`,
              backgroundPosition: "right",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h1 className=" text-[26px] font-medium tracking-widest">
              {item.name.toUpperCase()}
            </h1>
            <a
              href="#"
              className="underline decoration-white underline-offset-[4.5px]"
            >
              Shop Now
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShopCollection;
