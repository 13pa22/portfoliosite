import React, { Component } from "react";

import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
class Project extends Component {

	constructor(props){
		super(props)
		this.state = { activeTab: 0};
	}

	toggleCategories(){

		if(this.state.activeTab == 0){
		return(
			<div className = "projects-grid">
			
						<Card shadow={5} style={{width: '512px', margin: 'auto'}}>
			    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://wi-images.condecdn.net/image/doEYpG6Xd87/crop/2040/f/weather.jpg) center / cover'}}>Weather Finder React App</CardTitle>
			    <CardText>
			        My Weather Finder React App is a  fun short project that showcase the flexibiility of React in web app creation. It uses a third party API request to obtain weather information.
			    </CardText>
			    <CardActions border>



			       <a href="https://13pa22.github.io/weatherapp/" target="_blank" rel = "noopener noreferrer" /*opens a new tab*/>
						<Button colored >Explore</Button>
								 </a>

				 <a href="https://github.com/13pa22/weatherapp" target="_blank" rel = "noopener noreferrer" /*opens a new tab*/>
						<Button colored >Github Code</Button>
								 </a>



			    </CardActions>

			</Card>
			</div>
			)
	}
	else if (this.state.activeTab ==1){
		return(
			<Card shadow={5} style={{width: '512px', margin: 'auto'}}>
			    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/4/4f/PhpMyAdmin_logo.svg) center / cover'}}></CardTitle>
			    <CardText>
			        A dynamic-content website built using PHP to structure webpage actions and MySQL as the back-end database. CRUD capabilities of PHP/MySQL demonstarted to administer content.
			    </CardText>
			    <CardActions border>
			        <a href="https://photos.app.goo.gl/c6maFhWodtrNTGBt5" target="_blank" rel = "noopener noreferrer" /*opens a new tab*/>
						<Button colored >Explore</Button>
								 </a>
			    </CardActions>
			    <CardMenu style={{color: '#fff'}}>
			        <IconButton name="share" />
			    </CardMenu>
			</Card>
			)
	}
	else if (this.state.activeTab ==2){
		return(
			<Card shadow={5} style={{width: '512px', margin: 'auto'}}>
			    <CardTitle style={{color: '#326da8', height: '176px', background: 'url(https://files.slack.com/files-pri/TA39L364V-FHGHWL61J/capture.png) center / cover'}}></CardTitle>
			    <CardText>
				    This 4th year capstone project is focused on an embedded system application that can plow driveways autonomously. This autonomous
					application will eliminate the risk of injury to shovelling snow. The embedded system used will
					be an FPGA chip and the language for the software being used will be C.

			    </CardText>
			    <CardActions border>
			        
			       <a href="https://drive.google.com/file/d/1kT8ymgVtyJCOM2XeAwn--8mZlIY0ja7X/view?usp=sharing" target="_blank" rel = "noopener noreferrer" /*opens a new tab*/>
						<Button colored >Explore</Button>
								 </a>
								 <a href="https://files.slack.com/files-pri/TA39L364V-FHGHWL61J/capture.png" target="_blank" rel = "noopener noreferrer" /*opens a new tab*/>
						<Button colored >Visual</Button>
								 </a>
			    </CardActions>
			    <CardMenu style={{color: '#fff'}}>
			        <IconButton name="share" />
			    </CardMenu>
			</Card>
			)
	}
	else if (this.state.activeTab ==3){
		return(
			<Card shadow={5} style={{width: '512px', margin: 'auto'}}>
			    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://viamo.io/wp-content/uploads/2017/06/viamo-logo-strapline-featured-1920x1080px.png) center / cover'}}></CardTitle>
			    <CardText>
			        Data Analysis conducted for Viamo's 321 Marketing Pilot. 321 Service by Viamo aims to 
			        reach remote populations in Sub-Saharan Afica using IVR (voice-calling ) and SMS methods. By providing
			        this connection, Viamo allows larger NGO firms to connect with the populations they work with directly.
			        The marketing Pilot aims to study how effective the service is in retaining users who are drawn in with promotional offers.
			    </CardText>
			    <CardActions border>
			         <a href="https://drive.google.com/file/d/1GZ1PEsPqyAPRgu7tECcbVMQSxHcrC1jU/view?usp=sharing" target="_blank" rel = "noopener noreferrer" /*opens a new tab*/>
						<Button colored >Explore</Button>
								 </a>
			    </CardActions>
			    <CardMenu style={{color: '#fff'}}>
			        <IconButton name="share" />
			    </CardMenu>
			</Card>
			)
	}


	}
	
	render(){
		return (

			<div className="category-tabs"> <h1> Projects</h1>

			<Tabs activeTab = {this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
					<Tab>React </Tab>
					
					<Tab>PHP/MySQL/CRUD </Tab>

					<Tab>Embedded Systems </Tab>

					<Tab>Data Analysis </Tab>


				</Tabs>


					<Grid >
						<Cell col={12}>
						<div className="content">{this.toggleCategories()} </div>
						</Cell>

					</Grid>


					
			 </div>
				
			)

	};
}

export default Project;