import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons
// import Dev from '@material-ui/icons/DeveloperMode';
// import ViewWeek from '@material-ui/icons/Edit';
// import Laptop from '@material-ui/icons/Laptop';
// core components
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
// import InfoArea from 'components/InfoArea/InfoArea.jsx';

import productStyle from 'assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx';

class ProductSection extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div style={{ textAlign: 'center' }}>
				<GridContainer justify="center">
					<GridItem xs={12} sm={12} md={8}>
						<h2 className={classes.title}>Hi my name is Vince</h2>
						<h5 className={classes.description}>
							I am a full-stack developer with a background in design (UI/UX, branding), with a deep
							passion for JavaScript, particularly in the React and Node ecosystems. While the web
							development field keeps on changing and developing, the landscape provides the challenge and
							fun I crave in creating, solving problems, and learning new technologies.
						</h5>
					</GridItem>
				</GridContainer>
				{/* <div>
					<GridContainer>
						<GridItem xs={12} sm={12} md={4}>
							<InfoArea
								title="Development"
								description="Specializing in technologies such as React, Redux, and Node."
								icon={Dev}
								iconColor="info"
								vertical
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<InfoArea
								title="Design"
								description="I have experience in designing, prototyping, and branding. I am familiar with Photoshop, Illustrator, and Adobe XD"
								icon={ViewWeek}
								iconColor="success"
								vertical
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<InfoArea
								title="Free Time"
								description="Believe it or not I do like to code in my free time😂 Right now I'm learning Python for fun, I also love workout and travel. Basic stuff"
								icon={Laptop}
								iconColor="danger"
								vertical
							/>
						</GridItem>
					</GridContainer>
				</div> */}
			</div>
		);
	}
}

export default withStyles(productStyle)(ProductSection);
