import getCurrentUser from "@/app/actions/getCurrentUser"
import prismadb from "@/lib/prismadb"

import { redirect } from "next/navigation"
import SettingsForm from "./components/settings-form"

interface SettingsProps {
  params: {
    storeId: string
  }
}

const Settings: React.FC<SettingsProps> = async ({
  params
}) => {
  const user = await getCurrentUser()
  const userId = user?.id
  if(!userId){
    redirect('/auth')
  }

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId
    }
  });

  if(!store){
    redirect('/')
  }

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
      <SettingsForm initialData={store}/>
      </div>
    </div>
  )
}

export default Settings