import React, { useRef, useState, useLayoutEffect } from "react";

export default function Explore() {
  const menu = useRef();

  const [widthOffset, setWidthOffset] = useState(20);

  return (
    <div style={{ width: "90vw", height: "90vh" }}>
      <iframe
        src="https://speckle.xyz/embed?stream=0cf73f1d50&commit=8292b1ef90&c=%5B540.17523%2C-802.22798%2C309.44865%2C0%2C0%2C38.14539%2C0%2C1%5D"
        width={window.innerWidth - 150}
        height={window.innerHeight - 50}
        frameBorder="0"
      ></iframe>
    </div>
  );
}
