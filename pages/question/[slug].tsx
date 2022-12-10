import { sanityClient, urlFor } from "../../sanity";
import { Post } from "../../typings";
import { GetStaticProps } from "next";
import Header from "../../components/Header";
import PortableText from "react-portable-text"
import { ChildProcess, ChildProcessWithoutNullStreams } from "child_process";
import Head from "next/head";

interface Props {
    faq: Post;
}

function Question({ faq }: Props) {
    return (
    <main>
        <Head>
            <title>Education.dev</title>
            <link rel="icon" href="/" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="keywords" content="open source, open data, open content"></meta>
            <meta name="description" content="Open source, open data, open education and digital public goods"></meta>
        </Head>

        <Header />

         {/* posts <img 
        className="w-full h-40 object-cover"
        src={urlFor(post.mainImage).url()!} 
        alt="" />
        */} 
        <article className="max-w-3xl mx-auto p-5">
            <h1 className="text-3xl mt-10 mb-3">
               {faq.title} 
            </h1>
            
            <PortableText 
            className="mt-10"
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
            content={faq.body}
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
                }
            }
            />
        </article>

        <hr className="max-w-lg my-5 mx-auto border border-black"/>

    </main>
  )
}

export default Question;

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
    const query2 = `*[_type == "question" && slug.current == $slug][0]{
        _id, 
        _createdAt,
        slug,
        title,
        body,
          }`

          const faq = await sanityClient.fetch(query2, {
              slug: params?.slug,
          })

          if (!faq) {
              return {
                  notFound: true
              }
          }

          return {
              props: {
                  faq,
              },
              revalidate: 600,
          };
  };