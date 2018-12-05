//-----------------------------------------------------------------------------------------------------------
const data_BLOGdesc16 = {
    "blog_entry16TITLE": "",
    "blog_entry16DATE": []
};

const data_BLOGcontent16 = {
    "blog_entry16CONTENT": []
};

//-----------------------------------------------------------------------------------------------------------
const data_BLOGdesc15 = {
    "blog_entry15TITLE": "",
    "blog_entry15DATE": []
};

const data_BLOGcontent15 = {
    "blog_entry15CONTENT": []
};

//-----------------------------------------------------------------------------------------------------------
const data_BLOGdesc14 = {
    "blog_entry14TITLE": "",
    "blog_entry14DATE": []
};

const data_BLOGcontent14 = {
    "blog_entry14CONTENT": []
};

//-----------------------------------------------------------------------------------------------------------
const data_BLOGdesc13 = {
    "blog_entry13TITLE": "",
    "blog_entry13DATE": []
};

const data_BLOGcontent13 = {
    "blog_entry13CONTENT": []
};

//-----------------------------------------------------------------------------------------------------------
const data_BLOGdesc12 = {
    "blog_entry12TITLE": "",
    "blog_entry12DATE": []
};

const data_BLOGcontent12 = {
    "blog_entry12CONTENT": []
};

//-----------------------------------------------------------------------------------------------------------
const data_BLOGdesc11 = {
    "blog_entry11TITLE": "",
    "blog_entry11DATE": []
};

const data_BLOGcontent11 = {
    "blog_entry11CONTENT": []
};

//-----------------------------------------------------------------------------------------------------------
const data_BLOGdesc10 = {
    "blog_entry10TITLE": "",
    "blog_entry10DATE": []
};

const data_BLOGcontent10 = {
    "blog_entry10CONTENT": []
};

//-----------------------------------------------------------------------------------------------------------
const data_BLOGdesc9 = {
    "blog_entry9TITLE": "",
    "blog_entry9DATE": []
};

const data_BLOGcontent91 = {
    "blog_entry91CONTENT": []
};

//-----------------------------------------------------------------------------------------------------------
const data_BLOGdesc7 = {
    "blog_entry7TITLE": "",
    "blog_entry7DATE": []
};

const data_BLOGcontent7 = {
    "blog_entry7CONTENT": []
};

//-----------------------------------------------------------------------------------------------------------
const data_BLOGdesc6 = {
    "blog_entry6TITLE": "",
    "blog_entry6DATE": []
};

const data_BLOGcontent6 = {
    "blog_entry6CONTENT": []
};

//-----------------------------------------------------------------------------------------------------------
const data_BLOGdesc5 = {
    "blog_entry5TITLE": "",
    "blog_entry5DATE": []
};

const data_BLOGcontent5 = {
    "blog_entry5CONTENT": []
};

//-----------------------------------------------------------------------------------------------------------
const data_BLOGdesc4 = {
    "blog_entry4TITLE": "",
    "blog_entry4DATE": []
};

const data_BLOGcontent4 = {
    "blog_entry4CONTENT": []
};

//-----------------------------------------------------------------------------------------------------------
const data_BLOGdesc3 = {
    "blog_entry3TITLE": "",
    "blog_entry3DATE": []
};

const data_BLOGcontent3 = {
    "blog_entry3CONTENT": []
};

//-----------------------------------------------------------------------------------------------------------
const data_BLOGdesc2 = {
    "blog_entry2TITLE": "",
    "blog_entry2DATE": []
};
const data_BLOGcontent2 = {
    "blog_entry2CONTENT": []
};

//-----------------------------------------------------------------------------------------------------------
const data_BLOGdesc1 = {
    "blog_entry1TITLE": "",
    "blog_entry1DATE": []
};
const data_BLOGcontent1 = {
    "blog_entry1CONTENT": []
};

//-----------------------------------------------------------------------------------------------------------
// structs are there to navigate page contents
const data_BNEWSstruct = [
    [data_BLOGdesc14, data_BLOGcontent14],
    [data_BLOGdesc12, data_BLOGcontent12],
    [data_BLOGdesc10, data_BLOGcontent10],
    [data_BLOGdesc9, data_BLOGcontent91],
    [data_BLOGdesc6, data_BLOGcontent6],
    [data_BLOGdesc4, data_BLOGcontent4],
    [data_BLOGdesc3, data_BLOGcontent3],
    [data_BLOGdesc2, data_BLOGcontent2],
    [data_BLOGdesc1, data_BLOGcontent1]
];

const data_BTECHstruct = [
    [data_BLOGdesc15, data_BLOGcontent15],
    [data_BLOGdesc13, data_BLOGcontent13],
    [data_BLOGdesc11, data_BLOGcontent11],
//    [ data_BLOGdesc8, data_BLOGcontent8 ],
    [data_BLOGdesc7, data_BLOGcontent7],
    [data_BLOGdesc5, data_BLOGcontent5],
];

// maps are there to fetch remote data
const data_BNEWSmap = [
    //---------------------------------------
    {
        desc: "data_BNdesc14",
        content: [ "data_BNcontent14" ],
        progress: ["blog_entry14wait", "blog_entry14progress", "blog_entry14bar"],
    },
    {
        desc: "data_BNdesc12",
        content: [ "data_BNcontent12" ],
        progress: ["blog_entry12wait", "blog_entry12progress", "blog_entry12bar"],
    },
    {
        desc: "data_BNdesc10",
        content: [ "data_BNcontent10" ],
        progress: ["blog_entry10wait", "blog_entry10progress", "blog_entry10bar"],
    },
    {
        desc: "data_BNdesc9",
        content: [ "data_BNcontent91" ],
        progress: ["blog_entry9wait", "blog_entry9progress", "blog_entry9bar"],
    },
    {
        desc: "data_BNdesc6",
        content: [ "data_BNcontent6" ],
        progress: ["blog_entry6wait", "blog_entry6progress", "blog_entry6bar"],
    },
    {
        desc: "data_BNdesc4",
        content: [ "data_BNcontent4" ],
        progress: ["blog_entry4wait", "blog_entry4progress", "blog_entry4bar"],
    },
    {
        desc: "data_BNdesc3",
        content: [ "data_BNcontent3" ],
        progress: ["blog_entry3wait", "blog_entry3progress", "blog_entry3bar"],
    },
    {
        desc: "data_BNdesc2",
        content: [ "data_BNcontent2" ],
        progress: ["blog_entry2wait", "blog_entry2progress", "blog_entry2bar"],
    },
    {
        desc: "data_BNdesc1",
        content: [ "data_BNcontent1" ],
        progress: ["blog_entry1wait", "blog_entry1progress", "blog_entry1bar"],
    }
];

const data_BNEWSlasts = [
    "blog_entry14PHOTO",
    "blog_entry12PHOTO"
];

const data_BTECHmap = [
    //not a real hashmap, because the TECH blog contents get no remote contents
//    ["data_BTdesc16", "data_BTcontent16"],
    ["data_BTdesc15", "data_BTcontent15"],
    ["data_BTdesc13", "data_BTcontent13"],
    ["data_BTdesc11", "data_BTcontent11"],
//    [ "data_BTdesc8", "data_BTcontent8" ],
    ["data_BTdesc7", "data_BTcontent7"],
    ["data_BTdesc5", "data_BTcontent5"],
];

const data_BTECHlasts = [
//    "blog_entry16PHOTO",
    "blog_entry15PHOTO",
    "blog_entry13PHOTO"
];
