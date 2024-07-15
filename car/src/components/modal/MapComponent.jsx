import React, { useRef, useEffect, useState } from "react";
import DG from "2gis-maps";

function Map({ options = {}, height, width}) {
  const elRef = useRef();
  const [map, setMap] = useState(null);
  useEffect(() => {
    let innerMap = map;
    if (!innerMap) {
      innerMap = DG.map(elRef.current, options);
      setMap(innerMap);
    } else {
      innerMap.setView(options.center, options.zoom);
    }
    DG.marker(options.center).addTo(innerMap);

  }, [map, elRef, options]);

  return (
    <div
      ref={elRef}
      style={{
        width: `${width}px`,
        height: `${height}px`
      }}
    />
  );
}

export default React.memo(Map);