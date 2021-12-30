import React, { ReactElement, useEffect } from 'react';
import SectionText from './SectionText';
import SectionYouTube from './SectionYouTube';

interface Props {
	section: any;
}

export default function Section({ section }: Props): ReactElement {
	const { title, type, htmlUrl, color } = section;

	return (
		<div className={`rounded-md border-2 shadow mb-2 p-2 ${color ? `bg-${color}` : ''}`}>
			<h2 className="text-2xl text-center">
				<a href={htmlUrl}>{title}</a>
			</h2>
			{type === 'text' && <SectionText section={section}></SectionText>}
			{type === 'youtube' && <SectionYouTube section={section}></SectionYouTube>}
		</div>
	);
}
