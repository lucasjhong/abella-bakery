import React from 'react';
import HeroSection from '../../components/PageSection/HeroSection';
// import Cards from '../../components/Cards/Cards';
import Slider from '../../components/Cards/Slider';
import InstagramGallery from '../../components/InstagramGallery/InstagramGallery';
// import InstagramFeed from '../../components/InstagramFeed/InstagramFeed';
// import InstagramEmbed from 'react-instagram-embed';

const Home = (props) => {
	return (
		<React.Fragment>
			<HeroSection />
			<Slider />
			{/* <Cards /> */}
			<InstagramGallery />
		</React.Fragment>
	);
};

export default Home;
