import React from "react";

const DeclineMessage = () => {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg shadow-sm text-center max-w-md">
        <h2 className="text-lg font-semibold mb-2">Review Declined</h2>
        <p>We have received your review decline request. Thank you for your time 🙏</p>
      </div>
    </div>
  );
};

export default DeclineMessage;
