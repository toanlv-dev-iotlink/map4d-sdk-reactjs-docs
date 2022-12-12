import { useState } from "react"
import { MFMap, MFMarker } from "react-map4d-map"

const DemoMarker = () => {

  const [post, setPost] = useState({ lat: 16.068500, lng: 108.221500 })
  return (
    <>
      <div style={{ width: '100%', height: '300px' }}>
        <MFMap
          options={{
            center: post,
            zoom: 15,
          }}
          version={"2.4"}
          accessKey={"d69ab3c4b70818de546a1b1bb15aeaa7"}
        >
          <MFMarker
            position={post}
          />
        </MFMap>
      </div>
    </>
  )
}

export default DemoMarker
