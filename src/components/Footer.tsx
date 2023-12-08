import React from "react";
import FooterImg from '../assets/svg/footer/positivess.svg'

const Footer = () => {

    const FooterImgCss = {
        background: `url(${FooterImg})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat", // Adjust as needed
        // backgroundPosition: "top", // Adjust as needed
        // Set a fixed or dynamic height as needed
      };

  return (
    <div className="bg-[#EEEEEE] flex flex-col gap-[3em] py-[3em] items-center mt-[3em]">
      <div className="flex justify-center gap-[10vw] flex-wrap">
        <div className="flex flex-col gap-[1em]" >
          <p className="font-bold text-[1.3em]">Cannabises Strains</p>
          <p className="text-[#969696] text-[1.1em]" >Hybrid</p>
          <p className="text-[#969696] text-[1.1em]" >Sativa</p>
          <p className="text-[#969696] text-[1.1em]" >Indica</p>
        </div>

        <div className="flex flex-col gap-[1em]" >
          <p className="font-bold text-[1.3em]">Mushroom Spices</p>
          <p className="text-[#969696] text-[1.1em]" >Saprotrophic</p>
          <p className="text-[#969696] text-[1.1em]" >Dried Magic Mushrooms</p>
          <p className="text-[#969696] text-[1.1em]" >Edibles</p>
          <p className="text-[#969696] text-[1.1em]" >Teas</p>
        </div>

        <div className="flex flex-col gap-[1em]" >
          <p className="font-bold text-[1.3em]">Interested Links</p>
          <p className="text-[#969696] text-[1.1em]" >Blog</p>
          <p className="text-[#969696] text-[1.1em]" >FAQ</p>
          <p className="text-[#969696] text-[1.1em]" >Coupons</p>
          <p className="text-[#969696] text-[1.1em]" >Contact</p>
        </div>

        <div className="flex flex-col gap-[1em]" >
          <p className="font-bold text-[1.3em]">Follow us</p>
          <div className="flex gap-[1em]">
          <a href="#">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="30" height="30" rx="15" fill="#F47820" />
              <path
                d="M17.06 12.91H18.06C18.189 12.91 18.3127 12.8581 18.403 12.7659C18.4933 12.6737 18.5427 12.549 18.54 12.42V10.82C18.5409 10.5698 18.3494 10.3609 18.1 10.34C18.1 10.34 17.39 10.28 16.52 10.28C14.38 10.28 13.2 11.55 13.2 13.85V15.62H11.23C11.1019 15.6172 10.9782 15.6669 10.8875 15.7576C10.7969 15.8482 10.7472 15.9719 10.75 16.1V17.56C10.7472 17.6881 10.7969 17.8118 10.8875 17.9024C10.9782 17.9931 11.1019 18.0428 11.23 18.04H13.17V23.7H16.09V18.04H17.85C18.0917 18.0375 18.2955 17.8592 18.33 17.62L18.51 16.16C18.5283 16.0218 18.4844 15.8826 18.39 15.78C18.2984 15.6776 18.1674 15.6194 18.03 15.62H16.09V13.91C16.0897 13.3692 16.5195 12.9262 17.06 12.91Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 14.91C5 9.43686 9.43686 5 14.91 5C17.5383 5 20.0589 6.04409 21.9174 7.90257C23.7759 9.76106 24.82 12.2817 24.82 14.91C24.82 20.3831 20.3831 24.82 14.91 24.82C9.43686 24.82 5 20.3831 5 14.91ZM23.32 14.91C23.32 10.2653 19.5547 6.5 14.91 6.5C10.2698 6.511 6.51099 10.2698 6.5 14.91C6.5 19.5547 10.2653 23.32 14.91 23.32C19.5547 23.32 23.32 19.5547 23.32 14.91Z"
                fill="white"
              />
            </svg>
          </a>

          <a href="#">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="30" height="30" rx="15" fill="#F47820"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 5H18.7C22.0137 5 24.7 7.68629 24.7 11V18.7C24.7 22.0137 22.0137 24.7 18.7 24.7H11C7.68629 24.7 5 22.0137 5 18.7V11C5 7.68629 7.68629 5 11 5ZM23.2 11C23.1945 8.517 21.183 6.5055 18.7 6.5H11C8.517 6.5055 6.5055 8.517 6.5 11V18.7C6.5055 21.183 8.517 23.1945 11 23.2H18.7C21.183 23.1945 23.1945 21.183 23.2 18.7V11Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.55 14.85C10.5555 12.4775 12.4775 10.5555 14.85 10.55C17.2225 10.5555 19.1445 12.4775 19.15 14.85C19.15 17.2248 17.2248 19.15 14.85 19.15C12.4752 19.15 10.55 17.2248 10.55 14.85ZM17.65 14.85C17.65 13.3036 16.3964 12.05 14.85 12.05C13.3059 12.0555 12.0555 13.3059 12.05 14.85C12.05 16.3964 13.3036 17.65 14.85 17.65C16.3964 17.65 17.65 16.3964 17.65 14.85Z" fill="white"/>
<path d="M18.51 9.505C18.51 8.90577 18.9958 8.42 19.595 8.42C20.1942 8.42 20.68 8.90577 20.68 9.505C20.68 10.1042 20.1942 10.59 19.595 10.59C18.9958 10.59 18.51 10.1042 18.51 9.505Z" fill="white"/>
</svg>

          </a>
          </div>

        </div>
      </div>

      <div className="flex justify-center pt-[2em] border-t-[1px] gap-[11vw] border-t-[#aeaeae] w-[86%]">
        <p className="ms-[-2vw]">Copyright @2023 Three Amigos</p>

        <div className="flex gap-[2em]">
          <p className="text-[#969696]">Terms & Conditions</p>
          <hr className="border border-[#6e6e6e] h-[90%]" />
          <p className="text-[#969696]">Privacy Policy</p>
          <hr className="border border-[#6e6e6e] h-[90%]" />
          <p className="text-[#969696]">Sales and refunds</p>
        </div>

        <div className=" me-[-5vw] w-[180px] h-[30px]" style={FooterImgCss}>
        </div>
      </div>
    </div>
  );
};

export default Footer;
