'use strict';

import {
    CLISIDE_DOM,
    CLISIDE_LOADER
} from "./clientside.js";

import {
    /*
    data_BLOGcontent1,
    data_BLOGcontent2,
    data_BLOGcontent3,
    data_BLOGcontent4,
    data_BLOGcontent5,
    data_BLOGcontent6,
    data_BLOGcontent7,
    data_BLOGcontent10,
    data_BLOGcontent11,
    data_BLOGcontent12,
    data_BLOGcontent13,
    data_BLOGcontent14,
    data_BLOGcontent15,
    data_BLOGcontent16,
    data_BLOGcontent17,
    data_BLOGcontent91,
    data_BLOGdesc1,
    data_BLOGdesc2,
    data_BLOGdesc3,
    data_BLOGdesc4,
    data_BLOGdesc5,
    data_BLOGdesc6,
    data_BLOGdesc7,
    data_BLOGdesc9,
    data_BLOGdesc10,
    data_BLOGdesc11,
    data_BLOGdesc12,
    data_BLOGdesc13,
    data_BLOGdesc14,
    data_BLOGdesc15,
    data_BLOGdesc16,
    data_BLOGdesc17,
    */
    data_BNEWSlasts,
    data_BNEWSmap,
    data_BNEWSstruct,
    data_BTECHlasts,
    data_BTECHmap,
    data_BTECHstruct,
} from "./data/BLOGdata.js";

import Multiple from "./game/js/lib/instances.js";
import Core from "./game/js/impl/core.js";

/*************************************************************************************
 *************************************************************************************
 * BOTH SIDES
 *************************************************************************************
 *************************************************************************************/

/// @brief specific DOM utilities for BLOG pages
export class CLISIDE_BLOGDOM extends CLISIDE_DOM {

    /// ctor
    constructor(id) {
        super(id);
    }

    /// @brief fills a blog entry descriptor (with title and date)
    /// @param contener is the target DOM
    /// @param data is a BLOGdata.js::data_BLOGdescXX formatted as follow
    ///     "blog_entryXXTITLE": "...",
    ///     "blog_entryXXDATE": [ "..." ]
    filldesc(contener, data) {
        let key;

        //-------------------
        //"blog_entryXXTITLE"
        key = Object.keys(data)[0];
        const title = contener.getElementById(key);
        const b = title.appendChild(contener.createElement("b"));
        b.appendChild(contener.createTextNode(data[key]));

        //-------------------
        //"blog_entryXXDATE"
        key = Object.keys(data)[1];
        const date = contener.getElementById(key);
        const span = date.appendChild(contener.createElement("span"));
        span.setAttribute("class", "w3-opacity");
        span.appendChild(contener.createTextNode(data[key][0]));
        date.appendChild(contener.createTextNode(data[key][1]));
    }

}

/*************************************************************************************
 * IMPLEMENTATION: COMMUNICATION WITH SERVER
 *************************************************************************************/

/// @brief specific loading utilities for BLOG pages
export class CLISIDE_BLOGLOADER extends CLISIDE_LOADER {

    /// @brief ctor
    constructor(id) {
        super("cliside_BLOGphpgetdata", id);
    }

}

/*************************************************************************************
 *************************************************************************************
 * NEWS SIDES
 *************************************************************************************
 *************************************************************************************/

/// @brief specific DOM utilities for BLOG NEWS pages
export class CLISIDE_BNEWSDOM extends CLISIDE_BLOGDOM {

    /// ctor
    constructor(id) {
        super(id);
    }

    fillentry(contener, desc, content) {
        const local = this;

        local.filldesc(contener, desc);
        Object.keys(content).forEach((key, _index) => {
            local.fillcontent(contener, content[key]);
        });

//      console.log(lloader.getFuncName() + "OK");
    }

