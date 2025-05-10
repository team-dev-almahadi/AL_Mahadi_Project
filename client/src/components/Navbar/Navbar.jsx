import React from 'react'
import LogoImg from "../../assets/assets/logo_app_mahadi.png"
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from './DarkMode';

const Menu = [
  {
    id:1,
    name: "🏠 Accueil",
    link: "/#"
  },
  {
    id:2,
    name: "📂 Catégories ",
    link: "/#"
  },
  {
    id:3,
    name: "🔥Promotions / Offres",
    link: "/#"
  },
  {
    id:4,
    name: "🆕 Nouveautés",
    link: "/#"
  },
  {
    id:5,
    name: "❓ Aide ",
    link: "/#"
  },
  {
    id:6,
    name: "🛍️ Marques Populaires",
    link: "/#"
  },

]

const DropdownLinks = [
  {
    id: 1,
    name: "En Vogue",
    link: "/#"
  },
  {
    id: 2,
    name: "Les Plus Vendus",
    link: "/#"
  },
  {
    id: 3,
    name: "Les Plus Appréciés",
    link: "/#"
  }
]
const firstHalf = Menu.slice(0, Math.ceil(Menu.length / 2));
const secondHalf = Menu.slice(Math.ceil(Menu.length / 2));

const Navbar = () => {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
      {/********************** upper Navbar  ********************/}
        <div className='bg-primary/40 py-2 sm:py-0'>
          <div className='container flex justify-between items-center '>
            <div>
              <a href="#" className='font-bold text-2xl sm:text-3xl flex gap-2'>
                <img src={LogoImg} alt="Logo" className='w-10' />
                Al Mahadi
              </a>
            </div>
            {/**************** search bar *************/}
            
            <div className='flex justify-between items-center gap-4'> 
              <div className="relative group hidden sm:block">
                <input type="text"
                placeholder="Cherchez un produit, une marque ou une catégorie"
                className="w-[200px] sm:w-[200px] 
                group-hover:w-[300px] 
                transition-all duration-300 rounded-full 
                border border-gray-300 px-2 py-1 
                focus:outline-none focus:border-1 
                focus:border-primary dark:border-gray-500
                dark:bg-gray-800 "
                />
                <IoMdSearch
                className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3'
                />
              </div>
            {/***************** order-button *****************/}
            <button
             onClick={()=> alert("La commande n’est pas encore disponible.")}
             className='bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'
            >
              <span 
                className="group-hover:block hidden transition-all duration-200">
                Commander
                </span>
                <FaCartShopping
                  className='text-xl text-white drop-shadow-sm cursor-pointer'
                />
            </button>

            {/****************** DarkMode Switch ******************/}
              <div>
                <DarkMode />
              </div>
            </div>
          </div>
        </div>
      {/********************** lower Navbar  ********************/}
        <div className="flex justify-center">
          <ul className="sm:flex hidden items-center gap-4">
            {
              Menu.map((data, id) =>
                <li key={id}>
                  <a href={data.link} className="inline-block px-4 hover:text-primary duration-200">{data.name}</a>
                </li>
              )
            }

            {/********************** Simple Dropdown and Links **********************/}

            <li className="group relative cursor-pointer">
              <a href="#" className="flex items-center gap-[2px] py-2">
              ⭐ Tendances / Best-sellers
                <span>
                  <FaCaretDown
                    className="transition-all duration-200 group-hover:rotate-180"
                  />
                </span>
              </a>
              <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md">
                <ul>
                    {
                      DropdownLinks.map((data)=> 
                        <li key={data.id}>
                          <a href={data.link} className="inline-block w-full rounded-md p-2 hover:bg-primary/20">
                              {data.name}
                          </a>
                        </li>
                      )
                    }
                </ul>
              </div>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar