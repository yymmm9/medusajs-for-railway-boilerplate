import { Region } from "@medusajs/medusa"
import { Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"
import { ProductCollectionWithPreviews } from "types/global"

export default function ProductRail({
  collection,
  region,
}: {
  collection: ProductCollectionWithPreviews
  region: Region
}) {
  const { products } = collection

  if (!products) {
    return null
  }

  return (
    <div className="content-container py-12 small:py-24">
      <div className="flex justify-between mb-8">
        <Text className="txt-xlarge">{collection.title}</Text>
        <InteractiveLink href={`/collections/${collection.handle}`}>
          View all
        </InteractiveLink>
      </div>
      <ul className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 large:grid-cols-5 gap-4">
        {/* {
    id: 'prod_01J17XRVQEF7355AFHAMR9V0JQ',
    title: 'Black Floral Logo Baseball Cap',
    handle: 'black-floral-logo-baseball-cap',
    thumbnail: null,
    created_at: '2024-06-25T14:46:04.768Z',
    price: {
      calculated_price: '$999,999.00',
      original_price: '$999,999.00',
      difference: '0',
      price_type: 'default'
    }
  }[] */}
        {products &&
          products.map((product) =>
            product.thumbnail ? (
              <li key={product.id}>
                <ProductPreview
                  productPreview={product}
                  region={region}
                  isFeatured
                />
              </li>
            ) : null
          )}
      </ul>
    </div>
  )
}
