import useSWR from "swr"

import repackData from "./repack-data"

const fetcher = (url) => fetch(url).then(r => r.json())

function useData (url) {
  const { data, error } = useSWR(url, fetcher)

  return {
    data: repackData(data),
    isLoading: !error && !data,
    isError: error
  }
}

export default useData
