import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import PastDiscussions from '../components/PastDiscussions';

const Home: NextPage = () => {
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

			<PastDiscussions />
			{/* <main>
				<div className="grid grid-cols-3 gap-4">
					<div className="div">
						{sections
							.filter((s) => s.column === 0)
							.map((section, sectionIndex) => (
								<Section key={sectionIndex} section={section} />
							))}
					</div>
					<div className="div">
						{sections
							.filter((s) => s.column === 1)
							.map((section, sectionIndex) => (
								<Section key={sectionIndex} section={section} />
							))}
					</div>
					<div className="div">
						{sections
							.filter((s) => s.column === 2)
							.map((section, sectionIndex) => (
								<Section key={sectionIndex} section={section} />
							))}
					</div>
				</div>
			</main> */}

			<footer></footer>
		</div>
	);
};

export default Home;
