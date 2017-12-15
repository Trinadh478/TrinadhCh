import React from 'react';
import ReactDOM from 'react-dom';
import '../style/style.css';
import LeftHeadingSection from './components/left_heading_section';
import CentreHeadingSection from './components/centre_heading_section';
import RightHeadingSection from './components/right_heading_section';

const LandingPage = () => {
    return (
    	<div className='xouter'>
    		<span>
    			<LeftHeadingSection/>
    			<CentreHeadingSection/>
    			<RightHeadingSection/>
    		</span>
    	</div>
    ); // JSX
}

ReactDOM.render(<LandingPage/>, document.querySelector('.container')); 


