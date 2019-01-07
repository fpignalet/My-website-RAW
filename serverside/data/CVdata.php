<?php
/**
 * Created by PhpStorm.
 * User: franc
 * Date: 12.10.2018
 * Time: 16:08
 */

//-----------------------------------------------------------------------------------------------------------
/// @brief
$data_CVloadsleep = 100000;

//-----------------------------------------------------------------------------------------------------------
/// @brief
$data_CVtitle = array(
    "moi_photo" =>
        "images/P_20160208_183649_BF.jpg",
    "moi_name" =>
        "Francois Pignalet"
);

/// @brief
$data_CVinfo = array(
    "info_raisonsociale" =>
        [ "Software architecture, development and integration with 25+ years expertise"  ],
    "info_adresse" =>
        [ "Curd-Jürgens-Str 18, 81739 München" ],
    "info_email" =>
        [ "mailto:francois.pignalet@gmail.com", "francois.pignalet@gmail.com", ],
    "info_phonenum" =>
        [ "00491704868403" ]
);

/// @brief
$data_CVexperience = array(
    "exp_title" =>
        "Areas of expertise",
    "exp_content" =>
        [
            "Maintainable and documented code writing... Clean Code!",
            "Application architecture (Object Oriented & procedural) from specification",
            "Heavily threaded architectures specialist",
            "Complex refactoring and debugging",
            "Full stack developer",
            "AGILE software development"
        ]
);

/// @brief
$data_CVskillshead = array(
    "mskills_title" =>
        "Main skills"
);
/// @brief
$data_CVskillsentries = array(
    array(
        "mskills_f1desc" =>
            [ "Java,  C,  C++,  Javascript" ],
        "mskills_f1level" =>
            [ "100%" ],
        "mskills_f1text" =>
            [ "CONFIRMED" ]
    ),
    array(
        "mskills_f2desc" =>
            [ "Php,  MFC,  Win32,  Asm 68K" ],
        "mskills_f2level" =>
            [ "75%" ],
        "mskills_f2text" =>
            [ "AVERAGE" ]
    ),
    array(
        "mskills_f3desc" =>
            [ "Python,  .NET,  WebLogic,  CORBA,  Asm x86" ],
        "mskills_f3level" =>
            [ "50%" ],
        "mskills_f3text" =>
            [ "LOW" ]
    ),
    array(
        "mskills_f4desc" =>
            ["Android,  J2EE,  OSGi,  Asm PowerPC / ARM"],
        "mskills_f4level" =>
            ["25%"],
        "mskills_f4text" =>
            ["KNOWN"]
    )
);

/// @brief
$data_CVlanghead = array(
    "lang_title" =>
        "Languages"
);
/// @brief
$data_CVlangentries = array(
    array(
        "lang_f1desc" =>
            [ "French" ],
        "lang_f1level" =>
            [ "100%" ],
        "lang_f1text" =>
            [ "100% (MOTHER TONGUE)" ]
    ),
    array(
        "lang_f2desc" =>
            [ "English" ],
        "lang_f2level" =>
            [ "85%" ],
        "lang_f2text" =>
            [ "85% (C1)" ]
    ),
    array(
        "lang_f3desc" =>
            [ "German" ],
        "lang_f3level" =>
            [ "60%" ],
        "lang_f3text" =>
            [ "60% (B1~B2)" ]
    )
);

// BOULOT ENTRY -----------------------------------------------------------------
/// @brief
$data_CVboulot0 = array(
    "boulotentry0date" =>
        [ "2018/11" ],
    "boulotentry0boite" =>
        [
            null,
            [
                "Starting as freelance"
            ]
        ],
    "boulotentry0desc" =>
        [ null ]
);

