import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import PastDiscussions from '../components/PastDiscussions';
import clientPromise from '../lib/mongodb';

export async function getServerSideProps() {
	const db = (await clientPromise).db('articles');
	const articles = await db.collection('articles').find({}).sort({ date: -1 }).limit(200).toArray();
	console.log(articles);
	return {
		props: {
			articles: JSON.parse(JSON.stringify(articles)),
		},
	};
}

const Home: NextPage = ({ articles }: any) => {
	return (
		<div className="mx-auto my-5 max-w-xl text-center">
			<Head>
				<title>Article Discussions</title>
				<meta name="description" content="Solutions Article Discussions" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h1 className="text-2xl">Article Discussions</h1>
			<p>
				This is a weekly discussion group where we vote on an interesting article to read and have an open-ended
				discussion on what we&apos;ve learned from it and how it applies to our lives.
			</p>

			<div className="h-10"></div>

			<PastDiscussions articles={articles} />

			{/* TODO: Footer with some Solutions links */}
			<footer></footer>
		</div>
	);
};

export default Home;
