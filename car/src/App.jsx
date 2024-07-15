import SectionCards from "./components/SectionCards.jsx";
import React, { useState, useMemo } from "react";

function App() {

  const [x, setX] = useState(55);
  const onXChange = e => setX(e.target.value);

  const [y, setY] = useState(83);
  const onYChange = e => setY(e.target.value);

  const [zoom, setZoom] = useState(13);
  const onZoomChange = e => setZoom(e.target.value);

  const options = useMemo(
    () => ({
      center: [x, y],
      zoom
    }),
    [x, y, zoom]
  );

  return (
    <div className="wrapper">
      <SectionCards />
    </div>
  );
}

export default App;
