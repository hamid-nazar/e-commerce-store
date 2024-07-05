"use client"
import { PreviewModal } from '@/components/ui/PreviewModal'
import React, { useEffect, useState } from 'react'

export default function ModalProvider() {

    const[isMounted, setIsMounted] = useState(false)
    
    useEffect(function () {
      setIsMounted(true)
    }, [])

    if (!isMounted) {
      return null
    }


  return (
    <>
    <PreviewModal />
    </>
  )
}
