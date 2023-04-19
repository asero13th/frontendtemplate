import nft1 from "assets/img/nfts/NftBanner1.png";

const Banner1 = () => {
  return (
    <div
      className="flex w-full flex-col rounded-[20px] bg-cover px-[30px] py-[30px] md:px-[64px] md:py-[56px] mb-5"
      style={{ backgroundColor: `#d9f1ff` }}
    >
      <div className="w-full">
        <h4 className="mb-[14px] max-w-full text-xl font-bold text-white md:w-[64%] md:text-3xl md:leading-[42px] lg:w-[46%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[52%]">
          Job title
        </h4>
        <div className="mb-5" style={{display:"flex", justifyContent: "space-around"}}>
          <div><p>Tags</p></div>
          <div className="badge badge-primary">node</div>
          <div className="badge badge-primary">backend</div>
          <div className="badge badge-primary">express</div>
        </div>

        <p className="mb-[40px] max-w-full text-base font-medium text-[#333] md:w-[64%] lg:w-[40%] xl:w-[72%] 2xl:w-[60%] 3xl:w-[45%]">
          Job description Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat saepe, inventore eveniet
           ab quia obcaecati quae voluptatem laboriosam enim excepturi veniam! Mollitia voluptatibus at quibusdam 
           voluptatum tempora provident corporis. Culpa.
        </p>

        <div className="mt-[36px] flex items-center justify-between gap-4 sm:justify-start 2xl:gap-10">
          <button className="text-black linear rounded-xl bg-white px-4 py-2 text-center text-base font-medium transition duration-200 hover:!bg-white/80 active:!bg-white/70">
           Go to  Applicants
          </button>
          <button className="text-base font-medium text-sucess   hover:text-lightPrimary 2xl:ml-2">
            x120
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
