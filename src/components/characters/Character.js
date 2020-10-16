import React from "react";

const Character = ({ item }) => {
	return (

			<div align="center">
			<br/>
				<div> <h2 style={{color:'transparent'}} >  {item.name} </h2></div>

			<div align='center'>
				<div className="card">
		
			<div className="card-inner">
			
				<div className="card-front">
								
					<img src={item.img} alt="" />

				</div>
				<div className="card-back">
					<h1>{item.name}</h1>
					<ul>
						<li>
							<h2>Actor Name:</h2> {item.portrayed}
						</li>
						<li>
							<h2>Name:</h2> {item.name} 
						</li>
						<li>
							<h2>Occupation:</h2> {item.occupation}
						</li>
						<li>
							<h2>Status:</h2> {item.status}
						</li>
					</ul>
				</div>
			</div>
		</div>

				<br/><br/><br/><br/><br/><br/>

			</div>



			</div>	
			);
};
export default Character;