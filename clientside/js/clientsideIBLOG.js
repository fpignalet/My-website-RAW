'use strict';

/*************************************************************************************
 * INCLUDES CODE
 *************************************************************************************/
import {
    CLISIDE_BASE,
    CLISIDE_LOADER,
    cliside_BASEIDENT,
    CLISIDE_PAGE
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
let cliside_BLOGNEWSpage = null;

let cliside_BLOGTECHpage = null;

let cliside_BLOGTECHmousecur = null;
let cliside_BLOGTECHmousepos = { x: 0, y: 0 };

/*************************************************************************************
 *************************************************************************************
 * PAGE ENTRYPOINTS
 *************************************************************************************
 *************************************************************************************/

/*************************************************************************************
 * IMPLEMENTATION: NEWS UTILS
 *************************************************************************************/
export class CLISIDE_IBLOGNEWS extends CLISIDE_PAGE {

    /*************************************************************************************
     * IMPLEMENTATION: NEWS SIDE
     *************************************************************************************/
    /// @brief maiin entry function
    /// @param contener is the target DOM
    /// @param param maybe anything
    static pageload(contener, param) {
        cliside_BLOGNEWSpage = new CLISIDE_IBLOGNEWS(param);
        cliside_BLOGNEWSpage.loadtop(contener,
            "./clientside/cards/cardheader.html"
        );
        cliside_BLOGNEWSpage.loadbody(contener,
            "./clientside/cards/BLOGgridNEWS.html"
        );
        cliside_BLOGNEWSpage.loadbottom(contener, [
            "./clientside/cards/cardfooter.html",
            "./clientside/cards/cardabout.html"
        ]);

    }

    /// @brief leaving the BLOG TECH page
    /// @param contener is the target DOM
    /// @param param maybe anything
    static pageunload(contener, param) {
        //...
    }

    /// @brief scroll function
    /// @param contener is the target DOM
    /// @param param maybe anything
    static pagescroll(contener, param) {
        /*
        cliside_BLOGNEWSlazyload(contener);
        CLISIDE_PAGE.pagescroll(contener, param);
        */
    }

    /// @brief print function
    /// @param contener is the target DOM
    /// @param param maybe anything
    static pageprint(contener, param) {
//        alert("notyetimplemented")
    }

    /*************************************************************************************
     * IMPLEMENTATION: NEWS SIDE
     *************************************************************************************/
    /// ctor
    /// @param id
    constructor(param) {
        super(-1);

        this.srcid = "contener";

        this.loader = new CLISIDE_LOADER(cliside_BASEIDENT + 8);

        this.cr = new CLISIDE_BNEWSDOM(cliside_BASEIDENT + param["create"]);
        this.ld = new CLISIDE_BLOGLOADER(cliside_BASEIDENT + param["load"]);

    }

    loadtop(contener, file) {
        this.loader.localgetfile(contener, file, this.srcid,"headercard",
            () => {
                contener.getElementById("titlepart").appendChild(contener.createTextNode("News Part"))
            }
        );

    }

    /// @brief loading function
    /// @param contener is the target DOM
    /// @param param maybe anything
    loadbody(contener, file) {
        const local = this;

        /*
        this.loader.localgetfile(contener, file, this.srcid,"gridnews",
            () => {
                data_BNEWSmap.forEach((entry, index) => {
                    local.loadmapitem(contener, entry);
                });
            }
        );
        */
        /*
        */
        data_BNEWSmap.forEach((entry, index) => {
            local.loadmapitem(contener, entry);
        });

    }

    loadbottom(contener, file) {
        this.loader.localgetfile(contener, file[0], this.srcid,"footer");
        this.loader.localgetfile(contener, file[1], this.srcid,"aboutcard");

    }

    loadmapitem(contener, entry){
        if(true === entry["loaded"]){
            return;
        }

        this.ld.remotegetentry(contener, this.cr, entry["desc"], entry["content"], entry["progress"],
            (cr, desc, content) => {
                const loadedweight = cr.fillentry(contener, desc, content);
                if(0 < loadedweight) {
                    entry["loaded"] = true;
                }
            }
        );
    };

}

/*************************************************************************************
 * IMPLEMENTATION: TECH UTILS
 *************************************************************************************/
/*************************************************************************************
 * IMPLEMENTATION: NEWS UTILS
 *************************************************************************************/
export class CLISIDE_IBLOGTECH extends CLISIDE_PAGE {

    /*************************************************************************************
     * IMPLEMENTATION: TECH SIDE
     *************************************************************************************/
    /// @brief filling the BLOG TECH page
    /// @param contener is the target DOM
    /// @param param maybe anything
    static pageload(contener, param) {
        //-----------------------------------------------------------
        // INITIALISATION COMPLETION:
        // wire specific tests callback
        const local = new CLISIDE_BTECHLOCAL(cliside_BASEIDENT + param["create"] + 10);
        window.BLOGdomlocal = local; //for testPHP1 & angular(temp)
        (data_BTECHmap1[2]["data"])[2] = () => {
            local.testCODEBOX(contener, "./clientside/game/js/lib/instances.js", cliside_BLOGTECHpage.loader, "codebox1");
        };
        (data_BTECHmap1[3]["data"])[2] = () => {
            local.testCANVAS(contener, "canvas0");
        };
        /*
        (data_BTECHmap2[0]["data"])[2] = () => {
            // OK, it's still hard-coded in html page, I still don't know why when loaded from outside it doesn't functionate
            local.testANGULAR1("testapp", "testctrl");
        };
        */
//      TODO: NOT OK THERE. still dont't know why...
//      local.testANGULAR1("testapp", "testctrl");

        const remote = new CLISIDE_BTECHREMOTE(cliside_BASEIDENT + param["create"] + 11);
        window.BLOGdomremote = remote; //for testPHP1
        (data_BTECHmap1[0]["data"])[2] = () => {
            remote.testPHP8();
        };
        (data_BTECHmap1[4]["data"])[2] = () => {
            remote.testPHP67(contener, null, "htreedemo");
        };
        (data_BTECHmap1[6]["data"])[2] = () => {
            contener.getElementById("blog_entry8").innerHTML = local.testDYN(
                // HEADER:
                null,
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
        (data_BTECHmap2[1]["data"])[2] = () => {
            local.testHELLO(contener, "hello_area");
            local.testCOUNT(contener, "count_area");
            remote.testPHP2(contener, null, "bdResult");
            remote.testPHP3(contener, null, "params_area1");
            remote.testPHP4(contener, null, "params_area2");
            remote.testPHP5(contener, null, "params_area3");
        };

        //-----------------------------------------------------
        // PAGE CONSTRUCTION
        cliside_BLOGTECHpage = new CLISIDE_IBLOGTECH(param);

        window.BLOGreactloader = cliside_BLOGTECHpage.loader;
        window.BLOGmouseentercard = CLISIDE_IBLOGTECH.mouseentercard;
        window.BLOGmouseleavecard = CLISIDE_IBLOGTECH.mouseleavecard;

        //-----------------------------------------------------------
        cliside_BLOGTECHpage.loadtop(contener,
            "./clientside/cards/cardheader.html"
        );
        cliside_BLOGTECHpage.loadbody(contener, [
            "./clientside/cards/BLOGgridTECH1.html",
            "./clientside/cards/BLOGgridTECH2.html"
        ]);
        cliside_BLOGTECHpage.loadbottom(contener, [
            "./clientside/cards/cardfooter.html",
            "./clientside/cards/cardabout.html"
        ]);

        //-----------------------------------------------------------
        contener.getElementById("detailsname").innerHTML = "Tech notes (coming soon)...";

    }

    /// @brief leave function
    /// @param contener is the target DOM
    /// @param param maybe anything
    static pageunload(contener, param) {
        const core = Multiple.get(Core.IDENT(), param["create"] + 10);
        core.isPageOver = true;
    }

    /// @brief scroll function
    /// @param contener is the target DOM
    /// @param param maybe anything
    static pagescroll(contener, param) {
        /*
        cliside_BLOGTECHlazyload(contener);
        CLISIDE_PAGE.pagescroll(contener, param);
        */

        /*
        mousepos.x = window.scrollX;
        mousepos.y = window.scrollY;
        mousecurrent = contener.elementFromPoint(50, mousepos.y);
        contener.getElementById("detailsname").innerHTML = "CURRENT " + mousecurrent;
        */

    }

    /// @brief print function
    /// @param contener is the target DOM
    /// @param param maybe anything
    static pageprint(contener, param) {
//        alert("notyetimplemented")
    }

    /*************************************************************************************
     * IMPLEMENTATION: TECH SIDE SPECIFIC ENTRYPOINTS
     *************************************************************************************/
    /// @brief scroll function
    /// @param contener is the target DOM
    /// @param param maybe anything
    static mouseentercard(contener, param) {
        cliside_BLOGTECHmousecur = param.getAttribute("id");
//    contener.getElementById("detailsname").innerHTML = "Implementation details for " + mousecurrent + ": ...";
        contener.getElementById("detailsname").innerHTML = "Tech notes (coming soon)...";
    }

    /// @brief scroll function
    /// @param contener is the target DOM
    /// @param param maybe anything
    static mouseleavecard(contener, param) {
        cliside_BLOGTECHmousecur = param.getAttribute("id");
        contener.getElementById("detailsname").innerHTML = "Tech notes (coming soon)...";
    }

    /*************************************************************************************
     * IMPLEMENTATION: INTERNAL
     *************************************************************************************/
    /// ctor
    /// @param id
    constructor(param) {
        super(-1);

        this.srcid = "contener";

        this.loader = new CLISIDE_LOADER(cliside_BASEIDENT + param["load"] + 9);

        this.cr = new CLISIDE_BTECHLOCAL(cliside_BASEIDENT + param["create"]);
        this.ld = new CLISIDE_BLOGLOADER(cliside_BASEIDENT + param["load"]);

    }

    loadtop(contener, file) {
        this.loader.localgetfile(contener, file, this.srcid,"headercard",
            () => {
                contener.getElementById("titlepart").appendChild(contener.createTextNode("Technical Part"))
            }
        );

    }

    /// @brief filling the BLOG TECH page
    /// @param contener is the target DOM
    loadbody(contener, file) {
        const local = this;

        /*
        */
        this.loader.localgetfile(document, file[0], this.srcid,"gridtech1",
            () => {
                data_BTECHmap1.forEach((entry, index) => {
                    local.loadmapitem(contener, entry);
                });
            }
        );
        this.loader.localgetfile(document, file[1], this.srcid,"gridtech2",
            () => {
                data_BTECHmap2.forEach((entry, index) => {
                    local.loadmapitem(contener, entry);
                });
            }
        );
        /*
        data_BTECHmap1.forEach((entry, index) => {
            local.loadmapitem(contener, entry);
        });
        data_BTECHmap2.forEach((entry, index) => {
            local.loadmapitem(contener, entry);
        });
        */

    }

    loadbottom(contener, file) {
        this.loader.localgetfile(contener, file[0], this.srcid,"footer");
        this.loader.localgetfile(contener, file[1], this.srcid,"aboutcard");

    }

    loadmapitem(contener, entry){
        if(true === entry["loaded"]){
            return;
        }

        if(null !== entry["desc"]) {
            this.ld.remotegetentry(contener, this.cr, entry["desc"], entry["content"], entry["progress"],
                (cr, desc, content) => {
                    cr.filldesc(contener, desc);
                    entry["loaded"] = true;
                }
            );

        }

        this.loader.localgetfile(contener, entry["data"][0], this.srcid, entry["data"][1], entry["data"][2]);
    };

}
