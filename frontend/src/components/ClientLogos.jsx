import amazon from "../assets/amazon.png"
import sitepoint from "../assets/sitepoint.png"
import slack from "../assets/slack.png"
import meundies from "../assets/meundies.png"
import woocommerce from "../assets/woocommerce.png"

const ClientLogos = () => {
  const logos = [
    amazon,
    sitepoint,
    slack,
    meundies,
    woocommerce
];

  return (
  <div className="min-h-[50px] max-w-6xl rounded-lg mt-10 w-full overflow-hidden container mx-auto py-20 gap-8 flex sm:flex-row flex-col sm:items-center items-start ">
    <div className="w-[300px] shrink-0 px-5 text-gray-600 border-l-4 border-blue-500 bg-white py-2 z-10 sm:text-base text-xl font-semibold text-left ">
      Firm Accreditation
      <br />
      <p>Lorem ipsum dolor sit amet.</p>
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

