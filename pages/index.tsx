import { Cart } from "react-bootstrap-icons"

interface Props {

}

const Home = ({ }: Props) => {
  return (
    <>
      <header className="sticky-top" >
        <div className="bg-secondary" >
          <div className="container d-flex justify-content-between align-items-center">
            <a className="navbar-brand font-size-two" href="http://localhost/code/nicedeals/">Nicedeals</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <ul className="nav">

              <li className="nav-item">
                <a className="nav-link text-white" href="#">Tilmeld nyhedsbrev</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="http://localhost/code/nicedeals/opret-profil">Opret profil</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="http://localhost/code/nicedeals/login">Log ind</a>
              </li>
              <li className="nav-item d-flex align-items-center">
                <a className="nav-link text-white" href="#">
                  <i className="bi bi-cart"></i>
                  <Cart />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Home


// export const getStaticProps = async () => {
//   await Databese()
//   const users = await Users.find()

//   return {
//     props: {
//       page: 'Hello World',
//       users: JSON.parse(JSON.stringify(users))
//     }
//   }
// }

