/* eslint-disable react/prop-types */
//Card with information
import "./StyleCatCard.css";
export default function CatCard(props) {
  return (
    <div className="contact--card">
      <img
        className="Profile--Img"
        src={props.img}
        alt="Profile image for cat"
      />
      <h1>{props.name}</h1>
      <p>{props.desc}</p>
      <h3>{props.phone}</h3>
      <h4>{props.email}</h4>
    </div>
  );
}
