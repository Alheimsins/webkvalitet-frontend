import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import webquality from '@alheimsins/webquality'

import Card from "../components/card"
import SkeletonLoader from "../components/skeleton-loader"
import { decode} from '../lib/base64json'

function fixUrl(url) {
  if (!url.startsWith('http')) {
    return `https://${url}`
  }
  return url
}

function getHostname (url) {
  const address = new URL(url)
  return address.hostname
}

const Header = () => (
  <Head>
    <title>Webkvalitet</title>
    <meta name="description" content="Sjekk webkvaliteten på nettsteder" />
  </Head>
)

export default function Home() {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const router = useRouter()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const url = fixUrl(document.getElementById('url').value)
    setIsLoading(true)
    setData(null)
    const result = await webquality(url)
    setData([{ name : getHostname(url), id: 'webkvalitet', date: new Date(), url, result }])
    setIsLoading(false)
  }

  useEffect(() => {
    if (router.query.result) {
      setData([decode(router.query.result)])
    }
  }, [router.query.result])

  const UrlForm = () => {
    return (
      <div className="bg-white shadow sm:rounded-lg mb-4">
        <div className="px-4 py-5 sm:p-6">
          <h1 className="text-lg leading-6 font-medium text-gray-900">Check the quality of a website</h1>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <p>Enter the url for the site you want to check</p>
          </div>
          <form className="mt-5 sm:flex sm:items-center" onSubmit={handleSubmit}>
            <div className="w-full sm:max-w-xs">
              <label htmlFor="email" className="sr-only">
                URL
              </label>
              <input
                type="text"
                name="url"
                id="url"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="www.example.com"
              />
            </div>
            <button
              type="submit"
              className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Check
            </button>
          </form>
        </div>
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
