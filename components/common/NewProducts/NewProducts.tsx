import React from 'react'
import collection from "@lib/collection/new-products"
import CollectionPreview from "components/ui/CollectionPreview/CollectionPreview"

export default function HomeNewProducts() {
  return (
    <CollectionPreview collection={collection} />
  )
}
