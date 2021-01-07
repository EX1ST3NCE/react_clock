import React, { useEffect, useState } from 'react';
import './Clock.css';

const Clock = () => {
	const [time, setTime] = useState(new Date().toLocaleTimeString());

	const updateTime = () => {
		setTime(new Date().toLocaleTimeString());
	};

	useEffect(() => {
		let timerId = setInterval(() => updateTime(), 1000);
		return function cleanUp() {
			clearInterval(timerId);
		};
	});

	return (
		<>
			<div className='row'>
				<div className='col s12 m8 offset-m1 l6 offset-l1'>
					<div className='card blue darken-3 '>
						<div className='card-content white-text'>
							<span className='card-title center-align'>Clock</span>
							<div className='time center-align'>{time}</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Clock;
