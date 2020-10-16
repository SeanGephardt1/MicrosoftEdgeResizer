// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener( function ()
{
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
                console.log( "Colors being set.", [_temp_name], v );
                return;
            }
        );

        chrome.storage.local.get( [_temp_name], function ( data ) 
        {
            console.debug( "AFTER SETTING: chrome.storage.sync.get", data[_temp_name] );
            return;
        });

        return;
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


    chrome.declarativeContent.onPageChanged.removeRules( undefined, function ()
    {
            chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {},
          })],
          actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    } );



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