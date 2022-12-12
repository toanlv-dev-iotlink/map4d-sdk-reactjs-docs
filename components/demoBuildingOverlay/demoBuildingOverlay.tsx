import React from "react"
import { MFMap, MFBuildingOverlay } from "react-map4d-map"

let options = {
  getUrl: function (x, y, zoom) {
    return `rest-api-get-building-from-tile-coordinate`
  },
  parserData: function(response) {
    let buildingDatas = []
    /**
     * parser data from response ...
     */
    return buildingDatas
  },
  prefixId: "prefix",
  visible: true
}
const DemoBuildingOverlay = () => {

  return (
    <>
      <div style={{ width: '100%', height: '400px' }}>
        <MFMap
          options={{
            center: { lat: 16.042590223437674, lng: 108.2295094493915 },
            zoom: 16
          }}
          accessKey={"d69ab3c4b70818de546a1b1bb15aeaa7"}
          version={"2.4"} >
          {/* <MFBuildingOverlay
            getUrl={options.getUrl}
            parserData={options.parserData}
            prefixId={options.prefixId}
          /> */}
        </MFMap>
      </div>
    </>
  )
}

DemoBuildingOverlay.propTypes = {
};

export default DemoBuildingOverlay