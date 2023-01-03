import { useRouter } from "next/router"
import Header from "../components/Header"
import Questions from "../components/Questions"
import Search from "../components/Search"
import Head from 'next/head';

export default function Results ( { question } ) {
    const router = useRouter();
    let find = router.query.searchinput;
    let searchIntro = "Showing search results for the term: ";
   
    if(find == ""){
      find = "Please enter a search term"
  
    } else {
      find = searchIntro.concat(find);
    }
   
    return (
     
    <div>
        <div>
            <Head>
              <title>ObiOne search</title>
              <link rel="icon" href="/favicon.ico" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <meta name="keywords" content="open source, open data, open content"></meta>
              <meta name="description" content="Open source, open data, open education and digital public goods"></meta>
            </Head>
            <Header />
        </div>      
        <div className='max-w-7xl mx-auto font-sans text-darkdarkblue pt-9' >
            <Search />
        </div>  
        <div className='max-w-7xl mx-auto text-2xl font-sans text-darkdarkblue pt-9' >
            
            <h2 className="text-center">{find}</h2> 
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
            
        </section>
        
      
    </div>
    )
};

export async function getServerSideProps({query, res}) {
  const searchinput = query.searchinput;
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate");
  const faq = "https://obione-six.vercel.app/api/edgecontent/"
  const data = await fetch(faq).
  then(
    (res) => res.json()
  );
  let question = data.filter(qa => {
    const regex = new RegExp(`${searchinput}`, 'gi');
    return qa.title.match(regex);
  });
  
  if (!question) {
        return {
            notFound: true
        }
  } else {
    return {
      props: {
        question,
      }
    };
  }
};


