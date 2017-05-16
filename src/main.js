import React from 'react';
import ReactDom from 'react-dom';
import Board from './components/board';

require('es6-promise').polyfill();
require('isomorphic-fetch');

ReactDom.render(
	 <Board />,
	document.getElementById('root') 
)