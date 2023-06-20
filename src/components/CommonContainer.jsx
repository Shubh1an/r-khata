import React from 'react'

const CommonContainer = ({children,className}) => {
  return (
    <div className={`w-full py-8 lg:px-[12%] md:px-[8%] ${className}`}>{children}</div>
  )
}

export default CommonContainer