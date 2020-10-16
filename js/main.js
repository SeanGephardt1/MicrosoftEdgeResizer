( function ()
{
	console.log( "BEGIN", new Date().toISOString() );
	try
	{
		window.document.addEventListener( "DOMContentLoaded", function ( e ) 
		{
			console.debug( "DOMContentLoaded" );


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