import useSWR from "swr"
import axios from "axios"

const fetcher = url => axios.get(url).then(res => res.data)
/*Ou on peut aussi utiliser fetch()
const fetcher = url => fetch(url).then(res => res.json())*/
const baseUrl = "https://jsonplaceholder.typicode.com"

export const useGetPosts = path => {
  if (!path) {
    throw new Error("Path is required")
  }

  const url = baseUrl + path

  const { data:users, error } = useSWR(url, fetcher)

  return { users, error }
}