"use client"

import { ShoppingBag } from "lucide-react"
import Button from "./ui/Button"
import { useEffect, useState } from "react"

export function NavbarActions() {
    const [mounted, setMounted] = useState(false)

    useEffect(function () {
      setMounted(true)
    }, [])
    
    if (!mounted) {
      return null
    }
    
  return (
    <div className="ml-auto flex items-center gap-x-4">
       <Button className="flex itcems-center rounded-full bg-black px-4 py-2">
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">0</span>
       </Button>
    </div>
  )
}