    /// @brief fills a blog entry content (with entry data)
    /// @param contener is the target DOM
    /// @param data is a BLOGdata.js::data_BLOGcontentXX formatted as follow
    ///     "blog_entryXXCONTENT": [ "fieldtype", [ "..." ] ]
    fillcontent(contener, data) {
        //---------------------------------
        const keys = Object.keys(data);

        //blog_entryXXCONTENT
        const id = keys[0];
        const target = contener.getElementById(id);

        let lastLI = null;
        let lastA = null;
        data[id].forEach((item, index) => {
            //parse each
            // item[0],     item[1]
            // "fieldtype", [ "..." ]

            const fieldtype = item[0];
            const it = target.appendChild(contener.createElement(fieldtype));

            item[1].forEach((d, i) => {
                // triggin' on fieldtype: let's create a list
                if("ul" === fieldtype) {
                    if(true === Array.isArray(d)) {
                        this.addhref(contener, it, d[0], d[1])
                    }
                    else {
                        const li = it.appendChild(contener.createElement("li"));
                        li.appendChild(contener.createTextNode(d));
                        lastLI = li;
                    }
                }
                // triggin' on fieldtype: let's add a link in the list (lastLI)
                else if("a" === fieldtype) {
                    if(null == lastA) {
//                      var br = lastLI.appendChild(contener.createElement("br"));
                        const a = this.addhref(contener, lastLI, d, null);
                        lastA = a;
                    }
                    else {
                        lastA.innerHTML = d + "<br>";
                        lastA = null;
                    }
                }
                // triggin' on fieldtype: simple cases
                else {
                    if(true === Array.isArray(d)) {
                        this.addhref(contener, it, d[0], d[1])
                    }
                    else {
                        it.appendChild(contener.createTextNode(d));
                    }
                }
            })

        });

    }

}

/*************************************************************************************
 * NEWS IMPLEMENTATION: PAGE ENTRYPOINTs
 *************************************************************************************/
/// @brief filling the BLOG NEWS page
/// @param contener is the target DOM
export function cliside_BLOGNEWSpageload(contener) {
    try {
        const BLOGcr = new CLISIDE_BNEWSDOM(-1);
        const loader = new CLISIDE_BLOGLOADER(-1);

        data_BNEWSmap.forEach((entry, index) => {
            loader.remotegetentry(contener,
                BLOGcr,
                entry["desc"],
                entry["content"],
                entry["progress"],
                (cr, desc, content) => {
                    cr.fillentry(contener, desc, content);
                }
            );
        })

    }
    catch (e) {
        console.log(e.name)
    }
    finally {
        //...
    }
}

/*************************************************************************************
 *************************************************************************************
 * TECH SIDES
 *************************************************************************************
 *************************************************************************************/

/*************************************************************************************
 * TECH IMPLEMENTATION: LOCAL TESTS
 *************************************************************************************/

/// @brief specific DOM utilities for BLOG TECH page
export class CLISIDE_BTECHLOCAL extends CLISIDE_BLOGDOM {

    constructor(id) {
        super(id);
        this.count = 0;
    }

    /// @brief SayHello() prints a message in the document's "hello" area
    /// @param contener is the target DOM
    /// @param fieldid is the field which receives the result
    /// @returns 1 desc
    testhello(contener, fieldid) {
        const message = "Hello, World";
        this.updatefield(contener, fieldid, message);
//        console.log(this.getFuncName() + "OK");
    }

    /// @brief Put the current count on the page
    /// @param contener is the target DOM
    /// @param fieldid is the field which receives the result
    /// @returns 1 desc
    testcount(contener, fieldid) {
        // Put current time in the "count" area of the web page
        const message = "The count is: " + this.count++;
        this.updatefield(contener, fieldid, message);

        // Schedule next call to DisplayCount
        const local = this;
        setTimeout(function() {
            local.testcount(contener, fieldid);
            }, 500);

//        console.log(this.getFuncName() + "OK");
    }

    /// @brief creates a blog entry only with code
    /// @param entryname desc
    /// @param photo desc
    /// @param title desc
    /// @param desc desc
    /// @param date desc
    /// @param content desc
    /// @returns 1 desc
    testdyn(entryname, photo, title, desc, date, content){
        return [

            '    <img id=\"' + entryname + 'PHOTO' + '\" src=\"' + photo + '\" alt=\"img\" style=\"width:80%\">\n' +
            '    <div class=\"w3-container\">\n' +
            '        <h3 id=\"' + entryname + 'TITLE' + '\">\n' +
            '           <b>' + title + '</b>\n' +
            '        </h3>\n' +
            '        <h5 id=\"' + entryname + 'DATE' + '\">\n' +
            '           <span class=\"w3-opacity\">' + date + '</span>\n' +
            desc +
            '        </h5>\n' +
            '    </div>\n' +

            '    <div id=\"' + entryname + 'CONTENT' + '\" class=\"w3-container\">\n' +
            '        <p>' + content + '</p>\n' +
            '    </div>\n'

        ].join('\n');

//        console.log(this.getFuncName() + "OK");
    }

