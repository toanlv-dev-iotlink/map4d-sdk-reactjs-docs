import { useState } from "react"
import { MFCircle, MFMap } from "react-map4d-map"

const DemoCircle = () => {

  const [post, setPost] = useState({ lat: 10.773201, lng: 106.700147 })
  const [radius, setRadius] = useState(10)

  return (
    <>
      <div style={{ width: '100%', height: '300px' }}>
        <MFMap
          options={{
            center: post,
            zoom: 20,
            controls: true
          }}
          accessKey={"d69ab3c4b70818de546a1b1bb15aeaa7"}
          version={"2.4"} >
          <MFCircle radius={radius} center={post}></MFCircle>
        </MFMap>
      </div>
    </>
  )
};

export default DemoCircle;
