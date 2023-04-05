import React from "react";

const TransitBlock = () => {
  return (
    <tr>
      <td class=" py-2 px-4 items-center vertical-align-middle flex">
        <div>
          <img
            className=" w-[48px] h-[48px] rounded-full"
            src="https://pbs.twimg.com/media/Fp6HcA0WwAAdF6J.jpg"
            alt=""
          />
        </div>
        <ul>
          <li className=" font-medium text-[16px] ">Chloe Wallows</li>
          <li className=" font-normal text-[14px]  text-[#70707A]">
            Saphore Inc.
          </li>
        </ul>
      </td>
      <td class=" py-2 px-4 vertical-align-middle">
        {" "}
        <ul>
          <li className=" font-medium text-[16px] ">Mar 1, 2022</li>
          <li className=" font-normal text-[14px]  text-[#70707A]">08:00 AM</li>
        </ul>
      </td>
      <td class=" flex py-2 px-4 vertical-align-middle">
        <div>
          <img
            className=" w-[20px] h-[20px]"
            src="https://pbs.twimg.com/media/Fp6HcA0WwAAdF6J.jpg"
            alt=""
          />
        </div>
        <div className=" font-medium text-[16px] "> PayPal</div>
      </td>
      <td class=" py-2 px-4 vertical-align-middle">
        <ul>
          {" "}
          <li className=" font-medium text-[16px] ">$1,546</li>
          <li className=" font-normal text-[14px]  text-[#70707A]">
            1 Jun 2022
          </li>
        </ul>
      </td>
      <td></td>
      <td class=" py-2 px-4 vertical-align-middle">
        <button className=" flex gap-[12px]  border-solid border-[1px] border-[#E4E4E7] py-[10px] px-[20px] rounded-full">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.71 8.11998V17.53C20.71 19.99 18.7 22 16.24 22H7.76004C5.30004 22 3.29004 19.99 3.29004 17.53V8.11998C3.29004 6.40998 4.25004 4.91998 5.66004 4.16998C6.15004 3.90998 6.76004 4.25998 6.76004 4.81998C6.76004 6.40998 8.06004 7.70998 9.65004 7.70998H14.35C15.94 7.70998 17.24 6.40998 17.24 4.81998C17.24 4.25998 17.84 3.90998 18.34 4.16998C19.75 4.91998 20.71 6.40998 20.71 8.11998Z"
              fill="#0A112F"
            />
            <path
              d="M15.7298 3.87519L15.7298 3.87519V3.88V4.82C15.7298 5.58386 15.1136 6.2 14.3498 6.2H9.63977C8.87591 6.2 8.25977 5.58386 8.25977 4.82V3.88C8.25977 3.11959 8.88245 2.5 9.64976 2.5H14.3498C15.1181 2.5 15.7371 3.11947 15.7298 3.87519Z"
              fill="#0A112F"
              stroke="#FAFAFA"
            />
            <path
              d="M14.9986 15.7753C14.9986 14.344 13.8043 13.9336 12.5124 13.7026L11.8277 13.5854C10.8151 13.4173 10.7369 13.1692 10.7369 12.8371C10.7369 12.4061 11.1967 12.1485 11.9669 12.1485C12.8789 12.1485 13.1126 12.5355 13.2096 12.8263L13.2188 12.8504C13.3336 13.1039 13.6001 13.2551 13.9327 13.2551C14.0189 13.2551 14.0963 13.244 14.1542 13.2341C14.5111 13.1741 14.7597 12.9341 14.7597 12.6498C14.7597 12.5793 14.7446 12.5094 14.7143 12.4415C14.5314 11.9447 14.0174 11.1627 12.5934 10.9842V10.1322C12.5934 9.42256 11.2775 9.42256 11.2775 10.1322V10.9893C9.7478 11.1915 9.18451 12.0705 9.18451 12.8368C9.18451 14.2309 10.3338 14.6195 11.4565 14.8151L12.1972 14.948C13.2521 15.1292 13.438 15.3616 13.438 15.7825C13.438 16.2968 12.9232 16.6034 12.0601 16.6034C10.9397 16.6034 10.7114 16.1773 10.5586 15.6989C10.4693 15.4342 10.1861 15.2636 9.83677 15.2636C9.76059 15.2636 9.6995 15.2722 9.6258 15.2828L9.60361 15.2864C9.2424 15.3589 9 15.5992 9 15.884C9 15.9382 9.01137 15.9842 9.0206 16.0214L9.03197 16.064C9.19445 16.528 9.55317 17.5413 11.3423 17.7673V18.6591C11.3423 19.0141 11.673 19.2 12.0001 19.2C12.3272 19.2 12.6582 19.0141 12.6582 18.6591V17.7829C14.0789 17.6266 15 16.8599 15 15.7754"
              fill="white"
            />
          </svg>
          <p className=" font-medium text-[14px]"> send Invoise</p>
        </button>
      </td>
      <td class=" py-2 px-4 vertical-align-middle">
        {" "}
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
      </td>
    </tr>
  );
};

export default TransitBlock;
