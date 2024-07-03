"use client"
import { formatter } from '@/lib/utils'
import React, { useEffect, useState } from 'react'

interface CurrencyProps {
    value?: number | string
}
export  function Currency({ value }: CurrencyProps) {
  
  const [mounted, setMounted] = useState(false)
  
  useEffect(function () {
    setMounted(true)
  }, [])
  
  if (!mounted) {
    return null
  }
  return (
    <div className='font-semibold'>
       {formatter.format(Number(value))}
    </div>
  )
}