/// @brief
$data_CVboulot01 = array(
    "boulotentry0item" =>
        [
            "Project:",
            "My website"
        ],
    "boulotentry0title" =>
        [ "Software engineer" ],
    "boulotentry0content" =>
        [
            [ "Description", "Web development to improve my web technologies mastering" ],
            [ "Environment", "Different web browsers, JetBrains PhpStorm, JetBrains PyCharm" ],
            [ "Keypoints", "Javascript, Php, React, Python, Angular, Django, Jira, Jenkins" ],
            [ "Methodology", "AGILE, Extreme programming, continuous integration" ]
        ]
);

// BOULOT ENTRY -----------------------------------------------------------------
/// @brief
$data_CVboulot1 = array(
    "boulotentry1date" =>
        [ "2000/06 - 2018/10" ],
    "boulotentry1boite" =>
        [
            "https://www.hensoldt.net/solutions/sea/identification-iff/",
            [
                "HENSOLDT (former Airbus Defence / EADS Defence & Security)"
            ]
        ],
    "boulotentry1desc" =>
        [ null ]
);

/// @brief
$data_CVboulot11 = array(
    "boulotentry1item" =>
        [
            "Products / team:",
            "IFF",
            "(until the end)"
        ],
    "boulotentry1title" =>
        [ "Software engineer" ],
    "boulotentry1content" =>
        [
            [ "Description", "IFF interrogators, transponders and related tools. ADS-B parser",
                [
                    [ "https://www.hensoldt.net/solutions/sea/identification-iff/short-range-identification-friend-foe-interrogator-shorad-iff-msr-1000/", "MSR1000" ],
                    [ "https://www.hensoldt.net/solutions/sea/identification-iff/iff-mode-4mode-5-crypto-test-bench-srpm-ng/", "SRPM" ],
                    [ "https://en.wikipedia.org/wiki/Automatic_dependent_surveillance_%E2%80%93_broadcast", "ADS-B" ]
                ]
            ],
            [ "Environment", "Linux Debian, Windows, ARM str711, IoT, Eclipse, various com links:", [
                "UDP/TCP IP",
                "RS-XXX",
                "CAN bus"
            ]
            ],
            [ "Keypoints", "Java, C, Javascript, Php" ],
            [ "Methodology",
                [
                    "Company internal process (~V cycle)",
                    "AGILE software development"
                ]
            ]
        ]
);

/// @brief
$data_CVboulot12 = array(
    "boulotentry2item" =>
        [
            "Project:",
            "CLA2000",
            "(1 year + 3 months)"
        ],
    "boulotentry2title" =>
        [ "Software engineer" ],
    "boulotentry2content" =>
        [
            [ "Description", "Air traffic control services" ],
            [ "Environment", "Linux, Java components, Eclipse" ],
            [ "Keypoints", "Java" ],
            [ "Methodology", "company internal process (~V cycle)" ]
        ]
);

/// @brief
$data_CVboulot13 = array(
    "boulotentry3item" =>
        [
            "Project:",
            "LMT / GCTAM",
            "(2 years + 4 months)"
        ],
    "boulotentry3title" =>
        [ "Software engineer" ],
    "boulotentry3content" =>
        [
            [ "Description", [
                "Supply flow handling in a military system",
                "Multithreaded 3 tier architecture"
            ]],
            [ "Environment", "Windows, Eclipse" ],
            [ "Keypoints", "Java" ],
            [ "Methodology", "Company internal process (~V cycle)" ]
        ]
);

/// @brief
$data_CVboulot14 = array(
    "boulotentry4item" =>
        [
            "Project:",
            "MOIE Sic Terre",
            "(2 years + 7 months)"
        ],
    "boulotentry4title" =>
        [ "Software architect / Team leader (~6 developers)" ],
    "boulotentry4content" =>
        [
            [ "Description", "Message handling in a military communication system" ],
            [ "Environment", "Windows, OSGI components, Eclipse" ],
            [ "Keypoints", "Java, Python" ],
            [ "Methodology", "MDA Approach (UML), Design Patterns" ]
        ]
);

