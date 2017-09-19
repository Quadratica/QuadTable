

"use_strict"

;(function( factory ) 
{

	
		
	// QUESTI MODULI E COSTRUTTI SONO DEI DIFFERENTI METODI DI INCAPSULAMENTO DEL CODICE  IN MODO CHE SIA UN PRIVATE INTERNAL STATE.
	// READ: http://requirejs.org/docs/whyamd.html
	
	
	
	
	if ( typeof define === 'function' && define.amd ) 
	{
		
		//console.log("AMD - quadTable.js");
		
		// AMD: https://en.wikipedia.org/wiki/Asynchronous_module_definition
		// AMD: specifica di programmazione, vengono sancite le "regole" per implementare questo metodo (costruzione delle API  e loro utilizzo)
		define( ['jquery'], function ( JQuery ) {
			return factory( JQuery, window, document );
		});
		
		
	}
	else if ( typeof exports === 'object' ) 
	{
		
		//console.log("CommonJS - quadTable.js");
		
		// CommonJS: https://en.wikipedia.org/wiki/CommonJS
		// CommonJS is a project with the goal of specifying an ecosystem for JavaScript outside the browser (for example, on the server or for native desktop applications
		module.exports = function (root, JQuery) 
		{
			// CommonJS environments without a window global must pass a root. This will give an error otherwise
			if(!root) root = window;

			if(!JQuery) 
			{
				// jQuery's factory checks for a global window
				JQuery = typeof window !== 'undefined' ?  require('jquery') :  require('jquery')(root);
				/// "require()" is built into Node.js to load modules.
			}

			return factory( JQuery, root, root.document );
		};
		
	}
	else 
	{		
		//console.log("Browser - quadTable.js");
		factory( jQuery, window, document);
	}

}
(function( $, window, document ) 
{

}));
