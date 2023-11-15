import { BannerSlide } from "./BannerSlide";

const summary =
  "There’s nothing quite like a perfectly cooked filet mignon to impress your dinner guests or treat yourself to a luxurious meal. And while there are many ways to cook this premium cut of beef, one technique that has gained popularity in recent years is the reverse sear method. By cooking the steak low and slow before finishing it with a quick sear on the stove or grill, you can achieve a perfectly tender, evenly cooked filet mignon with a crispy, caramelized crust. In this recipe, we’ll walk you through the steps to create a mouth-watering reverse sear filet mignon that will leave your taste buds begging for more.";

export const HeroBanner = () => {
  return (
    <BannerSlide
      title="REVERSE SEAR FILET MIGNON"
      summary={summary}
      rating={5}
    />
  );
};
