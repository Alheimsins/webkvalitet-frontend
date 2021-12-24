import { LightBulbIcon, LinkIcon, LockClosedIcon } from '@heroicons/react/outline'

import Score from './score'

export default function Card ({ name, url, result }) {
  return (
    <li className="bg-white shadow overflow-hidden sm:rounded-md p-0">
      <div className="flex justify-between mb-4 bg-black text-white p-4">
        <h1 className='text-2xl'>{name}</h1>
        <div className='flex'>
          <a href={url} target='_blank' rel='noreferrer' title={`Visit the website for ${name}`}><LinkIcon className='h-5 w-5 text-white hover:text-yellow-500 mr-3'/></a>
          <a href={`https://lighthouse-dot-webdotdevsite.appspot.com/lh/html?url=${url}`} target='_blank' rel='noreferrer' title={`Visit the Lighthouse report for ${name}`}><LightBulbIcon className='h-5 w-5 text-white hover:text-yellow-500 mr-3'/></a>
          <a href={`https://securityheaders.com?q=${url}&hide=on&followRedirects=on`} target='_blank' rel='noreferrer' title={`Visit the Securityheaders report for ${name}`}><LockClosedIcon className='h-5 w-5 text-white hover:text-yellow-500'/></a>
        </div>
      </div>
      <div className='flex justify-between p-4'>
        {result.map(category => <Score key={category.id} {...category} />)}
      </div>
    </li>
  )
}