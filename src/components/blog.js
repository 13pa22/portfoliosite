import React, { Component } from "react";

import { Grid, Cell, Card, CardTitle,  CardActions, Button} from 'react-mdl';


class Blog extends Component {
	render(){
		return(

			<div>
			<Grid>
			<div className="blog-text">
			<h1> A collection of short reflections written during my time as the Junior Fellow for <i>Engineers Without Borders Canada</i> in Ghana, Africa. </h1> 
			</div>
			</Grid>
			<Grid>
			<Cell col={6}>
			<Card shadow={5} style={{width: '512px', margin: 'auto'}}>
			    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/270/1*-LJ72OmOmuNighapL9Yfhw.jpeg) center / cover'}}></CardTitle>
			    
			    <CardActions border>



			       <a href="https://medium.com/@paritosharya_84942/my-over-the-top-luxurious-and-privileged-life-working-in-africa-4be7570f3ee3" target="_blank" rel = "noopener noreferrer" /*opens a new tab*/>
						<Button colored >My "extravagant" internship in Africa</Button>
								 </a>

			    </CardActions>

			</Card>

			</Cell>


			<Cell col={6}>
			<Card shadow={5} style={{width: '512px', margin: 'auto'}}>
			    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/930/1*rhTyoa_Y-OdeHieeXQaZbA.jpeg) center / cover'}}></CardTitle>
			  
			    <CardActions border>



			       <a href="https://medium.com/@paritosharya_84942/why-the-pants-did-not-fit-in-ghana-9084da91731d" target="_blank" rel = "noopener noreferrer" /*opens a new tab*/>
						<Button colored >Why the pants did not fit in Ghana.</Button>
								 </a>

			    </CardActions>

			</Card>

			</Cell>
			</Grid>

			<Grid>
			<Cell col= {6}>
				<Card shadow={5} style={{width: '512px', margin: 'auto'}}>
			    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/960/1*KebmjVnITJpropio0Uce5Q.jpeg) center / cover'}}></CardTitle>
			  
			    <CardActions border>



			       <a href="https://medium.com/@paritosharya_84942/the-trials-and-tribulations-of-eating-food-in-ghana-7bcb0f661f1e" target="_blank" rel = "noopener noreferrer" /*opens a new tab*/>
						<Button colored >Eating food in other cultures.</Button>
								 </a>

			    </CardActions>

			</Card>
			</Cell>
			</Grid>
			</div>




			)};

}
export default Blog;