import React, { useContext } from "react";
import { MiniCard } from "../Components/MiniCard";
import { DataContext } from '../App';
import { Helmet } from "react-helmet";
import { MiniCardConcept } from "../Components/MiniCardConcept";

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
      nombre: "org",
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
      nombre: "Latitud",
      valor: latitud,
    },
    {
      nombre: "Longitud",
      valor: longitud,
    },
  ];

  const Cardconcepts = [
    {
      icono: "",
      nombre: "Direccion (Ip):",
      concepto: "Una dirección IP (Internet Protocol) es como una dirección postal para tu dispositivo en Internet. Es una serie de números únicos que identifica tu dispositivo a otros dispositivos en la red, permitiendo que se comuniquen entre sí."
    },
    {
      icono: "",
      nombre: "Dirección IP pública:",
      concepto: "Es la dirección visible para el mundo exterior. Es la que se utiliza cuando accedes a Internet desde tu dispositivo."
    },
    {
      icono: "",
      nombre: "Dirección IP privada:",
      concepto: "Es la dirección que se utiliza dentro de una red local, como la de tu hogar u oficina. No es visible para el mundo exterior."
    },
    {
      icono: "",
      nombre: "Dirección IP Estatica:",
      concepto: "Es una dirección permanente que no cambia. Una dirección IP dinámica es una dirección temporal que se asigna a tu dispositivo cuando se conecta a la red."
    },
    {
      icono: "",
      nombre: "Dirección IP Dinamica:",
      concepto: "Es esencial para que tu dispositivo pueda comunicarse con otros dispositivos en Internet. Es como una dirección postal única que te permite acceder a todos los recursos y servicios disponibles en línea."
    },
    {
      icono: "",
      nombre: "VPN",
      concepto: "Brinda una conexión a internet más segura y privada, permitiéndote navegar con libertad y sin restricciones."
    },
  ]

  return (
    <div className="flex flex-col justify-center items-center">
      <Helmet>
        <title>ipinfo.lat - Informacion de mi IP publica</title>
        <meta name="description" content="Showme my IP - Informacion de mi IP publica" />
        <meta name="rating" content="General" />
        <link rel="canonical" href="https://ipinfo.lat/" />
        <meta name="keywords" content="ipinfo" />
      </Helmet>
      <div className="w-[620px] h-[570px] bg-cardgrande rounded-lg p-4 shadow-lg mt-[60px]">
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
            <h1 className="text-3xl text-textoblanco">{publicIpAddress ? publicIpAddress : (<h1>No data...</h1>)}</h1>
            <div className="bg-green-500 rounded-full px-1 py-1 w-[2px] shadow-md shadow-green-500"></div>
          </div>
          {/* array */}
          <div className="grid grid-cols-2 justify-items-center align-items-center">
            {contentCard.map((content) => {
              return (
                <MiniCard key={content.nombre} content={content} />
              )
            })}
          </div>
        </div>
      </div>

      {/* SECTIONS */}

      <div className='container mx-auto bg-cardgrande max-w-[1424px] h-[450px] mt-[60px] rounded-lg p-4 shadow-lg'>
        <div>
          

          <div className="grid grid-cols-3 justify-items-center align-items-center">
            {Cardconcepts.map((card) => {
              return (

                <MiniCardConcept key={card.nombre} card={card} />

              )
            })}

          </div>



        </div>


      </div>

    </div>
  );
};
