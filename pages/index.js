import Card from "../components/card"

const fetcher = (url) => fetch(url).then(r => r.json())
const calculateTotalScore = categories => categories.reduce((accumulator, current) => accumulator + current.score, 0)
const repackData = data => data ? data
        .map(item => ({ ...item, categories: item.result.sort((a, b) => a.title.localeCompare(b.title)), total: calculateTotalScore(item.result) }))
        .sort((a, b) => (a.total < b.total) ? 1 : -1) : []

export default function Home() {
  const { data, error } = useSWR("https://webkvalitet.api.alheimsins.net/fylker", fetcher)

  return (
    <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <ul role="list" className="space-y-12">
        {repackData(data).map((result, index) => <Card key={result.id} place={index+1} {...result} />)}
      </ul>
    </div>
  )
}
