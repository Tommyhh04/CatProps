import "./styleCard.css";
import CatCard from "./ContactCard/CatCards";

//Imports profile images
import Cat_Luna from "../Images/Luna.jpg";
import Cat_Milo from "../Images/Milo.jpg";
import Cat_Grafild from "../Images/Grafild.jpg";
import Cat_Bella from "../Images/Bella.jpg";
/*Contains the cards to be displayed here*/

export default function Main() {
  return (
    <div className="container--main">
      <CatCard
        img={Cat_Luna}
        name="Luna"
        email="luna@catmail.com"
        phone="+1 (555) 123-4567"
      />
      <CatCard
        img={Cat_Milo}
        name="Milo"
        email="milo@meow.com"
        phone="+1 (555) 234-5678"
      />
      <CatCard
        img={Cat_Grafild}
        name="Grafild"
        email="Grafild@pasta.com"
        phone="+1 (555) 345-6789"
      />
      <CatCard
        img={Cat_Bella}
        name="Bella"
        email="bella@kitty.com"
        phone="+1 (555) 456-7890"
      />
    </div>
  );
}
