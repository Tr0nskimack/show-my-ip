import React, { useContext } from "react";
import { MiniCard } from "../Components/MiniCard";
import { DataContext } from '../App';
import { Helmet } from "react-helmet";

export const Home = () => {
  const { publicIpAddress, dataApi, nameprovider, countryprovider, regionName, city, region, timezone, latitud, longitud, as } = useContext(DataContext);
  const contentCard = [
    {
      nombre: "Pais",
      valor: countryprovider,
      color: "bg-cyan-500"
    },
    {
      nombre: "Estado",
      valor: regionName,
    },
    {
      nombre: "Ciudad",
      valor: city,
    },
    {
      nombre: "region",
      valor: region,
    },
    {
      nombre: "Zona horaria",
      valor: timezone,
    },
    {
      nombre: "As",
      valor: as,
    },
    {
      nombre: "Longitud",
      valor: longitud,
    },
    {
      nombre: "Latitud",
      valor: latitud,
    },
  ];

  return (
    <div className="h-screen flex justify-center items-center">
      <Helmet>
        <title>showme my ip - Informacion de mi IP publica</title>
        <meta name="description" content="Showme my IP - Informacion de mi IP publica" />
        <meta name="rating" content="General" />
        <link rel="canonical" href="https://app-letters-convert.vercel.app/" />
        <meta name="keywords" content="Show me my Ip" />
      </Helmet>
      <div className="w-[620px] h-[570px] bg-cardgrande rounded-lg p-4 shadow-lg">
        <header className="flex justify-between items-center">
          <h1 className="text-letracardgrande font-semibold uppercase text-[12px]">
            Proveedor de Servicio
          </h1>
          <span className="text-letracardgrande font-semibold uppercase text-[12px]">
            {nameprovider}
          </span>
        </header>

        <div className="my-3">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl text-textoblanco">{publicIpAddress}</h1>
            <div className="bg-green-500 rounded-full px-1 py-1 w-[2px] shadow-2xl shadow-green-400 hover:shadow-green-600"></div>
          </div>
          {/* array */}
          <div className="grid grid-cols-2 justify-items-center align-items-center ">
            {contentCard.map((content) => {
              return (
                <MiniCard key={content.nombre} content={content} />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
