import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Section from '../components/Section/Section';

const Home: NextPage = () => {
	const sections: Array<any> = [
		{
			title: 'Vox',
			type: 'text',
			column: 1,
			url: 'https://www.vox.com/rss/index.xml',
			htmlUrl: 'https://www.vox.com',
			color: 'yellow-100',
		},
		{
			title: 'David Pakman Show',
			type: 'youtube',
			column: 1,
			playlistId: 'PLVrg5xLmCvhG93P29d04-Qu_M7-z3W_jB',
			htmlUrl: 'https://www.vox.com',
			color: 'blue-100',
		},
		// {
		// 	title: 'News 2',
		// 	type: 'text',
		// 	column: 1,
		// },
		// {
		// 	title: 'News 3',
		// 	type: 'text',
		// 	column: 1,
		// },
	];

	return (
		<div className="m-5">
			<Head>
				<title>News Dashboard</title>
				<meta name="description" content="Personal news dashboard, created by FOSSforlife" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
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
			</main>

			<footer></footer>
		</div>
	);
};

export default Home;
