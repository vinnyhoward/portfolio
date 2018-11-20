import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons
// import Camera from '@material-ui/icons/Camera';
// import Favorite from '@material-ui/icons/Favorite';
import Palette from '@material-ui/icons/Palette';
// core components
import Header from 'components/Header/Header.jsx';
import Button from 'components/CustomButtons/Button.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import HeaderLinks from 'components/Header/HeaderLinks.jsx';
import NavPills from 'components/NavPills/NavPills.jsx';
import Parallax from 'components/Parallax/Parallax.jsx';
import Card from 'components/Card/Card.jsx';
import CardBody from '../../components/Card/CardBody';
// import CardActions from '@material-ui/core/CardActions';
import Build from '@material-ui/icons/Build';
import profilePageStyle from 'assets/jss/material-kit-react/views/profilePage.jsx';
import ProductSection from './Sections/ProductSection.jsx';
// import WorkSection from './Sections/WorkSection.jsx';

class ProfilePage extends React.Component {
	render() {
		const { classes, ...rest } = this.props;
		const imageClasses = classNames(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);
		// const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
		return (
			<div>
				<Header
					color="transparent"
					brand="Vince Howard"
					rightLinks={<HeaderLinks />}
					fixed
					changeColorOnScroll={{
						height: 200,
						color: 'white'
					}}
					{...rest}
				/>
				<Parallax small filter image={'https://image.ibb.co/iEhUVL/profile-city.jpg'} />
				<div className={classNames(classes.main, classes.mainRaised)}>
					<div>
						<div className={classes.container}>
							<GridContainer justify="center">
								<GridItem xs={12} sm={12} md={6}>
									<div className={classes.profile}>
										<div>
											<img
												src="https://image.ibb.co/n0LBc0/square-Profile.jpg"
												alt="..."
												className={imageClasses}
											/>
										</div>
										{/* <div className={classes.name}>
											<h3 className={classes.title}>Vincent Howard</h3>
											<h6>FULL STACK DEVELOPER</h6>
											<Button
												href="https://github.com/vinnyhoward"
												justIcon
												link
												className={classes.margin5}
											>
												<i className={'fab fa-github'} />
											</Button>
											<Button
												href="https://www.linkedin.com/in/vinnyhoward/"
												justIcon
												link
												className={classes.margin5}
											>
												<i className={'fab fa-linkedin'} />
											</Button>
											<Button
												href="https://www.instagram.com/vinnyvader/"
												justIcon
												link
												className={classes.margin5}
											>
												<i className={'fab fa-instagram'} />
											</Button>
										</div> */}
									</div>
								</GridItem>
							</GridContainer>
							{/* <div className={classes.description}>
								<p>
									I am a full-stack developer with a background in design (UI/UX, branding), with a
									deep passion for the JavaScript and React Ecosystems. The web development field
									keeps on changing and developing, which makes everyday different and fun. So it goes
									well with my personality when it comes to self improvement, self learning, the love
									to create content, and solving problems.
								</p>
							</div> */}
							<ProductSection />
							<div style={{ marginTop: '50px' }}>
								<GridContainer justify="center">
									<GridItem xs={12} sm={12} md={16} className={classes.navWrapper}>
										<NavPills
											alignCenter
											color="success"
											tabs={[
												{
													tabButton: 'Coding',
													tabIcon: Build,
													tabContent: (
														<GridContainer justify="center">
															<GridItem xs={12} sm={12} md={6}>
																<Card style={{ width: '100%' }}>
																	<img
																		className={classes.imgCardTop}
																		src="https://image.ibb.co/kE7nZf/frontal-gymshark.jpg"
																		alt="Card-img-cap"
																	/>
																	<CardBody>
																		<h4 className={classes.cardTitle}>
																			Gymshark Clone
																		</h4>
																		<p>
																			This project is aimed at cloning the popular
																			brand called Gymshark from the ground up,
																			right from the back-end and up to the front.
																		</p>

																		<a href="https://gitlab.com/Vinnyvader/ecommerce-clone-frontend">
																			<Button color="success">Gitlab</Button>
																		</a>
																		<a href="https://fake-gymshark-clone-frontend.herokuapp.com/">
																			<Button color="success">Live Site</Button>
																		</a>
																	</CardBody>
																</Card>

																<Card style={{ width: '100%' }}>
																	<img
																		className={classes.imgCardTop}
																		src="https://image.ibb.co/b0hMAL/latch.jpg"
																		alt="Card-img-cap"
																	/>
																	<CardBody>
																		<h4 className={classes.cardTitle}>Latch</h4>
																		<p>
																			Designed and implemented a static landing
																			page for a start-up called Latch, which
																			enables users to track their transactions
																			and stolen funds to the original address in
																			a presentable and user friendly way.
																		</p>

																		<Button color="default">Private</Button>

																		<a href="https://getlatched.net/">
																			<Button color="success">Live Site</Button>
																		</a>
																	</CardBody>
																</Card>
																<Card style={{ width: '100%' }}>
																	<img
																		className={classes.imgCardTop}
																		src="https://image.ibb.co/gOyWvL/neureal.jpg"
																		alt="Card-img-cap"
																	/>
																	<CardBody>
																		<h4 className={classes.cardTitle}>
																			Neureal ICO
																		</h4>
																		<p>
																			A landing page for an AI blockchain ICO
																			situated out of Salt Lake City (Initial Coin
																			Offering).
																		</p>
																		<a href="https://github.com/neureal/neureal-website-static">
																			<Button color="success">Github</Button>
																		</a>
																		<a href="http://neureal.net">
																			<Button color="success">Live Site</Button>
																		</a>
																	</CardBody>
																</Card>
															</GridItem>
															<GridItem xs={12} sm={12} md={6}>
																<Card style={{ width: '100%' }}>
																	<img
																		className={classes.imgCardTop}
																		src="https://image.ibb.co/fzF2H0/impav.jpg"
																		alt="Card-img-cap"
																	/>
																	<CardBody>
																		<h4 className={classes.cardTitle}>
																			Impav Foundations (Mock Charity Web App)
																		</h4>
																		<p>
																			Personal project aimed at educating and
																			familiarizing myself with the Solidity
																			language for smart contracts for the
																			Ethereum blockchain, while interacting with
																			the data on the front-end using ReactJS
																		</p>
																		<a href="https://github.com/vinnyhoward/charity-react-solidity">
																			<Button color="success">Github</Button>
																		</a>
																		<a href="https://trusting-mahavira-8582f4.netlify.com">
																			<Button color="success">Live Site</Button>
																		</a>
																	</CardBody>
																</Card>
																<Card style={{ width: '100%' }}>
																	<img
																		className={classes.imgCardTop}
																		src="https://image.ibb.co/jGetqL/crackcase.jpg"
																		alt="Card-img-cap"
																	/>
																	<CardBody>
																		<h4 className={classes.cardTitle}>Crackcase</h4>
																		<p>
																			Designed and coded a loot crate website
																			called CrackCase where users can purchase
																			digital keys to unbox items of different
																			rarity.
																		</p>
																		<Button color="default">Private</Button>
																		<a href="http://crackcase.com/">
																			<Button color="success">Live Site</Button>
																		</a>
																	</CardBody>
																</Card>
															</GridItem>
														</GridContainer>
													)
												},
												{
													tabButton: 'Design',
													tabIcon: Palette,
													tabContent: (
														<GridContainer justify="center">
															<GridItem xs={12} sm={12} md={12}>
																<Card style={{ width: '100%' }}>
																	<img
																		className={classes.imgCardTop}
																		src="https://image.ibb.co/nv1JAL/badgr-showcase.jpg"
																		alt="Card-img-cap"
																	/>
																	<CardBody>
																		<h4 className={classes.cardTitle}>Badgr</h4>
																		<p>
																			My dream social media app where users could
																			create challenges and challenge their
																			followers
																		</p>

																		<a href="https://xd.adobe.com/view/c7442cf5-31ba-4988-b238-07a8c1cc6acd/?fullscreen">
																			<Button color="info">Live Prototype</Button>
																		</a>
																	</CardBody>
																</Card>
															</GridItem>
															<GridItem xs={12} sm={12} md={12}>
																<Card style={{ width: '100%' }}>
																	<img
																		className={classes.imgCardTop}
																		src="https://image.ibb.co/iAsYaL/aircontrol-showcase.jpg"
																		alt="Card-img-cap"
																	/>
																	<CardBody>
																		<h4 className={classes.cardTitle}>
																			AirControl
																		</h4>
																		<p>
																			AirControl powered by Airtime Labs helps you
																			responsibly teach your children the use of
																			cellular devices. Conveniently manage talk,
																			text, and data.
																		</p>

																		<a href="https://itunes.apple.com/us/app/aircontrol-mobile/id1273900296?mt=8">
																			<Button color="info">App Store</Button>
																		</a>
																		<a href="https://xd.adobe.com/view/33e51d67-40d3-4bc7-9500-cdc4d39324ee/?fullscreen">
																			<Button color="info">Live Prototype</Button>
																		</a>
																	</CardBody>
																</Card>
															</GridItem>
														</GridContainer>
													)
												}
												// {
												// 	tabButton: 'Favorite',
												// 	tabIcon: Favorite,
												// 	tabContent: (
												// 		<GridContainer justify="center">
												// 			<GridItem xs={12} sm={12} md={4}>
												// 				<img alt="..." src={work4} className={navImageClasses} />
												// 				<img alt="..." src={studio3} className={navImageClasses} />
												// 			</GridItem>
												// 			<GridItem xs={12} sm={12} md={4}>
												// 				<img alt="..." src={work2} className={navImageClasses} />
												// 				<img alt="..." src={work1} className={navImageClasses} />
												// 				<img alt="..." src={studio1} className={navImageClasses} />
												// 			</GridItem>
												// 		</GridContainer>
												// 	)
												// }
											]}
										/>
									</GridItem>
								</GridContainer>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withStyles(profilePageStyle)(ProfilePage);
