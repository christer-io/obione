import { Quickreply } from "@mui/icons-material";
import { ClickAwayListener } from "@mui/material";
import { useRouter } from "next/router"
import Header from "../components/Header"
import Questions from "../components/Questions"

import { sanityClient, urlFor } from "../sanity";
import { content } from "../tailwind.config";



export default function Results ( { question } ) {

    const router = useRouter();
    const find = router.query.searchinput;
    
    

    return (
    <div>
        <div>
            <Header />
        </div>      
          
        <div className='max-w-7xltext-xl auto-mx text-center font-sans text-darkdarkblue pt-9' >
            <h2>Search for the term: {find}</h2> 
        </div>
        <section className='bg-white'>

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 pl-3 pr-3 pt-5 pb-4">
            {question.map((post) => (
                <Questions
                key={post._id}
                postid={post.slug}
                title={post.title} 
                url={post.slug.current}
                />
                ))}
          </div>  
              
          <div>
            <h3 className="text-center text-base pb-2 hover:text-hover"> <a href="/faq/">Explore 50+ FAQs &rarr; </a></h3>
          </div>
            
        </section>
        
      
    </div>
    )
};

export async function getServerSideProps({params, query}) {

  const searchinput = query.searchinput;

  const faq = `*[_type == "question" && title match $tag]{_id, title, slug, body, license, source}`
  
  const question = await sanityClient.fetch(faq, {
    tag: searchinput,
  })
    


  return {
    
    props: {
      question,
    }
  }
};
