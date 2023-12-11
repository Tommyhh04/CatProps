//Card with information
import "./StyleCatCard.css";

export default function CatCard() {
  return (
    <div className="contact--card">
      <img src="CatTemplate.jpg" alt="Cat profile image"></img>
      <h1>Name:</h1>
      <h3>Phone:</h3>
      <h4>Email:</h4>
    </div>
  );
}
