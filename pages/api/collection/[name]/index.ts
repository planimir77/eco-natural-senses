import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@lib/mongodb";

type keyStringArray = {
  [key: string]: { [key: string]: string }[];
};
type keyString = {
  [key: string]: { [key: string]: string };
};
export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  const page = Number(req.query.page) || 1;
  const productsOnPage: number = Number(req.query.products_on_page) || 50;
  console.log("page: " + page);
  console.log("productsOnPage: " + productsOnPage);

  const collection = req.query.name?.toString() || "";
  const collectionFilter = getCollectionFilter(collection);
  const tag = req.query.tag?.toString();
  // const [tag, sortQuery] = req.query.query // farbe-braun&price-descending
  //   ? req.query.query.toString().split("&")
  //   : ["", ""];

  const tagFilter = getTagFilter(tag); //tags: 'Farbe Blau'
  const sortBy = req.query.sort_by?.toString();
  console.log(`sort by: ${sortBy}`);
  const sortingOrder =
    req.query.sorting_order?.toString() === "descending" ? -1 : 1;
  // const [sortBy, order] = sortQuery // price-descending
  //   ? sortQuery.toString().split("-")
  //   : ["", ""];

  // if (!collectionFilter) {
  //   return res.status(404).json({ message: "Not Found" });
  // }

  try {
    const skip = productsOnPage * (page - 1);

    const client = await clientPromise;
    // =========== Database Name ============
    const db = client.db("ens");
    let doc;
    let count: number;
    // const tags: string[] = await db.collection("products").distinct("tags", { $or: collectionFilter });
    const tags: string[] = await db.collection("products").distinct("tags");
    if (tagFilter && sortBy) {
      doc = await db
        .collection("products")
        .find({ $and: [{ $or: collectionFilter }, { $and: [tagFilter] }] })
        .sort({ [sortBy]: sortingOrder })
        //.sort({ "variants.id": 1 })
        .skip(skip)
        .limit(productsOnPage)
        .toArray();
      count = await db.collection("products").countDocuments({
        $and: [{ $or: collectionFilter }, { $and: [tagFilter] }],
      });

      console.log(`BY Tags AND SORT BY: ${sortBy}`);
    } else if (sortBy) {
      doc = await db
        .collection("products")
        .find({ $or: collectionFilter })
        .sort({ [sortBy]: sortingOrder }) //.sort({ 'variants.id': 1 })
        .skip(skip)
        .limit(productsOnPage)
        .toArray();
      count = await db
        .collection("products")
        .countDocuments({ $or: collectionFilter });
      console.log(`SORT BY: ${sortBy}`);
    } else if (tagFilter) {
      doc = await db
        .collection("products")
        .find({ $and: [{ $or: collectionFilter }, { $and: [tagFilter] }] })
        //.find({ $or: collection }).filter(tag)
        //.sort({ [sort]: direction === "descending" ? -1 : 1 })
        //.sort({ "variants.id": 1 })
        .skip(skip)
        .limit(productsOnPage)
        .toArray();
      count = await db.collection("products").countDocuments({
        $and: [{ $or: collectionFilter }, { $and: [tagFilter] }],
      });
      console.log(`BY Tags: ${sortBy}`);
    } else {
      doc = await db
        .collection("products")
        .find({ $or: collectionFilter })
        .skip(skip)
        .limit(productsOnPage)
        .toArray();
      count = await db
        .collection("products")
        .countDocuments({ $or: collectionFilter });
      console.log("WITHOUT SORT");
    }
    // { type: { $in: type } },

    const pages = Math.ceil(count / productsOnPage);

    const products: Product[] = JSON.parse(JSON.stringify([...doc]));
    res.status(200).json({ products, collection, pages, tags });
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: "Not Found" });
  }
}

export function getCollectionFilter(collectionName: string) {
  const collection: keyStringArray = {
    "earth-matters": [{ tags: "Earth Matters" }],
    "sommer-2023": [{ tags: "Sommer 2023" }],
    "from-holland": [{ tags: "Holland" }],
    new: [{ tags: "NEU" }],
    "stabilisierter-amarant": [{ tags: "stabilisierter-amarant" }],
    "dried-flowers": [
      { type: "Getrocknete Blumen" },
      { type: "Craspedia getrocknet" },
      { type: "Echinops getrocknet" },
    ],
    "helichrysum-strohblumen-capblumen": [
      { type: "Helichrysum" },
      { type: "Capblumen" },
    ],
  };
  const result = collection[collectionName];
  return result;
}
export function getTagFilter(filter: string | undefined) {
  const map = new Map([
    ["farbe-braun", { tags: "Farbe Braun" }],
    ["farbe-blau", { tags: "Farbe Blau" }],
  ]);
  // map.set("farbe-braun", { tags: "Farbe Braun" })
  // map.set("farbe-blau", { tags: "Farbe Blau" },)

  //   const tag: keyString = {
  //     "farbe-braun": { tags: "Farbe Braun" },
  //     "farbe-blau": { tags: "Farbe Blau" },
  //   };
  //   const result = filter ? tag[filter] : undefined;
  const result = filter ? map.get(filter) : undefined;
  return result;
}
