import getCurrentUser from "@/app/actions/getCurrentUser";
import Navbar from "@/components/navbar";
import prismadb from "@/lib/prismadb";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
    children,
    params
}: {
   children: React.ReactNode,
   params: {storeId: string}
}){

    const user = await getCurrentUser();
    const userId = user?.id

    if(!userId){
        redirect('/auth')
    }

    const store = await prismadb.store.findFirst({
        where: {
            id: params.storeId,
            userId
        }
    })

    if(!store){
        redirect('/')
    }

    return(
      <>
       <Navbar/>
       {children}
      </>
    )
}