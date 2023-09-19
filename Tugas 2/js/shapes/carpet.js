'use strict';

const Carpet = ( function () {

	let dispersion = 10;
	let inheritCount = 2;
	let squareCount = 0;

	function _setDispersion ( _dispersion ) {
		dispersion = _dispersion;
	}

	function _setInheritCount ( _inheritCount ) {
		inheritCount = _inheritCount;
	}

	function setTriangleVerticles( pointCoor, width ) {
		const newWidth = width / 2;

		let z = Math.random() * ( dispersion / ( inheritCount * 2 ) );
		let z1 = Math.random() * ( dispersion / ( inheritCount * 2 ) );

		//TODO Better triangle dispersion on Z axi
		const rand = ( Math.random() * dispersion ) - ( dispersion / 2 );

		if ( rand > 0 ) {
			z *= -0.0001;
		} else {
			z1 *= -0.0001;
		}

		const color1 = Math.random();
		const color2 = Math.random();
		const color3 = Math.random();

		pointCoor[0] += rand;
		pointCoor[1] += rand;

		return [
			pointCoor[0] + newWidth, pointCoor[1] + newWidth, -z1,
			color1, color2, color3,
			pointCoor[0] - newWidth, pointCoor[1] + newWidth, -z,
			color2, color3, color1,
			pointCoor[0] - newWidth, pointCoor[1] - newWidth, z1,
			color3, color1, color2,
			pointCoor[0] + newWidth, pointCoor[1] - newWidth, z,
			color1, 0, color3
		];
	}

	function _triangleVertices ( x = 0, y = 0, width = 10, nesting = inheritCount ) {
		let triangleVerticlesArray = [];
		const newWith = width / 3;
		const points = [
			[x + newWith, y, 0],
			[x - newWith, y, 0],
			[x, y + newWith, 0],
			[x, y - newWith, 0],
			[x - newWith, y + newWith, 0],
			[x - newWith, y - newWith, 0],
			[x + newWith, y - newWith, 0],
			[x + newWith, y + newWith, 0]
		];

		if ( --nesting > 0 ) {
			for ( let point of points ) {
				triangleVerticlesArray = triangleVerticlesArray.concat(
					_triangleVertices( point[0], point[1], newWith, nesting ) );
			}
		} else {
			for ( let point of points ) {
				squareCount++;
				triangleVerticlesArray = triangleVerticlesArray.concat( setTriangleVerticles( point, newWith ) );
			}
		}

		return triangleVerticlesArray;
	}

	function _triangleFaces() {
		const length = Math.pow( 8, inheritCount ) * 2 * 3;
		const triangleFaces = new Array( length );

		for ( let i = 0, x = 0; i < length; i += 6, x += 4 ) {
			triangleFaces[i] = x;
			triangleFaces[i + 1] = x + 1;
			triangleFaces[i + 2] = x + 3;
			triangleFaces[i + 3] = x + 1;
			triangleFaces[i + 4] = x + 2;
			triangleFaces[i + 5] = x + 3;
		}

		return triangleFaces;
	}

	return {
		triangleVertices: _triangleVertices,
		triangleFaces: _triangleFaces,
		setDispersion: _setDispersion,
		setInheritCount: _setInheritCount
	}
} () );