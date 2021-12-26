import { LightBulbIcon, LinkIcon, LockClosedIcon } from '@heroicons/react/outline'

import Score from './score'

const result = [
  { id: 'accessibility', title: 'Accessibility'},
  { id: 'best_practices', title: 'Best Practices'},
  { id: 'performance', title: 'Performance'},
  { id: 'security', title: 'Security'},
  { id: 'seo', title: 'SEO'},
]

export default function SkeletonLoader () {
  return (
    <li className="bg-white shadow overflow-hidden sm:rounded-md p-0">
      <div className="flex justify-between mb-4 bg-black text-white p-4">
        <div className='flex align-middle'>
          <div className='text-2xl mr-2 bg-white text-black rounded-full w-12 h-12 flex justify-center align-middle p-0'>
            <span className='m-0 p-0 self-center'>0</span>
          </div>
          <h1 className='text-2xl text-center p-1'>Loading</h1>
        </div>
        <div className='flex'>
          <a href='' target='_blank' rel='noreferrer'><LinkIcon className='h-5 w-5 text-white hover:text-yellow-500 mr-3'/></a>
          <a href='' target='_blank' rel='noreferrer'><LightBulbIcon className='h-5 w-5 text-white hover:text-yellow-500 mr-3'/></a>
          <a href='' target='_blank' rel='noreferrer'><LockClosedIcon className='h-5 w-5 text-white hover:text-yellow-500'/></a>
        </div>
      </div>
      <div className='flex flex-wrap sm:justify-between p-4'>
        {result.map(category => <Score key={category.id} {...category} />)}
      </div>
    </li>
  )
}