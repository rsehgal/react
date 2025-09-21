import React from "react";

export default function Message({ text, variant = "info" }) {
  return (
    <div className="d-flex justify-content-center my-3">
      <div
        className={`alert alert-${variant} py-1 px-3 d-inline-flex align-items-center`}
        role="alert"
      >
        {text}
      </div>
    </div>
  );
}
