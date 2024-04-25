"use client"
import { ProductPreviewType } from "types/global"
import Thumbnail from "../thumbnail"
import { motion } from "framer-motion"

export default async function ThumbnailSwitch({
  productPreview,
  isFeatured,
  image,
}: {
  productPreview: ProductPreviewType
  isFeatured?: boolean
  image: string
}) {
  return (
    <div className="relative size-full">
      <motion.div whileHover={{ opacity: 0 }}>
        <Thumbnail
          thumbnail={productPreview.thumbnail}
          size="full"
          isFeatured={isFeatured}
        />
      </motion.div>
      <div className="absolute top-0 size-full inset-0 -z-10">
        <Thumbnail thumbnail={image} size="full" isFeatured={isFeatured} />
      </div>
    </div>
  )
}