/// @brief
$data_CVboulot15 = array(
    "boulotentry5item" =>
        [
            "Project:",
            "Euromale",
            "(7 months)"
        ],
    "boulotentry5title" =>
        [ "Software architect / Team leader (~3 developers)" ],
    "boulotentry5content" =>
        [
            [ "Description", [
                "Drone video data real-time acquisition and handling",
                "Multithreaded 3 tier architecture"
            ]],
            [ "Environment", "Windows, Web Services, BEA WebLogic, SQL db, Eclipse" ],
            [ "Keypoints", "Java, C++, .NET (C# / J#)" ],
            [ "Methodology", "MDA Approach (UML), Design Patterns" ]
        ]
);

/// @brief
$data_CVboulot16 = array(
    "boulotentry6item" =>
        [
            "Project:",
            "Helios 2",
            "(4 years + 5 months)",
            "[mission for ALTEN then EADS FLEXIMAGE]"
        ],
    "boulotentry6title" =>
        [ "Software architect / Team leader (~6 developers)" ],
    "boulotentry6content" =>
        [
            [ "Description", [
                "Image management (2D & 3D) for geographic information and intelligence. ",
                "Multithreaded 3 tier architecture, ",
                "Parallel handling layer,",
                "Error management layer",
                "Deployment platform"
            ]],
            [ "Environment", "Windows, Unix/CDE, MFC, CORBA, Rational suite, Bounds Checker" ],
            [ "Keypoints", "C++" ],
            [ "Methodology", "Rational Unified Process (UML), Design Patterns" ]
        ],
    "boulotentry7title" =>
        [ "Trainer in ALTEN Learning School (~15 attendees)" ],
    "boulotentry7content" =>
        [
            [ "Description", "Sessions about coding and unit testing best practises (~3 hours)" ]
        ]
);

// BOULOT ENTRY -----------------------------------------------------------------
/// @brief
$data_CVboulot2 = array(
    "boulotentry8date" =>
        [ "1999/10 - 2000/05" ],
    "boulotentry8boite" =>
        [
            "https://www.thalesgroup.com/fr/global/activities/transportation/urban-mobility/billettique-et-systemes-de-paiements",
            //          "https://www.thalesgroup.com/sites/default/files/database/d7/asset/document/transcity_ds400_bd_en.pdf"
            [
                "ALCATEL CGA Transport (now Thales group)",
                "[mission for ALTEN]"
            ]
        ],
    "boulotentry8desc" =>
        [ null, ]
);

/// @brief
$data_CVboulot21 = array(
    "boulotentry8item" =>
        [
            "Project:",
            "Wayfarer",
            "(7 month)"
        ],
    "boulotentry8title" =>
        [ "Software architect / Team leader (~4 developers)" ],
    "boulotentry8content" =>
        [
            [ "Description", [
                "Real time embedded software inside bus ticketing console",
                "Virtual machine for 386EX microcontroller emulation"
            ]],
            [ "Environment", "Windows, Pupitre Wayfarer" ],
            [ "Keypoints", "C, C++, Asm x86" ],
            [ "Methodology", "V-Model, UML static & dynamic modeling" ]
        ]
);

/// @brief
$data_CVboulot22 = array(
    "boulotentry9item" =>
        [
            "Project:",
            "GART",
            "(1 month)"
        ],
    "boulotentry9title" =>
        [
            "Software developer"
        ],
    "boulotentry9content" =>
        [
            [ "Description", "Contactless smartcard demonstration application" ],
            [ "Environment", "Visual Studio, MFC, Windows" ],
            [ "Keypoints", "C++, Serial RS-232 communication" ]
        ]
);

// BOULOT ENTRY -----------------------------------------------------------------
/// @brief
$data_CVboulot3 = array(
    "boulotentry10date" =>
        [
            "1998/07 - 1999/09"
        ],
    "boulotentry10boite" =>
        [
            "https://www.zodiacaerospace.com/en/products-services/aerosystems/data-systems/telemetry-ground-segment/equipment",
            [
                "INTERTECHNIQUE IN-SNEC (now Zodiac)",
                "[mission for ALTEN]"
            ]
        ],
    "boulotentry10desc" =>
        [ null ]
);

