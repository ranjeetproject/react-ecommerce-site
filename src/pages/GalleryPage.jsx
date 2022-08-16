import { React, useEffect, useState } from "react";
import "./gallery.css";
import axios from "axios";
import Modal from "../components/Modal";

function GalleryPage() {
  const [gallery, setGallery] = useState([]);
  const [model, setModel] = useState(false);
  const [tempImg, setTempImg] = useState("");
  useEffect(() => {
    async function getData() {
      await axios
        .get("https://pixabay.com/api/?key=29286244-965d1274dcab1b41c7d54cedd")
        .then((response) => {
          //console.log(response.data.hits[0].id);
          setGallery(response.data.hits);
        });
    }
    getData();
  }, []);

  //console.log(gallery);

  const getImage = (imgSrc) => {
    setTempImg(imgSrc);
    return setModel(true);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          {gallery.map((val) => {
            return (
              <div
                className="col-4"
                keys={val.id}
                onClick={() => getImage(val.userImageURL)}
              >
                <div className="card">
                  <img
                    src={val.userImageURL}
                    className="card-img-top"
                    alt="#"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {model == true ? (
        <Modal tempImg={tempImg} hide={() => setModel(false)} />
      ) : (
        ""
      )}
    </>
  );
}

export default GalleryPage;
