import React from "react";
const CloseIcon = ({ onClick }) => (
  <svg
    className="absolute top-5 right-3 z-10 cursor-pointer text-[#FFFFFF] w-10 h-10"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <g id="icons / close">
      <path
        id="Vector"
        d="M13.5911 12L18.0442 7.54687C18.2555 7.3359 18.3744 7.04962 18.3747 6.75099C18.3749 6.45237 18.2566 6.16587 18.0456 5.95453C17.8346 5.74319 17.5483 5.62431 17.2497 5.62404C16.9511 5.62378 16.6646 5.74215 16.4532 5.95312L12.0001 10.4062L7.547 5.95312C7.33565 5.74178 7.04901 5.62305 6.75012 5.62305C6.45123 5.62305 6.16459 5.74178 5.95325 5.95312C5.7419 6.16447 5.62317 6.45111 5.62317 6.75C5.62317 7.04888 5.7419 7.33553 5.95325 7.54687L10.4064 12L5.95325 16.4531C5.7419 16.6645 5.62317 16.9511 5.62317 17.25C5.62317 17.5489 5.7419 17.8355 5.95325 18.0469C6.16459 18.2582 6.45123 18.3769 6.75012 18.3769C7.04901 18.3769 7.33565 18.2582 7.547 18.0469L12.0001 13.5937L16.4532 18.0469C16.6646 18.2582 16.9512 18.3769 17.2501 18.3769C17.549 18.3769 17.8357 18.2582 18.047 18.0469C18.2583 17.8355 18.3771 17.5489 18.3771 17.25C18.3771 16.9511 18.2583 16.6645 18.047 16.4531L13.5911 12Z"
        fill="#13294B"
        className="fill-current"
      />
    </g>
  </svg>
);
function Slider({ setOpenSlider, selectedImage }) {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
      <div className="bg-black w-full h-full p-4 relative">
        <CloseIcon onClick={() => setOpenSlider(false)} />
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-full object-contain mx-auto"
          />
        ) : (
          <div className="text-white text-center">No image selected</div>
        )}
      </div>
    </div>
  );
}

export default Slider;