/// @brief
$data_CVboulot31 = array(
    "boulotentry10item" =>
        [
            "Project:",
            "EUMETSAT",
            "(1 year + 3 months)"
        ],
    "boulotentry10title" =>
        [ "Software developer" ],
    "boulotentry10content" =>
        [
            [ "Description", [
                "Regulation and transmission for Meteosat 2nd generationsatellite",
                "Heavily multithreaded data flow handling",
                "Real time data treatment",
                "Data encoding (Reed-Solomon, Pseudo-Randomization, Convolutional)"
            ]],
            [ "Environment", "Windows DDK, DSP 56301 modulator firmware" ],
            [ "Keypoints", "C, C++, Asm DSP 56301" ],
            [ "Methodology", [
                "V-Model",
                "UML static & dynamic modeling"
            ]]
        ]
);

// BOULOT ENTRY -----------------------------------------------------------------
/// @brief
$data_CVboulot4 = array(
    "boulotentry11date" =>
        [ "1996/01 - 1998/06" ],
    "boulotentry11boite" =>
        [
            null,
            [
                "ATELIER (Groupe Ka)"
            ]
        ],
    "boulotentry11desc" =>
        [ null ]
);

$data_CVboulot41 = array(
    "boulotentry11item" =>
        [
            "Project:",
            "Essential Disk Utilities",
            "(9 months)"
        ],
    "boulotentry11title" =>
        [ "Software developer" ],
    "boulotentry11content" =>
        [
            [ "Description", [
                "VFAT disk utilities for Psion organizer (series 3 & 5): ",
                "Defragmentation",
                "Scandisk",
                "Smart Format,",
                "Disk Editor"
            ]],
            [ "Environment", "Psion EPOC 16 & 32" ],
            [ "Keypoints", "C, C++" ],
            [ "Methodology", "Static model, Booch diagrams" ]
        ]
);

/// @brief
$data_CVboulot42 = array(
    "boulotentry12item" =>
        [
            "Project:",
            "PsiTools",
            "(1 year)"
        ],
    "boulotentry12title" =>
        [ "Software developer" ],
    "boulotentry12content" =>
        [
            [ "Description", "Save and restore utilities for Psion organizer (series 3 & 5) on Macintosh" ],
            [ "Environment", "Mac OS, Psion EPOC 16 & 32" ],
            [ "Keypoints", "C, C++" ]
        ]
);

/// @brief
$data_CVboulot43 = array(
    "boulotentry13item" =>
        [
            "Project:",
            "Velvet",
            "(9 months)"
        ],
    "boulotentry13title" =>
        [ "Software developer" ],
    "boulotentry13content" =>
        [
            [ "Description", [
                "Faxing (classe 1 & 2) software",
                "Asynchronous parts under interrupt (no real multitasking available)",
                "Device to device file transferts (X, Y and Z modem)"
            ]],
            [ "Environment", "Mac OS" ],
            [ "Keypoints", "C, C++" ]
        ]
);

// BOULOT ENTRY -----------------------------------------------------------------
/// @brief
$data_CVboulot5 = array(
    "boulotentry14date" =>
        [ "1992/04 - 1995/12" ],
    "boulotentry14boite" =>
        [
            "http://www.4d.com/de/",
            [
                "ACI - France & USA (now 4D)"
            ]
        ],
    "boulotentry14desc" =>
        [ null ]
);

/// @brief
$data_CVboulot51 = array(
    "boulotentry14item" =>
        [
            "Product: ",
            "4th Dimension",
            "(1 year, with 6 month in USA)"
        ],
    "boulotentry14title" =>
        [ "Software developer" ],
    "boulotentry14content" =>
        [
            [ "Description",
                [
                    "Tools for 4th dimension (RDBMS IDE):",
                    [
                        "Platform Independant Extension Kit: tools and API for writing 4D plugins.",
                        "4D Server connection API: samples & tests applications",
                        "4D plugins. For example : smartcard handling."
                    ]
                ]
            ],
            [ "Environment", "Windows, Mac OS." ],
            [ "Keypoints", "C, C++, Pascal, Asm 68K, Asm x86" ]
        ]
);

