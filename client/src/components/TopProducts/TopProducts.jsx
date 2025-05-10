import React from 'react'
import Img1 from "../../assets/assets/men/new_addidas_homme.png"
import Img2 from "../../assets/assets/women/abaya.png"
import Img3 from "../../assets/assets/women/sneaker_femmes.png"
import Img4 from "../../assets/assets/beauty/brossoir_femme.png"
import Img5 from "../../assets/assets/beauty/maquillage_femme.png"
import Img6 from "../../assets/assets/electronics/television_samsung_43.png"
import { FaStar } from 'react-icons/fa6'

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Adidas Chaussure Courtblock - Gris - JP5343",
        description: "Design épuré, confort et semelle en caoutchouc pour un confort quotidien."
    },
    {
        id: 2,
        img: Img2,
        title: "Sans Demi Mesure abaya oversize Chic Gold robe longue femme big size",
        description: "Coupe ample et manches larges, polyester, lavage doux."
    },
    {
        id: 3,
        img: Img3,
        title: "Kalenji chaussures de running, espadrille sport absorption des chocs",
        description: "Amorti performant pour protéger les articulations, taille au-dessus pour plus de confort."
    },
    {
        id: 4,
        img: Img4,
        title: "Calor Sèche cheveux Elite Handy Dry CV1801F0",
        description: "Design ergonomique, commandes simples et efficacité."
    },
    {
        id: 5,
        img: Img5,
        title: "Rude Cosmetics Cocktail Party 12 Eyeshadow Palette - Dirty Mother",
        description: "12 teintes intenses, tenue longue durée sans bavure."
    },
    {
        id: 6,
        img: Img6,
        title: "Samsung 43 Smart TV Full HD Tizen - Récepteur Intégré - Smart Hub ET Télécommande Unique - 43T5300",
        description: "Full HD avec PurColor, accès apps via Smart Hub, AirPlay 2, TNT et HDMI."
    }    
]

const TopProducts = () => {
  return (
    <div>
        <div className="container">
                {/*********************** Header Section ***********************/}
                <div className='text-center mb-24'> 
                    <p data-aos="fade-up" className="text-sm text-primary">Articles Les Plus Appréciés</p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold">Meilleurs Articles</h1>
                    <p data-aos="fade-up" className="text-xs text-gray-400">
                        Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Sit 
                        asperiores modi obcaecati Sit 
                        asperiores modi 
                    </p>
                </div>
                {/*********************** Body Section ***********************/}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2
                    md:grid-cols-3 gap-20 md:gap-5 place-items-center"
                >
                    {
                        ProductsData.map((data) => (
                            <div
                                data-aos="zoom-in"
                                className="rounded-2xl bg-white dark:bg-gray-800
                                  hover:bg-black/80 dark:hover:bg-primary
                                  hover:text-white relative shadow-xl duration-300 group 
                                  max-w-[300px]
                                "
                            >
                                {/*********************** Image Section ***********************/}
                                <div className="h-[140px]">
                                    <img src={data.img} alt="" 
                                        className="max-w-[140px] block mx-auto
                                        transform -translate-y-20 
                                        group-hover:scale-105 duration-300 drop-shadow-md"
                                    />
                                </div>
                                {/*********************** Details Section ***********************/}
                                <div className="p4 text-center">
                                {/*********************** Start Rating Section ***********************/}
                                    <div className="w-full flex items-center justify-center gap-1">
                                        <FaStar className='text-yellow-500' />
                                        <FaStar className='text-yellow-500' />
                                        <FaStar className='text-yellow-500' />
                                        <FaStar className='text-yellow-500' />
                                    </div>
                                    <h1 className="text-xl font-bold">{data.title}</h1>
                                    <p className="text-gray-100 
                                    group-hover:text-white duration-300 text-sm line-clamp-2">
                                        {data.description}
                                    </p>
                                    <button
                                        className="bg-primary hover:scale-105
                                         duration-300 text-white py-1 px-4
                                         rounded-full mt-4 mb-24 group-hover:bg-white
                                         group-hover:text-primary"
                                        //  onClick={handleOrderPopUp}
                                    >
                                        Acheter maintenant
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
        </div>
    </div>
  )
}

export default TopProducts