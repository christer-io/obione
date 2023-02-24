import { sanityClient, urlFor } from "../../sanity";
import { Post } from "../../typings";
import { GetStaticProps } from "next";
import Header from "../../components/Header";
import PortableText from "react-portable-text"
import { ChildProcess, ChildProcessWithoutNullStreams } from "child_process";
import Head from "next/head";
import Footermobile from '../../components/Footermobile';
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'

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
           
            <div>
              <h3 className="text-right text-base text-darkdarkblue pb-2 hover:text-hover"> <a href={post.github}>Give input on Github &rarr; </a></h3>
            </div>
            <div className="h-screen max-w-3xl mx-auto pb-9">
                <iframe className="h-full w-full" src={`https://digitallibrary.io/wp-admin/admin-ajax.php?action=h5p_embed&id=${post.url}`}  title="Open source"></iframe> 
            </div>
            
            
        </article>

        {/* posts 
            <article className="max-w-3xl mx-auto p-5">
            
            
            <PortableText 
            className="mt-10"
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
            content={post.body}
            serializers={{
                h1: (props: any) => (
                    <h1 className="text-4xl font-sans my-3 text-darkdarkblue" {...props} />
                ),
                h2: (props: any) => (
                    <h2 className="text-2xl font-sans my-3 text-darkdarkblue" {...props} />
                ),
                h3: (props: any) => (
                    <h3 className="text-xl font-sans my-3 text-darkdarkblue" {...props} />
                ),
                normal: (props: any) => (
                    <h1 className="text-l my-4" {...props} />
                ),
                li: ({ children }: any) => (
                    <li className="ml-4 list-disc">{children}</li>
                ),
                link: ({ href, children }: any) => (
                    <a href={href} className="text-blue hover:underline">
                        {children}
                    </a>
                ),
                youtube: ({url}:any) => {
                    const id = getYouTubeId(url)
                    if (id) {
                        return (<YouTube videoId={id} />)
                    }
                    return null;
                  }
                }
            }
            />
        </article>
            */}
        
       <Footermobile />

    </main>
  )
}

export default Post;

export const getStaticPaths = async () => {
    const query = `*[_type == "story"]{
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
    const query = `*[_type == "story" && slug.current == $slug][0]{
        _id, 
        _createdAt,
        description,
        mainImage,
        slug,
        body,
        github,
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