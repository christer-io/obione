import { content } from '../../../data/content'
import initMiddleware from '../../../lib/init-middleware'
import Cors from 'cors'

const cors = initMiddleware(
   
    Cors({
        // Only allow requests with GET, POST and OPTIONS
        methods: ['GET', 'POST', 'OPTIONS'],
    })
)

export default async function handler(req, res) {
    await cors(req, res)

    res.status(200).json(content)
}