/// @brief
$data_CVboulot52 = array(
    "boulotentry15item" =>
        [
            "Products: ",
            "4th Dimension / Object Master",
            "(2 years + 8 month)"
        ],
    "boulotentry15title" =>
        [ "IT Technician / Software developer" ],
    "boulotentry15content" =>
        [
            [ "Description",
                [
                    "4th dimension (RDBMS IDE) hotline",
                    "Object Master (C/C++/Pascal/Modula2 IDE) hotline",
                    [
                        "Development problems handling",
                        "Samples and tools writing"
                    ]
                ]
            ],
            [ "Environment", "Mac OS, Windows" ],
            [ "Keypoints", "4th Dimension, C, C++, Pascal, Modula2" ]
        ]
);

// BOULOT ENTRY -----------------------------------------------------------------
/// @brief
$data_CVboulot6 = array(
    "boulotentry16date" =>
        [ "1986/10 - 1992/03" ],
    "boulotentry16boite" =>
        [
            null,
            [
                "Centre d’Essai des Propulseurs de Saclay (DGA), GEET, LTC..."
            ]
        ],
    "boulotentry16desc" =>
        [ null ]
);

/// @brief
$data_CVboulot61 = array(
    "boulotentry16item" =>
        [
            "General: ",
            null,
            "(5 years + 5 month)"
        ],
    "boulotentry16title" =>
        [ "Software developer" ],
    "boulotentry16content" =>
        [
            ["Description", "Database development. EDM."],
            ["Environment", "MS-DOS, Mac OS."],
            ["Keypoints", "Dbase2, 4th Dimension."]
        ]
);

// BILDUNG -----------------------------------------------------------------
/// @brief
$data_CVbildung1 = array(
    "edu_f1date" =>
        [ "During last years..." ],
    "edu_f1boite" =>
        null,
    "edu_f1desc" =>
        null
);

/// @brief
$data_CVbildung11 = array(
    "edu_f11item" =>
        [ "2017" ],
    "edu_f11title" =>
        [ "Training" ],
    "edu_f11content" =>
        [
            [
                "",
                "DO-278 Software Standards",
                [
                    [ "https://en.wikipedia.org/wiki/DO-178C", "Wikipedia..." ]
                ]
            ]
        ]
);

/// @brief
$data_CVbildung12 = array(
    "edu_f12item" =>
        [ "2004" ],
    "edu_f12title" =>
        [ "Training" ],
    "edu_f12content" =>
        [
            [
                "",
                "BEA WebLogic Integration",
                [
                    [ "https://docs.oracle.com/cd/E13222_01/wls/docs90/index.php", "BEA WebLogic" ]
                ]
            ]
        ]
);

/// @brief
$data_CVbildung13 = array(
    "edu_f13item" =>
        [ "1985" ],
    "edu_f13title" =>
        [ "Diploma" ],
    "edu_f13content" =>
        [
            [
                "",
                "Brevet de Formation Technique Aéronautique",
                [
                    [ "https://www.aerocampus-aquitaine.com/en/home/", "Aerocampus" ]
                ]
            ]
        ]
);

// LOISIRS -----------------------------------------------------------------
/// @brief
$data_CVhobby1 = array(
    "loisirs_f1date" =>
        [ "Until now..." ],
    "loisirs_f1boite" =>
        null,
    "loisirs_f1desc" =>
        null,
);

