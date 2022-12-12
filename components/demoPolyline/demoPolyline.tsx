import { useState } from "react"
import { MFMap, MFPolyline } from "react-map4d-map"

const center = { lat: 10.773201, lng: 106.700147 }
const DemoPolyline = () => {

  const [path, setPath] = useState([
    [106.699380, 10.772431],
    [106.700147, 10.773201],
    [106.700763, 10.771783],
    [106.701901, 10.772302],
    [106.701493, 10.773267],
    [106.702835, 10.773599]
  ] as any)

  return (
    <>
      <div style={{ width: '100%', height: '300px' }}>
        <MFMap
          options={{
            center: center,
            zoom: 17,
            controls: true
          }}
          accessKey={"d69ab3c4b70818de546a1b1bb15aeaa7"}
          version={"2.3"} >
          <MFPolyline strokeColor={"#ff0000"} strokeWidth={10} path={path} />
        </MFMap>
      </div>
    </>
  )
}

export default DemoPolyline;
