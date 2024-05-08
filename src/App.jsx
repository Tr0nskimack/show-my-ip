import React, { useEffect, useState, createContext  } from "react";
import axios from "axios";
import {
  Outlet,
  RouterProvider,
  ScrollRestoration,
  createBrowserRouter,
} from "react-router-dom";
import { Header } from "./Components/Header";
import { Home } from "./Pages/Home";


export const DataContext = createContext();


const App = () => {
  
  const Layout = () => {
    const [publicIpAddress, setPublicIpAddress] = useState(null);
    const [nameprovider, setNameprovider] = useState(null);
    const [countryprovider, setcountryProvider] = useState(null);
    const [dataApi, setDataApi] = useState(null)
    const [city, setCity] = useState(null)
    const [region, setRegion] = useState(null)
    const [timezone, setTimezone] = useState(null)
    const [latitud, setLatitud] = useState(null)
    const [longitud, setLongitud] = useState(null)
    const [regionName, setRegionName] = useState(null)
    const [as, setAs] = useState(null)

    const fetchPublicIP = async () => {
      try {
        const response = await axios.get("http://ip-api.com/json/?fields=61439");
        /* console.log(response.data); */
        setNameprovider(response.data.isp)
        setPublicIpAddress(response.data.query)
        setcountryProvider(response.data.country)
        setCity(response.data.city)
        setRegion(response.data.region)
        setTimezone(response.data.timezone)
        setRegionName(response.data.regionName)
        setAs(response.data.as)
        

        setLatitud(response.data.lat)
        setLongitud(response.data.lon)
        /* setDataApi(response.data); */
      } catch (error) {
        console.error("Error fetching public IP:", error);
      }
    };
  
    useEffect(() => {
      fetchPublicIP(); //Ejecuta la funcion
    }, []);
    


   
  
   

    return (
      <DataContext.Provider value = {{dataApi, publicIpAddress, nameprovider, regionName, countryprovider,city,region,timezone,latitud,longitud, as}}>
        
        <Outlet />
      </DataContext.Provider>
    );
  };


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);
  

  return (
    <div className="h-screen bg-[#555557]">
      <RouterProvider router ={router} />
    </div>
  );
};

export default App;
