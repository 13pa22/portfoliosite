import React, { Component } from "react";
import { Cell, Cells, Grid, List , ListItem, ListItemContent } from 'react-mdl';
class Contact extends Component {
	render(){
		return (

			<div className = "contact-body"> 
				
					<Grid className = "contact-grid" >

						<Cell col= {6}> 
							<h2 style = {{color:' #000080'}}> Paritosh Arya </h2>

							<img src ="https://scontent.fykz1-1.fna.fbcdn.net/v/t1.0-9/65636509_10157601580238846_4506839862367748096_n.jpg?_nc_cat=104&_nc_oc=AQkujWeQnI9orlYYc3vySfIHBr38SHYKDpMz5IHGtFVAtsdgSJ3J7IPN5Cb5AmdgkS0&_nc_ht=scontent.fykz1-1.fna&oh=d29bd59b63d97f164360449b875c7873&oe=5DCDD4EA"
								style = {
								{width :"250px"},
								{height : "250px"}
										}
								alt="avatar"

								
							/>


							<p style = { {width: '75%'}, {margin: 'auto'}, {paddingTop : '1em'} } >
								

								Trained in data structures, algorithms, and OOP in popular languages Java, C , C++.
								Knowledgeable in web development processes, databases administration, UX/UI design, cloud services (Amazon EC2) 
								Thorough training in project management, IoT prototyping, design thinking.
								Introductory level courses in data mining/analysis, machine learning and Artificial Intelligence.
								Intermediate level courses in configuring SoC chips and FPGA processors, implementation of hardware embedded systems.


							 </p>
						 </Cell>
						


						<Cell col= {6}> <h2 style={{color: '#99004d'}}>Contact me: </h2>  
							<hr />


						<div className="contact-list">
							<List>
						  <ListItem>
						    <ListItemContent style= {{fontSize: '25px', fontFamily: 'Oxygen'}}> 
						    	<i className="fa fa-phone-square" aria-hidden = "true" />
						    647-785-9987</ListItemContent>
						  </ListItem>
						  
						   <ListItem>
						    <ListItemContent style= {{fontSize: '19px', fontFamily: 'Oxygen'}}> 
						    	<i className="fa fa-envelope" aria-hidden = "true" />
						    paritosharya1996@gmail.com</ListItemContent>
						  </ListItem>


						   <ListItem>
						    <ListItemContent style= {{fontSize: '19px', fontFamily: 'Oxygen'}}> 
						    	<i className="fa fa-envelope" aria-hidden = "true" />
						    paritosh.arya@queensu.ca</ListItemContent>
						  </ListItem>

						  <ListItem>
						    <ListItemContent style= {{fontSize: '19px', fontFamily: 'Oxygen'}}> 
						    	<a href = "https://www.linkedin.com/in/paritosh-arya-6bb45ba5/" target="_blank" rel = "noopener noreferrer" /*opens a new tab*/>	 
						    	<i className="fa fa-linkedin" aria-hidden = "true" />
						    paritosh-arya linkedin </a>
						    </ListItemContent> 
						  </ListItem>
						</List>

						</div>

						</Cell>



					</Grid>
				
			</div>
			)

	};
}

export default Contact;