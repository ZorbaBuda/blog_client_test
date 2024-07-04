import React from "react";

export default function BoxSizing() {
  return (
    <>
      <h1>Box Sizing</h1>
      <p>
        Utilities for controlling how the browser should calculate an element's
        total size.
      </p>
      <section className="flex flex-col gap-11">
        <div className=" h-40 w-40 bg-red-300 mt-10 flex  ">
          <div className=" my-auto mx-auto h-10 w-10  bg-black border border-black "></div>
        </div>
        <div className=" h-40 w-40 bg-red-300 mt-10 flex ">
          <div className=" my-auto mx-auto h-10 w-10 bg-black border border-black "></div>
        </div>
        <p>
          box-border = element's border and padding included in height or width
          of the element
        </p>
        <div className="columns-1  mt-10">
          <div className="box-border w-32 h-32 border-2 border-gray-500 mt-5"></div>
          <div className="w-32 h-32 border-2 border-gray-500-mt-5"></div>
          <div className="w-32 h-32 border-2 border-gray-500 mt-5"></div>
        </div>
      </section>
    </>
  );
}
