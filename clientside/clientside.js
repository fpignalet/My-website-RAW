class CLISIDE_BASE {

    /// ctor
    constructor() {
        this.id = null;
    }

    /// debug
    getFuncName() {
        if(true == clientside_checkbrowser("Firefox")) return;
        return (new Error()).stack.match(/at (\S+)/g)[1].slice(3);
    }

}

/*************************************************************************************
 * IMPLEMENTATION: BASIC PAGE CREATION UTILITIES
 *************************************************************************************/
/// @brief class to make items adding easy
class CLISIDE_DOM extends CLISIDE_BASE {

    /// ctor
    constructor() {
        super();
    }

    //------------------------------------------------------------------
    // SINGLE ITEMS THROUGH ID
    //------------------------------------------------------------------
    /// @brief html single element update
    /// @param contener is the target DOM
    /// @param id is the ID attribute of the element to be updated
    /// @param name contains the value to be used
    updatefield(contener, id, str) {
        contener.getElementById(id).innerHTML = str;
    }

    /// @brief add text inside the "id" element
    /// @param contener is the target DOM
    /// @param id is the ID attribute of the element which receives text
    /// @param value contains the text to add
    addtext(contener, id, value) {
        const it = contener.getElementById(id);
        it.appendChild(contener.createTextNode(value));
    }

    /// @brief creates a button described as [ id, name ]
    /// @param contener is the target DOM
    /// @param presbutton describes the button with [ id, name ]
    /// @param file tells which page should be opened
    addbutton(contener, presbutton, file) {
        let it = null;

        const id = presbutton[0];

        it = contener.getElementById(id);
        it.setAttribute("formaction", file);

        const name = presbutton[1];
        it = contener.getElementById(id);
        it.appendChild(contener.createTextNode(name));
    }

    /// @brief add photo inside the "id" element
    /// @param contener is the target DOM
    /// @param id is the ID attribute of the element which receives text
    /// @param value contains the path to the photo to add
    addphoto(contener, id, value) {
        const it = contener.getElementById(id);
        it.setAttribute("src", value);
    }

    //------------------------------------------------------------------
    // SINGLE ITEMS THROUGH INSTANCE
    //------------------------------------------------------------------
    /// @brief add href element inside the it element
    /// @param contener is the target DOM
    /// @param it is the element which receives the "a" contener
    /// @param attr contains the value of the href attribute
    /// @param val contains the text of the "a" contener
    addhref(contener, it, attr, val) {
        const a = it.appendChild(contener.createElement("a"));
        a.setAttribute("href", attr);
        if(null == val) {
            return a;
        }

        a.innerHTML = val + "<br>";
        return a;
    }

    /// @brief add href element inside the it element
    /// @param contener is the target DOM
    /// @param it is the element which receives the list item
    /// @param text contains the text of the list item
    addlistitem(contener, it, text) {
        const li = it.appendChild(contener.createElement("li"));
        li.appendChild(contener.createTextNode(text));
    }

    //------------------------------------------------------------------
    // TABLE ITEMS THROUGH INSTANCE
    //------------------------------------------------------------------
    /// @brief add sub elements inside a tr element
    /// @param contener is the target DOM
    /// @param tr is the current contener element
    /// @param data contains sub-item data. It can be an array.
    /// @param bold can be true when it is a left column "title"
    /// @param bold can be false when it is a right column "content"
    filltr(contener, tr, data, bold) {
        if(true == Array.isArray(data)) {
            this.addtrsubs(contener, tr, data);
        }
        //-----------------------------------
        else {
            let it = null;
            if(true == bold) {
                it = tr.appendChild(contener.createElement("b"));
            }
            else {
                it = tr;
            }

            it.appendChild(contener.createTextNode(data));
        }

    }

    /// @brief filltr related sub_function which allows recursion
    /// @param contener is the target DOM
    /// @param tr is the current contener element
    /// @param data contains sub-item data. It can be an array.
    addtrsubs(contener, tr, data) {
        const ul = tr.appendChild(contener.createElement("ul"));

        const inst = this;
        data.forEach((item, index) => {
            if(true == Array.isArray(item)) {
                if(true == item[0].startsWith("http")) {
                    var li = ul.appendChild(contener.createElement("li"));
                    inst.addhref(contener, li, item[0], item[1]);
                }
                else {
                    inst.addtrsubs(contener, tr, item);
                }
            }
            //-----------------------------------
            else {
                var li = ul.appendChild(contener.createElement("li"));
                li.appendChild(contener.createTextNode(item));

            }

        });

        return ul;
    }

