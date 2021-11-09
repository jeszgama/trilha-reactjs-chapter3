import { NextApiRequest, NextApiResponse } from "next"

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        { id: 1, name: 'Jéssica' },
        { id: 2, name: 'Vitória' },
        { id: 3, name: 'William' },
    ]

    return response.json(users)
}