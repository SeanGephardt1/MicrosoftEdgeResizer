chrome.runtime.onMessage.addListener( function ( request, sender, sendResponse ) 
{
    console.debug( "content.js", reqeust, sender, sendResponse );

    let divTestNode = document.createElement( "div" );
    let textNode = document.createTextNode( "TESTING " );
    divTestNode.appendChild(textNode);  
    document.body.appendChild(divTestNode);

    sendResponse( { fromcontent: "This message is from content.js" } );
    return;
});