    //------------------------------------------------------------------
    // DISCLOSURE / ACCORDION ITEMS (THROUGH INSTANCE)
    //------------------------------------------------------------------
    /// @brief create the divs contener tree inside the right column
    /// @param contener is the target DOM
    /// @param td is the current element which receives the button
    adddisclosdivs(contener, td) {
        const div = td.appendChild(contener.createElement("div"));
        div.setAttribute("class", "w3-card w3-round");

        const _div = div.appendChild(contener.createElement("div"));
        _div.setAttribute("class", "w3-white");
        return _div;
    }

    /// @brief create the disclosure button which allows to show/hide something
    /// @param contener is the target DOM
    /// @param div is the current element which receives the button
    /// @param data contains button data:
    //      data[0] -> id,
    //      data[1] -> title,
    //      data[2] -> onclick callback
    adddisclosbutton(contener, div, data) {
        const btid = data[0];
        const btcbk = data[2];
        const button = div.appendChild(contener.createElement("button"));
        button.setAttribute("id", btid);
        button.setAttribute("onclick", "CLISIDE_DOM.cbkdisclose('" + btcbk + "')");
        button.setAttribute("class", "w3-button w3-block w3-theme-l1 w3-left-align");

        const bttxt = data[1];
        const i = button.appendChild(contener.createElement("i"));
        i.setAttribute("class", "fa fa-angle-double-down fa-fw w3-margin-right");
        button.appendChild(contener.createTextNode(bttxt));

        return button;
    }

    /// @brief creates the data which will be showed / hidden by the disclosure button
    /// @param contener is the target DOM
    /// @param div is the current element which receives the content
    /// @param data contains the data to be displayed
    adddiscloscontent(contener, div, data) {
        const _div = div.appendChild(contener.createElement("div"));

        const idcontent = data[2];
        _div.setAttribute("id", idcontent);
        _div.setAttribute("class", "w3-hide w3-container");

        const table = _div.appendChild(contener.createElement("table"));
        table.setAttribute("class", "w3-table");
        return table;
    }

    /// @brief function to disclose an html item
    /// @param id index of the disclosable item
    static cbkdisclose(id) {
        // noinspection UnnecessaryLocalVariableJS
        const contener = document;

        const x = contener.getElementById(id);
        if (-1 == x.className.indexOf("w3-show")) {
            x.className += " w3-show";
            x.previousElementSibling.className += " w3-theme-d1";
        }
        else {
            x.className = x.className.replace("w3-show", "");
            x.previousElementSibling.className =
                x.previousElementSibling.className.replace(" w3-theme-d1", "");
        }
    }

}

/*************************************************************************************
 * IMPLEMENTATION: COMMUNICATION WITH SERVER
 *************************************************************************************/
/// @brief local or remote data access
class CLISIDE_LOADER extends CLISIDE_DOM {

    /// @brief ctor
    /// @param cmdname ...
    constructor(cmdname) {
        super();

        this.target = "serverside/serverside.php";
        this.cmdname = cmdname;

        this.progressbars = {};
        this.progressvals = {};
        this.progressitvs = {};

        this.incrbar = 20;

//        console.log(this.getFuncName() + "OK");
    }

