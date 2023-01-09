
import { sanityClient, urlFor } from "../../sanity";
// import { NextRequest } from 'next/server'

export default async function handler(req) {
  const faq = `*[_type == "question"]{_id, title, slug, body, url}`
  const result = await sanityClient.fetch(faq);
  
  return new Response(
    
    JSON.stringify(result),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
        'cache-control': 'public, s-maxage=1200, stale-while-revalidate=3600',
      },
    }
  )
}

export const config = {
  runtime: 'edge',
}
  