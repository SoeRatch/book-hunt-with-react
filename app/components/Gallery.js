import React, { Component } from 'react';

class Gallery extends Component {
	
	render() {
		let alternate = 'https://i.pinimg.com/236x/e9/5c/8e/e95c8eed5b3ab9f79b29f76090ae3c2d.jpg';

		return (
			<div>{
				this.props.items.map((item, index) => {
					let {title, imageLinks, infoLink} = item.volumeInfo;
						return (
							<a 
								key={index} 
								className="book"
								href={infoLink}
								target="_blank"
							>
								 <img 
									 src={imageLinks !== undefined ? imageLinks.thumbnail : alternate} 
									 alt="book image"
									 className="book-img"
								 />
								 <div className="book-text">
									{title}
								</div>
							</a>
							)
					})
				}
			</div>
			)
	}
}

export default Gallery;