import React, { ReactElement } from "react";

interface Props {
  articles: Array<{
    articleTitle: string;
    url: string;
    date: string;
    publisher: string;
  }>;
}

export default function PastDiscussions({ articles }: Props): ReactElement {
  const discussions = [
    {
      articleTitle: "articleTitle 1",
      url: "https://google.com",
      date: "2021-12-29T08:00:00.000Z",
    },
  ];

  return (
    <section className="rounded-md border-2 shadow mb-2 p-2 max-w-lg mx-auto">
      <h2 className="text-xl text-center">Past Discussions</h2>
      <ol className="list-decimal list-inside m-4">
        {articles.map(({ articleTitle, url, date, publisher }) => (
          <li key={date}>
            {new Date(date).toDateString().slice(4)}:{" "}
            <a className="text-blue-600 visited:text-purple-600" href={url}>
              {publisher} - {articleTitle}
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
