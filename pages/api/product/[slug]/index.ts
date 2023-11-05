import type { NextApiRequest, NextApiResponse } from "next";
import * as cheerio from "cheerio";

type Data = {
  slug: string;
};

export default async function GET(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const URL = `${process.env.SI_NATURE}/products/${req.query.slug}`;
  const html = await fetch(URL, { next: { revalidate: 0 } })
    .then(function (response) {
      // The API call was successful!
      return response.text();
    })
    .then(function (html) {
      // This is the HTML from our response as a text
      return html;
    })
    .catch(function (err) {
      // There was an error
      console.warn("Something went wrong.", err);
    });

  if (!html) return res.status(404);

  const $ = cheerio.load(html as unknown as string);
  const element = $("#ProductJson-product-template")[0];
  const text = $(element).text();
  const obj = JSON.parse(text);

  res.status(200).json(obj);
}
