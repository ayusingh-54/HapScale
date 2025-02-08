import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "What Makes Us Special",
  desc: "At HapScale, we believe that happiness in the workplace leads to outstanding results. Here's how we make it happen:",
  image: benefitOneImg,
  bullets: [
    {
      title: "Happier Employees",
      desc: "Our solutions promote a positive and healthy workplace culture.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Increases Altruism",
      desc: "Happiness fosters kindness and generosity. ",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Life Satisfaction",
      desc: "Ultimately, happiness brings fulfillment, joy, and satisfaction to life",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "FEATURES",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Tailored Happiness Solutions",
      desc: "We develope personalized happiness plans for businesses and employees to ensure maximum satisfaction and well-being.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Enhanced Productivity",
      desc:"Our workplace happiness strategies enhance employee motivation leading to superior organizational results",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Positive Work Culture",
      desc: "Our solutions cultivate a positive, fostering kindness resulting in stronger teams and superior outcomes ",
      icon: <SunIcon />,
    },
  ],
};


export { benefitOne, benefitTwo };
