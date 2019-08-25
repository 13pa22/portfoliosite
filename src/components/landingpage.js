 import React {Component} from 'react';
import { Grid, Cell} from 'react-mdl';

class Landing extends Component {
	render(){
		return (

			<div style = {{width: '100%', margin: 'auto'}}> 
				<Grid className="landing-grid">
					<Cell col={12}> 
						<img 
						src="https://scontent.fykz1-1.fna.fbcdn.net/v/t1.0-9/65636509_10157601580238846_4506839862367748096_n.jpg?_nc_cat=104&_nc_oc=AQkujWeQnI9orlYYc3vySfIHBr38SHYKDpMz5IHGtFVAtsdgSJ3J7IPN5Cb5AmdgkS0&_nc_ht=scontent.fykz1-1.fna&oh=d29bd59b63d97f164360449b875c7873&oe=5DCDD4EA"

						alt = "avatar"
						className = "avatar" />
						<div className = "banner-text">
							<h1> Full Stack Web Developer </h1>

							<hr/> 

							
						<p> Computer Engineering graduate from Queen’s University. Brings a diversified portfolio of data analysis, product design and database management. Actively pursues exploring new API’s and other open source projects. Adapts to change and learns new skills quickly. Enjoys working in a team environment and discussing technical subjects with peers. </p>
							
							<div className = "social-links">
								

								{/*linked-in*/}
								<a href = "https://www.linkedin.com/in/paritosh-arya-6bb45ba5/" target="_blank" rel = "noopener noreferrer" /*opens a new tab*/>

									<i className = "fa fa-linkedin-square" aria-hidden= "true" />
								 </a>

								 {/*github*/}
								<a href = "https://github.com/13pa22" target="_blank" rel = "noopener noreferrer" /*opens a new tab*/>

									<i className = "fa fa-github-square" aria-hidden= "true" />
								 </a>
							

							</div>

						</div>

					</Cell>
				</Grid>

			</div>
			)

	};
}

export default Landing;