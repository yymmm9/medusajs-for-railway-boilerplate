import { Product } from "@medusajs/medusa"
import { Metadata } from "next"

import { getCollectionsList, getProductsList, getRegion } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import { ProductCollectionWithPreviews } from "types/global"
import { cache } from "react"
import { cva } from "class-variance-authority"

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

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="basis-1/2 flex flex-col justify-between w-full mb-3 h-[75vw] sm:h-auto">
        <div className="flex items-center w-full justify-between p-3 lg:p-6 sticky top-10">
          <h1 className="text-3xl">Labore commodo</h1>
          <h1 className="text-3xl">Labore commodo</h1>
        </div>
        <div className="flex items-center w-full justify-between p-3 lg:p-6">
          <h1 className="text-3xl">Labore commodo</h1>
          <h1 className="text-3xl">Labore commodo</h1>
        </div>
      </div>
      <div className="basis-1/2 image bg-slate-400 size-full h-[400px] md:h-[50vw]"></div>
    </div>
  )
}
const DisplayCategorySlider = () => {
  return (
    <>
      <div className="mb-3 h-[75vw] sm:h-[60vw] md:h-[25vw]">
        <div className="flex-col justify-between md:justify-normal h-full md:flex-row flex p-3 lg:p-6 gap-5">
          <div className="basis-1/2 text size-full text-3xl sticky top-5">
            <p className="">irure incididunt</p>
          </div>
          <div className="flex basis-1/2">
            <div className="text-lg sm:text-xl size-full indent-10">
              <p className="">
                Deserunt consequat ullamco in. Cupidatat deserunt qui aliqua
                aliqua tempor occaecat et officia magna.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex overflow-auto">
        <div className="flex items-center overflow-auto bg-info-400 dark:bg-primary-900 gap-4">
          {/* <div className="sticky left-0 flex h-56 items-center items-center bg-info text-3xl text-white dark:bg-primary">
          <p className="p-4 text-center">
            sticky<br/>
            left
          </p>
          </div> */}
          <div className="pr-3 lg:pr-6"></div>
          <img
            src="/inspiration/1.jpeg"
            className="aspect-[5/7] w-80 md:w-[42vw] lg:w-[30vw] object-cover"
          />
          <img
            src="/inspiration/1.jpeg"
            className="aspect-[5/7] w-80 md:w-[42vw] lg:w-[30vw] object-cover"
          />
          <img
            src="/inspiration/1.jpeg"
            className="aspect-[5/7] w-80 md:w-[42vw] lg:w-[30vw] object-cover"
          />
          <img
            src="/inspiration/1.jpeg"
            className="aspect-[5/7] w-80 md:w-[42vw] lg:w-[30vw] object-cover"
          />
          <img
            src="/inspiration/1.jpeg"
            className="aspect-[5/7] w-80 md:w-[42vw] lg:w-[30vw] object-cover"
          />
          <img
            src="/inspiration/1.jpeg"
            className="aspect-[5/7] w-80 md:w-[42vw] lg:w-[30vw] object-cover"
          />
          <img
            src="/inspiration/1.jpeg"
            className="aspect-[5/7] w-80 md:w-[42vw] lg:w-[30vw] object-cover"
          />
          <img
            src="/inspiration/1.jpeg"
            className="aspect-[5/7] w-80 md:w-[42vw] lg:w-[30vw] object-cover"
          />
          <img
            src="/inspiration/1.jpeg"
            className="aspect-[5/7] w-80 md:w-[42vw] lg:w-[30vw] object-cover"
          />
          <img
            src="/inspiration/1.jpeg"
            className="aspect-[5/7] w-80 md:w-[42vw] lg:w-[30vw] object-cover"
          />
          {/* <div className="sticky right-0 flex h-56 items-center items-center bg-info text-3xl text-white dark:bg-primary">
          <p className="p-4 text-center">
            sticky<br>
            right
          </p>
          </div> */}
        </div>
      </div>
    </>
  )
}
const DisplayCategory = ({
  variant = "half",
}: {
  variant: "full" | "half" | "grid"
}) => {
  const imageStyles = cva("h-full", {
    variants: {
      variant: {
        full: "absolute inset-0 object-cover w-full h-full -z-10",
        half: "relative basis-1/2",
        grid: "relative basis-1/2",
        // grid: "absolute inset-0 w-full -z-10",
      },
    },
    defaultVariants: {
      variant: "half",
    },
  })
  const wrapperStyles = cva(
    "flex flex-col h-[800px] relative w-full md:flex-row",
    {
      variants: {
        variant: {
          full: "",
          half: "",
          grid: "",
        },
      },
      defaultVariants: {
        variant: "half",
      },
    }
  )
  return (
    <div className={wrapperStyles({ variant })}>
      {variant !== "grid" ? (
        <div className="text relative p-3 lg:p-6 size-full text-3xl basis-1/2">
          <p className="sticky top-10 ">Womens</p>
        </div>
      ) : (
        <div className="basis-1/2 flex flex-col justify-between w-full mb-3 h-[75vw] sm:h-auto">
          <div className="flex items-center w-full justify-between p-3 lg:p-6 sticky top-10">
            <h1 className="text-3xl">Labore commodo</h1>
            <h1 className="text-3xl">Labore commodo</h1>
          </div>
          <div className="flex items-center w-full justify-between p-3 lg:p-6">
            <h1 className="text-3xl">Labore commodo</h1>
            <h1 className="text-3xl">Labore commodo</h1>
          </div>
        </div>
      )}
      <div className={imageStyles({ variant })}>
        <img
          className="absolute inset-0 object-cover w-full h-full"
          src="/inspiration/1.jpeg"
          alt=""
        />
      </div>
    </div>
  )
}

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

  // filter out collections with no products
  const filteredCollections = collections.filter((c) => c.products.length > 0)

  // [
  //   {
  //     id: 'pcol_01J17Z91EXGN5WVPSZB964BJB7',
  //     created_at: '2024-06-25T15:12:23.485Z',
  //     updated_at: '2024-06-25T15:12:23.485Z',
  //     deleted_at: null,
  //     title: 'Main',
  //     handle: 'main',
  //     metadata: {},
  //     products: [
  //       [Object], [Object],
  //       [Object], [Object],
  //       [Object], [Object],
  //       [Object], [Object],
  //       [Object], [Object],
  //       [Object], [Object]
  //     ]
  //   },
  //   {
  //     id: 'pcol_01HWAV2QJAJJH8EBP42PW2AX44',
  //     created_at: '2024-04-25T14:38:16.572Z',
  //     updated_at: '2024-04-25T14:38:16.572Z',
  //     deleted_at: null,
  //     title: 'Merch',
  //     handle: 'merch',
  //     metadata: null,
  //     products: []
  //   }
  // ]
  return (
    <>
      <HeroSection />

      <DisplayCategory variant={"full"} />
      <DisplayCategory variant={"half"} />
      <DisplayCategory variant={"grid"} />

      <DisplayCategorySlider />

      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={filteredCollections} region={region} />
        </ul>
      </div>
    </>
  )
}
