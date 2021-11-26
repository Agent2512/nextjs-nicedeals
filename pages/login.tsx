import LoginForm from "../component/forms/loginForm";
import Layout from "../component/layout";



const Login = () => {


    return (
        <Layout noNewsletterSub >
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-6 ">
                        <h2 className="py-2 text-center">Login</h2>

                        <LoginForm />

                    </div>
                </div>
            </div>



            <div className="container-fluid py-5">
                <div className="row">
                    <div className="col-6 offset-md-3">
                        <h2 className="text-center">Opret en profil</h2>

                        <p>
                            Tilmeld dig eller opret din profil <span className="fw-bold">gratis</span>,
                            og få de bedste tilbud tilpasset til dig og dine ønsker
                        </p>

                        <a className="btn btn-primary mt-4 w-100" href="http://localhost/code/nicedeals/opret-profil">
                            Opret en Nicedeals profil
                        </a>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default Login;