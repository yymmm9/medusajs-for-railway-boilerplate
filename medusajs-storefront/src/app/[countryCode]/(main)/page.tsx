import { Product } from "@medusajs/medusa"
import { Metadata } from "next"

import { getCollectionsList, getProductsList, getRegion } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { ProductCollectionWithPreviews } from "types/global"
import { cache } from "react"

export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

const getCollectionsWithProducts = cache(
  async (
    countryCode: string
  ): Promise<ProductCollectionWithPreviews[] | null> => {
    const { collections } = await getCollectionsList(0, 3)

    if (!collections) {
      return null
    }

    const collectionIds = collections.map((collection) => collection.id)

    await Promise.all(
      collectionIds.map((id) =>
        getProductsList({
          queryParams: { collection_id: [id] },
          countryCode,
        })
      )
    ).then((responses) =>
      responses.forEach(({ response, queryParams }) => {
        let collection

        if (collections) {
          collection = collections.find(
            (collection) => collection.id === queryParams?.collection_id?.[0]
          )
        }

        if (!collection) {
          return
        }

        collection.products = response.products as unknown as Product[]
      })
    )

    return collections as unknown as ProductCollectionWithPreviews[]
  }
)

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col justify-between w-full mb-3 h-[75vw] sm:h-auto basis-1/2">
          <div className="flex items-center w-full sticky top-15 justify-between p-5 lg:p-10">
            <div className="text-2xl lg:text-4xl">
              <p className="">labore commodo</p>
            </div>
            <div className="text-2xl lg:text-4xl">
              <p className="sticky top-5 ">labore commodo</p>
            </div>
          </div>
          <div className="flex items-center w-full justify-between p-5 lg:p-10">
            <div className="text-2xl lg:text-4xl">
              <p>labore commodo</p>
            </div>
            <div className="text-2xl lg:text-4xl">
              <p>labore commodo</p>
            </div>
          </div>
        </div>
        <div className="image bg-slate-400 size-full h-[400px] md:h-[50vw] basis-1/2"></div>
      </div>

      <div className="flex h-[600px] relative size-full">
        <img
          className="absolute inset-0 object-cover size-full"
          src="https://source.unsplash.com/random"
          alt=""
        />
        <div className="text relative p-5 lg:p-10 size-full text-4xl">
          <p className="sticky top-20 text-white ">Womens</p>
        </div>
        <div className="image bg-slate-400 size-full"></div>
      </div>

      <Hero />

      <div className="flex flex-col md:flex-row h-[600px]">
        <div className="text relative p-5 lg:p-10 size-full text-4xl basis-1/2">
          <p className="sticky top-20 ">Work shop</p>
        </div>
        <div className="image bg-slate-400 size-full basis-1/2"></div>
      </div>

      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
    </>
  )
}
