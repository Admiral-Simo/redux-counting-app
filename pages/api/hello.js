// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { ways } from "../../data/ways";

export default function handler(req, res) {
  res.status(200).json(ways)
}
