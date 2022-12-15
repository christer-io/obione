import { sanityClient, urlFor } from "../../sanity";
import { Post } from "../../typings";
import { GetStaticProps } from "next";
import Header from "../../components/Header";
import PortableText from "react-portable-text"
import { ChildProcess, ChildProcessWithoutNullStreams } from "child_process";
import Head from "next/head";

interface Props {
    post: Post;
}

function Post({ post }: Props) {
    return (
    <main>
        <Head>
            <title>Education.dev</title>
            <link rel="icon" href="/" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="keywords" content="open source, open data, open content"></meta>
            <meta name="description" content="Open source, open data, open education and digital public goods"></meta>
        </Head>

        <Header  />

         {/* posts <img 
        className="w-full h-40 object-cover"
        src={urlFor(post.mainImage).url()!} 
        alt="" />
        */} 
        
        <div className="h-screen max-w-3xl mx-auto pt-9 pb-9">
            <iframe className="h-full w-full" src={`https://digitallibrary.io/wp-admin/admin-ajax.php?action=h5p_embed&id=${post.url}`}  title="Open source"></iframe> 
        </div>  
        

        <hr className="max-w-lg my-5 mx-auto border border-black"/>

    </main>
  )
}

export default Post;

export const getStaticPaths = async () => {
    const query = `*[_type == "path"]{
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
    const query = `*[_type == "path" && slug.current == $slug][0]{
        _id, 
        _createdAt,
        description,
        title,
        slug,
        url,
        body,
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