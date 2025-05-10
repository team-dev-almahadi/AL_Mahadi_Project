import React from 'react'
import image1 from "../../assets/assets/hero/women_new.png"
import image2 from "../../assets/assets/hero/shopping_new.png"
import image3 from "../../assets/assets/hero/sale_new.png"
import Slider from 'react-slick'

const ImageList = [
    {
        id: 1,
        image: image2,
        title: "🔥 Jusqu'à 50% sur les vêtements pour hommes",
        description: "Explorez notre sélection mode masculine : chemises, jeans, vestes et bien plus encore à prix réduits. Offres limitées disponibles dès maintenant !"
    },
    {
        id: 2,
        image: image1,
        title: "👜 Jusqu'à 30% d'Offres spéciales sur les sacs & accessoires",
        description: "Trouvez les dernières tendances en sacs à main, sacs à dos et accessoires stylés à prix cassés !"
    },
    {
        id: 3,
        image: image3,
        title: "🛍️ Jusqu'à 70% d'Offres exclusives sur les Marques Populaires",
        description: "Découvrez les meilleures ventes des grandes marques avec des réductions incroyables. Stock limité, ne tardez pas !"
    },
]

const Hero = () => {

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
      };

  return (
    <div className="relative overflow-hidden 
    min-h-[550px] sm:min-h-[650px] 
    bg-gray-100 flex justify-center items-center 
    dark:bg-gray-950 dark:text-white duration-200 ">
        {/********************* Background Pattern *********************/}
        <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]">
            
        </div>
        {/********************* Hero Section *********************/}
        <div className="container pb-8 sm:pb-0">
            <Slider {...settings} >
                    {
                        ImageList.map((data) => (
                            <div>
                                <div className="grid grid-cols-1 sm:grid-cols-2">
                                    {/********************* Text Content Section *********************/}
                                        <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                                            <h1
                                                data-aos="zoom-out"
                                                data-aos-duration="500"
                                                data-aos-once="true" 
                                                className="text-5xl sm:text-6xl lg:text-7xl font-bold">{data.title}</h1>
                                                <p
                                                    data-aos="fade-up"
                                                    data-aos-duration="500"
                                                    data-aos-delay="100"
                                                    className="text-sm">
                                                        {data.description}
                                                </p>
                                            <div
                                                data-aos="fade-up"
                                                data-aos-duration="500"
                                                data-aos-delay="300"
                                            >
                                                <button
                                                    ata-aos="fade-up" 
                                                    data-duration="500"
                                                    data-aos-delay="300"
                                                    className="bg-gradient-to-r from-primary 
                                                    to-secondary hover:scale-105 duration-200
                                                    text-white py-2 px-4 rounded-full
                                                    "
                                                >
                                                    Commander Maintenant
                                                </button>
                                            </div>
                                        </div>
                                    {/********************* Image Content Section *********************/}
                                    <div className="order-1 sm:order-2">
                                        <div 
                                            data-aos="zoom-in"
                                            data-aos-once="true"
                                            className='relative z-10'
                                        >
                                            <img src={data.image} alt="" className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 lg:scale-120 object-contain mx-auto' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
            </Slider>
            
        </div>
    </div>
  )
}

export default Hero