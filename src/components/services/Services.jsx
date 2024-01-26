import Heading from "../Heading";
import Flex from "../Flex";
import "./services.css";
import ServicesBox from "./ServicesBox";
import { IoLogoChrome } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { RiGatsbyLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaPython } from "react-icons/fa6";
import MernIcon from "../../assets/mern.svg";
import Pragraph from "../Pragraph";
import ImageComp from "../ImageComp";
function Services() {
  return (
    <div id="services">
      <Heading tagName="h3" className="aboutHeading" title="services" />
      <Heading tagName="h5" className="aboutSubHeading" title="what i do" />
      <Flex className="serviceBoxs">
        <ServicesBox className="serviceBox">
          <div className="serviceBoxIcon">
            <FaReact />
          </div>
          <Heading
            className="serviceHeading"
            tagName="h4"
            title="font-end with react JS"
          />
          <Pragraph
            className="servicePara"
            title="The web development process includes: web design, web content, client-side / server-side scripting and network security configuration."
          />
        </ServicesBox>
        <ServicesBox className="serviceBox">
          <div className="serviceBoxIcon">
            <RiGatsbyLine />
          </div>
          <Heading
            className="serviceHeading"
            tagName="h4"
            title="font-end with gatsby JS"
          />
          <Pragraph
            className="servicePara"
            title="The web development process includes: web design, web content, client-side / server-side scripting and network security configuration."
          />
        </ServicesBox>
        <ServicesBox className="serviceBox">
          <div className="serviceBoxIcon">
            <TbBrandNextjs />
          </div>
          <Heading
            className="serviceHeading"
            tagName="h4"
            title="next JS"
          />
          <Pragraph
            className="servicePara"
            title="The web development process includes: web design, web content, client-side / server-side scripting and network security configuration."
          />
        </ServicesBox>
        <ServicesBox className="serviceBox">
          <div className="serviceBoxIcon">
            <FaNodeJs />
          </div>
          <Heading
            className="serviceHeading"
            tagName="h4"
            title="back-end with node JS"
          />
          <Pragraph
            className="servicePara"
            title="The web development process includes: web design, web content, client-side / server-side scripting and network security configuration."
          />
        </ServicesBox>
        <ServicesBox className="serviceBox">
          <div className="serviceBoxIcon">
            <SiExpress />
          </div>
          <Heading
            className="serviceHeading"
            tagName="h4"
            title="back-end with express JS"
          />
          <Pragraph
            className="servicePara"
            title="The web development process includes: web design, web content, client-side / server-side scripting and network security configuration."
          />
        </ServicesBox>
        <ServicesBox className="serviceBox">
          <div className="serviceBoxIcon">
            <SiMongodb />
          </div>
          <Heading
            className="serviceHeading"
            tagName="h4"
            title="mongoDB"
          />
          <Pragraph
            className="servicePara"
            title="The web development process includes: web design, web content, client-side / server-side scripting and network security configuration."
          />
        </ServicesBox>
        <ServicesBox className="serviceBox">
          <div className="serviceBoxIcon">
            <IoLogoFirebase />
          </div>
          <Heading
            className="serviceHeading"
            tagName="h4"
            title="firebase"
          />
          <Pragraph
            className="servicePara"
            title="The web development process includes: web design, web content, client-side / server-side scripting and network security configuration."
          />
        </ServicesBox>
        <ServicesBox className="serviceBox">
          <div className="serviceBoxIcon">
            <FaPython />
          </div>
          <Heading
            className="serviceHeading"
            tagName="h4"
            title="python"
          />
          <Pragraph
            className="servicePara"
            title="The web development process includes: web design, web content, client-side / server-side scripting and network security configuration."
          />
        </ServicesBox>

      </Flex>
    </div>
  );
}

export default Services;
