import React from "react";
import collection from "@lib/collection/earth-matters";
import CollectionPreview from "components/ui/CollectionPreview";

export default function EarthMatters() {
  return <CollectionPreview collection={collection} />;
}
