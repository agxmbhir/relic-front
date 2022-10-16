// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
const url ="https://relic-production.up.railway.app"
const sonr = "https://relic-production.up.railway.app/sonr/track_alias"
const evm = "https://relic-production.up.railway.app/evm/new_contract"

type Data = {
  name: string
}

// make a post request to the sonr api
export async function postSonr(data: any) {
  const response = await fetch(sonr, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}
export async function postEvm(data:any) {
  // make a post request to the evm api
  const response2 = await fetch(evm, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
