'use strict';

/*************************************************************************************
 * INCLUDES CODE
 *************************************************************************************/
import {
    CLISIDE_PAGE,
    CLISIDE_LOADER,
    cliside_BASEIDENT,
    cliside_disctoggled
} from "./lib/clientside.js";

/*************************************************************************************
 * INCLUDES DATA
 *************************************************************************************/

/*************************************************************************************
 * GLOBAL VARIABLES
 *************************************************************************************/
let cliside_OFFERpage = null;

/*************************************************************************************
 * UTILS
 *************************************************************************************/
export class CLISIDE_IOFFER extends CLISIDE_PAGE {

    /*************************************************************************************
     * IMPLEM
     *************************************************************************************/
    /// @brief main entry function
    /// @param contener is the target DOM
    /// @param param maybe anything
    static pageload(contener, param) {
        cliside_OFFERpage = new CLISIDE_IOFFER(param);
        cliside_OFFERpage.loadtop(contener,
            "./clientside/cards/cardheader.html"
        );
        cliside_OFFERpage.loadbody(contener,
            "./clientside/cards/OFFERgrid.html"
        );
        cliside_OFFERpage.loadbottom(contener, [
            "./clientside/cards/cardfooter.html",
            "./clientside/cards/cardabout.html"
        ]);
    }

    /// @brief leav function
    /// @param contener is the target DOM
    /// @param param maybe anything
    static pageunload(contener, param) {
//        alert("notyetimplemented")
    }

    /// @brief scroll function
    /// @param contener is the target DOM
    /// @param param maybe anything
    static pagescroll(contener, param) {
        /*
        cliside_BLOGTECHlazyload(contener);
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
     * INTERNAL
     *************************************************************************************/
    /// ctor
    /// @param id
    constructor(param) {
        super(-1);

        this.srcid = "contener";

        this.loader = new CLISIDE_LOADER(cliside_BASEIDENT + param["load"]);

    }

    loadtop(contener, file) {
        this.loader.localgetfile(contener, file, this.srcid,"headercard",
            () => {
                contener.getElementById("titlepart").appendChild(contener.createTextNode(
                    "What can I do for you? And how much it costs...")
                )
            }
        );

    }
    /// @brief maiin entry function
    /// @param contener is the target DOM
    /// @param param maybe anything
    loadbody(contener, file) {
        this.loader.localgetfile(contener, file, this.srcid,"gridoffer", null);

    }

    loadbottom(contener, file) {
        this.loader.localgetfile(contener, file[0], this.srcid, "footer");
        this.loader.localgetfile(contener, file[1], this.srcid,"aboutcard");

    }

}
