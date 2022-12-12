import React from "react"
import { MFMap, MFTileOverlay } from "react-map4d-map"

let options = {
  getUrl: function (x, y, zoom, is3dMode) {
    return `https://tile.openstreetmap.de/${zoom}/${x}/${y}.png`
  },
  visible: true,
  zIndex: 1
}
const DemoTileOverlay = (props) => {
  return (
    <>
      <div style={{ width: '80%', height: '400px' }}>
        <MFMap
          options={{
            center: { lat: 16.077279, lng: 108.222275 },
            zoom: 16,
            controls: true
          }}
          accessKey={"d69ab3c4b70818de546a1b1bb15aeaa7"}
          version={"2.4"} >
          <MFTileOverlay
            getUrl={options.getUrl}
            zIndex={1}
          />
        </MFMap>
      </div>
    </>
  )
}

export default DemoTileOverlay;
