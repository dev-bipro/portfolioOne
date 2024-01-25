import "./nav.css";
import Flex from "../Flex";
import { SiCodersrank } from "react-icons/si";
import Pragraph from "../Pragraph";
import List from "../List";
import ListItem from "../ListItem";
import DownloadButton from "../DownloadButton";
import { IoMdDownload } from "react-icons/io";

function Nav() {
  return (
    <nav id="navbar">
      <Flex className="navContent">
        <Flex className="navLogo">
          <SiCodersrank />
          <Pragraph title="Podder" />
        </Flex>
        <Flex className="navItemAndButton">

          <List className="navItems">
            <ListItem className="navItem" key="1">
              <a href="#home">home</a>
            </ListItem>
            <ListItem className="navItem" key="2">
              <a href="#ami">about</a>
            </ListItem>
            <ListItem className="navItem" key="3">
              <a href="#">resume</a>
            </ListItem>
            <ListItem className="navItem" key="4">
              <a href="#">portfolio</a>
            </ListItem>
            <ListItem className="navItem" key="5">
              <a href="#">contacts</a>
            </ListItem>
            <ListItem className="navItem" key="6">
              <a href="#">blog</a>
            </ListItem>
          </List>
          <DownloadButton className="navBtn">
            <span>download cv</span>
            <IoMdDownload />
          </DownloadButton>
        </Flex>
      </Flex>
    </nav>
  );
}

export default Nav;
