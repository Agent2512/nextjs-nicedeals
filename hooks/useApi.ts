
export async function useApi<T>(uri:string, options?:RequestInit) {
    const fetchData = await fetch(uri,options)
    const data = await fetchData.json()
    
    return data as T
}