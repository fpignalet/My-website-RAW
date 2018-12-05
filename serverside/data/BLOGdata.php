<?php
/**
 * Created by PhpStorm.
 * User: franc
 * Date: 19.10.2018
 * Time: 11:21
 */

//-----------------------------------------------------------------------------------------------------------
$data_BNloadsleep = 100000;

//-----------------------------------------------------------------------------------------------------------
$data_BTdesc15 = array(

    "blog_entry15TITLE" =>
        "Today's sandbox",

    "blog_entry15DATE" => [
        "December 3, 2018",
        "\"A little break\""
    ]

);

$data_BTcontent15 = array(

    "blog_entry15CONTENT" => [
        //TECH BLOG, no dynamic content

    ]

);

//-----------------------------------------------------------------------------------------------------------
$data_BNdesc14 = array(

    "blog_entry14TITLE" =>
        "Current status of this website project",

    "blog_entry14DATE" => [
        "November 30, 2018",
        "An important step"
    ]

);

$data_BNcontent14 = array(

    "blog_entry14CONTENT" => [
        [ "ul", [
            "I master now remote communication with server. Almost all data are delivered to the client through XMLHttpRequest",
            "(\"almost\" because there is still some exceptions in some places, like blog entries photos which are still hard coded in html",
            "I know that it's possible to optimize client/server communication by asking for the whole data stuff only once, but I want to show something which uses total asynchronous loading, displaying progress bars and getting everything in the right order at the end"
        ]],

    ]

);

//-----------------------------------------------------------------------------------------------------------
$data_BTdesc13 = array(

    "blog_entry13TITLE" =>
        "Today's sandbox",

    "blog_entry13DATE" => [
        "November 28, 2018",
        "Foolin' around with Treeviews"
    ]

);

$data_BTcontent13 = array(

    "blog_entry13CONTENT" => [
        //TECH BLOG, no dynamic content

    ]

);

//-----------------------------------------------------------------------------------------------------------
$data_BNdesc12 = array(

    "blog_entry12TITLE" =>
        "First full publication",

    "blog_entry12DATE" => [
        "November 19, 2018",
        "Puttin' everything in GitHub..."
    ]

);

$data_BNcontent12 = array(

    "blog_entry12CONTENT" => [
        [ "p", [
            "Here's my Website implementation ",
            "Source code is available there: "
        ]],
        [ "ul", [
            [ "https://github.com/fpignalet/My-website-RAW", "sources on GitHub" ]
        ]],

    ]

);

//-----------------------------------------------------------------------------------------------------------
$data_BTdesc11 = array(

    "blog_entry11TITLE" =>
        "Some React",

    "blog_entry11DATE" => [
        "November 15, 2018",
        "Tests with React"
    ]

);

$data_BTcontent11 = array(

    "blog_entry11CONTENT" => [
        //TECH BLOG, no dynamic content

    ]

);

//-----------------------------------------------------------------------------------------------------------
$data_BNdesc10 = array(

    "blog_entry10TITLE" =>
        "New version",

    "blog_entry10DATE" => [
        "Oktober 24, 2018",
        "Continuously improving..."
    ]

);
$data_BNcontent10 = array(

    "blog_entry10CONTENT" => [
        [ "p", [
            "A BIGGER update "
        ]],

        [ "ul", [
            "More refactoring: slowly transferring everything in classes to be fully Object Oriented",
            "Progress bars for a fully asynchronous behavior,",
            "Again, lots of improvements..."

        ]]

    ]

);

