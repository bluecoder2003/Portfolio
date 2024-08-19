"use client";
import React from "react";

const Preloader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="Loader flex items-center justify-center w-full relative max-w-[14.6rem]">
        <div className="before-element"></div>
        <div className="after-element"></div>
        <style jsx>{`
          .Loader::before,
          .Loader::after {
            content: "";
            position: absolute;
            border-radius: 50%;
            animation-duration: 1.8s;
            animation-iteration-count: infinite;
            animation-timing-function: ease-in-out;
            filter: drop-shadow(0 0 0.75rem rgba(255, 255, 255, 0.75));
          }

          .Loader::before {
            width: 100%;
            padding-bottom: 100%;
            box-shadow: inset 0 0 0 1.7rem #fff;
            animation-name: pulsA;
          }

          .Loader::after {
            width: calc(100% - 3.4rem);
            padding-bottom: calc(100% - 3.4rem);
            box-shadow: 0 0 0 0 #fff;
            animation-name: pulsB;
          }

          @keyframes pulsA {
            0% {
              box-shadow: inset 0 0 0 1.7rem #fff;
              opacity: 1;
            }
            50%,
            100% {
              box-shadow: inset 0 0 0 0 #fff;
              opacity: 0;
            }
          }

          @keyframes pulsB {
            0%,
            50% {
              box-shadow: 0 0 0 0 #fff;
              opacity: 0;
            }
            100% {
              box-shadow: 0 0 0 1.7rem #fff;
              opacity: 1;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Preloader;
