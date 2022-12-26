import React, { useEffect, useState } from "react";
import Simple from "./Simple";
import axios from "../axios";

import SweetAlert from "react-bootstrap-sweetalert";
const Gallery = () => {
  const [data, setData] = useState([]);
  const [el, setEl] = useState();
  const [editShow, setEditShow] = useState(false);
  const [show, setShow] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  useEffect(() => {
    axios
      .get("tours")
      .then((res) => {
        console.log(res.data.data.data);
        setData(res.data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const Delete = (e, el) => {
    axios
      .delete(`tours/${el._id}`)
      .then((res) => {
     
        setShow(true);
        axios
          .get("tours")
          .then((res) => {
            
            setData(res.data.data.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
        setShowWarning(true);
      });
  };
  const onCancel = () => {
    setShowWarning(false);
  };
  const onConfirm = () => {
    setShow(false);
  };
  
  const onCancelEdit = () => {
    setEditShow(false);
  };
  console.log(data);
  return (
    <Simple>
      <SweetAlert
        success
        title="SuccessFully deleted"
        show={show}
        onConfirm={onConfirm}
        onCancel={onConfirm}
        confirmBtnCssClass="px-6 py-3 bg-DarkBlue text-white rounded text-xl cursor-pointer"
        //  timeout={2000}
      />
      <SweetAlert
        danger
        confirmBtnText="ok"
        confirmBtnBsStyle="danger"
        title="You cannot post it"
        show={showWarning}
        onConfirm={onCancel}
        onCancel={onCancel}
        confirmBtnCssClass="px-6 py-3 bg-red-600 text-white rounded text-xl cursor-pointer"
        focusCancelBtn
      ></SweetAlert>
      <h1 className="text-gray-900 hover:text-DarkBlue text-2xl font-bold text-center">
        Gallery
      </h1>
      <div className="m-20 grid grid-cols-1 md:grid-cols-3">
        {data.map((el) => (
          <>
            <div key={el._id} className="mb-20">
              <main className="card text-center shadow-lg rounded-3xl md:mx-20 pb-4 w-11/12">
                <div className="mx-0">
                  <img
                    className="mx-auto rounded-t-3xl h-60"
                    src={`https://starfish-app-a5xrm.ondigitalocean.app/uploads/${el.img}`}
                    alt={el.img}
                  />
                </div>
                <div className="flex justify-between">
                  <div className="text-yellow-500 flex justify-start mt-2 ml-2">
                    <h3>{el.title_eng}</h3>
                  </div>
                  <div className=" mt-2 mr-2">
                    <span className="font-lora">{el.description_eng}</span>
                  </div>
                </div>
                <div className="flex justify-around">
                  <button
                    className="bg-red-500 hover:bg-red-800 text-white rounded-md px-2 py-1"
                    onClick={(e) => Delete(e, el)}
                  >
                    Delete
                  </button>
                </div>
              </main>
            </div>
          </>
        ))}
      </div>
    </Simple>
  );
};
export default Gallery;