//-----------------------------------------------------------------------------------------------------------
$data_BNdesc9 = array(

    "blog_entry9TITLE" =>
        "Last news / Letzte Nachrichten",

    "blog_entry9DATE" => [
        "Oktober 15, 2018",
        "Big update... and lots of fun"
    ]

);
$data_BNcontent91 = array(

    "blog_entry91CONTENT" => [
        [ "p", [
            "A big update "
        ]],

        [ "ul", [
            "Now the refactoring of my Resume/CV is over. Data are no longer stuck directly inside html code, but stored in a specific file. I do an Httprequest to get the content of the file from the server. " .
            "Next steps are to finish normalize data format (the javascript parsing code is a little bit too hectic) Then apply the same refactoring to the whole site, and finally optimize data loading (ther is certainly too many Http requests)"

        ]],

        [ "p", [
            "Dann, ein hektisches Wochenende: München Marathon, noch einmal :) "
        ]],

        [ "p", [
            "(English version) "
        ]],

        [ "ul", [
            "This year it was perfectly OK, a real pleasure during the whole run. So 3h33 in the end, and most important of all is that i'm today not totally exhausted",

            "When you say make \"volume\" before a marathon, it's exactly like earning miles with the train or the plane. After a certain amount, we get a discount for the next trips.",
            "The long/slow training (until “soft” FC threshold) allows to go to the foot of the wall, and learn to go along. It's the mechanical preparation. The body must understand that after 42 * 2/3, yes it's hard but everything is under control, it's normal. Provided you have the correct pace, obviously. It allows to prepare the first half-marathon which will be at a pace a little lower.",
            "The fast/short training sessions (with intervals) allows to prepare the second half-marathon, get resistance, work / improve the VMA. This is the physiological preparation.",
            "The “between” training sessions (until “hard” FC threshold) allows to make a link between the other two types of training sessions. It allows to prepare the transition between the two half-marathon. This is the part of the training that allows you to learn to \"jump\" over the wall, finding an easy passage.",
            "Do not imagine the marathon as a monolith, a cliff to approach directly from the front, but like several races, at least 2 half-marathon, maybe 4 * 10k. During the first semi it is necessary to heat the mechanics, it is the endurance part, it is necessary to arrive fresh at the beginning of the 2nd half-marathon. Then it is necessary to be able to benefit from this preparation and to initiate also the physiological effort. It must be possible to start the cardio, which must have been prepared with the fast outputs."
        ]],

        [ "p", [
            "(Deutsch Version)"
        ]],

        [ "ul", [
            "Wenn Sie vor einem Marathon \"Volumen\" machen sagen, ist das genau so, wie wenn Sie mit dem Zug oder dem Flugzeug Meilen kriegen. Ab einem bestimmten Betrag erhalten wir einen Rabatt für die nächsten Fahrten.",
            "Das langsame / schleppend Trainingssitzungen (bis zur \"weichen\" FC-Schwelle) erlaubt es, zum Fuß der Wand zu gehen und zu lernen, mitzukommen. Es ist die mechanische Vorbereitung. Der Körper muss verstehen, dass nach 42k * 2/3 ja, es ist hart, aber alles ist unter Kontrolle, es ist normal. Vorausgesetzt, Sie haben das richtige Tempo, offensichtlich. Es erlaubt, den ersten Halbmarathon vorzubereiten, der etwas langsamer gelaufen wird.",
            "Die schnellen / kurzen Trainingssitzungen (mit Intervallen) erlauben, das zweite Halbmarathon vorzubereiten, Widerstand zu erhalten, den VMA zu bearbeiten / zu verbessern. Dies ist die physiologische Vorbereitung.",
            "Die „zwischen“ Trainingssitzungen (bis zur \"harten\" FC-Schwelle) ermöglichen es, eine Verbindung zwischen den beiden anderen Arten von Trainingssitzungen herzustellen. Es ermöglicht den Übergang zwischen den beiden Halbmarathons vorzubereiten. Dies ist der Teil des Trainings, mit dem Sie lernen können, über die Wand zu \"springen\", indem Sie eine \"einfache Passage\" finden.",
            "Stellen Sie sich den Marathon nicht als Monolith vor, eine Klippe, die sich direkt von vorne nähert, sondern wie mehrere Rennen, mindestens 2 Halbmarathon, vielleicht 4 * 10k. Während des ersten Halbmarathon ist es notwendig, die Mechanik zu erhitzen, es ist der Ausdauerteil, es ist notwendig, zu Beginn des 2. Halbmarathon frisch anzukommen. Dann ist es notwendig, von dieser Vorbereitung zu profitieren und auch die physiologische Anstrengung einzuleiten. Es muss möglich sein, die Cardio-Funktion zu starten, das mit den schnellen Trainingssitzungen vorbereitet sein muss."

        ]]
    ]

);

//-----------------------------------------------------------------------------------------------------------
$data_BTdesc8 = array(
    "blog_entry8TITLE" => "",
    "blog_entry8DATE" => []
);
$data_BTcontent8 = array(
    "blog_entry8CONTENT" => []
);

//-----------------------------------------------------------------------------------------------------------
$data_BTdesc7 = array(

    "blog_entry7TITLE" =>
        "Today's sandbox",

    "blog_entry7DATE" => [
        "August 24, 2018",
        "Trying different things with angular.js"
    ]

);
$data_BTcontent7 = array(
    "blog_entry7CONTENT" => [
        //TECH BLOG, no dynamic content
    ]

);

