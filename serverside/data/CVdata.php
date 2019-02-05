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

/// @brief fills clientside/cards/CVcardpres.html
$data_CVinfo = array(
    "info_raisonsociale" =>
        [ "Software architecture, development and integration with 25+ years expertise"  ],
    "info_adresse" =>
        [ "Curd-Jürgens-Str 18, 81739 München" ],
    "info_email" =>
        [ "mailto:francois.pignalet@gmail.com", "francois.pignalet@gmail.com", ],
    "info_phonenum" =>
        [ "00491704868403" ],
    "info_geburstag" =>
        [ "06/07/1967" ]
);

/// @brief fills clientside/cards/CVcardskills.html
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

/// @brief fills clientside/cards/CVcardskills.html
$data_CVskillshead = array(
    "mskills_title" =>
        "Main skills"
);
/// @brief fills clientside/cards/CVcardskills.html
$data_CVskillsentries = array(
    array(
        "mskills_f1desc" =>
            [ "Java,  C,  C++,  Javascript  :" ],
        "mskills_f1level" =>
            [ "100%" ],
        "mskills_f1text" =>
            [ "CONFIRMED" ]
    ),
    array(
        "mskills_f2desc" =>
            [ "Php,  Python,  Angular,  React,  MFC,  Win32,  Asm 68K  :" ],
        "mskills_f2level" =>
            [ "75%" ],
        "mskills_f2text" =>
            [ "AVERAGE" ]
    ),
    array(
        "mskills_f3desc" =>
            [ ".NET,  J2EE,  OSGi,  WebLogic,  CORBA,  Asm x86  :" ],
        "mskills_f3level" =>
            [ "50%" ],
        "mskills_f3text" =>
            [ "LOW" ]
    ),
    array(
        "mskills_f4desc" =>
            ["Android,  Spring,  Asm PowerPC / ARM  :"],
        "mskills_f4level" =>
            ["25%"],
        "mskills_f4text" =>
            ["KNOWN"]
    )
);

/// @brief fills clientside/cards/CVcardlangs.html
$data_CVlanghead = array(
    "lang_title" =>
        "Languages"
);
/// @brief fills clientside/cards/CVcardlangs.html
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
            [ "C1" ]
    ),
    array(
        "lang_f3desc" =>
            [ "German" ],
        "lang_f3level" =>
            [ "60%" ],
        "lang_f3text" =>
            [ "B1~B2" ]
    )
);

// BOULOT ENTRY -----------------------------------------------------------------
/// @brief fills clientside/cards/CVgridhist.html
/// @brief handled by CLISIDE_CVCREATE::addHISTORYENTRY
$data_CVboulot0 = array(
    "boulotentry0date" =>
        [ "2018/11" ],
    "boulotentry0boite" =>
        [
            "http://www.pignalet.de",
            [
                "Starting as freelance"
            ]
        ],
    "boulotentry0desc" =>
        [ null ]
);

/// @brief fills clientside/cards/CVgridhist.html
/// @brief handled by CLISIDE_CVCREATE::addHISTORYSUBENTRY
$data_CVboulot01 = array(
    "boulotentry01item" =>
        [
            "Project:",
            "Professional website"
        ],
    "boulotentry01title" =>
        [ "Full-Stack developer" ],
    "boulotentry01content" =>
        [
            [ "Description", "Web development" ],
            [ "Environment", "Windows 10, Linus Debian 9, JetBrains (IntelliJIDEA, PhpStorm, PyCharm, Datagrid), Microservices, MySQL, WAMP Server, Apache2, Tomcat, Jira, Jenkins, Github" ],
            [ "Keypoints", "Javascript, Php, React, Angular, Java/Spring, Python/Django, SQL" ],
            [ "Methodology",
                [
                    "AGILE software development",
                    "continuous integration",
                    "Extreme programming"
                ]
            ]
        ]
);

// BOULOT ENTRY -----------------------------------------------------------------
/// @brief fills clientside/cards/CVgridhist.html
/// @brief handled by CLISIDE_CVCREATE::addHISTORYENTRY
$data_CVboulot1 = array(
    "boulotentry1date" =>
        [ "2015/10 - 2018/10" ],
    "boulotentry1boite" =>
        [
            "https://www.hensoldt.net/solutions/sea/identification-iff/",
            [
                "HENSOLDT GMBH Ottobrunn (former Airbus Defence)"
            ]
        ],
    "boulotentry1desc" =>
        [ null ]
);

