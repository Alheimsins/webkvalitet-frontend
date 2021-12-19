import Card from "../components/card"

export default function Home({ data }) {
  return (
    <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <ul role="list" className="space-y-3">
        {data.map(result => <Card key={result.id} {...result} />)}
      </ul>
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch('https://webkvalitet.api.alheimsins.net/fylker')
  const data = await res.json()

  if (!data) {
    return {
      data: [],
    }
  }

  return {
    props: { data },
  }
}