/// @brief
$data_CVhobby11 = array(
    "loisirs_f11item" =>
        [ "Activity" ],
    "loisirs_f11title" =>
        [ "Sport" ],
    "loisirs_f11content" =>
        [
            [ "Martial arts", "Aikido, Boxing" ],
            [ "Running", "Marathon" ],
            [ "Triathlon",
                [
                    [ "https://www.regensburger-triathlon.de/triathlon", "2018/08/05: Regensburg, Olympische Distanz" ],
                    [ "https://www.zeitgemaess.info/results.php?accesscode=201808051&konkurrenz=900002", "Ergebnisse" ]
                ],
                [
                    [ "http://www.tegernsee-triathlon.de/", "2018/07/01: Tegernsee, Olympische Distanz" ],
                    [ "https://my1.raceresult.com/91482/results?lang=de#1_0FC775", "Ergebnisse" ]
                ]
            ]
        ]
);

/// @brief
$data_CVhobby12 = array(
    "loisirs_f12item" =>
        [ "Activity" ],
    "loisirs_f12title" =>
        [ "Music" ],
    "loisirs_f12content" =>
        [
            [ "Guitar", "classical & metal" ],
            [ "Bass guitar", "\"DFE\" (studies end cycle) 1st prize in 2011",
                [
                    [ "http://www.darizmusic.com/", "Francis Darizcuren School" ]
                ]
            ]
        ]
);

/// @brief
$data_CVhobby13 = array(
    "loisirs_f13item" =>
        [ "Interests" ],
    "loisirs_f13title" =>
        [ "Various" ],
    "loisirs_f13content" =>
        [
            [ "", "Travelling" ],
            [ "", "Gastronomic restaurants" ],
            [ "", "Classical & metal music" ],
            [ "", "Boardgaming & Role Playing games (oldschool way)" ],
            [ "", "To be continued..." ]
        ]
);

/// @brief
$data_CVmap = array(

    "data_CVtitle" => $data_CVtitle,
    "data_CVinfo" => $data_CVinfo,
    "data_CVexperience" => $data_CVexperience,
    "data_CVskillshead" => $data_CVskillshead,
    "data_CVskillsentries" => $data_CVskillsentries,
    "data_CVlanghead" => $data_CVlanghead,
    "data_CVlangentries" => $data_CVlangentries,

    "data_CVboulot0" => $data_CVboulot0,
    "data_CVboulot01" => $data_CVboulot01,

    "data_CVboulot1" => $data_CVboulot1,
    "data_CVboulot11" => $data_CVboulot11,
    "data_CVboulot12" => $data_CVboulot12,
    "data_CVboulot13" => $data_CVboulot13,
    "data_CVboulot14" => $data_CVboulot14,
    "data_CVboulot15" => $data_CVboulot15,
    "data_CVboulot16" => $data_CVboulot16,

    "data_CVboulot2" => $data_CVboulot2,
    "data_CVboulot21" => $data_CVboulot21,
    "data_CVboulot22" => $data_CVboulot22,

    "data_CVboulot3" => $data_CVboulot3,
    "data_CVboulot31" => $data_CVboulot31,

    "data_CVboulot4" => $data_CVboulot4,
    "data_CVboulot41" => $data_CVboulot41,
    "data_CVboulot42" => $data_CVboulot42,
    "data_CVboulot43" => $data_CVboulot43,

    "data_CVboulot5" => $data_CVboulot5,
    "data_CVboulot51" => $data_CVboulot51,
    "data_CVboulot52" => $data_CVboulot52,

    "data_CVboulot6" => $data_CVboulot6,
    "data_CVboulot61" => $data_CVboulot61,

    "data_CVbildung1" => $data_CVbildung1,
    "data_CVbildung11" => $data_CVbildung11,
    "data_CVbildung12" => $data_CVbildung12,
    "data_CVbildung13" => $data_CVbildung13,

    "data_CVhobby1" => $data_CVhobby1,
    "data_CVhobby11" => $data_CVhobby11,
    "data_CVhobby12" => $data_CVhobby12,
    "data_CVhobby13" => $data_CVhobby13

);
