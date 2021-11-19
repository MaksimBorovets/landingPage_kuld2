import React, { useState } from "react";
import "../../App.css";
import "./Gallery.css";
import CloseIcon from "@material-ui/icons/Close";

import img1 from "../../forGalery/1.jpg";
import img2 from "../../forGalery/2.jpg";
import img3 from "../../forGalery/3.jpg";
import img4 from "../../forGalery/4.jpg";
import img5 from "../../forGalery/5.jpg";
import img6 from "../../forGalery/6.jpg";
import img7 from "../../forGalery/7.jpg";
import img8 from "../../forGalery/8.jpg";
import img9 from "../../forGalery/9.jpg";
import img10 from "../../forGalery/10.jpg";
import img11 from "../../forGalery/11.jpg";

const data = [
  {
    id: "1",
    img: img1,
  },
  {
    id: "2",
    img: img2,
  },
  {
    id: "3",
    img: img3,
  },
  {
    id: "4",
    img: img4,
  },
  {
    id: "5",
    img: img5,
  },
  {
    id: "6",
    img: img6,
  },
  {
    id: "7",
    img: img7,
  },
  {
    id: "8",
    img: img8,
  },
  {
    id: "9",
    img: img9,
  },
  {
    id: "10",
    img: img10,
  },
  {
    id: "11",
    img: img11,
  },
];

export default function Galery() {
  const [model, setModel] = useState(false);
  const [tempimgImg, setTempImgSrc] = useState("");

  const getImg = (img) => {
    setTempImgSrc(img);
    setModel(true);
  };
  return (
    <div style={{ backgroundColor: "white" }}>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgImg} />
        <CloseIcon onClick={()=> setModel(false)}/>
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => {
                getImg(item.img);
              }}
            >
              <img src={item.img} style={{ width: "100%" }} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

// <ImageList
// sx={{ width: 500, height: 450 }}
// variant="woven"
// cols={3}
// gap={8}
// >
// {itemData.map((item) => (,map
//   <ImageListItem key={item.img}>
//     <img
//       src={`${item.img}?w=161&fit=crop&auto=format`}
//       srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
//       alt={item.title}
//       loading="lazy"
//     />
//   </ImageListItem>
// ))}
// </ImageList>
