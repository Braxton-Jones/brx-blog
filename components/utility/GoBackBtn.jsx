'use client'  
import React from 'react'
import { useRouter } from 'next/navigation'


export default function GoBackBtn() {
  const router = useRouter()
  return (
    <button 
      onClick={() => router.back()}
      style={{
        background: 'hsl(274, 100%, 75%)',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1.5rem',
        padding: '.5rem',
        borderRadius: '5px',
        margin: '1rem 1rem',
        transition: 'all .3s ease',
      }}
  
      onMouseEnter={(e) => {
        e.target.style.background = 'hsl(274, 100%, 65%)';
        e.target.style.padding = '.5rem 1.5rem';
      }}
      onMouseLeave={(e) => {
        e.target.style.background = 'hsl(274, 100%, 75%)';
        e.target.style.padding = '.5rem';
      }}

    >
      {`Home`}
    </button>
  )
}