/// @brief fills clientside/cards/CVgridhist.html
/// @brief handled by CLISIDE_CVCREATE::addHISTORYSUBENTRY
$data_CVboulot11 = array(
    "boulotentry11item" =>
        [
            "Products / team:",
            "IFF",
            "(until the end)"
        ],
    "boulotentry11title" =>
        [ "Software engineer / Full-Stack developer" ],
    "boulotentry11content" =>
        [
            [ "Description", "IFF interrogators, transponders and related tools, based on these products",
                [
                    [ "https://www.hensoldt.net/solutions/sea/identification-iff/military-mode-5-and-mode-s-interrogator-mssr-2000-i/", "MSSR" ],
                    [ "https://www.hensoldt.net/solutions/sea/identification-iff/ltr-400-mode-siff-lightweight-transponder/", "LTR" ]
                ]
            ],
            [ "Environment", "Windows 7, Linux Debian 9, IoT, Eclipse, JIRA, Jenkins, DOORS, SVN, various com links, ADS-B, Microservices", [
                "UDP/TCP IP",
                "RS-XXX",
                "CAN bus",
                [ "https://en.wikipedia.org/wiki/Automatic_dependent_surveillance_%E2%80%93_broadcast", "ADS-B" ],
                [ "https://de.moxa.com/product/Ethernet_Remote_IO.htm", "REST API for Network Controller" ],
                [ "https://de.moxa.com/product/IC_specialized_by_market.htm", "[Moxa] Embedded computer for military applications" ],
                [ "http://www.rugged.com/a172-rugged-compact-pc", "[Aitech] Embedded computer for military applications" ]
            ]
            ],
            [ "Keypoints", "Java, Javascript, Php, React / Node, GNU Autotools, Asm x86" ],
            [ "Methodology",
                [
                    "AGILE software development",
                    "continuous integration"
                ]
            ]
        ]
);

// BOULOT ENTRY -----------------------------------------------------------------
/// @brief fills clientside/cards/CVgridhist.html
/// @brief handled by CLISIDE_CVCREATE::addHISTORYENTRY
$data_CVboulot2 = array(
    "boulotentry2date" =>
        [ "2000/06 - 2015/09" ],
    "boulotentry2boite" =>
        [
            "https://www.hensoldt.net/solutions/sea/identification-iff/",
            [
                "Airbus Defence (former Cassidian / EADS Defence & Security)",
                "[mission for ALTEN until 2002/02]"
            ]
        ],
    "boulotentry2desc" =>
        [ null ]
);

/// @brief fills clientside/cards/CVgridhist.html
/// @brief handled by CLISIDE_CVCREATE::addHISTORYSUBENTRY
$data_CVboulot21 = array(
    "boulotentry21item" =>
        [
            "Products / team:",
            "IFF",
            "(until the end)"
        ],
    "boulotentry21title" =>
        [ "Software engineer" ],
    "boulotentry21content" =>
        [
            [ "Description", "IFF interrogators, transponders and related tools",
                [
                    [ "https://www.hensoldt.net/solutions/sea/identification-iff/short-range-identification-friend-foe-interrogator-shorad-iff-msr-1000/", "MSR1000" ],
                    [ "https://www.hensoldt.net/solutions/sea/identification-iff/iff-mode-4mode-5-crypto-test-bench-srpm-ng/", "SRPM" ],
                    [ "https://www.hensoldt.net/solutions/sea/identification-iff/military-mode-5-and-mode-s-interrogator-mssr-2000-i/", "... and other projects related with" ],
                ]
            ],
            [ "Environment", "Windows 7, Eclipse, JIRA, SVN, DOORS, various com links, ADS-B", [
                "UDP/TCP IP",
                "RS-XXX",
                [ "https://www.kontron.de/industries/defense", "[Kontron] Embedded computer for military applications" ]
            ]
            ],
            [ "Keypoints", "Java, C, Javascript, Angular, Asm x86" ],
            [ "Methodology",
                [
                    "AGILE software development"
                ]
            ]
        ]
);

/// @brief fills clientside/cards/CVgridhist.html
/// @brief handled by CLISIDE_CVCREATE::addHISTORYSUBENTRY
$data_CVboulot22 = array(
    "boulotentry22item" =>
        [
            "Project:",
            "CLA2000",
            "(1 year + 3 months)"
        ],
    "boulotentry22title" =>
        [ "Software engineer" ],
    "boulotentry22content" =>
        [
            [ "Description", "Air traffic control services" ],
            [ "Environment", "Linux, Eclipse, DOORS" ],
            [ "Keypoints", "Java, POJO" ],
            [ "Methodology", "company internal process (~V cycle)" ]
        ]
);

