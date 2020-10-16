// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be found in the LICENSE file.

'use strict';

function Init_Buttons()
{
    console.debug( "Init_Buttons" );

    let _btns = document.getElementsByClassName( "rs-btn" );
    //  console.debug( "_btns", _btns.length );

    for ( let i = 0; i < _btns.length; i++ )
    {
        //  console.debug( i, _btns[i] );
        let _data_name = "bg-color-" + i;

        chrome.storage.local.get( [_data_name], function ( data ) 
        {
            //  console.debug( "chrome.storage.sync.get", data[_data_name] );

            _btns[i].style.backgroundColor = data[_data_name];
            _btns[i].setAttribute( 'value', data[_data_name] );

            _btns[i].onclick = function ( element )
            {
                //  console.debug( "_btns[i].onclick",element.target.value);

                chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                    chrome.tabs.executeScript(
                    tabs[0].id,
                    {code: 'document.body.style.backgroundColor = "' + element.target.value + '";'});
                } );

                //chrome.windows.getCurrent(
                //    function ( myWin )
                //    {
                //        console.debug( "myWin", myWin );
                //    }
                //);
                return;
            };


            return;
        });

    }

    return;
};
Init_Buttons();


//changeColor.onclick = function ( element )
//{
//    console.debug( "chrome.storage.sync.get", data );
//    let color = element.target.value;
//    console.debug( "color", color);

//    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//        chrome.tabs.executeScript(
//        tabs[0].id,
//        {code: 'document.body.style.backgroundColor = "' + color + '";'});
//    } );

//    chrome.windows.getCurrent(
//        function ( myWin )
//        {
//            console.debug( "myWin", myWin );
//        }
//    );
//    return;
//};
