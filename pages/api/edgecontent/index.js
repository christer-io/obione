import { content } from '../../../data/content'
// import { NextRequest } from 'next/server'

export default async function handler(req) {
  return new Response(
    JSON.stringify(content),
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
  