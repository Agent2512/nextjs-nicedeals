import SignupForm from "../component/forms/SignupForm"
import Layout from "../component/layout"


const Signup = () => {



    return (
        <Layout noNewsletterSub>
            <div className="container pb-5">

                <div className="row justify-content-center">
                    <div className="col-6">
                        <h2 className="py-2 text-center">Opret ny profil</h2>

                        <SignupForm />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Signup