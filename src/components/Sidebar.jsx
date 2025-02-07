import React from "react";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdHistory, MdWatchLater, MdMusicNote } from "react-icons/md";
import { PiUserSquareThin } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { MdOutlineWatchLater } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { GiLinkedRings } from "react-icons/gi";
import { GrLinkPrevious } from "react-icons/gr";
import { LiaGhostSolid } from "react-icons/lia";

function Sidebar() {
  // as the sidebar items are soo much and if we do mannually then it will take so much time so we will use array and map function to render all the items
  const sidebarItems = [
    {
      id: 1,
      name: "Home",
      icon: <GoHome />,
    },
    {
      id: 2,
      name: "Shorts",
      icon: <SiYoutubeshorts />,
    },
    {
      id: 3,
      name: "Subscriptions",
      icon: <MdOutlineSubscriptions />,
    },
  ];

  const sidebarItems2 = [
    {
      id: 1,
      name: "Your Channel",
      icon: <GoHome />,
    },
    {
      id: 2,
      name: "History",
      icon: <SiYoutubeshorts />,
    },
    {
      id: 3,
      name: "Playlists",
      icon: <MdOutlineSubscriptions />,
    },
    {
        id: 4,
        name: "Your Videos",
        icon: <BiVideo />,
      },
      {
        id: 5,
        name: "Watch Later",
        icon: <MdWatchLater />,
      },
      {
        id: 6,
        name: "Liked Videos",
        icon: <GrLinkPrevious />,
      },
  ];

  const sidebarItems3 = [
    {
      id: 1,
      name: "Trending",
      icon: <SiTrendmicro />,
    },
    {
      id: 2,
      name: "Shoping",
      icon: <HiOutlineShoppingBag />,
    },
    {
      id: 3,
      name: "Music",
      icon: <MdMusicNote />,
    },
    {
        id: 4,
        name: "Films",
        icon: <PiFilmSlateLight />,
      },
      {
        id: 5,
        name: "Live",
        icon: <GiLinkedRings />,
      },
      {
        id: 6,
        name: "Gaming",
        icon: <SiYoutubegaming />,
      },
      {
        id: 7,
        name: "News",
        icon: <FaRegNewspaper />,
      },
      {
        id: 8,
        name: "Sports",
        icon: <TfiCup />,
      },
      {
        id: 9,
        name: "Courses",
        icon: <SiStylelint />,
      },
      {
        id: 10,
        name: "Fashion & Beauty",
        icon: < PiLightbulbLight/>,
      },
      {
        id: 11,
        name: "Podcasts",
        icon: <MdPodcasts />,
      },
  ];

  const sidebarItems4 = [
    {
      id: 1,
      name: "Youtube Premium",
      icon: <FaYoutube />,
    },
    {
      id: 2,
      name: "Youtube Studio",
      icon: <SiYoutubestudio />,
    },
    {
      id: 3,
      name: "Youtube Music",
      icon: <SiYoutubemusic />,
    },
    {
      id: 4,
      name: "Youtube Kids",
      icon: <SiYoutubekids />,
    }
    
  ]
  return (
    <div className="px-3 md:w-[23%] w-[35%]  h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden ">
      <div className="space-y-3 items-center  border-b pb-3 border-gray-400">
        {sidebarItems.map((items) => {
          return (
            <div key={items.id} className="flex items-center space-x-6 p-1 hover:bg-gray-300 duration-300 rounded-xl cursor-pointer">
              <div>{items.icon}</div>
              <span>{items.name}</span>
            </div>
          );
        })}
      </div>



      <div className="space-y-3 items-center  border-b pb-3 border-gray-400 mt-4">
        <div className="flex items-center space-x-2 px-1 cursor-pointer">
            <h2 className="font-bold hidden md:flex">You</h2>
            <FaChevronRight/>
        </div>
        {sidebarItems2.map((items) => {
          return (
            <div key={items.id} className="flex items-center space-x-6 p-1 hover:bg-gray-300 duration-300 rounded-xl cursor-pointer">
              <div>{items.icon}</div>
              <span>{items.name}</span>
            </div>
          );
        })}
      </div>




      <div className="space-y-3 items-center mt-4 pb-3 border-b  border-gray-400">
        <div className="flex items-center space-x-2 px-1 cursor-pointer">
            <h2 className="font-bold hidden md:flex">Explore</h2>
            <FaChevronRight/>
        </div>
        {sidebarItems3.map((items) => {
          return (
            <div key={items.id} className="flex items-center space-x-6 p-1 hover:bg-gray-300 duration-300 rounded-xl cursor-pointer">
              <div>{items.icon}</div>
              <span>{items.name}</span>
            </div>
          );
        })}
      </div>




      <div className="space-y-3 items-center mt-4 pb-3 border-b  border-gray-400">
        <div className="flex items-center space-x-2 px-1 cursor-pointer">
            <h2 className="font-bold hidden md:flex ">More from Youtube</h2>
            <FaChevronRight/>
        </div>
        {sidebarItems4.map((items) => {
          return (
            <div key={items.id} className="flex items-center space-x-6 p-1 hover:bg-gray-300 duration-300 rounded-xl cursor-pointer">
              <div className="text-red-600 text-xl cursor-pointer">{items.icon}</div>
              <span>{items.name}</span>
            </div>
          );
        })}
      </div>
      <div className="mt-5 hidden md:flex flex-col">
        <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold text-gray-500 ">About Press Copyright </span>
        <span className="text-xs font-semibold text-gray-500 "> Contact us Creators </span>
        <span className="text-xs font-semibold text-gray-500 "> Advertise Developers </span>
        </div>
        <div className="mt-4 flex flex-col ">
        <span className="text-xs font-semibold text-gray-500 "> Terms Privacy Policy & Safety </span>
        <span className="text-xs font-semibold text-gray-500 "> How YouTube works </span>
        <span className="text-xs font-semibold text-gray-500 "> Test new features</span>
        </div>
      </div>

      <div className="mt-5 hidden md:flex">
        <p className="text-xs text-gray-600">© 2024 Skyneet1 vlog</p>
      </div>
    </div>
  );
}

export default Sidebar;
