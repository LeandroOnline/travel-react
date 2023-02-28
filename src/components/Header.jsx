import "./Header.css";
import video from "../../public/videos/Vídeos 4K de PLAYAS RELAJANTES con música 🏝️ (Paisajes en Ultra HD).mp4";

function Header() {
  return (
    <div className="hero-container">
      <video src={video} autoPlay loop muted />
      <h1 className="title">PARADISE IS WAITING</h1>
      <div className="buttons">
        <a href="#Cards"><button className="button-2">Places</button></a>
        <a href="#Footer"><button>GO</button></a>
      </div>
    </div>
  );
}
export default Header;