//-----------------------------------------------------------------------------------------------------------
$data_BNdesc6 = array(

    "blog_entry6TITLE" =>
        "Jetzt aktualisieren",

    "blog_entry6DATE" => [
        "August 15, 2018",
        ""
    ]

);
$data_BNcontent6 = array(
    "blog_entry6CONTENT" => [
        [ "p", [
            "Jetzt bin ich wirklich triathlete:"
        ]],

        [ "ul", [
            [ "http://www.tegernsee-triathlon.de/", "2018/07/01: Tegernsee, Olympische Distanz" ],
            [ "https://my1.raceresult.com/91482/results?lang=de#1_0FC775", "Ergebnisse" ],
        ]],
        [ "ul", [
            [ "http://www.regensburger-triathlon.de/triathlon", "2018/08/05: Regensburg, Olympische Distanz" ],
            [ "https://www.zeitgemaess.info/results.php?accesscode=201808051&konkurrenz=900002", "Ergebnisse" ],
        ]],

        [ "p", [
            "Es gibt ein neue Druckfunktion in meinem CV. Noch nicht fertig, trotzdem.\n",
        ]],

    ]

);

//-----------------------------------------------------------------------------------------------------------
$data_BTdesc5 = array(

    "blog_entry5TITLE" =>
        "Today's sandbox",

    "blog_entry5DATE" => [
        "May 05, 2018",
        "Trying different things with jscript / php to find a CLEAN implementation"
    ]

);
$data_BTcontent5 = array(
    "blog_entry5CONTENT" => [
        //TECH BLOG, no dynamic content
    ]

);

//-----------------------------------------------------------------------------------------------------------
$data_BNdesc4 = array(

    "blog_entry4TITLE" =>
        "About everything... and nuthin'",

    "blog_entry4DATE" => [
        "April 20, 2018",
        "Some tools and refs which I like to use for software development, and some other digression"
    ]

);
$data_BNcontent4 = array(
    "blog_entry4CONTENT" => [
        [ "p", [
            "Useful links (my current best of):"
        ]],

        [ "ul", [
            [ "https://buzut.developpez.com/tutoriels/101-commandes-indispensables-sous-linux/?utm_source=dlvr.it&utm_medium=gplus", "My Linux compass" ],
            [ "https://www.dostips.com/", "DOS commands! With LOTS OF NICE SAMPLES!" ],
            [ "http://en.cppreference.com/w/", "Here and now direct C/C++ info" ],
            [ "http://www.ntu.edu.sg/home/ehchua/programming/", "The only CLEAR and PERFECTLY DIDACTIC presentation of the makefile, among others." ],
            [ "http://sdz.tdct.org/sdz/comprendre-les-encodages.html", "Small trip to the \"encoding land\"" ],
        ]],

        [ "p", [
            [ "https://www.jetbrains.com", "JetBrains" ],
        ]],

        [ "ul", [
            "So, I bought JetBrains. Just for me, when I need\n" .
            "to write software at home. And I congratulate myself everyday\n" .
            "(or at least each time I work only for me). A complete software suite, almost an ecosystem.\n" .
            "I will talk again about it in the future.\n",
        ]],

        [ "p", [
            "Jira:"
        ]],

        [ "ul", [
            "Jira, we've been using it at work for a few years now. At all times, a project team thinks,\n" .
            "organizes, notes ... and finally makes many mails (not always clear),\n" .
            "docs (often unfinished or incomprehensible), post-its (exploitable for 3 minutes 10), drafts\n" .
            "that we never read again, what else ... in short a lot of waste.\n" .
            "Jira allows us to continue doing all this, but in a digital way, organized and navigable. It\n" .
            "is above all a practical and effective team blog,\n" .
            "and can also be coupled with other integration tools and conf management for example.\n" .
            "The real world of real life well organized. No, not quite actually. It allows especially to\n" .
            "organize recurrent chaos.\n" .
            "Which is finally the most useful thing, because let's not forget Terry Pratchett: \"the chaos\n" .
            "always prevails on the order, because it is much better organized\"\n"
        ]]

    ]

);

//-----------------------------------------------------------------------------------------------------------
$data_BNdesc3 = array(

    "blog_entry3TITLE" =>
        "Bon, au travail",

    "blog_entry3DATE" => [
        "April 16, 2018",
        "We always need to make a first step!"
    ]

);
$data_BNcontent3 = array(

    "blog_entry3CONTENT" => [
        [ "p", [
            "Nun, hier ist es, die Seite ist online, das www funktioniert, jetzt bleibt nur noch 2 oder 3 Dinge zu entwickeln:"
        ]],

        [ "ul", [
            "der Textinhalt des CV in einer angrenzenden Datenbank.",
            "Links für jedes Projekt / Produkt / Unternehmen ...",
        ]],

        [ "p", [
            "Ich muss auch ein Open-Source-Projekt hochladen, über Autotools, aber shh ...\n" .
            "Ich werde auf Französisch, Englisch oder Deutsch schreiben, entsprechend der Inspiration des Tages.\n" .
            "So jetzt, bis später. Tschuss! "
        ]],

    ]

);

