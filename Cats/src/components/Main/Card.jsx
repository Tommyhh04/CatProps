import "./styleCard.css";
import CatCard from "./ContactCard/CatCards";

/*Contains the cards to be displayed here*/

export default function Main() {
  return (
    <div className="container--main">
      <CatCard name="Luna" email="luna@catmail.com" phone="+1 (555) 123-4567" />
      <CatCard name="Milo" email="milo@meow.com" phone="+1 (555) 234-5678" />
      <CatCard
        name="Oliver"
        email="oliver@purrfect.com"
        phone="+1 (555) 345-6789"
      />
      <CatCard name="Bella" email="bella@kitty.com" phone="+1 (555) 456-7890" />
    </div>
  );
}
