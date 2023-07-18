import React, { useState, useEffect } from "react";

// Make a code review about below component
function Review() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      setX(event.x);
      setY(event.y);
    });
  });

  return (
    <div style={{ border: "dashed 1px black", padding: 5 }}>
      <p>X coordinate: {x}</p>
      <p>Y coordinate: {y}</p>
    </div>
  );
}

export default Review;
