import type { NextPage } from 'next';
import Head from 'next/head';
import PastDiscussions from '../components/PastDiscussions';
import clientPromise from '../lib/mongodb';
import Image from 'next/image';
import SolutionsBlack from '../public/solutions-black.png';
import SolutionsWhite from '../public/solutions-white.png';
import { SocialIcon } from 'react-social-icons';

export async function getServerSideProps() {
	const db = (await clientPromise).db('articles');
	const articles = await db.collection('articles').find({}).sort({ date: 1 }).limit(200).toArray();
	return {
		props: {
			articles: JSON.parse(JSON.stringify(articles)),
		},
	};
}

const Home: NextPage = ({ articles }: any) => {
	return (
		<div className="mx-auto my-10 max-w-xl">
			<Head>
				<title>Article Discussions</title>
				<meta name="description" content="Solutions Article Discussions" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h1 className="text-3xl text-center">Article Discussions</h1>
			<main className="text-center">
				<p className="mt-3">
					A weekly virtual meetup where we discuss news articles about current events and interesting ideas.
					{/* This is a weekly discussion group where we vote on an interesting article to read and have an open-ended
					discussion on what we&apos;ve learned from it and how it applies to our lives. */}
				</p>

				<p className="mt-4">
					If you&apos;d like to be a part of it, join our{' '}
					<a className="text-blue-600 visited:text-purple-600" href="https://discord.io/solutoins">
						Discord server!
					</a>
				</p>
			</main>
			<div className="h-10"></div>

			<PastDiscussions articles={articles} />

			<footer className="mt-20 text-right max-w-l">
				<div className="m-2">
					<Image src={SolutionsBlack} layout="fixed" width={214} height={30} alt="Solutions"></Image>
				</div>
				<div className="m-2 space-x-2.5 text-right">
					<SocialIcon style={{ height: 30, width: 30 }} bgColor="#777" url="https://medium.com/solutions" />
					<SocialIcon style={{ height: 30, width: 30 }} bgColor="#777" url="https://facebook.com/solnspodcast" />
					<SocialIcon style={{ height: 30, width: 30 }} bgColor="#777" url="https://instagram.com/solnspodcast" />
					<SocialIcon style={{ height: 30, width: 30 }} bgColor="#777" url="https://reddit.com/r/solutionspodcast" />
					<SocialIcon style={{ height: 30, width: 30 }} bgColor="#777" url="https://twitter.com/solnspodcast" />
					<SocialIcon style={{ height: 30, width: 30 }} bgColor="#777" url="https://discord.io/solutions" />
				</div>
			</footer>
		</div>
	);
	{
		/* 1128 228 */
		// 1070 150
	}
};

export default Home;
