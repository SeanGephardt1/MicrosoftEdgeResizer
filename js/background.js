// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener( function ()
{
    // BACKGROUND COLORS - TESTING
    let _colors = [
        "rgba(197, 34, 51, 1)",
        "rgba(248, 216, 0,1)",
        "rgba(0,160,0,1)",
        "rgba(0,0,160,1)",
    ];

    _colors.forEach( function ( v, i, a )
    {
        let _temp_name = "bg-color-" + i;
        //  console.debug( i,_temp_name, v);

        chrome.storage.local.set(
            {
                [_temp_name]: v
            },
            function()
            {
                //  console.log( "Colors being set.", [_temp_name], v );
                return;
            }
        );

        //chrome.storage.local.get( [_temp_name], function ( data ) 
        //{
        //    console.debug( "AFTER SETTING: chrome.storage.sync.get", data[_temp_name] );
        //    return;
        //});

        return;
    } );

    // BROWSER SIZES
    //const _browser_sizes = [
    //    { name: "2560 x 1440", w: 1920, h: 1400 },
    //    { name: "1920 x 1400", w: 1920, h: 1400 },
    //    { name: "1920 x 1200", w: 1920, h: 1400 },
    //    { name: "1920 x 1080", w: 1920, h: 1400 },
    //    { name: "1680 x 1050", w: 1920, h: 1400 },
    //    { name: "1600 x 900", w: 1920, h: 1400 },
    //    { name: "1536 x 864", w: 1920, h: 1400 },
    //    { name: "1440 x 900", w: 1920, h: 1400 },
    //    { name: "1360 x 768", w: 1920, h: 1400 },
    //    { name: "1280 x 900", w: 1920, h: 1400 },
    //    { name: "1280 x 720", w: 1920, h: 1400 },
    //    { name: "1024 x 768", w: 1920, h: 1400 },
    //    { name: "800 x 600", w: 1920, h: 1400 },
    //];


    //_browser_sizes.forEach( function ( v, i, a )
    //{
    //    let _temp_name = "browser-size-" + i;
    //    //  console.debug( i,_temp_name, v);

    //    chrome.storage.local.set(
    //        {
    //            [_temp_name]: v
    //        },
    //        function()
    //        {
    //            //  console.log( "Colors being set.", [_temp_name], v );
    //            return;
    //        }
    //    );

    //    chrome.storage.local.get( [_temp_name], function ( data ) 
    //    {
    //        console.debug( "AFTER SETTING: chrome.storage.sync.get", data[_temp_name] );
    //        return;
    //    });

    //    return;
    //} );




     // HANDLING PERMISSIONS
     // REMOVING THIS CAUSES PROBLEMS.
    chrome.declarativeContent.onPageChanged.removeRules( undefined,
        function ()
        {
            chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {},
              })],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    } );


    //chrome.runtime.onInstalled.addListener( function ( details ) 
    //{
    //    chrome.declarativeContent.onPageChanged.removeRules( undefined,
    //        function ()
    //        {
    //            chrome.declarativeContent.onPageChanged.addRules([rule2]);
    //        }
    //    );
    //});


    //chrome.declarativeContent.onPageChanged.removeRules( undefined, function ()
    //{
    //        chrome.declarativeContent.onPageChanged.addRules([{
    //        conditions: [new chrome.declarativeContent.PageStateMatcher({
    //            pageUrl: {
    //                hostEquals: 'localhost',
    //                schemes: ['https', 'http']
    //           },
    //      })],
    //      actions: [new chrome.declarativeContent.ShowPageAction()]
    //    }]);
    //} );

    return;
});