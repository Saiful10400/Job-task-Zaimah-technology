import { ChevronDown } from "lucide-react";

const TopAdd = () => {
  return (
    <div className="bg-[#4D2952] w-full text-white flex items-center justify-between font-extralight text-sm xl:px-9 py-3">
      <div className="flex items-center gap-7">
        <button className="flex gap-1 items-center">
          USD <ChevronDown width={18} height={18} />{" "}
        </button>
        <button className="flex gap-1 items-center">
          English <ChevronDown width={18} height={18} />{" "}
        </button>
      </div>

      <h1>🔥 Only 11 days left until VALENTINE'S DAY! 🔥</h1>
      <div className="flex items-center gap-7">
        <a href="#">Help & Information</a>
        <a href="#">Connect with us</a>
      </div>
    </div>
  );
};

export default TopAdd;