    //-----------------------------------------------
    // CORE
    //-----------------------------------------------
    /// @brief desc...
    /// @param params ...
    /// @param cbk ...
    getdatadirect(params, cbk) {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                cbk(this.responseText);
//                console.log(local.getFuncName() + "OK");
            }
        };

        xmlhttp.open("GET", this.createGETstr(params), true);
        xmlhttp.send();
    }

    /// @brief desc...
    /// @param params ...
    /// @param cbk ...
    getdatajson(params, cbk) {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                const jsonRes = JSON.parse(this.responseText);
                cbk(jsonRes);
//                console.log(local.getFuncName() + "OK");
            }
        };

        xmlhttp.open("GET", this.createGETstr(params), true);
        xmlhttp.send();
    }

    //-----------------------------------------------------
    // ACCESS
    //-----------------------------------------------------
    /// @brief calls serverside with cliside_BLOGphptest1 selector then updates txtHint html item
    /// @param creator is th instance of the creator
    /// @param data desc...
    /// @param cbk will be executed
    remotegetdata(creator, data, cbk) {
        const inst = this;

        // with many data to be loaded
        if(true == Array.isArray(data)) {
            /**********************************
             * 1ST: PREPARE DATA FOR UPDATE
             **********************************/
            const datamap = {};
            inst.mapinit(data, datamap);

            /**********************************
             * 2ND: RETRIEVE DATA
             * the main request, to get the boite item contents
             * @type {XMLHttpRequest}
             **********************************/
            data.forEach((item, index) => {
                const params = [inst.cmdname, item];
                inst.getdatajson(params, (result) => {
                    // ---------------------------------------------------
                    // store result and survey: we need to be sure that all results are there:
                    datamap[item] = result;
                    if(false == inst.mapisfull(datamap)) {
                        /// not everything is there, we need to keep on waiting
                        return;
                    }

                    // ---------------------------------------------------
                    /// OK we got every result for the current boulot list
                    const results = [];
                    Object.keys(datamap).forEach((key, _index) => {
                        results.push(datamap[key]);
                    });

                    cbk(creator, results);
//                    console.log(this.getFuncName() + "OK");
                });
            })
        }
        // with just one item to be loaded
        else {
            var params = [ inst.cmdname, data ];
            inst.getdatajson(params, (result) => {
                cbk(creator, result);
            });
        }
    }

    //-----------------------------------------------
    // PROGRESS HANDLING
    //-----------------------------------------------
    /// @brief uses "CV.html::boulotentryXXwait" to display a progrss bar during wait
    /// @param contener is the target DOM
    /// @param progress is the bar to be updated
    showprogress(contener, progress) {
        const barid = progress[2];
        if(null != this.progressbars[barid]) {
            //there is no progress bar?
            return;
        }

        //------------------
        this.progressbars[barid] = contener.getElementById(barid);
        this.progressvals[barid] = 0;
        this.progressitvs[barid] = setInterval((inst) => {
            inst.progressvals[barid] += 1;
            inst.progressbars[barid].style.width = inst.progressvals[barid] + '%';
        }, this.incrbar, this);

    }

    /// @brief uses "CV.html::boulotentryXXwait" to display a progrss bar during wait
    /// @param contener is the target DOM
    /// @param progress is the bar to be updated
    hideprogress(contener, progress) {
        const barid = progress[2];
        if(null == this.progressbars[barid]) {
            //there is no progress bar?
            return;
        }

        //------------------
        if(null != this.progressitvs[barid]) {
            clearInterval(this.progressitvs[barid]);
        }

        const waitid = progress[1];
        const progid = progress[0];
        const it = contener.getElementById(waitid);
        contener.getElementById(progid).removeChild(it);

        this.progressbars[barid] = null;
    }

    //-----------------------------------------------
    // UTILS
    //-----------------------------------------------
    /// @brief create an http text request line to serverside.php
    /// @param name params is an array which may contain up to 2 parameters
    /// @returns the formatted GET request
    createGETstr(params) {
        let cmd = this.target;
        if(null != params){
            params.forEach((item, index) => {
                cmd +=
                    ((0 == index)? "?": "&") +
                    "p" + (index+1) + "=" + item;
            })
        }

        return cmd;
    }

    /// @brief a way to be sure that the datas are in a proper order:
    /// the keys will be sorted following the order of the array
    mapinit(data, datamap) {
        data.forEach((key, index) => {
            datamap[key] = null;
        });
    }

    /// @brief to be called each time a data item has been received
    mapisfull(datamap) {
        let isfull = true;
        Object.keys(datamap).forEach((key, _index) => {
            if(null == datamap[key]) {
                isfull = false;
            }
        });

        return isfull;
    }

}

/*************************************************************************************
 * IMPLEMENTATION: OTHERS, NOT CLASSES YET
 *************************************************************************************/
/// @brief ...
/// @param select ...
function clientside_checkbrowser(select) {
    if(-1 != navigator.userAgent.indexOf("Opera") )
    {
        if("Opera" == select) return true;
    }
    else if(-1 != navigator.userAgent.indexOf('OPR') )
    {
        if("Opera" == select) return true;
    }
    else if(-1 != navigator.userAgent.indexOf("Chrome") )
    {
        if("Chrome" == select) return true;
    }
    else if(-1 != navigator.userAgent.indexOf("Safari") )
    {
        if("Safari" == select) return true;
    }
    else if(-1 != navigator.userAgent.indexOf("Firefox") )
    {
        if("Firefox" == select) return true;
    }
    else if(-1 != navigator.userAgent.indexOf("MSIE") ) //IF IE > 10
    {
        if("MSIE" == select) return true;
    }
    else if( false == document.documentMode ) //IF IE > 10
    {
        if("MSIE" == select) return true;
    }

    return false;
}