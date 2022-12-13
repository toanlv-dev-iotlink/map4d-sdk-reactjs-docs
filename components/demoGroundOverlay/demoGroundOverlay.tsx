import { MFGroundOverlay, MFMap } from "react-map4d-map"

let options = {
  getUrl: function (x, y, zoom, is3dMode) {
    return `https://a.tile.opentopomap.org/${zoom}/${x}/${y}.png`
  },
  bounds: [{ lng: 108.22125434875488, lat: 16.059547034047146 }, { lng: 108.23086738586424, lat: 16.075630202564316 }] as any,
  override: true
}
const DemoGroundOverlay = (props) => {
  return (
    <>
      <div style={{ width: '100%', height: '400px' }}>
        <MFMap
          options={{
            center: { lat: 16.077279, lng: 108.222275 },
            zoom: 16,
            controls: true
          }}
          accessKey={"d69ab3c4b70818de546a1b1bb15aeaa7"}
          version={"2.4"} >
          <MFGroundOverlay
            getUrl={options.getUrl}
            bounds={options.bounds}
            override={options.override}
          />
        </MFMap>
      </div>
    </>
  )
}

export default DemoGroundOverlay;
