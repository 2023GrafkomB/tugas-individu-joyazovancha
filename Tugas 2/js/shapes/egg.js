'use strict';

const Egg = ( function () {

	let n = 20;

	function _setN( _n ) {
		n = _n;
	}

	function _triangleVertices () {
		let triangleVerticlesArray = [];

		let u,
			v;

		let eggPoint = [0, 0, 0];

		let color = [0, 0, 0];

		for ( let i = 0; i < n * n + 10; i++ ) {
			u = ( i % n ) / ( n - 1.0 );
			v = ( i / n ) / ( n - 1.0 );

			eggPoint[0] = (-90 * Math.pow(u, 5) + 225 * Math.pow(u, 4) - 270 * Math.pow(u, 3) + 180 * Math.pow(u, 2) - 45 * u) * Math.cos( Math.PI * v );
			eggPoint[1] = 160 * Math.pow(u, 4) - 320 * Math.pow(u, 3) + 160 * Math.pow(u, 2) - 5;
			eggPoint[2] = (-90 * Math.pow(u, 5) + 225 * Math.pow(u, 4) - 270 * Math.pow(u, 3) + 180 * Math.pow(u, 2) - 45 * u) * Math.sin( Math.PI * v );

			color[0] = Math.random();
			color[1] = Math.random();
			color[2] = Math.random();

			triangleVerticlesArray = triangleVerticlesArray.concat( ...eggPoint );
			triangleVerticlesArray = triangleVerticlesArray.concat( ...color );
		}
		return triangleVerticlesArray;
	}

	function _triangleFaces() {
		const triangleFaces = [];

		let x = 0;
		for ( let i = 0; i < n * n - n + 10; i++ ) {
			triangleFaces[x++] = i;
			triangleFaces[x++] = i + 1;
			triangleFaces[x++] = i + n;
		}
		for ( let i = 0; i < n * n - n - 1 + 10; i++ ) {
			triangleFaces[x++] = i + 1;
			triangleFaces[x++] = i + 1 + n;
			triangleFaces[x++] = i + n;
		}
		return triangleFaces;
	}

	return {
		triangleVertices: _triangleVertices,
		triangleFaces: _triangleFaces,
		setN: _setN
	}
} () );