/// @brief fills clientside/cards/CVgridhist.html
/// @brief handled by CLISIDE_CVCREATE::addHISTORYSUBENTRY
$data_CVboulot23 = array(
    "boulotentry23item" =>
        [
            "Project:",
            "LMT / GCTAM",
            "(2 years + 4 months)"
        ],
    "boulotentry23title" =>
        [ "Software engineer" ],
    "boulotentry23content" =>
        [
            [ "Description", [
                "Supply flow handling in a military system",
                "Pure Java rich client based on a multithreaded 3 tier architecture"
            ]],
            [ "Environment", "Windows 7, Eclipse" ],
            [ "Keypoints", "Java, Java Beans" ],
            [ "Methodology", "Company internal process (~V cycle)" ]
        ]
);

/// @brief fills clientside/cards/CVgridhist.html
/// @brief handled by CLISIDE_CVCREATE::addHISTORYSUBENTRY
$data_CVboulot24 = array(
    "boulotentry24item" =>
        [
            "Project:",
            "MOIE Sic Terre",
            "(2 years + 7 months)"
        ],
    "boulotentry24title" =>
        [ "Software architect / Team leader (~6 developers)" ],
    "boulotentry24content" =>
        [
            [ "Description", "Message handling in a military communication system" ],
            [ "Environment", "Windows XP, Eclipse" ],
            [ "Keypoints", "Java, J2EE, EJB, POJO, OSGI, Python" ],
            [ "Methodology", "MDA Approach, Design Patterns" ]
        ]
);

/// @brief fills clientside/cards/CVgridhist.html
/// @brief handled by CLISIDE_CVCREATE::addHISTORYSUBENTRY
$data_CVboulot25 = array(
    "boulotentry25item" =>
        [
            "Project:",
            "Euromale",
            "(7 months)"
        ],
    "boulotentry25title" =>
        [ "Software architect / Team leader (~3 developers)" ],
    "boulotentry25content" =>
        [
            [ "Description", [
                "Drone video data real-time acquisition and handling",
                "Multithreaded 3 tier architecture",
                "Extensive use of design patterns: Creational (Abstract Factory / Builder / Factory method / Object pool / Singleton), Structural (Bridge / Facade), Behavioral (Command / Iterator / State), Concurrency (Scheduler) "
            ]],
            [ "Environment", "Windows XP, Web Services, BEA WebLogic, SQL db, Eclipse" ],
            [ "Keypoints", "Java, C++, .NET (C# / J#)" ],
            [ "Methodology", "MDA Approach, Design Patterns" ]
        ]
);

/// @brief fills clientside/cards/CVgridhist.html
/// @brief handled by CLISIDE_CVCREATE::addHISTORYSUBENTRY
$data_CVboulot26 = array(
    "boulotentry26item" =>
        [
            "Project:",
            "Helios 2",
            "(4 years + 5 months)",
            "[mission for ALTEN then EADS FLEXIMAGE]"
        ],
    "boulotentry26title" =>
        [ "Software architect / Team leader (~6 developers)" ],
    "boulotentry26content" =>
        [
            [ "Description", [
                "Geographic information with image management (2D & 3D) for mission preparation and intelligence",
                "Heavily multithreaded 3 tier architecture (specific Parallel handling layer / error management layer)",
                "Specific deployment platform (initially based on DOS/batch tools, then Emac/lisp tools))"
            ]],
            [ "Environment", "Windows NT, Unix/CDE, Microsoft MFC, Rational suite, Bounds Checker" ],
            [ "Keypoints", "C++, CORBA, ActiveX components" ],
            [ "Methodology", "Rational Unified Process, Design Patterns" ]
        ],
    "boulotentry27title" =>
        [ "Trainer in ALTEN Learning School (~15 attendees)" ],
    "boulotentry27content" =>
        [
            [ "Description", "Sessions about coding and unit testing best practises (~3 hours)" ]
        ]
);

