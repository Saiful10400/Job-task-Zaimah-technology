import perfume from "../assets/products/perfume.png";
import whiteTea from "../assets/products/whiteTea.png";
import pleasures from "../assets/products/pleasures.png";

const AdsBanner = () => {
  return (
    <div className="bg-[#FCD0CC] overflow-hidden h-[250px] mt-5 relative pl-[96px]">
      <section className="absolute top-[56px] left-[96px]">
        <h1 className="font-bold text-[48px]">UP TO 80% OFF.</h1>
        <button className="bg-[#4D2952] text-white font-bold text-sm px-11 py-3 mt-[18px]">
          SEARCH FOR BRAND
        </button>
      </section>

      <h1 className="text-[288px] z-20 text-[#ffffff8f] libraFont absolute top-[30px] leading-none right-[58px]">
        NEW
      </h1>

<img className="absolute z-10 top-[81px]  right-[272px] scale-105" src={pleasures} alt="ads product image" />
<img className="absolute z-10 top-[-80px]  right-[200px]" src={whiteTea} alt="ads product image" />
<img className="absolute z-10 top-[-90px]  right-[-150px]" src={perfume} alt="ads product image" />


<div className="bg-black flex flex-col justify-center items-center w-[140px] h-[140px] rounded-full absolute z-20 top-[47px] right-[81px] ">
    <h1 className="text-white">Trusted</h1>
    <h1 className="text-[#ffc5bf]">SINCE 1997</h1>
</div>
    </div>
  );
};

export default AdsBanner;
