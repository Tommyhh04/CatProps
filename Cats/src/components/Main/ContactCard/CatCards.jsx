/* eslint-disable react/prop-types */
//Card with information
import "./StyleCatCard.css";
export default function CatCard(props) {
  return (
    <div className="contact--card">
      <img src="CatTemplate.jpg" alt="Cat profile image"></img>
      <h1>{props.name}</h1>
      <h3>{props.phone}</h3>
      <h4>{props.email}</h4>
    </div>
  );
}
