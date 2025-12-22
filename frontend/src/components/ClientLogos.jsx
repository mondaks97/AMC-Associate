import BOA from "../assets/BOA.jpg"
import bir from "../assets/bir.png"
import slack from "../assets/slack.png"
import meundies from "../assets/meundies.png"
import woocommerce from "../assets/woocommerce.png"

const ClientLogos = () => {
  const logos = [
    BOA,
    bir,
    slack,
    meundies,
    woocommerce
];

  return (
  <div className="min-h-[50px] max-w-6xl rounded-lg mt-10 w-full overflow-hidden container mx-auto py-20 gap-8 flex sm:flex-row flex-col sm:items-center items-start ">
    <div className="w-[300px] shrink-0 px-5 text-[#000099] border-l-4 border-[#000099] bg-white py-2 z-10 sm:text-base text-xl font-bold text-left ">
      FIRM ACCREDITATION
    </div>

    <div className="flex whitespace-nowrap animate-marquee">
  {logos.map((logo, index) => (
    <img
      key={index}
      src={logo}
      alt="logo"
      className="mx-12 h-9 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all flex-none"
    />
  ))}

  {logos.map((logo, index) => (
    <img
      key={`dup-${index}`}
      src={logo}
      alt="logo"
      className="mx-12 h-9 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all flex-none"
    />
  ))}
</div>
  </div>
  );
};

export default ClientLogos;

