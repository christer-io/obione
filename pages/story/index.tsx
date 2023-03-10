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
import Plaincaed from '../../components/Plaincard';
import Footermobile from '../../components/Footermobile';
import StandardButton from '../../components/StandardButton';
import Plaincard from '../../components/Plaincard';


interface Props {
  question: [Post];

}

export default function Home ({ question }: Props) {
 
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
          <div className='max-w-7xl mx-auto  text-3xl text-center font-sans text-darkdarkblue pt-9 ' >
            <h2 className='pb-4'>Open stories, projects and people </h2> 
            
          <div/>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 pl-3 pr-3 pt-5 pb-8">
            {question.map((post) => (
                <Plaincard
                description={post.description}
                img={post.mainImage}
                key={post._id}
                postid={post.slug}
                title={post.title} 
                url={post.slug.current}
                type="storypost"
                
                />
              ))}
            </div>  
            
          </div>
       </section>
  
        
    </div>
    <Footermobile />
    </div>
  )
};

export const getServerSideProps = async () => {

  const faq = `*[_type == "story"]{_id, title, description, slug, body, url, mainImage}`
  const question = await sanityClient.fetch(faq);

  return {
    props: {
      question,
    }
  }
};