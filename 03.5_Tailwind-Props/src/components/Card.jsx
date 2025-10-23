import React from "react";

function Card(props, btnText = "hallo") {
  console.log(props);

  return (
    <>
      <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
        <img
          src="https://i.pinimg.com/736x/2c/6b/bb/2c6bbb7696f09017d7dd9117e0f3258a.jpg"
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">
              {props.name}
            </h2>

            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio tempora ipsum soluta amet corporis accusantium aliquid
              consectetur eaque!
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
          >
            {props.btnText || "hallo "}
            {/* we make a logic if text have then use that otehrwise use default and other option give default value in varible */}
          </button>
        </div>
      </div>
      {/* in html css html js write diffrent but in react its say write in one file so in change one file it chaed all file here comes propes 
      we can not pass object or array but its take variable that contain object or array
      for passing varibles via props need to write in curly bracess {}
      */}
    </>
  );
}

export default Card;
