import { GetServerSideProps } from "next";
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


export const getServerSideProps: GetServerSideProps = async (context) => {
    const slug = context.params?.slug;

    return {
        props: {

        }
    }
}