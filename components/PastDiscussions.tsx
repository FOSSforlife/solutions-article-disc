import React, { ReactElement } from 'react';

interface Props {
	articles: Array<{
		articleTitle: string;
		url: string;
		date: string;
	}>;
}

export default function PastDiscussions({ articles }: Props): ReactElement {
	const discussions = [
		{
			articleTitle: 'articleTitle 1',
			url: 'https://google.com',
			date: '2021-12-29T08:00:00.000Z',
		},
	];

	return (
		<>
			<h2 className="text-xl">Past Discussions</h2>
			<ul className="list-disc list-inside m-4">
				{articles.map(({ articleTitle, url, date }) => (
					<li key={date}>
						<a href={url}>
							{new Date(date).toDateString().slice(4)}: {articleTitle}
						</a>
					</li>
				))}
			</ul>
		</>
	);
}
