import WebDesign from "../asset/images/computer.png";
import ResponsiveDesign from "../asset/images/responsive-design.png";
import CreativeDesign from '../asset/images/design-thinking.png';
import Psd from '../asset/images/psd.png';
import Fast from '../asset/images/rocket.png';
import Pixel from '../asset/images/resolution.png';

const servicesData = [
  { id: 1,
    animateDirection: "Left",
    img: WebDesign,
    title: "Web App Development",
    description: "Scalable web apps built with React and TypeScript."
  },
  { id: 2,
    animateDirection: "Middle",
    img: ResponsiveDesign,
    title: "Responsive Development",
    description: "Mobile-first UIs that work great on every screen."
  },
  { id: 3,
    animateDirection: "Right",
    img: CreativeDesign,
    title: "Problem Solving",
    description: "Simple, clean solutions for complex requirements."
  },
  { id: 4,
    animateDirection: "Left",
    img: Psd,
    title: "Design to Code",
    description: "Turning Figma and XD designs into React components."
  },
  { id: 5,
    animateDirection: "Middle",
    img: Fast,
    title: "Performance Optimization",
    description: "Fast apps through lazy loading and code splitting."
  },
  { id: 6,
    animateDirection: "Right",
    img: Pixel,
    title: "API Integration",
    description: "Connecting UIs to REST APIs with clean state management."
  },
];

export { servicesData };
