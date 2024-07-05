import { Product } from "@/types";
import {create} from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "react-hot-toast";


interface CartState {
    items: Product[]
    add(product: Product): void
    remove(product: Product): void
    removeAll(): void
}


const useCart = create(persist<CartState>(function (set, get) {
    return {
        items: [],
        add(product) {
            const item = get().items.find((item) => item.id === product.id);
            if(item) {
                toast.error(`${product.name} already in cart`);
                return;
            }
            set((state) => ({items: [...state.items, product]}))

            toast.success(`${product.name} added to cart`)
        },
        remove(product) {
            set((state) => ({items: state.items.filter((item) => item.id !== product.id)}))

            toast.success(`${product.name} removed from cart`)
        },
        removeAll() {
            set({items: []})
        }
    }
}, {
    name: "cart",
    storage: createJSONStorage(function () {
        return localStorage;
    }),
}));

export default useCart;