import React from "react"
import { MFMap, MFPOIOverlay } from "react-map4d-map"

let options = {
  getUrl: function (x, y, zoom) {
    return `https://poi-random.herokuapp.com/poi/${zoom}/${x}/${y}`
  },
  parserData: function (response) {
    let data = JSON.parse(response)
    let places = data.pois || []
    let poiDatas = []
    places.forEach(place => {
      let poiData = {
        ...place,
        titleColor: "#0000FF",
        type: "park"
      }
      poiDatas.push(poiData)
    })
    return poiDatas
  },
  prefixId: "poi-overlay-"
}
const DemoPOIOverlay = () => {

  const onMapReady = (map) => {
    map.setPOIsEnabled(false)
  }

  return (
    <>
      <div style={{ width: '100%', height: '400px' }}>
        <MFMap
          onMapReady={onMapReady}
          options={{
            center: { lat: 16.042590223437674, lng: 108.2295094493915 },
            zoom: 16
          }}
          accessKey={"d69ab3c4b70818de546a1b1bb15aeaa7"}
          version={"2.4"} >
          <MFPOIOverlay
            getUrl={options.getUrl}
            parserData={options.parserData}
            prefixId={options.prefixId}
          />
        </MFMap>
      </div>
    </>
  )
}

DemoPOIOverlay.propTypes = {
};

export default DemoPOIOverlay