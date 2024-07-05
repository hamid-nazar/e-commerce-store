"use client"
import React from 'react'
import { X } from 'lucide-react'
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import { IconButton } from './IconButton'

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  return (
    <Transition show={isOpen} appear as={React.Fragment}>

        <Dialog 
        as='div' 
        className={'relative z-10'}
        onClose={onClose}>

            <div className='fixed inset-0 bg-black bg-opacity-50'/>

                <div className='fixed inset-0 overflow-y-auto'>

                    <div className='min-h-full flex items-center justify-center p-4 text-center'>

                        <TransitionChild
                        as={React.Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0 scale-95'
                        enterTo='opacity-100 scale-100'
                        leave='ease-in duration-200'>

                            <DialogPanel className={
                                `w-full max-w-3xl overflow-hidden 
                                rounded-lg text-left align-middle`}>

                                    <div className={`
                                        relative w-full flex items-center overflow-hidden
                                        bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8
                                        md:p-6 lg:p-8`}>

                                            <div className='absolute top-4 right-4'>
                                                <IconButton
                                                onClick={onClose}
                                                icon={<X size={15}/>}/>
                                            </div>
                                            
                                            {children}
                                    </div>
                                
                            </DialogPanel>

                        </TransitionChild>

                    </div>
                </div>
        </Dialog>
    </Transition>
  )
}
