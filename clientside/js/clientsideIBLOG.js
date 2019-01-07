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
 *************************************************************************************
 * PAGE ENTRYPOINTS
 *************************************************************************************
 *************************************************************************************/

/*************************************************************************************
 * NEWS SIDE
 *************************************************************************************/
/// @brief maiin entry function
/// @param contener is the target DOM
/// @param param maybe anything
export function cliside_BLOGNEWSpageload(contener, param) {
    try {
        const BLOGcr = new CLISIDE_BNEWSDOM(cliside_BASEIDENT + param["create"]);
        const BLOGldr = new CLISIDE_BLOGLOADER(cliside_BASEIDENT + param["load"]);

        const loadmapitem = (entry) => {
            if(true === entry["loaded"]){
                return;
            }

            /*
            if (contener.body.scrollTop.scrollTop() + window.height() < contener.getElementById(entry["desc"]).offset().top) {
                return;
            }
            */

            entry["loaded"] = true;
            BLOGldr.remotegetentry(contener,
                BLOGcr,
                entry["desc"],
                entry["content"],
                entry["progress"],
                (cr, desc, content) => {
                    cr.fillentry(contener, desc, content);
                }
            );
        };

        //-----------------------------------------------------
        const loader = new CLISIDE_LOADER(cliside_BASEIDENT + 8);
        const srcid = "contener";

        loader.localgetfile(contener,
            "./clientside/cards/cardheader.html",
            srcid,
            "headercard",
            () => {
                contener.getElementById("titlepart").appendChild(contener.createTextNode("News Part"))
            }
        );

        loader.localgetfile(contener,
            "./clientside/cards/BLOGgridNEWS.html",
            srcid,
            "gridnews",
            () => {
                data_BNEWSmap.forEach((entry, index) => {
                    loadmapitem(entry);
                });

            }
        );

        loader.localgetfile(contener,
            "./clientside/cards/cardabout.html",
            srcid,
            "aboutcard"
        );

    }
    catch (e) {
        console.log(e.name)
    }
    finally {
        //...
    }
}

/// @brief scroll function
/// @param contener is the target DOM
/// @param param maybe anything
export function cliside_BLOGNEWSpagescroll(contener, param) {
    try {
        //...
    }
    catch (e) {
        console.log(e.name)
    }
    finally {
        //...
    }
}

/*************************************************************************************
 * TECH SIDE
 *************************************************************************************/
/// @brief filling the BLOG TECH page
/// @param contener is the target DOM
/// @param param maybe anything
export function cliside_BLOGTECHpageload(contener, param) {
    try {

        //-----------------------------------------------------------
        const local = new CLISIDE_BTECHLOCAL(cliside_BASEIDENT + param["create"] + 10);
        window.BLOGdomlocal = local; //for testPHP1 & angular(temp)
        const remote = new CLISIDE_BTECHREMOTE(cliside_BASEIDENT + param["create"] + 11);
        window.BLOGdomremote = remote; //for testPHP1

        (data_BTECHmap1[1]["data"])[2] = () => {
            local.testCODEBOX(loader, "codebox1");
        };
        (data_BTECHmap1[2]["data"])[2] = () => {
            local.testCANVAS("canvas0");
        };

        (data_BTECHmap1[5]["data"])[2] = () => {
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

        (data_BTECHmap2[0]["data"])[2] = () => {
            // OK, it's still hard-coded in html page, I still don't know why when loaded from outside it doesn't functionate
            //local.testANGULAR("testapp", "testctrl");
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

//      TODO: NOT OK THERE. still dont't know why...
//      local.testANGULAR("testapp", "testctrl");

        //-----------------------------------------------------------
        const BLOGcr = new CLISIDE_BTECHLOCAL(cliside_BASEIDENT + param["create"]);
        const BLOGldr = new CLISIDE_BLOGLOADER(cliside_BASEIDENT + param["load"]);

        const srcid = "contener";
        const loadmapitem = (entry) => {
            /*
            if (contener.body.scrollTop.scrollTop() + window.height() < contener.getElementById(entry["desc"]).offset().top) {
                return;
            }
            */

            if(true === entry["loaded"]){
                return;
            }

            entry["loaded"] = true;
            if(null !== entry["desc"]) {
                BLOGldr.remotegetentry(contener,
                    BLOGcr,
                    entry["desc"],
                    entry["content"],
                    entry["progress"],
                    (cr, desc, content) => {
                        cr.filldesc(contener, desc);
                    }
                );

            }

            loader.localgetfile(contener,
                entry["data"][0],
                srcid,
                entry["data"][1],
                entry["data"][2]
            );
        };

        //-----------------------------------------------------
        const loader = new CLISIDE_LOADER(cliside_BASEIDENT + param["load"] + 9);
        window.BLOGreactloader = loader; //for React

        loader.localgetfile(contener,
            "./clientside/cards/cardheader.html",
            srcid,
            "headercard",
            () => {
                contener.getElementById("titlepart").appendChild(contener.createTextNode("Technical Part"))
            }
        );
        loader.localgetfile(document,
            "./clientside/cards/BLOGgridTECH1.html",
            srcid,
            "gridtech1",
            () => {
                data_BTECHmap1.forEach((entry, index) => {
                    loadmapitem(entry);
                });
            }
        );
        loader.localgetfile(document,
            "./clientside/cards/BLOGgridTECH2.html",
            srcid,
            "gridtech2",
            () => {
                data_BTECHmap2.forEach((entry, index) => {
                    loadmapitem(entry);
                });
            }
        );
        //-----------------------------------------------------------
        loader.localgetfile(contener,
            "./clientside/cards/cardfooter.html",
            srcid,
            "footer"
        );
        loader.localgetfile(contener,
            "./clientside/cards/cardabout.html",
            srcid,
            "aboutcard"
        );

    }
    catch (e) {
        console.log(e.name)
    }
    finally {
        //...
    }
}

/// @brief leave function
/// @param contener is the target DOM
/// @param param maybe anything
export function cliside_BLOGTECHpageunload(contener, param) {
    try {
        const core = Multiple.get(Core.IDENT(), param);
        core.isPageOver = true;

    }
    catch (e) {
        console.log(e.name)
    }
    finally {
        //...
    }
}

/// @brief scroll function
/// @param contener is the target DOM
/// @param param maybe anything
export function cliside_BLOGTECHpagescroll(contener, param) {
    try {
        //...
    }
    catch (e) {
        console.log(e.name)
    }
    finally {
        //...
    }
}
