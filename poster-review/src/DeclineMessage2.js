import React from "react";

const DeclineMessage2 = () => {
  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="card shadow-sm border-0 text-center" style={{ maxWidth: "500px" }}>
        <div className="card-header bg-danger text-white fw-bold fs-5">
          ❌ Review Request Declined
        </div>
        <div className="card-body bg-light">
          <p className="fs-6 text-muted">
          We have received your review <span className="fw-bold text-danger">decline</span> request.
          </p>
          <p className="mb-3">Thank you for your response 🙏</p>
        {/*
          <button
            className="btn btn-outline-primary"
            onClick={() => window.location.href = "/"}
          >
            ⬅ Back to Home
          </button>
  */}
        </div>
      </div>
    </div>
  );
};

export default DeclineMessage2;
