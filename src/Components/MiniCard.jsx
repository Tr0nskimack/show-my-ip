import React, {useContext} from "react";
import { DataContext } from '../App';

export const MiniCard = ({content}) => {
    const { publicIpAddress, dataApi, nameprovider, countryprovider, regionName,city,region,timezone,latitud,longitud, as } = useContext(DataContext);
    
  return (
    <div className="bg-cardinf w-[250px] h-[80px] rounded-xl shadow-md p-3 mt-6">
      <div className="flex items-center gap-1">
        <div className="bg-cyan-500 px-[3px] py-[3px] w-[1px] shadow-2xl shadow-green-400 hover:shadow-green-600"></div>
        <h2 className="uppercase text-letracardgrande font-semibold">
          {content.nombre}
        </h2>
      </div>
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-semibold text-textoblanco">{content.valor}</h1>
      </div>
    </div>
  );
};
