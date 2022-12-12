import * as React from "react";
import { useEffect, useState } from "react";
import { MFMap } from "react-map4d-map";

type DemoMapProps = {
  //
};

const DemoMap: React.FC<any> = () => {
  const [showMap, setShowMap] = useState(false)
  useEffect(() => {
    setShowMap(true)
  }, [])
  return (
    <div style={{ width: "100%", height: "400px" }}>
      {showMap && (
        <MFMap
          options={{
            center: { lat: 16.072163491469226, lng: 108.22690536081757 },
            zoom: 15,
            controls: true,
          }}
          accessKey={"d69ab3c4b70818de546a1b1bb15aeaa7"}
          version={"2.4"}
        />
      )}
    </div>
  );
};

export default DemoMap;
