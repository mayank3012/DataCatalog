"use client"
import PageHeader from "@/app/componets/PageHeader"
import CatalogPageBody from "@/app/componets/catalog/CatalogPageBody";
import { useRouter } from 'next/navigation'

const page = ({
    params,
}: {
    params: { Category: string; };
}) => {
    return (
        <>
            <PageHeader pageHeading={params.Category} />
            <CatalogPageBody category={params.Category} />
        </>
    )
}

export default page