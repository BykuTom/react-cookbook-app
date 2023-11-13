import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

import filletImage from "../../assets/images/Reverse-Sear-Filet-Mignon.webp";

const features = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ServerIcon,
  },
];
const stars = (number) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#4f46e5"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  );
};

export const HeroBanner = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-3xl font-semibold leading-7 text-indigo-600">
                {stars(2)}
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                REVERSE SEAR FILET MIGNON
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                There’s nothing quite like a perfectly cooked filet mignon to
                impress your dinner guests or treat yourself to a luxurious
                meal. And while there are many ways to cook this premium cut of
                beef, one technique that has gained popularity in recent years
                is the reverse sear method. By cooking the steak low and slow
                before finishing it with a quick sear on the stove or grill, you
                can achieve a perfectly tender, evenly cooked filet mignon with
                a crispy, caramelized crust. In this recipe, we’ll walk you
                through the steps to create a mouth-watering reverse sear filet
                mignon that will leave your taste buds begging for more.
              </p>
            </div>
          </div>
          <img
            src={filletImage}
            alt="Product screenshot"
            className="w-full max-w-[48rem] rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-12 lg:-ml-10"
            width={1200}
            height={800}
          />
        </div>
      </div>
    </div>
  );
};
