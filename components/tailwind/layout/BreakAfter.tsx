import React from "react";

export default function BreakAfter() {
  return (
    <>
      <h1>Break after</h1>
      <p>
        Utilities for controlling how a column or page should break after an
        element.
      </p>
      <div className="columns-3 mt-10">
        <p>Well, let me tell you something, ...</p>
        <p className="break-after-column">Sure, go ahead, laugh...</p>
        <p>Maybe we can live without...</p>
        <p>Look. If you think this is...</p>
      </div>
    </>
  );
}
