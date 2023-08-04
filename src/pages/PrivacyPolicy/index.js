import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const PrivacyPolicy = () => {
    const [privacyPolicy,setPrivacyPolicy]= useState('')
    useEffect(()=>{
       getPolicy()
    },[])
    const getPolicy=async()=>{
        const response = await fetch("https://rkhatatermsandcondition.moreyeahs.in/");
  const privacyPolicy = await response.text();
  setPrivacyPolicy(privacyPolicy)
  console.log(privacyPolicy);
    }
  return (
   <div dangerouslySetInnerHTML={{__html:privacyPolicy}}/>
  )
}

export default PrivacyPolicy