    /// @brief add angularjs to tech tests
    /// @param name desc
    /// @param ctrl desc
    testangular(name, ctrl) {
        const ifirstName = "Firstname";
        const ilastName = "Lastname";
        const products = ["Item 1", "Item 2", "Item 3"];

        const app = angular.module(name, []);
        app.controller(ctrl, function($scope) {

            // -------------------------------------
            $scope.ifirstName= ifirstName;
            $scope.ilastName= ilastName;
            $scope.products = products;

            // -------------------------------------
            $scope.addItem = function () {
                $scope.errortext = "";
                if (!$scope.addMe) {
                    return;
                }
                if ($scope.products.indexOf($scope.addMe) === -1) {
                    $scope.products.push($scope.addMe);
                }
                else {
                    $scope.errortext = "The item is already in the list.";
                }
            };

            // -------------------------------------
            $scope.removeItem = function (x) {
                $scope.errortext = "";
                $scope.products.splice(x, 1);
            };

            // -------------------------------------
            $scope.mouseoverfunc = function(myE) {
                $scope.x = myE.clientX;
                $scope.y = myE.clientY;
            };

        });

        /*
        app.config(function($routeProvider) {
            $routeProvider
                .when("/banana", {
                    template : "<h1>Banana</h1><p>Bananas contain around 75% water.</p>"
                })
                .when("/tomato", {
                    template : "<h1>Tomato</h1><p>Tomatoes contain around 95% water.</p>"
                })
                .otherwise({
                    template : "<h1>Nothing</h1><p>Nothing has been selected</p>"
                });
        });
        */

//        console.log(this.getFuncName() + "OK");
    }

}

/*************************************************************************************
 * TECH IMPLEMENTATION: TESTS WITH SERVER
 *************************************************************************************/

/// @brief specific loading utilities for BLOG TECH page
export class CLISIDE_BTECHREMOTE extends CLISIDE_LOADER {

    /// @brief ...
    /// @param id
    constructor(id) {
        super("cliside_BLOGphptest", id);

        this.islinux = false;
        this.wsocket = null;
    }
    
    //-----------------------------------------------
    // DIRECT FIELD UPDATE
    //-----------------------------------------------
    /// @brief calls serverside with cliside_BLOGphptest1 selector then updates txtHint html item
    /// @param contener is the target DOM
    /// @param data contains the parameter waited by cliside_BLOGphptest1 selector
    /// @param fieldid is the field which receives the result
    testphp1(contener, data, fieldid) {
        const params = [this.cmdselect + 1, data];
        if (null == params[0]) {
            params[0] = "";
        }

        const local = this;
        this.getdataraw(params, (result) => {
            local.updatefield(contener, fieldid, result);
//            console.log(local.getFuncName() + "OK");
        });
    }

    /// @brief calls serverside with cliside_BLOGphptest2 selector then updates bdResult html item
    /// @param contener is the target DOM
    /// @param data contains the parameter waited by cliside_BLOGphptest2 selector
    /// @param fieldid is the field which receives the result
    testphp2(contener, data, fieldid) {
        const params = [this.cmdselect + 2, ""];

        const local = this;
        this.getdataraw(params, (result) => {
            local.updatefield(contener, fieldid, result);
//            console.log(local.getFuncName() + "OK");
        });
    }

    /// @brief calls serverside with cliside_BLOGphptest5 selector then updates params_area3 html item
    /// @param contener is the target DOM
    /// @param data contains the parameter waited by cliside_BLOGphptest5 selector
    /// @param fieldid is the field which receives the result
    testphp5(contener, data, fieldid) {
        const params = [this.cmdselect + 5, ""];

        const local = this;
        this.getdataraw(params, (result) => {
            local.updatefield(contener, fieldid, result);
//            console.log(local.getFuncName() + "OK");
        });
    }

    /// @brief calls serverside with cliside_BLOGphptest4 selector then updates ...
    testphp7() {
        const params = [this.cmdselect + 7, ""];

        this.getdataraw(params, (result) => {
            this.islinux = /Linux/.test(result);
        });
    }

