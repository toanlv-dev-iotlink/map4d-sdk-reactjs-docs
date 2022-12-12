import React from "react"
import { MFImageOverlay, MFMap } from "react-map4d-map"

let options = {
  url: `https://cdn.glitch.com/4c9ebeb9-8b9a-4adc-ad0a-238d9ae00bb5%2Fmdn_logo-only_color.svg?1535749917189`,
  bounds: [{ lng: 108.214421, lat: 16.061733 }, { lng: 108.23086738586424, lat: 16.075630202564316 }] as any,
  zIndex: 1
}
const DemoImageOverlay = () => {
  return (
    <>
      <div style={{ width: '100%', height: '400px' }}>
        <MFMap
          options={{
            center: { lat: 16.077279, lng: 108.222275 },
            zoom: 13,
            controls: true
          }}
          accessKey={"d69ab3c4b70818de546a1b1bb15aeaa7"}
          version={"2.4"} >
          <MFImageOverlay
            url={options.url}
            bounds={options.bounds}
            zIndex={options.zIndex}
          />
        </MFMap>
      </div>
    </>
  )
}
export default DemoImageOverlay;
