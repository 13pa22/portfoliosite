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
			    <CardTitle style={{color: '#fff', height: '176px', background: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAYFBMVEUA1/7///4A1f4A0/70/f7///3K9P7s+/4A0f7p+/7C8v668P535P6z7/4u2v7w/P7d+P7U9v6a6v6I5/6f6/6p7f5M3v5l4f4/3P7c+P6t7v6A5f5J3v5X4P3B8v4h2f3MQw0QAAACQUlEQVR4nO3YS5OjIBSGYc6BaLygojHaubT//182aHVVMhNnMZtk8T5ZQJkN9RWXA8YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/2vo77r11NSnq753NJ/NSfzVKSLtRYpDIK09OoraxR+C0SWX3tjmML17TB9L8zHOJJ2dm6QzqRsqptYOlevWdlLateO/CGuHSr22jUi7fbh0hLVD3bA1X+rWlLRih9+jnVdVmzmzzDLa2A2esHbYsRjKwsnGddVVasJ6SacsJpRdZDzf5ts5kzHEyPyNuP6i91xCLdMxy9XExWiM9Me+HQoJy7vH9mliwZ41qlm4ydmYvhrUDAfjTqrnQqhMn9Wy3gMnKTKNZZZIpZp30phUbMn87uF9FC22Y0/zmM993d9Tctn60Xbf7FsPtD1tYYU1pGQxs2yXHZtlhPWolzkFMouMqql4CKrBSfpLazatZ5rJEM/AqqjjlFrKwpu4Ghvp47Ho5cTEehaPw3jZkeEYd/i1dNC2PI75cpHDRFZ/0sWnQ/CaqvbkJNMQq9J2IKpXVL37kgeulN6S1WsaqphNk7dTPaXCPV6kefzbo65P2TRyOZbbQeh5z9rz+/gXp1W69ER9QVg7fsOypfj1WdmcCGtPXIZrU4mXy/pSWlK779Hvwqq9O7nbeKO+WVWhcNjVSFe1kqXuEqTzrXv3iD7ZrQzjvE0mPftQ8e73L+sb6Ys+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkh/IThLAGZiTuwAAAABJRU5ErkJggg==) center / cover'}}>React Projects</CardTitle>
			    <CardText>
			        My React Apps are fun short projects that showcase the flexibiility of React in web app creation.
			    </CardText>
			    <CardActions border>



			        <Button colored>Explore</Button>



			    </CardActions>
			    <CardMenu style={{color: '#fff'}}>
			        <IconButton name="share" />
			    </CardMenu>
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