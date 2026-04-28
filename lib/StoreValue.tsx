"use client"

import React from 'react'

export default function StoreValue({ execute }: any) {
  return (
    <div className="flex items-center justify-center min-h-screen">
    <button 
        onClick={()=> execute()}
        className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition-all active:scale-95">
        Store Value
    </button>
    </div>
  )
}
