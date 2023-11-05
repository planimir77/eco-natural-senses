export const getProduct = async (handle:string) => {
    
    const response = await fetch(`${process.env.API_URL}/api/product/${handle}`,  { next: { revalidate: 0 } })

    if (!response) return null
    const data = await response.json()
    
    return data
}