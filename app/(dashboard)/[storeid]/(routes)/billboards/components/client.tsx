"use client"
import { Plus } from "lucide-react"
import { useParams, useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"

export const BillBoardClient = ()=>{
    const router = useRouter();
    const params =useParams();

    return(
        <>
        <div className="flex items-center justify-between ml-5">
           <Heading
           title="BillBoards (0)"
           description="Manage billboards for your store"
           />
           <Button onClick={() => router.push(`/${params.storeid}/billboards/new`)} className="mr-5">
            <Plus className="h-4 w-4 mr-2"/>
            Add New
           </Button>
        </div>
           <Separator/>
        </>
    )
}