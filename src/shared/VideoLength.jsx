import React from "react";
import moment from "moment";
const VideoLength=({time})=>{
const videoLengthInSeconds=moment()
.startOf("day")
.seconds(time)
.format("H:mm:ss");

return (
<div className="absolute bottom-2 rigth-2 bg-black text-white text-xs rounded-md">{videoLengthInSeconds} </div>

)


};
export default VideoLength;