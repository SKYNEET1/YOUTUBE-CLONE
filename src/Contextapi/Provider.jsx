import { createContext, useEffect, useState } from "react";
import { fetchdata } from "../utils/Rapidapi";
import { useContext } from "react";
export const Contextprovider = createContext();
// creating a context

export default function contextprovider({ children }) {
  const [loading, setloading] = useState(false);
  // to use it globaly through contextprovider
  const [data, setdata] = useState([]);
  // data is a variable and setdata is a function.
  const [value, setvalue] = useState("New");

  // we use it to show some changes in the app.
  useEffect(() => {
    fetchalldata(value);
  }, [value]);

  const fetchalldata = (query) => {
    setloading(true);
    fetchdata(`search/?q=${query}`).then(({contents}) => {
      // backticks  - allowing string interpolation.
      // .then() is a promise handler, meaning it runs when fetchdata successfully fetches data.
      // { contents } means we are extracting only the contents property from the response object.
      // res is the response from the api.
      setdata(contents);
      setloading(false);
    });
  };
  return(
    <Contextprovider.Provider value={{ data, loading, value, setvalue }}>
      {children}
    </Contextprovider.Provider>
  )
}

export const useprovider =() => useContext(Contextprovider);
// here we are passing the context to the component through custome hook name useprovider.