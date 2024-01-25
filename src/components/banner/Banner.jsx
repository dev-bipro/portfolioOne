import "./banner.css";
import Heading from "../Heading";
import { useState } from "react";
import { ReactTyped } from "react-typed";
import Pragraph from "../Pragraph";
import Flex from "../Flex";
import DownloadButton from "../DownloadButton";
import Button from "../Button";
import { FaChevronRight } from "react-icons/fa";
// import Flex from "./components/Flex";
function Banner() {
  const typeArr = ["web developer", "mern stack developer"];
  const [loadTxt, setLoadTxt] = useState([]);
  //   let itemArr = typeArr[0].split("");
  //   let textForLoad = 'BP is Checking'

  let cou = 0;
  let count = 0;
  const text = typeArr[0].split("");

  // setInterval(()=>{
  //   // loadTxt.push(text[count]);
  //   setLoadTxt([...loadTxt,text[count]]);
  //   // console.log(text.charAt(count));
  //   console.log(loadTxt)
  //   count++;
  // },3000)
  //   typeArr.map((item, index) => {
  //     let textForLoadArr = item.split("");
  //     if (count == textForLoadArr.length - 1) {
  //         clearInterval(stopInterval) ;
  //         return count= -1;
  //     }
  //     const stopInterval = setInterval(() => {
  //       count++;
  //       loadTxt.push(textForLoadArr[count]);
  //       setLoadTxt([...loadTxt]);
  //     }, 300);
  //   });

  // for (; cou < typeArr.length; ) {
  //   let textForLoadArr = typeArr[cou].split("");
  //     if (count == textForLoadArr.length - 1) {
  //         clearInterval(stopInterval) ;
  //         return count= -1;
  //     }
  // setInterval(() => {
  //   count++;
  //   loadTxt.push(textForLoadArr[count]);
  //   setLoadTxt([...loadTxt]);
  //   if (count == textForLoadArr.length-1){
  //     cou++
  //   }
  // }, 3000);
  // }
  return (
    <div id="home">
      <div className="bannerHeading">
        <Heading tagName="h1" className="bannerName">
          <span style={{ textTransform: "uppercase", color: "#68e0cf" }}>
            mr
          </span>
          <span style={{ textTransform: "capitalize" }}>podder</span>
        </Heading>
      </div>
      <div className="bannerTypes">
        <ReactTyped
          className="bannerType"
          strings={["web developer", "mern stack developer"]}
          typeSpeed={140}
          backSpeed={150}
          // attr="placeholder"
          loop
        />
        {/* <Heading tagName="h1" title={loadTxt.join()} /> */}
      </div>
      <Pragraph
        className="bannerPara"
        title="Hello! I am Web Developer from United States, New York. I have rich experience in web site design and building, also I am good at wordpress. I love to talk with you about our unique."
      />
      <Flex>
        <DownloadButton className="navBtn">
          <span>contact me</span>
          <FaChevronRight />
        </DownloadButton>
      </Flex>
    </div>
  );
}

export default Banner;
