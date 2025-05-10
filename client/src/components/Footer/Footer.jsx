import React from 'react'
import footerLogo from "../../assets/assets/logo_app_mahadi.png"
import Banner from "../../assets/assets/website/footer-pattern.jpg"
import { FaMobileAlt } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaLocationArrow, FaTiktok, FaWhatsapp } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
  
  const FooterLinks = [
    {
      title: "🏠 Accueil",
      link: "/#",
    },
    {
      title: "📂 Catégories",
      link: "/#catégories",
    },
    {
      title: "🔥Promotions / Offres",
      link: "/#promotions_offres",
    },
    {
      title: "🆕 Nouveautés",
      link: "/#nouveautés",
    },
    {
      title: "❓Aide",
      link: "/#aide",
    },
    {
      title: "🛍️ Marques Populaires",
      link: "/#marques_populaires",
    },
    {
      title: "⭐ Tendances / Best Sellers",
      link: "/#tendances_best_sellers",
    },
  ];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          {/***************************** company details *****************************/}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="" className="max-w-[50px]" />
              Al Mahadi
            </h1>
            <p>
                Trouvez tout ce dont vous avez besoin chez Al Mahadi : nouveautés, 
                promotions et bien plus encore.
            </p>
          </div>

          {/***************************** Footer Links *****************************/}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                    Liens Utiles
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                    Liens
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/***************************** social links *****************************/}

            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaTiktok className="text-3xl" />
                </a>
                <a href="#">
                  <FaWhatsapp className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Al Mahadi Company</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>+xxx xx xxx xxx</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <MdEmail />
                  <p>almahadi-company@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer