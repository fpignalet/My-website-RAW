'use strict';

/*************************************************************************************
 * INCLUDES CODE
 *************************************************************************************/
import {
    CLISIDE_LOADER,
    cliside_BASEIDENT
} from "./lib/clientside.js";

import {
    CLISIDE_BNEWSDOM,
    CLISIDE_BLOGLOADER,
    CLISIDE_BTECHLOCAL,
    CLISIDE_BTECHREMOTE
} from "./impl/clientsideBLOG.js";

import Multiple from "../game/js/lib/instances.js";
import Core from "../game/js/impl/core.js";

//import * as angular from "https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js";

/*************************************************************************************
 * INCLUDES DATA
 *************************************************************************************/
import {
    data_BNEWSmap,
    data_BTECHmap1,
    data_BTECHmap2
} from "../data/BLOGdata.js";

/*************************************************************************************
 * GLOBAL VARIABLES
 *************************************************************************************/
const cliside_BLOGsrcid = "contener";

let cliside_BLOGNEWSloader = null;
let cliside_BLOGNEWScr = null;
let cliside_BLOGNEWSldr = null;

let cliside_BLOGTECHloader = null;
let cliside_BLOGTECHcr = null;
let cliside_BLOGTECHldr = null;

/*************************************************************************************
 *************************************************************************************
 * PAGE ENTRYPOINTS
 *************************************************************************************
 *************************************************************************************/

/*************************************************************************************
 * IMPLEMENTATION: NEWS SIDE
 *************************************************************************************/
/// @brief maiin entry function
/// @param contener is the target DOM
/// @param param maybe anything
function cliside_BLOGNEWSlazyload(contener) {
    const loadmapitem = (entry) => {
        if(true === entry["loaded"]){
            return;
        }

        cliside_BLOGNEWSldr.remotegetentry(contener,
            cliside_BLOGNEWScr,
            entry["desc"],
            entry["content"],
            entry["progress"],
            (cr, desc, content) => {
                const loadedweight = cr.fillentry(contener, desc, content);
                if(0 < loadedweight) {
                    entry["loaded"] = true;
                }
            }
        );
    };

    cliside_BLOGNEWSloader.localgetfile(contener,
        "./clientside/cards/BLOGgridNEWS.html",
        cliside_BLOGsrcid,
        "gridnews",
        () => {
            data_BNEWSmap.forEach((entry, index) => {
                loadmapitem(entry);
            });

        }
    );

}

/// @brief maiin entry function
/// @param contener is the target DOM
/// @param param maybe anything
export function cliside_BLOGNEWSpageload(contener, param) {
    cliside_BLOGNEWSloader = new CLISIDE_LOADER(cliside_BASEIDENT + 8);
    cliside_BLOGNEWScr = new CLISIDE_BNEWSDOM(cliside_BASEIDENT + param["create"]);
    cliside_BLOGNEWSldr = new CLISIDE_BLOGLOADER(cliside_BASEIDENT + param["load"]);

    cliside_BLOGNEWSloader.localgetfile(contener,
        "./clientside/cards/cardheader.html",
        cliside_BLOGsrcid,
        "headercard",
        () => {
            contener.getElementById("titlepart").appendChild(contener.createTextNode("News Part"))
        }
    );

    //-----------------------------------------------------
    cliside_BLOGNEWSlazyload(contener);
    //-----------------------------------------------------------

    cliside_BLOGNEWSloader.localgetfile(contener,
        "./clientside/cards/cardfooter.html",
        cliside_BLOGsrcid,
        "footer"
    );

    cliside_BLOGNEWSloader.localgetfile(contener,
        "./clientside/cards/cardabout.html",
        cliside_BLOGsrcid,
        "aboutcard"
    );

}

/// @brief leaving the BLOG TECH page
/// @param contener is the target DOM
/// @param param maybe anything
export function cliside_BLOGNEWSpageunload(contener, param) {
    //...
}

/// @brief scroll function
/// @param contener is the target DOM
/// @param param maybe anything
export function cliside_BLOGNEWSpagescroll(contener, param) {
    /*
    cliside_BLOGNEWSlazyload(contener);
    */
    cliside_BLOGpagescroll(contener, param);
}

/*************************************************************************************
 * IMPLEMENTATION: TECH SIDE
 *************************************************************************************/
/// @brief filling the BLOG TECH page
/// @param contener is the target DOM
function cliside_BLOGTECHlazyload(contener) {
    const loadmapitem = (entry) => {
        if(true === entry["loaded"]){
            return;
        }

        if(null !== entry["desc"]) {
            cliside_BLOGTECHldr.remotegetentry(contener,
                cliside_BLOGTECHcr,
                entry["desc"],
                entry["content"],
                entry["progress"],
                (cr, desc, content) => {
                    cr.filldesc(contener, desc);
                    entry["loaded"] = true;
                }
            );

        }

        cliside_BLOGTECHloader.localgetfile(contener,
            entry["data"][0],
            cliside_BLOGsrcid,
            entry["data"][1],
            entry["data"][2]
        );
    };

    cliside_BLOGTECHloader.localgetfile(document,
        "./clientside/cards/BLOGgridTECH1.html",
        cliside_BLOGsrcid,
        "gridtech1",
        () => {
            data_BTECHmap1.forEach((entry, index) => {
                loadmapitem(entry);
            });
        }
    );
    cliside_BLOGTECHloader.localgetfile(document,
        "./clientside/cards/BLOGgridTECH2.html",
        cliside_BLOGsrcid,
        "gridtech2",
        () => {
            data_BTECHmap2.forEach((entry, index) => {
                loadmapitem(entry);
            });
        }
    );

}

