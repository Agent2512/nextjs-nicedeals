import Card from "../component/deals/card"
import Layout from "../component/layout/layout"

interface Props {
  slug?: string
}

const Home = ({ }: Props) => {
  return (
    <Layout>
      <main>
        <div className="container py-5" >

          <h1>new deals</h1>
          <div className="row row-cols-1 row-cols-md-3 pb-5">
            <div className="col mb-4">
              <Card />
            </div>
            <div className="col mb-4">
              <Card />
            </div>
            <div className="col mb-4">
              <Card />
            </div>
          </div>

          <h1>most sold</h1>
          <div className="row row-cols-1 row-cols-md-3 pb-5">
            <div className="col mb-4">
              <Card />
            </div>
            <div className="col mb-4">
              <Card />
            </div>
            <div className="col mb-4">
              <Card />
            </div>
          </div>

          <h1>all deals</h1>
          <div className="row row-cols-1 row-cols-md-3 pb-5">
            <div className="col mb-4">
              <Card />
            </div>
            <div className="col mb-4">
              <Card />
            </div>
            <div className="col mb-4">
              <Card />
            </div>
          </div>

        </div>
      </main>
    </Layout>
  )
}

export default Home



