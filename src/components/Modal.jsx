import React from "react";

const Modal = ({ tempImg, hide }) => {
  let myStyle = {
    display: "block",
    backgroundColor: "rgba(0,0,0,0.8)",
  };
  let picStyle = {
    marginLeft: "115px",
  };
  return (
    <>
      <div className="modal show fade" style={myStyle}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" onClick={hide}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <img src={tempImg} className="img-fluid" style={picStyle} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
