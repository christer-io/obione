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
import Path from '../../components/Path';

import StandardButton from '../../components/StandardButton';
import Footermobile from '../../components/Footermobile';


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
          <div className='max-w-7xl mx-auto  text-3xl text-center font-sans text-darkdarkblue pt-9' >
            <h2>Other resources</h2> 
            <h3 className="text-base pb-2">Web resources covering topics around open.</h3>
          <div/>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 pl-3 pr-3 pt-5 pb-8">
            {question.map((post) => (
                <Externallink
                key={post._id}
                postid={post.mainImage}
                img={post.mainImage} 
                title={post.title} 
                url={post.url}
                description={post.description} 

                
                />
              ))}
            </div>  
            
          </div>
       </section>
       <Footermobile />
        
    </div>
    
    </div>
  )
};

export const getServerSideProps = async () => {

  const faq = `*[_type == "externalresource"]{_id, title, slug, body, url, description}`
  const question = await sanityClient.fetch(faq);

  return {
    props: {
      question,
    }
  }
};