// BOULOT ENTRY -----------------------------------------------------------------
/// @brief fills clientside/cards/CVgridhist.html
/// @brief handled by CLISIDE_CVCREATE::addHISTORYENTRY
$data_CVboulot3 = array(
    "boulotentry3date" =>
        [ "1999/10 - 2000/05" ],
    "boulotentry3boite" =>
        [
            "https://www.thalesgroup.com/fr/global/activities/transportation/urban-mobility/billettique-et-systemes-de-paiements",
            //          "https://www.thalesgroup.com/sites/default/files/database/d7/asset/document/transcity_ds400_bd_en.pdf"
            [
                "THALES group (former ALCATEL CGA Transport)",
                "[mission for ALTEN]"
            ]
        ],
    "boulotentry3desc" =>
        [ null, ]
);

/// @brief fills clientside/cards/CVgridhist.html
/// @brief handled by CLISIDE_CVCREATE::addHISTORYSUBENTRY
$data_CVboulot31 = array(
    "boulotentry31item" =>
        [
            "Project:",
            "Wayfarer",
            "(7 month)"
        ],
    "boulotentry31title" =>
        [ "Software architect / Team leader (~4 developers)" ],
    "boulotentry31content" =>
        [
            [ "Description", [
                "Real time embedded software inside bus ticketing console",
                "Virtual machine for 386EX microcontroller emulation"
            ]],
            [ "Environment", "Windows NT, Wayfarer BUS Ticketing Machine" ],
            [ "Keypoints", "C, C++, Visual Studio, Microsoft MFC, Asm x86 (386EX microcontroller)" ],
            [ "Methodology", [
                "V-Model",
                "static & dynamic modeling (UML Diagrams)",
            ]]
        ]
);

/// @brief fills clientside/cards/CVgridhist.html
/// @brief handled by CLISIDE_CVCREATE::addHISTORYSUBENTRY
$data_CVboulot32 = array(
    "boulotentry32item" =>
        [
            "Project:",
            "GART",
            "(1 month)"
        ],
    "boulotentry32title" =>
        [
            "Software developer"
        ],
    "boulotentry32content" =>
        [
            [ "Description", "Contactless smartcard demonstration application" ],
            [ "Environment", "Windows NT" ],
            [ "Keypoints", "C++, Visual Studio, Microsoft MFC, Serial RS-232 communication" ]
        ]
);

// BOULOT ENTRY -----------------------------------------------------------------
/// @brief fills clientside/cards/CVgridhist.html
/// @brief handled by CLISIDE_CVCREATE::addHISTORYENTRY
$data_CVboulot4 = array(
    "boulotentry4date" =>
        [
            "1998/07 - 1999/09"
        ],
    "boulotentry4boite" =>
        [
            "https://www.zodiacaerospace.com/en/products-services/aerosystems/data-systems/telemetry-ground-segment/equipment",
            [
                "ZODIAC (former INTERTECHNIQUE IN-SNEC)",
                "[mission for ALTEN]"
            ]
        ],
    "boulotentry4desc" =>
        [ null ]
);

/// @brief fills clientside/cards/CVgridhist.html
/// @brief handled by CLISIDE_CVCREATE::addHISTORYSUBENTRY
$data_CVboulot41 = array(
    "boulotentry41item" =>
        [
            "Project:",
            "EUMETSAT",
            "(1 year + 3 months)"
        ],
    "boulotentry41title" =>
        [ "Software developer" ],
    "boulotentry41content" =>
        [
            [ "Description", [
                "Regulation and transmission for Meteosat 2nd generationsatellite",
                "Heavily multithreaded data flow handling",
                "Real time data treatment",
                "Data encoding (Reed-Solomon, Pseudo-Randomization, Convolutional)"
            ]],
            [ "Environment", "Windows NT, DSP 56301" ],
            [ "Keypoints", "C, C++, Windows DDK, Asm DSP 56301" ],
            [ "Methodology", [
                "V-Model",
                "static & dynamic modeling (UML Diagrams)",
            ]]
        ]
);

// BOULOT ENTRY -----------------------------------------------------------------
/// @brief fills clientside/cards/CVgridhist.html
/// @brief handled by CLISIDE_CVCREATE::addHISTORYENTRY
$data_CVboulot5 = array(
    "boulotentry5date" =>
        [ "1996/01 - 1998/06" ],
    "boulotentry5boite" =>
        [
            null,
            [
                "ATELIER (Groupe Ka)"
            ]
        ],
    "boulotentry5desc" =>
        [ null ]
);

