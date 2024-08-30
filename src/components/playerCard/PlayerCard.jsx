import React, { useState } from "react";

const PlayerCard = ({ name, img, statistics }) => {
  // console.log(statistics);

  const [visible, setVisible] = useState(true);

  return (
    <div className="card1">
      <div
        className={`image ${
          visible ? "visible" : "hidden"
        }`}
        onClick={() => setVisible(!visible)}
      >
        


  {visible ? 
      (<img className="img_player-card" src={img} alt={name}/>)  :
      (<div className={` text_list p-2 bg-white ${visible ? "hidden" : "visible"}`}>
        <ul>
          {statistics.map((item, index) => (
            <li className="playcard_li" key={index}>
              🏀{item}
            </li>
          ))}
        </ul>
      </div>)
  }
      </div>

      <div className="name bg-white">
        <h6>{name}</h6>
      </div>
    </div>
  );
};

export default PlayerCard;
