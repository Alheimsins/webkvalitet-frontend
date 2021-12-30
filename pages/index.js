import Head from 'next/head'
import { useState } from 'react'
import webquality from '@alheimsins/webquality'

import Card from "../components/card"
import SkeletonLoader from "../components/skeleton-loader"

const Header = () => (
  <Head>
    <title>Webkvalitet</title>
    <meta name="description" content="Finn webkvaliteten på nettstedet ditt" />
  </Head>
)

export default function Home() {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    setData(null)
    const result = await webquality(document.getElementById('url').value)
    setData([{ name : 'webkvalitet', id: 'webkvalitet', result }])
    setIsLoading(false)
  }

  const UrlForm = () => {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="https://www.example.com" id='url' name='url'/>
        </form>
      </div>
    )
  }

  return (
    <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <Header />
        <UrlForm />
        <ul role="list" className="space-y-12">
          {data && data.map((result, index) => <Card key={result.id} place={index+1} {...result} />)}
          {isLoading && <SkeletonLoader title={'...checking'}/>}
          {isError && <li>Something went wrong ...</li>}
        </ul>
    </div>
  )
}
