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
			    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
			    <CardText>
			        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			        Mauris sagittis pellentesque lacus eleifend lacinia...
			    </CardText>
			    <CardActions border>
			        <Button colored>Explore</Button>
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
			    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
			    <CardText>
			        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			        Mauris sagittis pellentesque lacus eleifend lacinia...
			    </CardText>
			    <CardActions border>
			        <Button colored>Explore</Button>
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
			    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
			    <CardText>
			        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			        Mauris sagittis pellentesque lacus eleifend lacinia...
			    </CardText>
			    <CardActions border>
			        <Button colored>Explore</Button>
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
					
					<Tab>CRUD </Tab>

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