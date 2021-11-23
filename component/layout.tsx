import Footer from "./footer"
import Header from "./header"
import NewsletterSub from "./newsletterSub"

interface Props {
    children: React.ReactNode
}

const Layout = (props: Props) => {


    return (
        <div id="Layout">
            <Header />
            {props.children}
            <NewsletterSub/>
            <Footer />
        </div>
    )
}

export default Layout