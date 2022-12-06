import React, { useEffect, useState } from "react";
import Simple from "./Simple";
import axios from "../axios";

import SweetAlert from "react-bootstrap-sweetalert";
import Allert from "../components/Allert";
const Table = () => {
  const [data, setData] = useState([]);
  const [el, setEl] = useState();
  const [editShow, setEditShow] = useState(false);
  const [show, setShow] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  useEffect(() => {
    axios
      .get("teams")
      .then((res) => {
        console.log(res);
        setData(res.data.data.Team);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const Delete = (e, el) => {
    console.log(el._id);
    axios
      .delete(`teams/${el._id}`)
      .then((res) => {
        console.log(res);
        setShow(true);
        axios
          .get("teams")
          .then((res) => {
            console.log(res);
            setData(res.data.data.Team);
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
  const onConfirmEdit = () => {};
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
      <Allert
        showCancel
        show={editShow}
        onCancel={onCancelEdit}
        onConfirm={onConfirmEdit}
        el={el}
        url="hotel"
      />
      <h1 className="text-gray-900 hover:text-DarkBlue text-2xl font-bold text-center">
        Teams
      </h1>
      <div className="m-20 grid grid-cols-1 md:grid-cols-3">
        {data.map((el) => (
          <>
            <div className="mb-20">
              <main className="card text-center shadow-lg rounded-3xl md:mx-20 pb-4 w-11/12">
                <div className="mx-0">
                  <img
                    className="mx-auto rounded-t-3xl h-60"
                    src={`https://clownfish-app-iodyv.ondigitalocean.app/uploads/${el.image}`}
                    alt={el.img}
                  />
                </div>
                <div className="flex justify-between">
                  <div className="text-yellow-500 flex justify-start mt-2 ml-2"></div>
                  <div className=" mt-2 mr-2">
                    <span className="font-lora">{el.location}</span>
                  </div>
                </div>
                <h4 className="mt-2.5 mb-3 text-left ml-4 font-bold text-sm">
                  Name_ru: {el.name_ru}
                </h4>
                <h4 className="mt-2.5 mb-3 text-left ml-4 font-bold text-sm">
                  Name_uz: {el.name_uz}
                </h4>
                <h4 className="mt-2.5 mb-3 text-left ml-4 font-bold text-sm">
                  Name_en: {el.name_en}
                </h4>
                <h4 className="mt-2.5 mb-3 text-left ml-4 font-bold text-sm">
                  role_ru: {el.role_ru}
                </h4>
                <h4 className="mt-2.5 mb-3 text-left ml-4 font-bold text-sm">
                  role_uz: {el.role_uz}
                </h4>
                <h4 className="mt-2.5 mb-3 text-left ml-4 font-bold text-sm">
                  role_en: {el.role_en}
                </h4>
                <div className="flex justify-around">
                  <button
                    className="bg-DarkBlue text-white rounded-md px-2 py-1"
                    onClick={() => {
                      setEl(el), setEditShow(true);
                    }}
                  >
                    Edit
                  </button>
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
export default Table;
