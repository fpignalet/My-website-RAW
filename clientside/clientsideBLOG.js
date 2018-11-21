/*************************************************************************************
 *************************************************************************************
 * BOTH SIDES
 *************************************************************************************
 *************************************************************************************/

class CLISIDE_BLOGDOM extends CLISIDE_DOM {

    /// ctor
    constructor() {
        super();
    }

    /// @brief fills a blog entry descriptor (with title and date)
    /// @param contener is the target DOM
    /// @param data is a BLOGdata.js::data_BLOGdescXX formatted as follow
    ///     "blog_entryXXTITLE": "...",
    ///     "blog_entryXXDATE": [ "..." ]
    filldesc(contener, data) {
        var key = null;

        //-------------------
        //"blog_entryXXTITLE"
        key = Object.keys(data)[0];
        var title = contener.getElementById(key);
        var b = title.appendChild(contener.createElement("b"));
        b.appendChild(contener.createTextNode(data[key]));

        //-------------------
        //"blog_entryXXDATE"
        key = Object.keys(data)[1];
        var date = contener.getElementById(key);
        var span = date.appendChild(contener.createElement("span"));
        span.setAttribute("class", "w3-opacity");
        span.appendChild(contener.createTextNode(data[key][0]));
        date.appendChild(contener.createTextNode(data[key][1]));
    }

}

/*************************************************************************************
 * IMPLEMENTATION: COMMUNICATION WITH SERVER
 *************************************************************************************/
class CLISIDE_BLOGLOADER extends CLISIDE_LOADER {

    /// @brief ctor
    constructor() {
        super("cliside_BLOGphpgetdata");
    }

}

/*************************************************************************************
 *************************************************************************************
 * NEWS SIDES
 *************************************************************************************
 *************************************************************************************/

class CLISIDE_BNEWSDOM extends CLISIDE_BLOGDOM {

    /// ctor
    constructor() {
        super();
    }

