import { Text } from "@medusajs/ui"

const MedusaCTA = () => {
  return (
    <Text className="flex gap-x-2 txt-compact-small-plus items-center">
      Developed by
      <a
        className="text-[#9ca3af]"
        href="https://www.medusajs.com"
        target="_blank"
        rel="noreferrer"
      >
        Minority Studio
        {/* <Medusa fill="#9ca3af" className="fill-[#9ca3af]" /> */}
      </a>
      {/* &
      <a href="https://nextjs.org" target="_blank" rel="noreferrer">
        <NextJs fill="#9ca3af" />
      </a> */}
    </Text>
  )
}

export default MedusaCTA