/// @brief filling the BLOG TECH page
/// @param contener is the target DOM
/// @param param maybe anything
export function cliside_BLOGTECHpageload(contener, param) {
    //-----------------------------------------------------------
    // INITIALISATION COMPLETION:
    // wire specific tests callback
    const local = new CLISIDE_BTECHLOCAL(cliside_BASEIDENT + param["create"] + 10);
    window.BLOGdomlocal = local; //for testPHP1 & angular(temp)
    (data_BTECHmap1[2]["data"])[2] = () => {
        local.testCODEBOX(cliside_BLOGTECHloader, "codebox1");
    };
    (data_BTECHmap1[3]["data"])[2] = () => {
        local.testCANVAS("canvas0");
    };
    /*
    (data_BTECHmap2[0]["data"])[2] = () => {
        // OK, it's still hard-coded in html page, I still don't know why when loaded from outside it doesn't functionate
        local.testANGULAR1("testapp", "testctrl");
    };
    */

    const remote = new CLISIDE_BTECHREMOTE(cliside_BASEIDENT + param["create"] + 11);
    window.BLOGdomremote = remote; //for testPHP1

    (data_BTECHmap1[0]["data"])[2] = () => {
        remote.testPHP8();
    };
    (data_BTECHmap2[1]["data"])[2] = () => {
        local.testHELLO(contener, "hello_area");
        local.testCOUNT(contener, "count_area");
        remote.testPHP2(contener, null, "bdResult");
        remote.testPHP3(contener, null, "params_area1");
        remote.testPHP4(contener, null, "params_area2");
        remote.testPHP5(contener, null, "params_area3");
        remote.testPHP6(contener, null, "htreedemo");
        remote.testPHP7();
    };

    //--------------------
    (data_BTECHmap1[6]["data"])[2] = () => {
        contener.getElementById("blog_entry8").innerHTML = local.testDYN(
            // HEADER:
            'blog_entry8',
            'images/gears-686316_640.jpg',
            'Today\'s sandbox',
            'August 25, 2018',
            'Dynamic test',
            // CONTENU:
            '<ul>\n' +
            '    <li>dynamic blog entry: generating html with javascript\n' +
            '        <ul>\n' +
            '            <li>sub item 1</li>\n' +
            '            <li>sub item 2</li>\n' +
            '        </ul>\n' +
            '    </li>\n' +
            '</ul>\n'
        );
    };

    //-----------------------------------------------------
//      TODO: NOT OK THERE. still dont't know why...
//      local.testANGULAR1("testapp", "testctrl");

    //-----------------------------------------------------
    // PAGE CONSTRUCTION
    cliside_BLOGTECHloader = new CLISIDE_LOADER(cliside_BASEIDENT + param["load"] + 9);
    cliside_BLOGTECHcr = new CLISIDE_BTECHLOCAL(cliside_BASEIDENT + param["create"]);
    cliside_BLOGTECHldr = new CLISIDE_BLOGLOADER(cliside_BASEIDENT + param["load"]);

    window.BLOGreactloader = cliside_BLOGTECHloader; //for React

    cliside_BLOGTECHloader.localgetfile(contener,
        "./clientside/cards/cardheader.html",
        cliside_BLOGsrcid,
        "headercard",
        () => {
            contener.getElementById("titlepart").appendChild(contener.createTextNode("Technical Part"))
        }
    );

    //-----------------------------------------------------------
    cliside_BLOGTECHlazyload(contener);
    //-----------------------------------------------------------

    cliside_BLOGTECHloader.localgetfile(contener,
        "./clientside/cards/cardfooter.html",
        cliside_BLOGsrcid,
        "footer"
    );
    cliside_BLOGTECHloader.localgetfile(contener,
        "./clientside/cards/cardabout.html",
        cliside_BLOGsrcid,
        "aboutcard"
    );

}

/// @brief leave function
/// @param contener is the target DOM
/// @param param maybe anything
export function cliside_BLOGTECHpageunload(contener, param) {
    const core = Multiple.get(Core.IDENT(), param);
    core.isPageOver = true;
}

window.BTscrollrect = null;

/// @brief scroll function
/// @param contener is the target DOM
/// @param param maybe anything
export function cliside_BLOGTECHpagescroll(contener, param) {
    /*
    cliside_BLOGTECHlazyload(contener);
    */

    cliside_BLOGpagescroll(contener, param);
}

/*************************************************************************************
 * IMPLEMENTATION: UTILS
 *************************************************************************************/
/// @brief scroll function
/// @param contener is the target DOM
/// @param param maybe anything
export function cliside_BLOGpagescroll(contener, param) {
    function getOffset(el) {
        const rect = el.getBoundingClientRect();
        return {
//            left: (rect.right + window.scrollX ) +'px',
//            top: (rect.top + window.scrollY ) +'px'
            left: rect.right,
            top: rect.top
        }
    }

    const item = document.getElementById("aboutcard");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        item.style.transform = "scale(0.5, 0.5)";
        if(null != window.BTscrollrect){
            var xPosition = window.BTscrollrect.left - contener.getBoundingClientRect().left - (item.clientWidth / 2);
            var yPosition = window.BTscrollrect.top - contener.getBoundingClientRect().top - (item.clientHeight / 2);
            // in case of a wide border, the boarder-width needs to be considered in the formula above
            item.style.left = xPosition + "px";
            item.style.top = yPosition + "px";
        }
    }
    else {
        item.style.transform = "";
        if(null == window.BTscrollrect){
            window.BTscrollrect = getOffset(item);
        }
    }
}
