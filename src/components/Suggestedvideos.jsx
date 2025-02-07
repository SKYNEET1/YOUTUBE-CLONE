import React from 'react'
import { Link } from "react-router-dom";
import Time from "../Loader/Time";
import { BsFillCheckCircleFill } from "react-icons/bs";
function Suggestedvideos({video}) {
  return (
    <div>
    <Link to={`/video/${video?.videoId}`}>
        <div className="flex mb-3 ">
          {/*  thumbnails and time in sec and min */}
          <div className="relative h-48 md:h-20 xl:h-24 w-40 min-w-[168px] lg:w-40 lg:min-w-[128px] sl:w-[168px] md:rounded-xl hover:rounded-none duration-200 overflow-hidden">
            <img className="rounded-lg h-full w-full" src={video?.thumbnails[0].url} />
            {video.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>
        </div>
        {/* channel logo */}
        <div className="flex  space-x-2 mt-3">
          <div className="flex items-start ">
            <div className="flex h-8 w-8 rounded-full overflow-hidden  ">
              <img
                className="h-full w-full rounded-full overflow-hidden"
                src={video?.author?.avatar[0].url}
              />
            </div>
          </div>
          <div>
            <span className="text-sm font-bold line-clamp-2">
              {video?.title}
            </span>
            <span className="flex items-center font-semibold mt-2 text-[15px] text-gray-600">
              {video?.author?.title}
              {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                <BsFillCheckCircleFill className="text-gray-600 ml-1 text-[12px]" />
              )}
            </span>
            <div className="flex text-gray-600 text-[12px]">
              <span>{`${video?.stats?.views} views`}</span>
              <span className="flex text-[24px] leading-none font-bold relative top-[-10px] mx-1">
                .
              </span>
              <span>{video?.publishedTimeText}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Suggestedvideos