//-----------------------------------------------------------------------------------------------------------
$data_BNdesc2 = array(

    "blog_entry2TITLE" =>
        "Petit article d'introduction",

    "blog_entry2DATE" => [
        "April 14, 2018",
        "Quelques nouvelles insignifiantes, juste pour meubler un peu au debut"
    ]

);
$data_BNcontent2 = array(

    "blog_entry2CONTENT" => [
        [ "p", [
            "Recentes \"exhumations\":"
        ]],

        [ "ul", [
            "des fiches de cours pour guitaristes debutants que j'avais realise naguere..."
        ]],

        [ "a", [
            "ressources/fiches.htm",
            "Fiches guitare..."
        ]],

        [ "ul", [
            "et aussi ce truc rigolo que j'avais fait pour... pour... chaipus... parce que je suis un geek?"
        ]],

        [ "a", [
            "ressources/Timeline.htm",
            "Muzik geschichte..."
        ]]
    ]

);

//-----------------------------------------------------------------------------------------------------------
$data_BNdesc1 = array(

    "blog_entry1TITLE" =>
        "CREATION DU SITE",

    "blog_entry1DATE" => [
        "April 14, 2018",
        "Los geht's!"
    ]

);
$data_BNcontent1 = array(

    "blog_entry1CONTENT" => [
        [ "p", [
            "Voila, c'est parti... " .
            "Je mets le site en ligne pour la premiere fois. Toujours pas de www actif pour le moment dans " .
            "mon DNS, sais pas pourquoi :("
        ]]
    ]

);

//-----------------------------------------------------------------------------------------------------------
$data_BLOGdatamap = array(

    "data_BTdesc15" => $data_BTdesc15,
    "data_BTcontent15" => $data_BTcontent15,

    "data_BNdesc14" => $data_BNdesc14,
    "data_BNcontent14" => $data_BNcontent14,

    "data_BTdesc13" => $data_BTdesc13,
    "data_BTcontent13" => $data_BTcontent13,

    "data_BNdesc12" => $data_BNdesc12,
    "data_BNcontent12" => $data_BNcontent12,

    "data_BNdesc10" => $data_BNdesc10,
    "data_BNcontent10" => $data_BNcontent10,

    "data_BNdesc9" => $data_BNdesc9,
    "data_BNcontent91" => $data_BNcontent91,

    "data_BNdesc6" => $data_BNdesc6,
    "data_BNcontent6" => $data_BNcontent6,

    "data_BNdesc4" => $data_BNdesc4,
    "data_BNcontent4" => $data_BNcontent4,

    "data_BNdesc3" => $data_BNdesc3,
    "data_BNcontent3" => $data_BNcontent3,

    "data_BNdesc2" => $data_BNdesc2,
    "data_BNcontent2" => $data_BNcontent2,

    "data_BNdesc1" => $data_BNdesc1,
    "data_BNcontent1" => $data_BNcontent1,

    "data_BTdesc11" => $data_BTdesc11,
    "data_BTcontent11" => $data_BTcontent11,

    "data_BTdesc8" => $data_BTdesc8,
    "data_BTcontent8" => $data_BTcontent8,

    "data_BTdesc7" => $data_BTdesc7,
    "data_BTcontent7" => $data_BTcontent7,

    "data_BTdesc5" => $data_BTdesc5,
    "data_BTcontent5" => $data_BTcontent5,

);

//-----------------------------------------------------------------------------------------------------------
$data_BTtestarray = [
    "Anna", "Amanda",
    "Brittany",
    "Cinderella", "Cindy",
    "Diana", "Doris",
    "Eva", "Eve", "Evita", "Elizabeth", "Ellen",
    "Fiona",
    "Gunda",
    "Hege",
    "Inga",
    "Johanna", "Jenny",
    "Kitty",
    "Linda", "Liza",
    "Nina",
    "Ophelia",
    "Petunia",
    "Raquel",
    "Sunniva",
    "Tove",
    "Unni",
    "Violet", "Vicky",
    "Wenche"
];

