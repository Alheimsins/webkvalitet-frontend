import Card from "../components/card"

export default function Home({ data }) {
  return (
    <div>
      {data.map(result => <Card key={result.id} {...result} />)}
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