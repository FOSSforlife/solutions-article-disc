import React, { ReactElement } from 'react';

interface Props {
	videoId: string;
}

export default function YouTubeEmbed({ videoId }: Props): ReactElement {
	return (
		// https://medium.com/bleeding-edge/enforcing-an-aspect-ratio-on-an-html-element-in-react-and-css-27a13241c3d4
		<div className="w-full h-0 pb-3 relative" style={{ paddingBottom: '56.25%' }}>
			<div className="absolute inset-0">
				<iframe
					src={`https://www.youtube.com/embed/${videoId}`}
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
					className="w-full h-full"
				></iframe>
			</div>
		</div>
	);
}
