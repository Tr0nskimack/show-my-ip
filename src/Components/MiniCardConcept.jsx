import React from 'react'

export const MiniCardConcept = ({card}) => {
  return (
    <div className="bg-cardinf w-[350px] h-[160px] rounded-xl shadow-md p-3 mt-6">
      <div className="flex items-center gap-1">
        <div className="bg-cyan-500 px-[3px] py-[3px] w-[1px] shadow-2xl shadow-green-400 hover:shadow-green-600"></div>
        <h2 className="uppercase text-letracardgrande font-semibold">
          {card.nombre}
        </h2>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <p className="text-[14px]  text-letracardgrande font-light">
        {card.concepto}
        </p>
      </div>
    </div>
  )
}
   