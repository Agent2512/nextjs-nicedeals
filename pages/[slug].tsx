import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { Category } from "../assets/entities/Categorys";
import Layout from "../component/layout"

import Home from './index';

interface Props {

}

const Slug = ({ }: Props) => {
    return (
        <Home />
    )
}

export default Slug



export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = Object.values(Category).map(slug => 
        slug.toString().toLowerCase().replace(/\s/g, '-')
    ).map(slug => ({ params: { slug } }))
    

    return {
        paths: slugs,
        fallback: false
    }
}

export const getStaticProps : GetStaticProps = async ({ params }) => {
    


        return {
            props: {
                slug: params?.slug
            }
        }
}