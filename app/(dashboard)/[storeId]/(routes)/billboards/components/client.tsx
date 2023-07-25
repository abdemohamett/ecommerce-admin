"use client"

import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import { Plus } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'

import { BillboardColumn, columns } from './columns'
import { DataTable } from '@/components/ui/data-table'
import ApiList from '@/components/ui/api-list'

interface BillboardsClientProps{
  data: BillboardColumn[]
}

const BillboardsClient: React.FC<BillboardsClientProps> = ({
  data
}) => {
  const params = useParams()
  const router = useRouter()
  return (
    <>
    <div className="flex items-center justify-between mb-3">
    <Heading
     title={`Billboards (${data.length})`}
     description='Manage billboards for your store'
    />
    <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
      <Plus className='mr-2 h-4 w-4'/>
      Add New
    </Button>
    </div>
    <Separator className='my-4'/>
    <DataTable searchKey='label' columns={columns} data={data}/>
    <Heading title="API" description="API Calls for Billboards" />
    <Separator className='my-4'/>
    <ApiList entityName="billboards" entityIdName="billboardId"/>
    </>
  )
}

export default BillboardsClient