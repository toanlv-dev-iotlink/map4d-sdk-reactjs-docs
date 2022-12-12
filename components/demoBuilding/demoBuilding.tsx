import React, { useState } from "react";
import { MFBuilding, MFMap } from "react-map4d-map";

const DemoBuilding = () => {

  const [position, setPosition] = useState({ lat: 16.103254, lng: 108.214835 });

  const onMapReady = (map) => {
    map.setMapType(map4d.MapType.map3d);
  }

  return (
    <>
      <div style={{ width: "100%", height: "400px" }}>
        <MFMap
          onMapReady={onMapReady}
          options={{
            center: { lat: 16.103254, lng: 108.214835 },
            zoom: 18,
            tilt: 50,
            bearing: 250,
            controls: true,
          }}
          accessKey={"d69ab3c4b70818de546a1b1bb15aeaa7"}
          version={"2.4"}
        >
          <MFBuilding
            name="test"
            model={"https://sw-hcm-1.vinadata.vn/v1/AUTH_d0ecabcbdcd74f6aa6ac9a5da528eb78/sdk/models/5d26e774bb542caaf439e605.obj"}
            texture={"https://sw-hcm-1.vinadata.vn/v1/AUTH_d0ecabcbdcd74f6aa6ac9a5da528eb78/sdk/textures/5d26e775bb542caaf439e607.png"}
            position={position}
          />
        </MFMap>
      </div>
    </>
  );
};

DemoBuilding.propTypes = {};

export default DemoBuilding;
