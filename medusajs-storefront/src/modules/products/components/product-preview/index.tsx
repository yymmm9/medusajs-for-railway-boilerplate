import { Text } from "@medusajs/ui"

import { ProductPreviewType } from "types/global"

import { retrievePricedProductById } from "@lib/data"
import { getProductPrice } from "@lib/util/get-product-price"
import { Region, nullableValue } from "@medusajs/medusa"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"
import ThumbnailSwitch from "./thumbnailSwitch"
// import { motion } from "framer-motion"

const menuVariants = {
  open: {
    opacity: 1,
    // x: 0,
  },
  closed: {
    opacity: 0,
    // x: '-100%',
  },
}

export default async function ProductPreview({
  productPreview,
  isFeatured,
  region,
}: {
  productPreview: ProductPreviewType
  isFeatured?: boolean
  region: Region
}) {
  const pricedProduct = await retrievePricedProductById({
    id: productPreview.id,
    regionId: region.id,
  }).then((product) => product)

  if (!pricedProduct) {
    return null
  }
  let image = pricedProduct?.images?.[1]?.url || null

  const { cheapestPrice } = getProductPrice({
    product: pricedProduct,
    region,
  })

  return (
    <LocalizedClientLink
      href={`/products/${productPreview.handle}`}
      className="group"
    >
      <div className="relative">
        {image ? (
          <ThumbnailSwitch productPreview={productPreview} image={image} />
        ) : (
          <Thumbnail thumbnail={image} size="full" isFeatured={isFeatured} />
        )}
        <div className="flex txt-compact-medium mt-4 justify-between">
          <Text className="text-ui-fg-subtle">{productPreview.title}</Text>
          {/* <div className="flex items-center gap-x-2">
            {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
          </div> */}
        </div>
      </div>
    </LocalizedClientLink>
  )
}
