import useSWR from "swr"

const fetcher = (url) => fetch(url).then(r => r.json())
const calculateTotalScore = categories => categories.reduce((accumulator, current) => accumulator + current.score, 0)
const repackData = data => data ? data
        .map(item => ({ ...item, categories: item.result.sort((a, b) => a.title.localeCompare(b.title)), total: calculateTotalScore(item.result) }))
        .sort((a, b) => (a.total < b.total) ? 1 : -1) : []

function useData (url) {
  const { data, error } = useSWR(url, fetcher)

  return {
    data: repackData(data),
    isLoading: !error && !data,
    isError: error
  }
}

export default useData