/// @brief fills clientside/cards/CVgridhist.html
/// @brief handled by CLISIDE_CVCREATE::addHISTORYSUBENTRY
$data_CVboulot51 = array(
    "boulotentry51item" =>
        [
            "Project:",
            "Essential Disk Utilities",
            "(9 months)"
        ],
    "boulotentry51title" =>
        [ "Software developer" ],
    "boulotentry51content" =>
        [
            [ "Description", [
                "VFAT disk utilities for Psion organizer (series 3 & 5): ",
                "Defragmentation",
                "Scandisk",
                "Smart Format,",
                "Disk Editor"
            ]],
            [ "Environment", "Psion EPOC(16/32)" ],
            [ "Keypoints", "C, C++" ],
            [ "Methodology", "Static model, Booch diagrams" ]
        ]
);

/// @brief fills clientside/cards/CVgridhist.html
/// @brief handled by CLISIDE_CVCREATE::addHISTORYSUBENTRY
$data_CVboulot52 = array(
    "boulotentry52item" =>
        [
            "Project:",
            "PsiTools",
            "(1 year)"
        ],
    "boulotentry52title" =>
        [ "Software developer" ],
    "boulotentry52content" =>
        [
            [ "Description", "Save and restore utilities for Psion organizer (series 3 & 5)" ],
            [ "Environment", "Mac OS (6/7), Psion EPOC(16/32)" ],
            [ "Keypoints", "C, C++" ]
        ]
);

/// @brief fills clientside/cards/CVgridhist.html
/// @brief handled by CLISIDE_CVCREATE::addHISTORYSUBENTRY
$data_CVboulot53 = array(
    "boulotentry53item" =>
        [
            "Project:",
            "Velvet",
            "(9 months)"
        ],
    "boulotentry53title" =>
        [ "Software developer" ],
    "boulotentry53content" =>
        [
            [ "Description", [
                "Asynchronous parts under interrupt (there was no real multitasking available in MacOS)",
                "Faxing (classe 1 & 2) software",
                "Device to device file transferts (X, Y and Z modem)"
            ]],
            [ "Environment", "Mac OS (6/7)" ],
            [ "Keypoints", "C, C++" ]
        ]
);

// BOULOT ENTRY -----------------------------------------------------------------
/// @brief fills clientside/cards/CVgridhist.html
/// @brief handled by CLISIDE_CVCREATE::addHISTORYENTRY
$data_CVboulot6 = array(
    "boulotentry6date" =>
        [ "1992/04 - 1995/12" ],
    "boulotentry6boite" =>
        [
            "https://de.4d.com/",
            [
                "4D - France & USA (former ACI)"
            ]
        ],
    "boulotentry6desc" =>
        [ null ]
);

/// @brief fills clientside/cards/CVgridhist.html
/// @brief handled by CLISIDE_CVCREATE::addHISTORYSUBENTRY
$data_CVboulot61 = array(
    "boulotentry61item" =>
        [
            "Product: ",
            "4th Dimension",
            "(1 year, with 6 month in USA)"
        ],
    "boulotentry61title" =>
        [ "Software developer" ],
    "boulotentry61content" =>
        [
            [ "Description",
                [
                    "Tools for 4th dimension (RDBMS IDE):",
                    [
                        "4D plugins. For example : smartcard handling",
                        "Platform Independant Extension Kit: tools and API for writing 4D plugins",
                        "4D Server connection API: samples & tests applications for writing 4D native clients"
                    ]
                ]
            ],
            [ "Environment", "Windows, Mac OS (6/7)" ],
            [ "Keypoints", "C, C++, Pascal, Asm 68K, Asm x86" ]
        ]
);

/// @brief fills clientside/cards/CVgridhist.html
/// @brief handled by CLISIDE_CVCREATE::addHISTORYSUBENTRY
$data_CVboulot62 = array(
    "boulotentry62item" =>
        [
            "Products: ",
            "4th Dimension / Object Master",
            "(2 years + 8 month)"
        ],
    "boulotentry62title" =>
        [ "IT Technician / Software developer" ],
    "boulotentry62content" =>
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
            [ "Environment", "Mac OS (6/7), Windows" ],
            [ "Keypoints", "4th Dimension, C, C++, Pascal, Modula2" ]
        ]
);

// BOULOT ENTRY -----------------------------------------------------------------
/// @brief fills clientside/cards/CVgridhist.html
/// @brief handled by CLISIDE_CVCREATE::addHISTORYENTRY
$data_CVboulot7 = array(
    "boulotentry7date" =>
        [ "1986/10 - 1992/03" ],
    "boulotentry7boite" =>
        [
            null,
            [
                "Centre d’Essai des Propulseurs de Saclay (DGA), GEET, LTC..."
            ]
        ],
    "boulotentry7desc" =>
        [ null ]
);

