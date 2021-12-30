// playlist rss: https://www.youtube.com/feeds/videos.xml?playlist_id=
// playlist html: https://www.youtube.com/playlist?list=
// channel rss: https://www.youtube.com/feeds/videos.xml?channel_id=
// channel html: https://www.youtube.com/channel/
// video: <iframe width="560" height="315" src="https://www.youtube.com/embed/Ir0Z_1dKirQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

import React, { ReactElement, useEffect, useState } from 'react';
import Parser from 'rss-parser';
import YouTubeEmbed from './YouTubeEmbed';

interface Props {
	section: any;
}

async function fetchArticles(url: string) {
	const parser = new Parser({ headers: {} });
	return parser.parseURL(url);
}

async function fetchArticlesMock(_: string) {
	return {
		items: [
			{
				title: 'October 25, 2021',
				'yt:videoId': 'Zo6iYbANnhM',
				'media:group': {
					'media:description':
						'Jan 6 Rioters Met with Republicans, Trump Staff, WITH VIDEO / Hero Student Reduces Madison Cawthorn to Stammering Mess / Alec Baldwin Accidentally Kills Crew Member on Set / and much more... ',
				},
			},
		],
	};
}

export default function SectionYouTube({ section }: Props): ReactElement {
	const { channelId, playlistId } = section;
	const [articles, setArticles] = useState<Array<any>>([]);

	useEffect(() => {
		(async () => {
			// TODO: React suspense
			let url: string;
			if (channelId) {
				url = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
			} else if (playlistId) {
				url = `https://www.youtube.com/feeds/videos.xml?playlist_id=${playlistId}`;
			} else {
				return;
			}

			const { items } = await fetchArticlesMock(url);
			setArticles(items);
		})();
	}, []);

	return (
		<>
			{articles[0] && (
				<>
					<h3 className="text-xl text-center">{articles[0].title}</h3>
					<YouTubeEmbed videoId={articles[0]['yt:videoId']} />
					<div className="text-center">{articles[0]['media:group']['media:description']}</div>
				</>
			)}
			{/* <ul className="list-disc list-inside m-4">
			{articles.map((article, key) => (
				<li key={key}>
					<a href={article.link}>{article.title}</a>
				</li>
			))}
		</ul> */}
		</>
	);
}
