"use client"

import { ShoppingBag } from "lucide-react"
import Button from "./ui/Button"
import { useEffect, useState } from "react"
import useCart from "@/hooks/useCart"
import { useRouter } from "next/navigation"

export function NavbarActions() {
    const [mounted, setMounted] = useState(false)

    const router = useRouter();

    useEffect(function () {
      setMounted(true)
    }, [])

    const cart = useCart();
    const { items, add, remove, removeAll } = cart;
    
    if (!mounted) {
      return null
    }
    
  return (
    <div className="ml-auto flex items-center gap-x-4">
       <Button 
       onClick={() => router.push('/cart')}
       className="flex itcems-center rounded-full bg-black px-4 py-2">
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {items.length}
        </span>
       </Button>
    </div>
  )
}
