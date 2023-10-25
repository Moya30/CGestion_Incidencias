import React from 'react'

function Title({text}){
  return (
    <div class="flex ...">
    <div class="flex-none w-14 h-14 ..."></div>
    <div class="grow text-center text-3xl font-bold">
      {text}
    </div>
    <div class="flex-none w-14 h-14 ..."></div>
  </div>
  )
}
export default Title;
