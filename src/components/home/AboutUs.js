import React from 'react'
import noUser from "../../assets/images/nouser.png";
import tomaszImg from "../../assets/images/tomasz.jpg"
import pizzaIcon from "../../assets/images/pizza.png"
import cakeIcon from "../../assets/images/birthday.png"

export const AboutUs = () => {
return (
    <div className="overflow-hidden bg-orange-100 py-4 mt-4 md:mx-4 drop-shadow-lg rounded-md p-2 ">
        <div className="p-2 mb-2">
            <div className='flex flex-row align-middle justify-center items-center gap-2'>
            <img src={pizzaIcon} className='w-10 h-10'/>
            <h2 className="text-center text-4xl font-bold text-gray-900 py-4">About Project</h2>
            <img src={cakeIcon} className='w-10 h-10' />
        </div>

    <div className='px-10 mx-auto card my-2 p-2 h-100 items-center bg-orange-200 lg:min-w-[70rem] '>
        <h3 className='text-gray-800 text-base font-bold py-4 text-center'>"Cookbook App: Where Every Recipe Comes with a Side of Punnery – Stirring Pots and Puns Since 2023!"</h3>
        <p className='text-gray-800 text-base pb-2'>
            Introducing our cutting-edge Cookbook App, a culinary companion that redefines the way you experience cooking. This project is a sophisticated and user-friendly 
            application, seamlessly integrating an extensive library of recipes with detailed instructions and nutritional information for each delectable dish. 
        </p>
        <p className='text-gray-800 text-base pb-2'>
            Whether you're a seasoned chef or a kitchen novice, our app caters to all skill levels, offering a diverse range of recipes to suit every taste and dietary preference.
            Users can effortlessly search for recipes, explore step-by-step instructions, and access comprehensive nutrient details to make informed choices about their meals. The personalized
            touch extends to the ability to favorite recipes, allowing users to curate their digital cookbook with ease.
        </p>
        </div>
    </div>

    <div className='pt-8'>
    <h2 className="text-center text-4xl font-bold text-gray-900">Meet the Team</h2>
    <div className="mx-auto text-2xl flex flex-col max-w-3xl lg:mx-0 items-center lg:max-w-none my-4 p-1 lg:flex-row lg:justify-evenly">
            <div className='card bg-orange-200 my-2 p-2 h-100 items-center'>
                <img src={noUser} />
                <h4 className='text-xl pb-1 font-bold text-gray-900 text-center justify-between '>Arturs</h4>
                <p className='text-base text-gray-900'>
                Our resident creative mind, brings a unique blend of artistic flair and technical expertise. With a 
                keen eye for design and an unwavering commitment to user experience, Arturs is on a mission to bridge the gap between aesthetics and 
                functionality in the world of web development.
                </p>
                <a
                    href="https://github.com/artursrus"
                    target="_blank"
                    className="bg-red-400 rounded-md px-3 py-2 text-sm font-medium  hover:shadow-md text-center">
                    GitHub
                </a>
            </div>
            <div className='card bg-orange-200 my-2 p-2 justify-between items-center'>
                <img src={tomaszImg} className='rounded-full' />
                <h4 className='text-xl pb-1 font-bold text-gray-900 text-center'>Tomasz</h4>
                <p className='text-base text-gray-900'>The wizard behind the code, is a seasoned frontend developer with a passion for clean, efficient, and scalable solutions. 
                His dedication to mastering the latest technologies and implementing best practices.
                </p>
                <a
                    href="https://github.com/BykuTom"
                    target="_blank"
                    className="bg-red-400 rounded-md px-3 py-2 text-sm font-medium hover:shadow-md text-center">
                    GitHub
                </a>
            </div>     
        </div>
    </div>
</div>
)
}
