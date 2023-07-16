'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import * as z from 'zod';


import { Modal } from '@/components/ui/modal';
import { useStoreModal } from '@/hooks/use-store-modal';

const formSchema = z.object({
  name:z.string().min(1),
})

export const StoreModal=()=> {
    const storeModal = useStoreModal()
  const form = useForm<z.infer<typeof formSchema>({
    resolver: zodResolver(formSchema),
  })
    return (
    <Modal 
    title='Create Store'
    description='Add a new store to manage products and categories'
    isOpen={storeModal.isOpen}
    onClose={storeModal.onClose}>
    future create store form</Modal>
  )
};
