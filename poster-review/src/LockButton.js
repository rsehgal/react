import React, { useState } from "react";

const LockButton = (prop) => {
  const [loading, setLoading] = useState(false);

 //function to handle Lock
    const handleLock = async (e) => {
    e.preventDefault();
    //alert(prop.refereeName)

    setLoading(true);
    try {
      const urltoFire = `https://sympnp.org/phpNode/setLock.php?refereeName=${prop.refereeName}`;
      console.log(urltoFire);
      const response = await fetch(urltoFire);

      const result = await response.text(); // or .json() depending on API
      console.log("DB update result:", result);
      prop.onLock(true);
      
      //alert("Decisions locked successfully....");
    
    } catch (error) {
      console.error("Error updating DB:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className="btn btn-danger px-4 py-2 fw-bold shadow-sm"
      onClick={handleLock}        
      disabled={loading}
    >
      {loading ? "Locking..." : "🔒 Lock it"}
    </button>
  );
};

export default LockButton;
