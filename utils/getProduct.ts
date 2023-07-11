export const getProduct = async (handle:string) => {
    
    const response = await fetch(`http://localhost:3000/api/product/${handle}`,  { next: { revalidate: 0 } })

    if (!response) return null
    console.log(`http://localhost:3000/api/product/${handle}`)
    const data = await response.json()
    
    return data
}