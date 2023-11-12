import * as cheerio from "cheerio";

export const getProduct = async (handle:string) => {

    const URL = `${process.env.SI_NATURE}/products/${handle}`;
    const html = await fetch(URL, { cache: 'no-store' })
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
  
    if (!html) return 'Not found';
  
    const $ = cheerio.load(html as unknown as string);
    const element = $("#ProductJson-product-template")[0];
    const text = $(element).text();
    const data = JSON.parse(text);
    
    return data
}