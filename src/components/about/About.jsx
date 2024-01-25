import Flex from "../Flex";
import Heading from "../Heading";
import List from "../List";
import ListItem from "../ListItem";
import Pragraph from "../Pragraph";
import "./about.css";
function About() {
  return (
    <div id="about">
      <Heading tagName="h3" className="aboutHeading" title="about me" />
      <Heading tagName="h5" className="aboutSubHeading" title="my story" />
      <Pragraph
        className="aboutPara"
        title="Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis."
      />
      <Pragraph
        className="aboutPara"
        title="Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis."
      />
      <Flex>
        <Flex className="myDetills">
          <List className="myDUl">
            <ListItem className="myD">
              <span>age :</span>
              <span>20</span>
            </ListItem>
            <ListItem className="myD">
              <span>freelance :</span>
              <span>available</span>
            </ListItem>
            <ListItem className="myD">
              <span>phone :</span>
              <span>+880 14009-01513</span>
            </ListItem>
          </List>
          <List className="myDUl">
            <ListItem className="myD">
              <span>residence :</span>
              <span>bangladeshi</span>
            </ListItem>
            <ListItem className="myD">
              <span>address :</span>
              <span>dhanmondi, dhaka</span>
            </ListItem>
            <ListItem className="myD">
              <span>e-mail :</span>
              <span>bipropodderr@gmail.com</span>
            </ListItem>
          </List>
        </Flex>
      </Flex>
    </div>
  );
}

export default About;
