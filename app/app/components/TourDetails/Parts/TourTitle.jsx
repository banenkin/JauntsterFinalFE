import React from "react";
import Star from "../Svgs/Star";
import PencilIcon from "../../../public/svg/pencil.svg";
import Btn from "../../Buttons/Btn.jsx";

function TourTitle({ title, handleEditClick, userId, creatorId, rating }) {
  return (
    <div
      className="flex justify-between items-center w-full 
        web:gap-[30px]
        tablet:gap-[30px] tablet:mb-[30px]
        gap-[20px]"
    >
      <div className="flex items-center gap-[10px]">
        <h1
          className="text-[#081120]   font-medium 
            web:text-[39px] web:leading-[58.50px]
            tablet:text-[32px] tablet:leading-[48px]
            text-[25px]"
        >
          {title}
        </h1>
        <Star />
        <span className="text-[#13294b] text-base font-normal   leading-none border-2 border-[#FAFAFA] border-b-[#e8b600]">
          {rating}
        </span>
      </div>
      {userId === creatorId && (
        <Btn
          type={"button"}
          icon={PencilIcon}
          iconPosition="left"
          variant="transparent"
          text={"Edit Tour"}
          onClick={handleEditClick}
        />
      )}
    </div>
  );
}

export default TourTitle;
