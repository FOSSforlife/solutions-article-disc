import { ReactElement } from 'react';
import Image from 'next/image';
import SolutionsBlack from '../public/solutions-black.png';
import SolutionsWhite from '../public/solutions-white.png';
import { SocialIcon } from 'react-social-icons';

export default function Footer(): ReactElement {
	return (
		<footer className="mt-20 text-right">
			<p className="mx-auto text-center">Is there a topic you want us to discuss on the Solutions podcast?</p>
			<p className="mx-auto text-center">
				Tell us about it{' '}
				<a className="text-blue-600 visited:text-purple-600" href="https://solutions-ideas.herokuapp.com">
					here
				</a>
				.
			</p>
			<div className="m-2 mt-5">
				<Image src={SolutionsBlack} layout="fixed" width={214} height={30} alt="Solutions"></Image>
			</div>
			<div className="m-2 space-x-2.5 text-right">
				<SocialIcon style={{ height: 30, width: 30 }} bgColor="#777" url="https://medium.com/solutions" />
				<SocialIcon style={{ height: 30, width: 30 }} bgColor="#777" url="https://facebook.com/solnspodcast" />
				<SocialIcon style={{ height: 30, width: 30 }} bgColor="#777" url="https://instagram.com/solnspodcast" />
				<SocialIcon style={{ height: 30, width: 30 }} bgColor="#777" url="https://reddit.com/r/solutionspodcast" />
				<SocialIcon style={{ height: 30, width: 30 }} bgColor="#777" url="https://twitter.com/solnspodcast" />
				<SocialIcon
					style={{ height: 30, width: 30 }}
					bgColor="#777"
					url="https://github.com/solutions-podcast/article-disc-site"
				/>
				<SocialIcon style={{ height: 30, width: 30 }} bgColor="#777" url="https://discord.io/solutions" />
			</div>
		</footer>
	);
}
