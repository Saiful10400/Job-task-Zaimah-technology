import certificateTemplet from "../assets/GiftCertificate/giftCertificate.png";
import logo from "../assets/GiftCertificate/logo.png";

const GiftCertificateBanner = () => {
  return (
    <div className="h-[223px]  flex flex-col lg:flex-row mb-[21px]">
      <div className="lg:w-[45%] flex flex-col items-center justify-center  bg-[#fcf1f5]">
        <div className="flex flex-col gap-[27px]">
          <h1 className="font-bold text-[34px]">GIFT CERTIFICATES</h1>

          <button className="px-[33px] py-3 border-gray-400 border-2 font-bold text-sm w-max ">
            GET A GIFT CERTIFICATE
          </button>
        </div>
      </div>
      <div
        className="lg:w-[55%] relative "
        style={{ background: `url(${certificateTemplet})` }}
      >
        <figure className="flex gap-2 items-start absolute top-[11px] left-[114px]">
          <img src={logo} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default GiftCertificateBanner;
