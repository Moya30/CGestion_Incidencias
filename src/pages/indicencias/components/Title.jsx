import React from 'react'

function Title({text}){
  return (
    <div className="flex ...">
    <div className="flex-none w-14 h-14 ..."></div>
    <div className="grow text-center text-3xl font-bold">
      {text}
    </div>
    <div className="flex-none w-14 h-14 ..."></div>
  </div>
  )
}
export default Title;
