/**
 *  can be used in backend
 */
export async function useApi<T>(uri: string, options?: RequestInit) {
    const fetchData = await fetch(uri, options)
    const data = await fetchData.json()

    return data as T
}


const postOptions: RequestInit = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
}

export const useApi2 = (baseUri: string) => {
    const get = <T>(path: string = "") => fetch(baseUri + path).then(res => res.json() as Promise<T>)

    const post = <T>(path: string = "", data: object) => fetch(baseUri + path, {
        ...postOptions,
        body: JSON.stringify(data)
    }).then(res => res.json() as Promise<T>)


    return {
        post,
        get
    }
}