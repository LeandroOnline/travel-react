import "./Cards.css";
function Cards() {
  return (
    <div className="cards" id='Cards'>
      <div className="cardrow">
        <div className="card bigger">
          <img
            src="https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2014/09/05/140905164109_eden_isla_tropical_624x351_thinkstock.jpg"
            alt=""
          />
          <div className="titlecontainer">
            <h1>Caribe</h1>
          </div>
        </div>

        <div className="card bigger">
          <img
            src="https://www.atrapalo.com.ar/common/photo/vv/66549/8/ticr_640_350.jpg"
            alt=""
          />
          <div className="titlecontainer">
            <h1>Maldivas</h1>
          </div>
        </div>
      </div>

      <div className="cardrow">
        <div className="card">
          <img
            src="https://www.mdzol.com/u/fotografias/m/2020/8/3/f1280x720-943524_1075199_5050.jpeg"
            alt=""
          />
          <div className="titlecontainer">
            <h1>Bora Bora</h1>
          </div>
        </div>
        <div className="card">
          <img
            src="https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2021/06/24/16245258157787.jpg"
            alt=""
          />
          <div className="titlecontainer">
            <h1>Polinesia</h1>
          </div>
        </div>

        <div className="card">
          <img
            src="https://cdn1.intriper.com/wp-content/uploads/2021/05/27130054/Boca-Grandi-Aruba-1.jpg"
            alt=""
          />
          <div className="titlecontainer">
            <h1>Aruba</h1>
          </div>
        </div>

      </div>
    </div>
  );
}
export default Cards;
