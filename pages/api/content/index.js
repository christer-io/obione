import { content } from '../../../data/content'

export default function handler(req, res) {
    res.status(200).json(content)
}