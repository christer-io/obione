import { sanityClient, urlFor } from "../../sanity";
import { Post } from "../../typings";
import { GetStaticProps } from "next";
import Header from "../../components/Header";
import PortableText from "react-portable-text"
import { ChildProcess, ChildProcessWithoutNullStreams } from "child_process";
import Head from "next/head";
import Footermobile from '../../components/Footermobile';

interface Props {
    post: Post;
}

function Post({ post }: Props) {
    return (
    <main>
        <Head>
            <title>ObiOne.io</title>
            <link rel="icon" href="/" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="keywords" content="open source, open data, open content"></meta>
            <meta name="description" content="Open source, open data, open education and digital public goods"></meta>
        </Head>

        <Header />

        <article className="max-w-3xl mx-auto pb-5">
            <h1 className="text-3xl mt-10 mb-3">
               {post.title} 
            </h1>
            <div className="h-screen max-w-3xl mx-auto pb-9">
                <iframe className="h-full w-full" src={`https://digitallibrary.io/wp-admin/admin-ajax.php?action=h5p_embed&id=${post.url}`}  title="Open source"></iframe> 
             </div>   
        </article>

       <Footermobile />

    </main>
  )
}

export default Post;

export const getStaticPaths = async () => {
    const query = `*[_type == "post"]{
        _id, 
        slug {
            current
        }
    }`
   
    const posts = await sanityClient.fetch(query);

    const paths = posts.map((post: Post ) => ({
        params: {
            slug: post.slug.current,
        }

    }));
  
    return {
      paths, 
      fallback: "blocking",
    }
  };

  export const getStaticProps: GetStaticProps = async ({params}) => {
    const query = `*[_type == "post" && slug.current == $slug][0]{
        _id, 
        _createdAt,
        description,
        mainImage,
        slug,
        body,
        url,
          }`

    const post = await sanityClient.fetch(query, {
        slug: params?.slug,
    })

    if (!post) {
        return {
            notFound: true
        }
    } 
    return {
        props: {
            post,
        },
        revalidate: 600,
    };
  };