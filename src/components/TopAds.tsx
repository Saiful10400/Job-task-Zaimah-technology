import { ChevronDown } from "lucide-react";

const TopAdd = () => {
  return (
    <div className="bg-[#4D2952] w-full text-white flex lg:flex-row flex-col gap-4 items-center justify-between font-extralight text-sm px-[27px] py-3">
      <div className="flex items-center gap-7 min-w-[20%]">
        <button className="flex gap-1 items-center">
          USD <ChevronDown width={18} height={18} />{" "}
        </button>
        <button className="flex gap-1 items-center">
          English <ChevronDown width={18} height={18} />{" "}
        </button>
      </div>

      <h1>🔥 Only 11 days left until VALENTINE'S DAY! 🔥</h1>

      <div className="flex items-center justify-end gap-7 min-w-[20%]">
        <a href="#">Help & Information</a>
        <a href="#">Connect with us</a>
      </div>
    </div>
  );
};

export default TopAdd;
