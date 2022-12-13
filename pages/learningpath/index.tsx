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
      <div className="h-screen max-w-3xl mx-auto pt-9 pb-9">
        <iframe className="h-full w-full" src="https://digitallibrary.io/wp-admin/admin-ajax.php?action=h5p_embed&id=840"  title="Open source"></iframe>
        
      </div>
    
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