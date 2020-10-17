// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be found in the LICENSE file.
'use strict';

function Init_Buttons()
{
    //  console.debug( "Init_Buttons" );
    const _browser_sizes = [
        { name: "2560 x 1440", w: 2560, h: 1440 },
        { name: "1920 x 1400", w: 1920, h: 1400 },
        { name: "1920 x 1200", w: 1920, h: 1200 },
        { name: "1920 x 1080", w: 1920, h: 1080 },
        { name: "1680 x 1050", w: 1680, h: 1050 },
        { name: "1600 x 900", w: 1600, h: 900 },
        { name: "1536 x 864", w: 1536, h: 864 },
        { name: "1440 x 900", w: 1440, h: 900 },
        { name: "1360 x 768", w: 1360, h: 768 },
        { name: "1280 x 1024", w: 1280, h: 1024 },
        { name: "1280 x 900", w: 1280, h: 900 },
        { name: "1280 x 720", w: 1280, h: 720 },
        { name: "1024 x 768", w: 1024, h: 768 },
        { name: "800 x 600", w: 800, h: 600 },
    ];

    //  console.debug( "chrome.storage.local", _browser_sizes );

    for ( let i = 0; i < _browser_sizes.length; i++ )
    {   //  console.debug( i, _btns[i] );
        const _text = document.createTextNode( _browser_sizes[i].name );
        const element = document.createElement( "button" );
        element.className = "rs-btn-2";
        element.setAttribute( 'value', i );
        element.onclick = function ( element )
        {
            let _selected_size = _browser_sizes[element.srcElement.value];
            let _new_top = parseInt( window.screen.availHeight / 2 + window.screen.availTop) - parseInt( _selected_size.h / 2 );

            let _new_left = ( parseInt( window.screen.availWidth / 2 ) - parseInt( _selected_size.w / 2 ) );
            let _new_width = _selected_size.w;
            let _new_height = _selected_size.h;

            chrome.windows.update(
                chrome.windows.WINDOW_ID_CURRENT,
                {
                    top: _new_top,
                    left: _new_left,
                    width: _new_width,
                    height: _new_height,
                    focused: true,
                    drawAttention: false,
                    state: "normal"
                },
                function ( callbackData ) { return; }
            );

            return;
        };

        element.appendChild( _text );  

        let _btn_panel = document.getElementById( "resizer-button-panel" );
        _btn_panel.appendChild( element ); 
    }

    return;
};
Init_Buttons();