export default function Home({ data }) {
  return (
    <div className="center">
      {JSON.stringify(data, null, 2)}
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