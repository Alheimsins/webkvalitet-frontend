import { useRouter } from 'next/router'

import Card from "../components/card"
import useData from "../lib/use-data"

export default function Path() {
  const router = useRouter()
  const { param } = router.query

  const { data, isLoading, isError } = useData(`https://webkvalitet.api.alheimsins.net/${param}`)

  if (isError) {
    return (
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div>Something went wrong ...</div>
      </div>
    )
  }
  
  if (isLoading) {
    return (
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div>
          Loading ...
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <ul role="list" className="space-y-12">
        {data.map((result, index) => <Card key={result.id} place={index+1} {...result} />)}
      </ul>
    </div>
  )
}

