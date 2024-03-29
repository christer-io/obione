import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import BannerSmall from '../components/BannerSmall'
import SectionHeader from "../components/SectionHeader"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Banner from '../components/Banner';
import Plaincard from '../components/Plaincard';
import { sanityClient, urlFor } from "../sanity";
import { Post } from '../typings';
import Textcard from '../components/Textcard';
import Externallink from '../components/Externallink';
import Questions from '../components/Questions';
import Footermobile from '../components/Footermobile';

import StandardButton from '../components/StandardButton';


interface Props {
  posts: [Post];
  technical: [Post];
  external: [Post];
  question: [Post];
  stories: [Post];

}

export default function Home ({ posts, technical, external, question, stories  }: Props) {
 
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
      <Banner />
      <div className="max-w-7xl mx-auto">
     
      <SectionHeader title="The basics of open" subtitle="Dive in and learn more about the core topics of open"/>
      {/* posts */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
        {posts.map((post) => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className="border text-wihte border-lightgray rounded-lg group cursor-pointer overflow-hidden">
              <img className="h-40 lg:h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out" src={urlFor(post.mainImage).url()!} alt={post.title} />
              <div className="flex justify-between pt-5 pb-5 pl-3 lg:pl-5 bg-white">
                <div>
                  <p className="text-sm lg:text-lg font-bold text-darkblue">{post.title}</p>
                  <p className="text-xs">
                    {post.description}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Hero img="osi" url="/post/the-commons-the-market" buttontext="Learn more" title="The New World of Digital Commons" textpart2="Longread about the The Commons, the Market, and the State."/> 

      <section className='bg-white'>
          <SectionHeader title="Stories of open" subtitle="People, projects and organisations that inspire"/>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 pl-3 pr-3 pt-5 pb-5">
            {stories.map((post) => (
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
          <div>
              <h3 className="text-center text-base pb-2 hover:text-hover"> <a href="/story/">Explore more stories &rarr; </a></h3>
          </div>
          
       </section>
       <Hero img="fix" url="/post/open-source-quiz" buttontext="Learn more" title="Take our new open source quiz!" textpart2="Test your knowledge of open with our interactive quiz."/> 

      <section className='bg-white'>
          <div className='max-w-7xl mx-auto text-3xl text-center font-sans text-darkdarkblue pt-9' >
            <SectionHeader title="FAQ" subtitle="Questions and answers intended to help you understand the open movement"/>
          <div/>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 pl-3 pr-3 pt-5 pb-4">
            {question.map((post) => (
                <Questions
                key={post._id}
                postid={post.slug}
                title={post.title} 
                url={post.slug.current}
                tag={post.tag}
                />
              ))}
            </div>  
            <div>
              <h3 className="text-center text-base pb-2 hover:text-hover"> <a href="/results?searchinput=">Explore more FAQs &rarr; </a></h3>
            </div>
          </div>
       </section>
        
       <section className='bg-white'>
          <div className='max-w-7xl mx-auto  text-3xl text-center font-sans text-darkdarkblue pt-9' >
             <SectionHeader title="Other Resources" subtitle="Other organisations and websites with relevant information"/>
          <div/>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 pl-3 pr-3 pt-5 pb-8">
            {external.map((post) => (
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
            <div>
              <h3 className="text-center text-base text-darkdarkblue pb-2 hover:text-hover"> <a href="/externalresource/">Explore more external resources &rarr; </a></h3>
            </div>
          </div>  
       </section>        
             
    <BannerSmall part1="Open source is " part2="a development methodology" part3="and a social movement!" />
           
    </div>
    <Footer />
    <Footermobile />
    </div>
  )
};
export const getServerSideProps = async () => {
  const query = `*[_type == "post" && tag =="featured"]{_id, title, description, mainImage, body, slug}`
  const posts = await sanityClient.fetch(query);

  const techquery = `*[_type == "question" && tag =="nerd"]{_id, title, slug, body, license, source}`
  const technical = await sanityClient.fetch(techquery);

  const externalresource = `*[_type == "externalresource" && tag =="external" && featured =="yes"]{_id, title, slug, description, url}`
  const external = await sanityClient.fetch(externalresource);

  const faq = `*[_type == "question" && featured =="yes"]{_id, title, slug, body, license, source, tag}`
  const question = await sanityClient.fetch(faq);

  const story = `*[_type == "story" && tag=="featured"]{_id, title, description, slug, body, url, mainImage}`
  const stories = await sanityClient.fetch(story);

  return {
    props: {
      posts,
      technical,
      external,
      question,
      stories,
    }
  }
};
