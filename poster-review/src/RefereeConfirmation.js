import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const RefereeConfirmation = ({ onSubmit }) => {
    const [decision, setDecision] = useState(""); // "accepted" or "declined"
    const [loading, setLoading] = useState(false);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const selectedValue = queryParams.get('refereeName');

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

            const result = await response.text(); // or .json() depending on your API
            console.log("DB update result:", result);

            // only update parent state if DB responded successfully
            onSubmit(decision);

        } catch (error) {
            console.error("Error updating DB:", error);
        } finally {
            setLoading(false);
        }
    };


    return (
        <form onSubmit={handleSubmit} className="p-4 border rounded w-fit">
            <h3 className="mb-2 font-bold">Welcome {selectedValue}, <br/> Please confirm your reviewing acceptance</h3>

            <div>
                <label>
                    <input
                        type="radio"
                        value="accepted"
                        checked={decision === "accepted"}
                        onChange={(e) => setDecision(e.target.value)}
                    />
                    Accept
                </label>
            </div>

            <div>
                <label>
                    <input
                        type="radio"
                        value="declined"
                        checked={decision === "declined"}
                        onChange={(e) => setDecision(e.target.value)}
                    />
                    Decline
                </label>
            </div>

            <button
  type="submit"
  disabled={loading}
  className={`mt-3 px-6 py-2 rounded-lg shadow-md font-semibold transition-all duration-300
    ${loading 
      ? "bg-gray-300 text-gray-600 cursor-not-allowed" 
      : "bg-green-300 text-green-900 hover:bg-green-400 hover:shadow-lg hover:scale-105"
    }`}
>
  {loading ? "Submitting..." : "✅ Submit Decision"}
</button>
        </form>
    );
};

export default RefereeConfirmation;
