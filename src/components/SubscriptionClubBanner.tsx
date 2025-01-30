  

const SubscriptionClubBanner = () => {
    return (
        <div className="h-[290px]  flex flex-col lg:flex-row mb-[21px]">
        <div className="lg:w-[50%]  bg-[#fcf1f5]">
          <div className="flex flex-col ml-[51px] my-[41px] justify-start ">
            <h1 className="text-base font-light">JOIN OUR</h1>
            <h1 className="font-bold text-[34px]">SUBSCRIPTION <br/>
            CLUB</h1>

            <h1 className="font-light italic mb-[22px]">as low as $9.95/month</h1>
  
            <button className="px-[33px] py-3   bg-[#BE5B75] text-[#fff] font-bold text-sm w-max ">
            LEARN MORE
            </button>
          </div>

          <img src="" alt="" />

        </div>
        <div
          className="lg:w-[50%] relative "
        //   style={{ background: `url(${certificateTemplet})` }}
        >
          <figure className="flex gap-2 items-start absolute top-[11px] left-[114px]">
            {/* <img src={logo} alt="" /> */}
          </figure>
        </div>
      </div>
    );
};

export default SubscriptionClubBanner;