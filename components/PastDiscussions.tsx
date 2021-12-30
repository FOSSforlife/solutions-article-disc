import React, { ReactElement } from 'react';

interface Props {}

export default function PastDiscussions({}: Props): ReactElement {
	const discussions = [
		{
			title: 'Title 1',
			url: 'https://google.com',
			date: new Date(),
		},
	];

	return (
		<>
			<h2 className="text-xl">Past Discussions</h2>
			<ul className="list-disc list-inside m-4">
				{discussions.map(({ title, url, date }) => (
					<li key={date.toString()}>
						<a href={url}>
							{date.toDateString()}: {title}
						</a>
					</li>
				))}
			</ul>
		</>
	);
}
