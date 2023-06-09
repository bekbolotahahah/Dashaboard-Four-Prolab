import React from "react";

const Warning = () => {
  return (
    <div className=" my-5 flex gap-3 w-full bg-[#FEEDDA] py-[16px] px-[24px]  rounded-[12px]">
      <div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_335_4950)">
            <path
              d="M4.99921 19H18.9992C19.3255 18.9977 19.6463 18.9156 19.9336 18.7609C20.2209 18.6061 20.466 18.3835 20.6474 18.1123C20.8289 17.841 20.9412 17.5296 20.9747 17.205C21.0081 16.8804 20.9616 16.5525 20.8392 16.25L13.7392 4.00002C13.5663 3.68741 13.3127 3.42685 13.005 3.2454C12.6972 3.06396 12.3465 2.96826 11.9892 2.96826C11.632 2.96826 11.2812 3.06396 10.9735 3.2454C10.6657 3.42685 10.4122 3.68741 10.2392 4.00002L3.13921 16.25C3.01915 16.5456 2.97155 16.8656 3.00036 17.1833C3.02918 17.501 3.13359 17.8073 3.30486 18.0764C3.47614 18.3456 3.70932 18.5698 3.98494 18.7305C4.26056 18.8912 4.57061 18.9836 4.88921 19"
              fill="#FAA745"
            />
            <path
              d="M12 15V15.01M12 9V11V9Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_335_4950">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <h1 className=" text-[#FAA745] text-[16px] font-medium">Please upload the missing documents</h1>
    </div>
  );
};

export default Warning;
