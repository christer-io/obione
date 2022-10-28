import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';

import Header from '../components/Header';
import Banner from '../components/Banner';
import { sanityClient, urlFor } from "../sanity";
import { Post } from '../typings';

import StandardButton from '../components/StandardButton';


interface Props {
  posts: [Post];
}

export default function Home ({ posts }: Props) {
  console.log(posts);
  return (
    <div className="">
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>ObiOne</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="keywords" content="open source, open data, open content"></meta>
        <meta name="description" content="Open source, open data, open education and digital public goods"></meta>
      </Head>
      <Header />
      <Banner part1="Open source is a methodology" part2="and a social movement!" subtext="With an open philosofy and metodology we can solve the global grand challanges in more effective, transparent and democratic ways."/>

      <div className='text-3xl text-center font-sans text-darkdarkblue pl-10'> 
      <h2>The elements of open </h2> 
      <h3 className="text-base">The open movement is built on a set of core elements.</h3></div>
      {/* posts */}
     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
        {posts.map((post) => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className="border text-wihte border-lightgray rounded-lg group cursor-pointer overflow-hidden">
              <img className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out" src={urlFor(post.mainImage).url()!} alt={post.title} />
              <div className="flex justify-between p-5 bg-white">
                <div>
                  <p className="text-lg font-bold text-darkblue">{post.title}</p>
                  <p className="text-xs">
                    {post.description}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    
          
    </div>
    <Footer />
    </div>
  )
};

export const getServerSideProps = async () => {
  const query = `*[_type == "post" && tag =="featured"]{_id, title, description, mainImage, body, slug}`
 
  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    }
  }
};