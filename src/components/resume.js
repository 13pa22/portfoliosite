import React, { Component } from "react";

import { Grid , Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Technical from './technical';
import Skills from './skills.js'
class Resume extends Component {
	render(){
		return (

			<div> 
			<Grid>


				<Cell col = {4}>

				<div style={{textAlign:'center'}}>

					<img src ="https://scontent.fykz1-1.fna.fbcdn.net/v/t1.0-9/65636509_10157601580238846_4506839862367748096_n.jpg?_nc_cat=104&_nc_oc=AQkujWeQnI9orlYYc3vySfIHBr38SHYKDpMz5IHGtFVAtsdgSJ3J7IPN5Cb5AmdgkS0&_nc_ht=scontent.fykz1-1.fna&oh=d29bd59b63d97f164360449b875c7873&oe=5DCDD4EA"
						style={{height: '250px'}}
						/>


				</div>

				<h2 style={{paddingTop: '2em'}}> Paritosh Arya B.ASc (Computer Engineering) </h2>
				
				
				<hr style={{borderTop: '3px solid #833fb2' , width: '90%'}} />
				
				<p>  Brings a diversified portfolio of data analysis, product design and database management. Actively pursues exploring new API’s and other open source projects. Adapts to change and learns new skills quickly. Enjoys working in a team environment and discussing technical subjects with peers.</p>
				
				<hr style={{borderTop: '3px solid #833fb2' , width: '90%'}} />
				<h6>Phone </h6>
				<p>647-785-9987 </p>
				<h6>Email</h6>
				<p> paritosharya1996@gmail.com</p>
				<p> paritosh.arya@queensu.ca</p>
				<h6>Address </h6>
				<p> 1 Alistair Crescent, Vaughan, ON, L4H 4T7 </p>
				
				<hr style={{borderTop: '3px solid #833fb2' , width: '90%'}} />
				<h7> Updated in 2019</h7>
				</Cell>


				<Cell className="resume-right" col = {8}>

					<h2> Education </h2>

					<Education startYear={2015}
					 endYear={2019} 
					 schoolName={'Queens University, Kingston'} 
					 title = {'Bachelors in Computer Engineering, '}
					 schoolDescription={'Fundamentals of software and hardware design mixed with practical engineering training. Software courses include programming languages, data structures and algorithms, operating systems, real-time software design, databases, compilers, software requirements analysis, formal methods in software engineering, and techniques for human-computer interaction.'} />
				
					<hr style={{borderTop: '3px solid #833fb2'}}/>

					<h2> Experience </h2>

					<Experience startYear={'May 2018'}
					endYear={'September 2018'}
 					jobName={'Viamo'} 
 					title = {'Data Analyst Intern'}
					jobDescription={'Executed SQL queries for extensive analysis and coordinated project implementation with teams throughout Sub-Saharan Africa. Used database collections to quantify behavioral analysis models for marketing pilot projects exploring user retention trends.'} />

					<Experience startYear={'September 2017'}
					endYear={'May 2018'}
 					jobName={'Clark Hall Pub'} 
 					title = {'Bar DJ/Audio Technician'}
					jobDescription={'Entertained pub patrons with musical pieces and provided audio technical support services to visiting musical acts.'} />

					<Experience startYear={'September 2016'}
					endYear={'May 2017'}
 					jobName={'Engineering Society of Queen’s University'} 
 					title = {'Integrated Learning Centre Representative'}
					jobDescription={'Maintained learning tools and electronic lab equipment for students, gave tours of student facility to visitors, managed rentals of equipment'} />


					<hr style={{borderTop: '3px solid #833fb2'}}/>
					<h2> Technical Projects </h2>
					<Technical startYear={'September 2018'}
					endYear={'May 2018'}
 					technicalName={'Autonomous Snow Plow Embedded System Project'} 
					technicalDescription={'Design an autonomous vehicle built around SoC based solution. Develop routing algorithm for vehicle, implement hardware components into prototype product'} />

				    <hr style={{borderTop: '3px solid #833fb2'}}/>
				    <h2> Skills </h2>
				    <Skills skill= "Java"
				    progress= '85'/>
				    <Skills skill= "UX/UI"
				    progress= '80'/>
				    <Skills skill= "PHP"
				    progress= '85'/>
				    <Skills skill= "React"
				    progress= '65'/>
				    <Skills skill= "SQL"
				    progress= '90'/>
				    <Skills skill= "Node"
				    progress= '70'/>

				</Cell>


			</Grid>


			</div>
			)

	};
}

export default Resume;