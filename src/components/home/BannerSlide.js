import Slider from "react-slick";
import filletImage from "../../assets/images/Reverse-Sear-Filet-Mignon.webp";
import pastaBake from "../../assets/images/tomato-basil.png"
import lemonParmesan from "../../assets/images/lemon-parmesan.png"
import { parseToHTML } from "../../utils/utilities";
import { StarRating } from "../StarRating";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const BannerSlide = ({ title, summary, image, rating }) => {

  const slidesData = [{
    title: "REVERSE SEAR FILET MIGNON",
    summary: "There’s nothing quite like a perfectly cooked filet mignon to impress your dinner guests or treat yourself to a luxurious meal. And while there are many ways to cook this premium cut of beef, one technique that has gained popularity in recent years is the reverse sear method. By cooking the steak low and slow before finishing it with a quick sear on the stove or grill, you can achieve a perfectly tender, evenly cooked filet mignon with a crispy, caramelized crust. In this recipe, we’ll walk you through the steps to create a mouth-watering reverse sear filet mignon that will leave your taste buds begging for more.",
    rating: 5,
    image: filletImage,
  },
  {
    title: "Tomato-Basil Ravioli Bake with Parmesan",
    summary: "Forget going out to eat or ordering takeout every time you crave Mediterranean food. Try making Tomato-Basil Ravioli Bake with Parmesan at home. For 13 cents per serving, this recipecovers 1% of your daily requirements of vitamins and minerals. One serving contains 36 calories, 1g of protein, and 2g of fat. A mixture of green onions, cheese ravioli, seasoning, and a handful of other ingredients are all it takes to make this recipe so flavorful. It works best as a hor d'oeuvre, and is done in about 45 minutes",
    rating: 4,
    image: pastaBake,
  },
  {
    title: "Lemon Parmesan Zucchini Noodles",
    summary: "Lemon Parmesan Zucchini Noodles is a hor d'oeuvre that serves 4. One serving contains 56 calories, 3g of protein, and 4g of fat. For 24 cents per serving, this recipe covers 2% of your daily requirements of vitamins and minerals. 2 people were impressed by this recipe. From preparation to the plate, this recipe takes roughly 13 minutes. It is brought to you by Lifes Ambrosia. A mixture of melt rich & creamy, garlic, zucchini, and a handful of other ingredients are all it takes to make this recipe so tasty. It is a good option if you're following a gluten free diet.",
    rating: 4,
    image: lemonParmesan,
  }
  ]
  const CustomPrevArrow = (props) => (
    <div {...props}
    className="slick-prev"
    style={{left: '10px', zIndex:1, background: 'black', borderRadius: '20%', padding: '12px', display: "flex", justifyContent: "center", alignItems: 'center' }}
    />
  )
  
  const CustomNextArrow = (props) => (
    <div {...props}
    className="slick-next"
    style={{right: '10px', zIndex:1, background: 'black', borderRadius: '20%', padding: '12px' , display: "flex", justifyContent: "center", alignItems: 'center' }} />
  )

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  }



  return (
    <div className="overflow-hidden bg-orange-100 py-8 mx-2 md:mx-4 drop-shadow-lg rounded-md">
    <Slider {...settings}>
      {slidesData.map((slide) => (
      <div className="mx-auto max-w-7xl px-6 lg:px-12 flex justify-center items-center lg:mx-4">
        <div className="mx-auto px-4 grid max-w-3xl grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:row-start-1 lg:col-start-2 m-auto w-full">
            <img
              src={slide.image}
              alt="Product screenshot"
              className="w-full max-w-[48rem] rounded-xl shadow-xl ring-1 ring-gray-400/10 "
            />
            <div className="w-full min-h-[2rem] mt-4 flex flex-col lg:flex-row gap-2 justify-center items-center">
              <button className="btn btn-warning w-40">Share</button>
            </div>
          </div>
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-3xl font-semibold leading-7 text-indigo-600">
                <StarRating number={slide.rating} />
              </h2>
              <p className="mt-2 text-5xl font-bold tracking-tight text-gray-900 ">
                {slide.title}
              </p>
              <p className="mt-6 text-md leading-8 text-gray-600">
                {slide.summary}
              </p>
            </div>
          </div>
        </div>
      </div>
      ))}
    </Slider>
    </div>
  );
};
