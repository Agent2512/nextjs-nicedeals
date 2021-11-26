import Footer from "./footer"
import Header from "./header"
import NewsletterSub from "./newsletterSub"

interface Props {
    children: React.ReactNode
    noNewsletterSub?: true
    
}

const Layout = (props: Props) => {


    return (
        <div id="Layout">
            <Header />
            {props.children}

            {props.noNewsletterSub ? null : <NewsletterSub />}

            <Footer />
        </div>
    )
}

export default Layout