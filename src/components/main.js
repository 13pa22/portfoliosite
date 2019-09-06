 import React from 'react';
import Landing from './landingpage';
import { Switch, Route } from 'react-router-dom';	

import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import Blog from './blog';

 const Main = () => (
 	<Switch>
 		<Route exact path= "/portfoliosite"  component = {Landing} />
 		 <Route path= "/contact" component = {Contact} />
		<Route  path= "/projects" component = {Projects} />
 		<Route  path= "/resume" component = {Resume} />
 		<Route  path= "/blog" component = {Blog} />

 	</Switch>
 )


 export default Main;