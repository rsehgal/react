import React, { useState } from "react";
import { useLocation } from "react-router-dom";

//const RefereeConfirmation2 = ({ onSubmit,refereeName }) => {
  const RefereeConfirmation2 = (prop) => {
  const [decision, setDecision] = useState(""); // "accepted" or "declined"
  const [loading, setLoading] = useState(false);

  //const location = useLocation();
  //const queryParams = new URLSearchParams(location.search);
  const selectedValue = prop.refereeName;//queryParams.get("refereeName");
  console.log("Welcome "+selectedValue);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!decision) {
      alert("Please select Accept or Decline before submitting.");
      return;
    }

    setLoading(true);
    try {
      const urltoFire = `https://sympnp.org/phpNode/setRefereeConfirmationStatus.php?refereeName=${selectedValue}&refConfirmationStatus=${decision}`;
      console.log(urltoFire);
      const response = await fetch(urltoFire);

      const result = await response.text(); // or .json() depending on API
      console.log("DB update result:", result);

      // update parent state
      prop.onSubmit(decision);
    } catch (error) {
      console.error("Error updating DB:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="card shadow-sm border-0" style={{ maxWidth: "500px" }}>
        <div className="card-header bg-success text-white fw-bold fs-5 text-center">
          ✍️ Referee Confirmation
        </div>
        <div className="card-body text-center">
          <h5 className="mb-4 text-secondary">
            Welcome <span className="text-dark fw-bold">{prop.fullname}</span>,
            <br />
            please confirm your reviewing acceptance:
          </h5>

          <form onSubmit={handleSubmit}>
            <div className="d-flex justify-content-center mb-3 gap-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="accept"
                  value="accepted"
                  checked={decision === "accepted"}
                  onChange={(e) => setDecision(e.target.value)}
                />
                <label className="form-check-label fw-semibold" htmlFor="accept">
                  ✅ Accept
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="decline"
                  value="declined"
                  checked={decision === "declined"}
                  onChange={(e) => setDecision(e.target.value)}
                />
                <label
                  className="form-check-label fw-semibold text-danger"
                  htmlFor="decline"
                >
                  ❌ Decline
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`btn fw-bold px-4 py-2 ${
                loading
                  ? "btn-secondary"
                  : "btn-success shadow-sm hover-shadow-lg"
              }`}
            >
              {loading ? "Submitting..." : "Proceed"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RefereeConfirmation2;
