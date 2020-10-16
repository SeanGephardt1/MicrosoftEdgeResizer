const sendMessageId = document.getElementById( "customize-btn" );

if ( sendMessageId ) 
{
    sendMessageId.onclick = function ()
    {
        // do something
        console.debug( "do something" );
        chrome.tabs.query( { active: true, currentWindow: true },
            function ( tabs )
            {
                chrome.tabs.sendMessage(
                    tabs[0].id,
                    {
                        url: chrome.extension.getURL("img/resizer-original.jpg"),
                        imageDivId: `${guidGenerator()}`,
                        tabId: tabs[0].id
                    },
                    function ( response )
                    {
                            window.close();
                    });
                function guidGenerator() 
                {
                    const S4 = function () 
                    {
                        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
                    };
                    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
                }
        });
        return;
    };
}