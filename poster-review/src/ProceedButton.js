import React, { useState } from "react";

const ProceedButton = ({ onProceed }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);

    try {
      // Trigger parent callback if provided
      if (onProceed) {
        await onProceed(true);
      }
    } catch (error) {
      console.error("Error in proceed action:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className="btn btn-success px-4 py-2 fw-bold shadow-sm"
      onClick={handleClick}
      disabled={loading}
    >
      {loading ? "Processing..." : "✅ Proceed"}
    </button>
  );
};

export default ProceedButton;
