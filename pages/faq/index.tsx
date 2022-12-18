import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';
import BannerSmall from '../../components/BannerSmall';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import { sanityClient, urlFor } from "../../sanity";
import { Post } from '../../typings';
import Textcard from '../../components/Textcard';
import Externallink from '../../components/Externallink';
import Questions from '../../components/Questions';
import Footermobile from '../../components/Footermobile';
import StandardButton from '../../components/StandardButton';


interface Props {
  posts: [Post];
  opencontent: [Post];
  external: [Post];
  question: [Post];
  opendata: [Post];

}

export default function Home ({ posts, opencontent, external, question, opendata  }: Props) {
  console.log(posts);
  return (
    <div className="">
   
      <Head>
        <title>ObiOne</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="keywords" content="open source, open data, open content"></meta>
        <meta name="description" content="Open source, open data, open education and digital public goods"></meta>
      </Head>
      <Header />
      <div className="max-w-7xl mx-auto pt-9">
      
      <section className='bg-white'>
          <div className='max-w-7xl mx-auto  text-3xl text-center font-sans text-darkdarkblue pt-9' >
            <h2>FAQ - Open Source </h2> 
            <h3 className="text-base pb-2">Questions and answers intended to help people understand open source.</h3>
          <div/>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 pl-3 pr-3 pt-5 pb-8">
            {question.map((post) => (
                <Questions
                key={post._id}
                postid={post.slug}
                title={post.title} 
                url={post.slug.current}
                
                />
              ))}
            </div>  
            
          </div>
       </section>
      <section className='bg-white'>
          <div className='max-w-7xl mx-auto  text-3xl text-center font-sans text-darkdarkblue pt-9' >
            <h2>FAQ - Open Content and Learning Resources</h2> 
            <h3 className="text-base pb-2">Questions and answers intended to help people understand open content and education.</h3>
          <div/>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 pl-3 pr-3 pt-5 pb-8">
            {opencontent.map((post) => (
                <Questions
                key={post._id}
                postid={post.slug}
                title={post.title} 
                url={post.slug.current}
                
                />
              ))}
            </div>  
            
          </div>
       </section>
       <section className='bg-white'>
          <div className='max-w-7xl mx-auto  text-3xl text-center font-sans text-darkdarkblue pt-9' >
            <h2>FAQ - Open data</h2> 
            <h3 className="text-base pb-2">Questions and answers intended to help people understand open data.</h3>
          <div/>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 pl-3 pr-3 pt-5 pb-8">
            {opendata.map((post) => (
                <Questions
                key={post._id}
                postid={post.slug}
                title={post.title} 
                url={post.slug.current}
                
                />
              ))}
            </div>  
            
          </div>
       </section>
       <section className='bg-white'>
          <div className='max-w-7xl mx-auto  text-3xl text-center font-sans text-darkdarkblue pt-9' >
            <h2>FAQ - Open standards</h2> 
            <h3 className="text-base pb-2">Questions and answers intended to help people understand open standards.</h3>
          <div/>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 pl-3 pr-3 pt-5 pb-8">
            {posts.map((post) => (
                <Questions
                key={post._id}
                postid={post.slug}
                title={post.title} 
                url={post.slug.current}
                
                />
              ))}
            </div>  
            
          </div>
       </section>   
        
    </div>
    <Footermobile />
    <Footer />
    </div>
  )
};

export const getServerSideProps = async () => {
  const query = `*[_type == "question" && tag =="openstandard"]{_id, title, body, slug, license, source}`
  const posts = await sanityClient.fetch(query);

  const opencontentquery = `*[_type == "question" && tag =="opencontent"]{_id, title, body, slug, license, source}`
  const opencontent = await sanityClient.fetch(opencontentquery);

  const opendataquery = `*[_type == "question" && tag =="opendata"]{_id, title, body, slug, license, source}`
  const opendata = await sanityClient.fetch(opendataquery);

  const externalresource = `*[_type == "externalresource" && tag =="external"]{_id, title, slug, description, url}`
  const external = await sanityClient.fetch(externalresource);

  const faq = `*[_type == "question" && tag =="opensource"]{_id, title, slug, body, license, source}`
  const question = await sanityClient.fetch(faq);

  return {
    props: {
      posts,
      opencontent,
      external,
      opendata,
      question,
    }
  }
};