/// @brief fills clientside/cards/CVgridhist.html
/// @brief handled by CLISIDE_CVCREATE::addHISTORYSUBENTRY
$data_CVboulot71 = array(
    "boulotentry71item" =>
        [
            "General: ",
            "",
            "(5 years + 5 month)"
        ],
    "boulotentry71title" =>
        [ "Software developer" ],
    "boulotentry71content" =>
        [
            ["Description", "Database development. EDM."],
            ["Environment", "MS-DOS, Mac OS."],
            ["Keypoints", "Dbase2, 4th Dimension, DOS cmds"]
        ]
);

// BILDUNG -----------------------------------------------------------------
/// @brief fills clientside/cards/CVcardbildung.html
/// @brief handled by CLISIDE_CVCREATE::addHISTORYENTRY
$data_CVbildung1 = array(
    "edu_f1date" =>
        [ "During last years..." ],
    "edu_f1boite" =>
        null,
    "edu_f1desc" =>
        null
);

/// @brief fills clientside/cards/CVcardbildung.html
/// @brief handled by CLISIDE_CVCREATE::addHISTORYSUBENTRY
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

/// @brief fills clientside/cards/CVcardbildung.html
/// @brief handled by CLISIDE_CVCREATE::addHISTORYSUBENTRY
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

/// @brief fills clientside/cards/CVcardbildung.html
/// @brief handled by CLISIDE_CVCREATE::addHISTORYSUBENTRY
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
/// @brief fills clientside/cards/CVcardhobbyg.html
/// @brief handled by CLISIDE_CVCREATE::addHISTORYENTRY
$data_CVhobby1 = array(
    "loisirs_f1date" =>
        [ "Until now..." ],
    "loisirs_f1boite" =>
        null,
    "loisirs_f1desc" =>
        null,
);

/// @brief fills clientside/cards/CVcardhobbyg.html
/// @brief handled by CLISIDE_CVCREATE::addHISTORYSUBENTRY
$data_CVhobby11 = array(
    "loisirs_f11item" =>
        [ "Activity" ],
    "loisirs_f11title" =>
        [ "Sport" ],
    "loisirs_f11content" =>
        [
            [ "Martial arts", "Aikido, Boxing" ],
            [ "Running",
                [
                    [ "https://www.abavent.de/anmeldeservice/muenchenmarathon2018/ergebnisse#1_CF28C6", "2018/10/09: München marathon" ],
                ]
            ],
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

/// @brief fills clientside/cards/CVcardhobbyg.html
/// @brief handled by CLISIDE_CVCREATE::addHISTORYSUBENTRY
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

/// @brief fills clientside/cards/CVcardhobbyg.html
/// @brief handled by CLISIDE_CVCREATE::addHISTORYSUBENTRY
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

    "data_CVboulot2" => $data_CVboulot2,
    "data_CVboulot21" => $data_CVboulot21,
    "data_CVboulot22" => $data_CVboulot22,
    "data_CVboulot23" => $data_CVboulot23,
    "data_CVboulot24" => $data_CVboulot24,
    "data_CVboulot25" => $data_CVboulot25,
    "data_CVboulot26" => $data_CVboulot26,

    "data_CVboulot3" => $data_CVboulot3,
    "data_CVboulot31" => $data_CVboulot31,
    "data_CVboulot32" => $data_CVboulot32,

    "data_CVboulot4" => $data_CVboulot4,
    "data_CVboulot41" => $data_CVboulot41,

    "data_CVboulot5" => $data_CVboulot5,
    "data_CVboulot51" => $data_CVboulot51,
    "data_CVboulot52" => $data_CVboulot52,
    "data_CVboulot53" => $data_CVboulot53,

    "data_CVboulot6" => $data_CVboulot6,
    "data_CVboulot61" => $data_CVboulot61,
    "data_CVboulot62" => $data_CVboulot62,

    "data_CVboulot7" => $data_CVboulot7,
    "data_CVboulot71" => $data_CVboulot71,

    "data_CVbildung1" => $data_CVbildung1,
    "data_CVbildung11" => $data_CVbildung11,
    "data_CVbildung12" => $data_CVbildung12,
    "data_CVbildung13" => $data_CVbildung13,

    "data_CVhobby1" => $data_CVhobby1,
    "data_CVhobby11" => $data_CVhobby11,
    "data_CVhobby12" => $data_CVhobby12,
    "data_CVhobby13" => $data_CVhobby13

);
