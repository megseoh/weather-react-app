import React from 'react';

export default function WeatherMessage({
	location,
	temp
}) {
	return (
		<p>It is { temp } in { location }</p>
	);
}