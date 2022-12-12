import React, { useState } from "react"
import { MFMap, MFPOI } from "react-map4d-map"

const DemoPOI = (props) => {

    const [position, setPosition] = useState({lat: 10.774434, lng: 106.701727})

    return (
        <>
            <div style={{ width: '100%', height: '400px' }}>
                <MFMap
                    options={{
                        center: { lat: 10.774434, lng: 106.701727 },
                        zoom: 18,
                        controls: true
                    }}
                    accessKey={'d69ab3c4b70818de546a1b1bb15aeaa7'}
                    version={"2.4"} >
                    <MFPOI title={"Demo POI cafe"} type={"cafe"} position={position} />
                </MFMap>
            </div>
        </>
    )
}

DemoPOI.propTypes = {
};

export default DemoPOI