// "use client"
// import { Plus } from "lucide-react";
// import { useParams, useRouter } from "next/navigation";

// import { Button } from "@/components/ui/button";
// import { DataTable } from "@/components/ui/data-table";
// import { Heading } from "@/components/ui/heading";
// import { Separator } from "@/components/ui/separator";
// import { BillboardColumn, columns } from "./columns";

// interface BillboardClientProps {
//     data: BillboardColumn[];

// }

// export const BillboardClient :React.FC<BillboardClientProps>= ({
//     data
// })=>{
//     const router = useRouter();
//     const params =useParams();

//     return(
//         <>
//         <div className="flex items-center justify-between ml-5">
//            <Heading
//            title={`BillBoards (${data.length})`}
//            description="Manage billboards for your store"
//            />
//            <Button onClick={() => router.push(`/${params.storeid}/billboards/new`)} className="mr-5">
//             <Plus className="h-4 w-4 mr-2"/>
//             Add New
//            </Button>
//         </div>
//            <Separator/>
//            <DataTable columns={columns} data={data}/>
//         </>
//     )
// }

"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
//import { ApiList } from "@/components/ui/api-list";

import { BillboardColumn, columns } from "./columns";

interface BillboardClientProps {
  data: BillboardColumn[];
}

export const BillboardClient: React.FC<BillboardClientProps> = ({
  data
}) => {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={`Billboards (${data.length})`} description="Manage billboards for your store" />
        <Button onClick={() => router.push(`/${params.storeid}/billboards/new`)}>
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable  columns={columns} data={data} />
      {/* <Heading title="API" description="API Calls for Billboards" /> */}
      {/* //<Separator /> */}
      {/* <ApiList entityName="billboards" entityIdName="billboardId" /> */}
    </>
  );
};