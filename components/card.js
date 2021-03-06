import { LightBulbIcon, LinkIcon, LockClosedIcon, ShareIcon } from '@heroicons/react/outline'
import clipboard from 'clipboardy'
import { useEffect, useState } from 'react'

import { encode } from '../lib/base64json'
import Toast from './toast'
import Score from './score'

export default function Card ({ name, url, result, place, date, id }) {
  const [toastMelding, setToastMelding] = useState()

  async function shareResult (data) {
    const address = new URL(window.location.toString())
    const result = encode(data)
    const params = new URLSearchParams()    
    params.append('result', result)
    const shareUrl = `${address.protocol}//${address.hostname}${address.port ? `:${address.port}`: ''}?${params.toString()}`
    await clipboard.write(shareUrl)
    setToastMelding('Share url copied to clipboard')
  }

  useEffect(() => {
    if (toastMelding) {
      setTimeout(() => {
        setToastMelding(false)
      }, 3000)
    }
  }, [toastMelding])

  return (
    <li className="bg-white shadow overflow-hidden sm:rounded-md p-0 relative">
      <div className="flex justify-between mb-4 bg-black text-white p-4">
        <div className='flex align-middle'>
          <div className='text-2xl mr-2 bg-white text-black rounded-full w-12 h-12 flex justify-center align-middle p-0'>
            <span className='m-0 p-0 self-center'>{place}</span>
          </div>
          <h1 className='text-2xl text-center p-1'>{name}</h1>
        </div>
        <div className='flex'>
          <a href={url} target='_blank' rel='noreferrer' title={`Visit the website for ${name}`}><LinkIcon className='h-5 w-5 text-white hover:text-yellow-500 mr-3'/></a>
          <a href={`https://lighthouse-dot-webdotdevsite.appspot.com/lh/html?url=${url}`} target='_blank' rel='noreferrer' title={`Visit the Lighthouse report for ${name}`}><LightBulbIcon className='h-5 w-5 text-white hover:text-yellow-500 mr-3'/></a>
          <a href={`https://securityheaders.com?q=${url}&hide=on&followRedirects=on`} target='_blank' rel='noreferrer' title={`Visit the Securityheaders report for ${name}`}><LockClosedIcon className='h-5 w-5 text-white hover:text-yellow-500'/></a>
        </div>
      </div>
      <div className='flex flex-wrap sm:justify-between p-4'>
        {result.map(category => <Score key={category.id} {...category} />)}
      </div>
      <div className='flex justify-end text-gray-400'>
        <span className='text-right mr-4'>
          Last updated: {new Date(date).toLocaleString()}
        </span>
        <button><ShareIcon onClick={() => shareResult({ name, url, result, place, date, id })} className='h-5 w-5 mr-2 hover:text-black'/></button>
      </div>
      <Toast melding={toastMelding} />
    </li>
  )
}