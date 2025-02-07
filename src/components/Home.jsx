import React from "react";
import Sidebar from "./Sidebar";
import Video from "./Video";
import { useprovider } from "../Contextapi/Provider";
import Listheaderitems from "./Listheaderitems";
function Home() {
  const { data,loading } = useprovider();
  console.log(data);
  return (
    <div className="flex mt-20">
      <Sidebar />
      <div className="h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden">
        {/* h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden for scrolling */}
        <Listheaderitems/>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-5 lg:grid-cols-3 xl:grid-cols-4 ">
        {!loading && data.map((item) => {
            if(item.type !== 'video') return false;
         return <Video key={item.id} video={item?.video} />;
          // key is a special React prop used when rendering lists. It helps React efficiently update/re-render components. item.id is a unique identifier for each Video component.
        //   item?.video uses optional chaining (?.) to prevent errors if item is null or undefined.
        })}
      </div>
      </div>
    </div>
  );
}

export default Home;
