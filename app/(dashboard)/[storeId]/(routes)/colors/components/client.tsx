"use client"

import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import { Plus } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'

import { ColorColumn, columns } from './columns'
import { DataTable } from '@/components/ui/data-table'
import ApiList from '@/components/ui/api-list'

interface ColorsClientProps{
  data: ColorColumn[]
}

const ColorsClient: React.FC<ColorsClientProps> = ({
  data
}) => {
  const params = useParams()
  const router = useRouter()
  return (
    <>
    <div className="flex items-center justify-between mb-3">
    <Heading
     title={`Colors (${data.length})`}
     description='Manage colors for your store'
    />
    <Button onClick={() => router.push(`/${params.storeId}/colors/new`)}>
      <Plus className='mr-2 h-4 w-4'/>
      Add New
    </Button>
    </div>
    <Separator className='my-4'/>
    <DataTable searchKey='name' columns={columns} data={data}/>
    <Heading title="API" description="API Calls for Colors" />
    <Separator className='my-4'/>
    <ApiList entityName="colors" entityIdName="colorId"/>
    </>
  )
}

export default ColorsClient