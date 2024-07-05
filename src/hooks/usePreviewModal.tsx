import { Product } from "@/types";
import {create} from "zustand";


interface PreviewModalState {
    isOpen: boolean;
    data: Product | undefined;
    onOpen(data: Product): void;
    onClose(): void;
}


const usePreviewModal = create<PreviewModalState>(function (set) {
    return {
        isOpen: false,
        data: undefined,
        onOpen:function (data: Product) {
            set({isOpen: true, data: data})
        },
        onClose: function () {
            set({isOpen: false, data: undefined})
        }
    }
});

export default usePreviewModal;