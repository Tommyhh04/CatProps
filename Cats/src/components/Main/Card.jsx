import "./styleCard.css";
import CatCard from "./ContactCard/CatCards";

/*Contains the cards to be displayed here*/

export default function Main() {
  return (
    <div className="container--main">
      <CatCard />
      <CatCard />
      <CatCard />
      <CatCard />
    </div>
  );
}
