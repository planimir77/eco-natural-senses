import * as cheerio from "cheerio";

const URL = process.env.SI_NATURE;

export const getOnFocusData = async () => {
  if (!URL) {
    console.error('No URL Provided')
    return null;
  }
  const html = await fetch(URL, { next: { revalidate: 10 } })
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

  const $ = cheerio.load(html as unknown as string);
  const elements = $(".product-template-section");
  const result = [];

  for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    const obj = JSON.parse($($(element).find("script")[0]).text());
    result.push(obj);
  }
  return result;
};
