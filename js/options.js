// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let page = document.getElementById('buttonDiv');
const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];

function constructOptions( kButtonColors )
{
    for ( let item of kButtonColors )
    {
        let button = document.createElement('button');
        button.style.backgroundColor = item;
        button.addEventListener('click', function() {
          chrome.storage.sync.set({color: item}, function() {
            console.log('color is ' + item);
          })
        });

        page.appendChild( button );
    }
}


( function ()
{
	console.log( "BEGIN", new Date().toISOString() );
	try
	{
		window.document.addEventListener( "DOMContentLoaded", function ( e ) 
		{	//	
			console.debug( "DOMContentLoaded" );
			page = document.getElementById('buttonDiv');
			constructOptions( kButtonColors );
			return;
		} );
	}
	catch ( ex )
	{
		console.log( "CATCH", new Date().toISOString() );
		console.error( ex.number, ":", ex.name, ":", ex.message );
		console.error( "exception stack::", ex.stack );
		return;
	}
	finally
	{
		console.log( "FINALLY", new Date().toISOString() );
	}
	console.log( "END", new Date().toISOString() );
	return;
} )();