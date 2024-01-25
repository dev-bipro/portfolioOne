import Flex from "../Flex";
import Heading from "../Heading";
import List from "../List";
import ListItemForDe from "../ListItemForDe";
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
          <List>
            <ListItemForDe className="myD" title="20">
              <strong>age :</strong>
            </ListItemForDe>
            <ListItemForDe className="myD" title="available">
              <strong>freelance :</strong>
            </ListItemForDe>
            <ListItemForDe className="myD" title="+880 14009-01513">
              <strong>phone :</strong>
            </ListItemForDe>
          </List>
          <List>
            <ListItemForDe className="myD" title="bangladeshi">
              <strong>residence :</strong>
            </ListItemForDe>
            <ListItemForDe className="myD" title="dhanmondi, dhaka">
              <strong>address :</strong>
            </ListItemForDe>
            <ListItemForDe className="myD" title="bipropodderr@gmail.com">
              <strong>e-mail :</strong>
            </ListItemForDe>
          </List>
        </Flex>
      </Flex>
    </div>
  );
}

export default About;
