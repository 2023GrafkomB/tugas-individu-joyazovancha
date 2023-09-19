'use strict';

const Tetra = ( function () {
	function _triangleVertices () {
		return [
			-5, -5, -5,
			1, 0, 0,

			5, -5, -5,
			0, 1, 0,

			-5, 5, -5,
			0, 0, 1,

			-5, -5, 5,
			1, 1, 1
		]
	}

	function _triangleFaces () {
		return [
			0, 1, 2,
			0, 1, 3,
			0, 2, 3,
			1, 2, 3
		]
	}

	return {
		triangleVertices: _triangleVertices,
		triangleFaces: _triangleFaces
	}
} () );