    /// @brief fills a blog entry content (with entry data)
    /// @param contener is the target DOM
    /// @param data is a BLOGdata.js::data_BLOGcontentXX formatted as follow
    ///     "blog_entryXXCONTENT": [ "fieldtype", [ "..." ] ]
    fillcontent(contener, data) {
        //---------------------------------
        var keys = Object.keys(data);

        var id = keys[0];
        var target = contener.getElementById(id);

        var lastLI = null;
        var lastA = null;
        data[keys[0]].forEach((item, index) => {
            var fieldtype = item[0];
            var it = target.appendChild(contener.createElement(fieldtype));

            item[1].forEach((d, i) => {
                if("ul" == fieldtype) {
                    if(true == Array.isArray(d)) {
                        this.addhref(contener, it, d[0], d[1])
                    }
                    else {
                        var li = it.appendChild(contener.createElement("li"));
                        li.appendChild(contener.createTextNode(d));
                        lastLI = li;
                    }
                }
                else if("a" == fieldtype) {
                    if(null == lastA) {
                        var br = lastLI.appendChild(contener.createElement("br"));
                        var a = this.addhref(contener, lastLI, d, null);
                        lastA = a;
                    }
                    else {
                        lastA.innerHTML = d + "<br>";
                        lastA = null;
                    }
                }
                else {
                    if(true == Array.isArray(d)) {
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
/// @brief desc
/// @param contener is the target DOM
function cliside_BLOGNEWSpageload(contener) {
    try {
        var lloader = new CLISIDE_BNEWSDOM();
        function cbkload(data) {
            lloader.filldesc(contener, data[0]);
            lloader.fillcontent(contener, data[1]);

//            console.log(lloader.getFuncName() + "OK");
        }

        var rloader = new CLISIDE_BLOGLOADER();
        data_BNEWSmap.forEach((item, index) => {
            rloader.remotegetdata(null,
                item,
                (unused, d) => { cbkload(d); }
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
class CLISIDE_BTECHDOM extends CLISIDE_BLOGDOM {

    constructor() {
        super();
        this.count = 0;
    }

    /// @brief SayHello() prints a message in the document's "hello" area
    /// @param contener is the target DOM
    /// @param name desc
    /// @returns 1 desc
    testhello(contener, fieldid) {
        var message = "Hello, World";
        this.updatefield(contener, fieldid, message);

//        console.log(this.getFuncName() + "OK");
    }

    /// @brief Put the current count on the page
    /// @param contener is the target DOM
    /// @param name desc
    /// @returns 1 desc
    testcount(contener, fieldid) {
        // Put current time in the "count" area of the web page
        var message = "The count is: " + this.count++;
        this.updatefield(contener, fieldid, message);

        // Schedule next call to DisplayCount
        var local = this;
        setTimeout(function() { local.testcount(contener, fieldid); }, 500);

//        console.log(this.getFuncName() + "OK");
    }

    /// @brief desc
    /// @param contener is the target DOM
    /// @param name desc
    /// @returns 1 desc
    testdyn(entryname, photo, title, desc, date, content){
        return [

            '<div id=\"' + entryname + '\" class=\"w3-card-4 w3-margin w3-white\">\n' +

            '    <img id=\"' + entryname + 'PHOTO' + '\" src=\"' + photo + '\" alt=\"img\" style=\"width:100%\">\n' +
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
            '    </div>\n' +

            '</div>\n'

        ].join('\n');

//        console.log(this.getFuncName() + "OK");
    }

    /// @brief desc
    testangular(app, ctrl) {
        var ifirstName= "Firstname";
        var ilastName= "Lastname";
        var products = [ "Item 1", "Item 2", "Item 3" ];

        var app = angular.module(app, []);
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
                if ($scope.products.indexOf($scope.addMe) == -1) {
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
class CLISIDE_BTECHLOADER extends CLISIDE_LOADER {

    constructor() {
        super("cliside_BLOGphptest");
    }
    
    //-----------------------------------------------
    // DIRECT FIELD UPDATE
    //-----------------------------------------------
    /// @brief
    ///     calls serverside with cliside_BLOGphptest1 selector
    ///     updates txtHint html item
    /// @param contener is the target DOM
    /// @param data contains the parameter waited by cliside_BLOGphptest1 selector
    testphp1(contener, data, fieldid) {
        var params = [ this.basename+1, data ];
        if (null == params[0]) {
            params[0] = "";
        }

        var local = this;
        this.getdatadirect(params, (result) => {
            local.updatefield(contener, fieldid, result);

//            console.log(local.getFuncName() + "OK");
        });
    }

    /// @brief
    ///     calls serverside with cliside_BLOGphptest2 selector
    ///     updates bdResult html item
    /// @param contener is the target DOM
    /// @param data contains the parameter waited by cliside_BLOGphptest2 selector
    testphp2(contener, data, fieldid) {
        var params = [ this.basename+2, "" ];

        var local = this;
        this.getdatadirect(params, (result) => {
            local.updatefield(contener, fieldid, result);

//            console.log(local.getFuncName() + "OK");
        });
    }

    /// @brief
    ///     calls serverside with cliside_BLOGphptest5 selector
    ///     updates params_area3 html item
    /// @param contener is the target DOM
    /// @param data contains the parameter waited by cliside_BLOGphptest5 selector
    testphp5(contener, data, fieldid) {
        var params = [ this.basename+5, "" ];

        var local = this;
        this.getdatadirect(params, (result) => {
            local.updatefield(contener, fieldid, result);

//            console.log(local.getFuncName() + "OK");
        });
    }

    //-----------------------------------------------
    // JSON FIELD UPDATE
    //-----------------------------------------------
    /// @brief
    ///     calls serverside with cliside_BLOGphptest3 selector
    ///     updates params_area1 html item
    /// @param contener is the target DOM
    /// @param data contains the parameter waited by cliside_BLOGphptest3 selector
    testphp3(contener, data, fieldid) {
        var params = [ this.basename+3, "" ];

        var local = this;
        this.getdatajson(params, (result) => {
            local.updatefield(contener, fieldid, result.object_id + "," + result.object_title);

//            console.log(local.getFuncName() + "OK");
        });
    }

    /// @brief
    ///      calls serverside with cliside_BLOGphptest4 selector
    ///      updates params_area2 html item
    /// @param contener is the target DOM
    /// @param data contains the parameter waited by cliside_BLOGphptest4 selector
    testphp4(contener, data, fieldid) {
        var adata = [2, "JScript_TestObject2"];
        var params = [ this.basename+4, JSON.stringify(adata) ];

        var local = this;
        this.getdatajson(params, (result) => {
            local.updatefield(contener, fieldid, result.object_id + "," + result.object_title);

//            console.log(local.getFuncName() + "OK");
        });
    }

}

/*************************************************************************************
 * TECH IMPLEMENTATION: PAGE ENTRYPOINTs
 *************************************************************************************/
/// @brief desc
/// @param name desc
/// @returns 1 desc
function cliside_BLOGTECHpageload() {
    try {
        var lloader = new CLISIDE_BTECHDOM();
        function cbkload(data) {
            lloader.filldesc(document, data[0]);

//            console.log(lloader.getFuncName() + "OK");
        }

        var rloader = new CLISIDE_BLOGLOADER();
        data_BTECHmap.forEach((item, index) => {
            rloader.remotegetdata(null,
                item,
                (unused, d) => { cbkload(d); }
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
