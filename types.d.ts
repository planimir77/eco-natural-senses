type BaseItemData = {
  name: string,
  imgUrl: any,
}

type SelectedLang = {
  key: string,
  name: string,
  imgUrl: string,
}
type NavItem = {
  id: number,
  name: string,
  children: NavLink[],
}
type NavLink = {
  id: number,
  name: string,
  href: string,
}
type Collection = {
  name: string,
  link: string,
  products: Product[],
}

type Product = {
  id: number,
  title: string,
  handle: string,
  description: string,
  published_at: string,
  created_at: string,
  vendor: string,
  type: string,
  tags: string[],
  price: number,
  price_min: number,
  price_max: number,
  available: boolean,
  price_varies: boolean,
  compare_at_price: any,
  compare_at_price_min: number,
  compare_at_price_max: number,
  compare_at_price_varies: boolean,
  variants: Variant[],
  images: string[],
  featured_image: string,
  options: string[],
  media: Medum[],
  requires_selling_plan: boolean,
  selling_plan_groups: any[],
  content: string,
}
type Variant = {
  id: number
  title: string
  option1: string
  option2: any
  option3: any
  sku: string
  requires_shipping: boolean
  taxable: boolean
  featured_image: any
  available: boolean
  name: string
  public_title: any
  options: string[]
  price: number
  weight: number
  compare_at_price: any
  inventory_management: string
  barcode: string
  requires_selling_plan: boolean
  selling_plan_allocations: any[]
}

type Medum = {
	  alt: any
	  id: number
	  position: number
	  preview_image: PreviewImage
	  aspect_ratio: number
	  height: number
	  media_type: string
	  src: string
	  width: number
}

type PreviewImage = {
  aspect_ratio: number
  height: number
  width: number
  src: string
}
type CollectionData = {
  products?: Product[],
  collection: string,
  tags: string[],
  pages?: number 
}
type QueryData = `${string | ''}&${string | ''}`

interface CollectionQueryData extends BaseQueryData {
  collectionName: string,
}

interface BaseQueryData {
  page?: string = '1',
  query?: QueryData,
  products_on_page?: string = '32'
}

