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
import { Footer } from "./Components/Footer";


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
        const response = await axios.get("http://ip.guide");
        console.log(response.data);
        setNameprovider(response.data.network.autonomous_system.name)
        setPublicIpAddress(response.data.ip)
        setcountryProvider(response.data.location.country)
        setCity(response.data.location.city)
        setRegion(response.data.network.autonomous_system.rir)
        setTimezone(response.data.location.timezone)
        setRegionName(response.data.regionName)
        setAs(response.data.network.autonomous_system.asn)
        

        setLatitud(response.data.location.latitude)
        setLongitud(response.data.location.longitude)
        /* setDataApi(response.data); */
      } catch (error) {
        console.error("Error fetching public IP:", error);
      }
    };
  
    useEffect(() => {
      fetchPublicIP(); //Ejecuta la funcion
    }, []);
    


   
  
   

    return (
      <div >

      <DataContext.Provider value = {{dataApi, publicIpAddress, nameprovider, regionName, countryprovider,city,region,timezone,latitud,longitud, as}}>
        <Header />
        <Outlet />
        <Footer/>

        
      </DataContext.Provider>
      </div>
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
    <div className="min-h-screen bg-[#555557] ">
      <RouterProvider router ={router} />
    </div>
  );
};

export default App;
