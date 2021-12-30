import React, { ReactElement, useEffect, useState } from 'react';
import Parser from 'rss-parser';

interface Props {
	section: any;
}

async function fetchArticles(url: string) {
	const parser = new Parser();
	return parser.parseURL(url);
}

export default function SectionText({ section }: Props): ReactElement {
	const { url } = section;
	const [articles, setArticles] = useState<Array<any>>([]);

	useEffect(() => {
		(async () => {
			// TODO: React suspense
			const { items } = await fetchArticles(url);
			setArticles(items);
		})();
	}, []);

	return (
		<ul className="list-disc list-inside m-4">
			{articles.map((article, key) => (
				<li key={key}>
					<a href={article.link}>{article.title}</a>
				</li>
			))}
		</ul>
	);
}
