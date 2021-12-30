// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next';
// import axios from 'axios';
// import dotenv from 'dotenv';
// dotenv.config();

// // TODO: Article type
// // type Data = {
// // 	name: string;
// // };

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
// 	const mongoUrl = `https://data.mongodb-api.com/app${process.env.MONGODB_ID}/endpoint/data/beta/action/find`;
// 	const response = await axios.post(mongoUrl, {
// 		headers: {
// 			'Content-Type': 'application/json',
// 			'Access-Control-Request-Headers': '*',
// 			'api-key': process.env.MONGODB_API_KEY,
// 		},
// 		data: {
// 			collection: 'articles',
// 			database: 'articles',
// 			dataSource: process.env.MONGODB_CLUSTER,
// 			// limit: 100,
// 		},
// 	});

// 	res.status(200).json(response);
// }