    /// @brief prepraring push test
    /// TODO: need a form
    testphp8() {
        const params = [this.cmdselect + 8, ""];

        const local = this;
        this.getdataraw(params, (result) => {

            //you can use wss instead of ws for secure communication.
            if(null === local.wsocket) {
                local.createwsocket();
            }

            local.wsocket.send('TESTTOTOTESTTOTO'); //sending message to server.
        });
    }

    //-----------------------------------------------
    // JSON FIELD UPDATE
    //-----------------------------------------------
    /// @brief calls serverside with cliside_BLOGphptest3 selector then updates params_area1 html item
    /// @param contener is the target DOM
    /// @param data contains the parameter waited by cliside_BLOGphptest3 selector
    /// @param fieldid is the field which receives the result
    testphp3(contener, data, fieldid) {
        const params = [this.cmdselect + 3, ""];

        const local = this;
        this.getdatajson(params, (result) => {
            local.updatefield(contener, fieldid, result.object_id + "," + result.object_title);
//            console.log(local.getFuncName() + "OK");
        });
    }

    /// @brief calls serverside with cliside_BLOGphptest4 selector then updates params_area2 html item
    /// @param contener is the target DOM
    /// @param data contains the parameter waited by cliside_BLOGphptest4 selector
    /// @param fieldid is the field which receives the result
    testphp4(contener, data, fieldid) {
        const adata = [2, "JScript_TestObject2"];
        const params = [this.cmdselect + 4, JSON.stringify(adata)];

        const local = this;
        this.getdatajson(params, (result) => {
            local.updatefield(contener, fieldid, result.object_id + "," + result.object_title);
//            console.log(local.getFuncName() + "OK");
        });
    }

    /// @brief calls serverside with cliside_BLOGphptest4 selector then updates ...
    /// @param contener is the target DOM
    /// @param data contains the parameter waited by cliside_BLOGphptest4 selector
    /// @param fieldid is the field which receives the result
    testphp6(contener, data, fieldid) {
        const params = [this.cmdselect + 6, ""];

        const local = this;
        this.getdatajson(params, (result) => {
            local.filltree(contener, fieldid, result, this.islinux);
//            console.log(local.getFuncName() + "OK");
        });
    }

    //-----------------------------------------------
    // NON VISIBLE IMPLEMENTATION
    //-----------------------------------------------
    createwsocket() {
        const local = this;

        this.wsocket = new WebSocket('ws://localhost', ['soap', 'xmpp']);

        // connection open event
        this.wsocket.onopen = function () {
            local.wsocket.send('TESTTOTOTESTTOTO'); //sending message to server.
        };

        // error event
        this.wsocket.onerror = function (error) {
            console.log('WebSocket Error ' + error);
        };

        // update received from server event
        this.wsocket.onmessage = function (e) {
            if('OKOKOKOK' === e.data) {
                console.log('WebSocket Server answered: ' + e.data);
            }
            else {
                console.log('WebSocket Server didn\'t answered properly...');
            }
        };
    }
}

/*************************************************************************************
 * TECH IMPLEMENTATION: PAGE ENTRYPOINTs
 *************************************************************************************/
/// @brief filling the BLOG TECH page
export function cliside_BLOGTECHpageload(contener) {
    try {
        const BLOGcr = new CLISIDE_BTECHLOCAL(-1);

        const loader = new CLISIDE_BLOGLOADER(-1);
        data_BTECHmap.forEach((item, index) => {
            loader.remotegetbatch(contener,
                BLOGcr,
                item,
                null,
                (cr, data) => {
                    cr.filldesc(contener, data[0]);
                }
            );
        })

    }
    catch (e) {
        console.log(e.name)
    }
    finally {
        //...
    }
}

export function cliside_BLOGTECHpageunload(contener) {
    try {
        let core = Multiple.get(Core.IDENT(), core.index);
        core.isPageOver = true;

    }
    catch (e) {
        console.log(e.name)
    }
    finally {
        //...
    }
}

//to avoid re-entrance issues:
export const cliside_BTECHtestslocal = new CLISIDE_BTECHLOCAL();
export const cliside_BTECHtestsremote = new CLISIDE_BTECHREMOTE();
