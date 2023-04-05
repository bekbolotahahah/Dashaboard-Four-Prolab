import React from "react";
import ConractUserItem from "./ConractUserItem";

const ClientContractList = () => {
  return (
    <section className="p-[24px]  w-full rounded-[16px] border-[#E4E4E7] border-[1px] border-solid   justify-between">
      <div className=" flex w-full justify-between">
        <div> Active Contract </div>
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_831_5263)">
              <path
                d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
                fill="#0A112F"
                stroke="#9096A2"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                fill="#0A112F"
                stroke="#9096A2"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
                fill="#0A112F"
                stroke="#9096A2"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_831_5263">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div>
        <ConractUserItem/>
        <ConractUserItem/>
        <ConractUserItem/>
        <ConractUserItem/>
        <ConractUserItem/>
        <ConractUserItem/>
        <ConractUserItem/>
        <ConractUserItem/>
        <ConractUserItem/>
        <ConractUserItem/>
        <ConractUserItem/>
        <ConractUserItem/>
        <ConractUserItem/>
        <ConractUserItem/>
        <ConractUserItem/>

      </div>
    </section>
  );
};

export default ClientContractList;
