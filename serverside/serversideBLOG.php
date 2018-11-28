<?php
/**
 * Created by PhpStorm.
 * User: franc
 * Date: 11.10.2018
 * Time: 07:01
 */

include 'data/BLOGdata.php';

class SRVSIDE_BLOG {

    /// @brief global result variable.
    public $BLOGresult = "";
    /// @brief global result array
    public $BLOGresultA = array();

    /// @brief ctor
    public function __construct() {
        try {
            //...
        }
        catch(Exception $e) {
            echo 'Exception abgefangen: ',  $e->getMessage(), "\n";
        }
        finally {
            //...
        }

    }

    /*************************************************************************************
     * IMPLEMENTATION: BLOG NEWS TEST FUNCTIONS
     ************************************************************************************
     * @param $param
     * @param $debug
     * @return
     */
    /// @brief desc
    /// @param param desc
    /// @param debug desc
    /// @returns 1 desc
    public function BLOGsend($param, $debug) {
        global $data_BLOGdatamap, $data_BNloadsleep;

        if(true == $debug) {
            usleep($data_BNloadsleep);
        }

        return $data_BLOGdatamap[$param];
    }

    /*************************************************************************************
     * IMPLEMENTATION: BLOG TECH TEST FUNCTIONS
     ************************************************************************************
     * @param $param
     */
    /// @brief lookup all hints from array if $q is different from "" then udpates
    ///     $srvside_resultA globale variable with success/error message
    /// @param param desc
    /// @returns 1 desc
    public function BTtest1($param) {
        global $data_BTtestarray;

        $param = strtolower($param);
        $len = strlen($param);
        foreach ($data_BTtestarray as $item) {
            if (false == stristr($param, substr($item, 0, $len))) {
                continue;
            }

            if ("" === $this->BLOGresult) {
                $this->BLOGresult = $item;
            }
            else {
                $this->BLOGresult .= ", $item";
            }

            $this->BLOGresultA[] = $item;
        }
    }

    /// @brief desc
    /// @returns 1 desc
    public function BTtest2() {
        $bd = new SRVSIDE_BD;
        if (NULL == $bd->BDconn) {
            $bd->BDConnect();
        }

        $query = $bd->BDSelect();
        $bd->BDFetch($query);

        $bd->BDDelete();
        $bd->BDInsert();

        $this->BLOGresult = $bd->BDresult;
    }

    /// @brief desc
    /// @returns 1 desc
    public function BTtest3() {
        $adata = array("object_id" => 1, "object_title" => "PhP_Testobject1");
        return $adata;
    }

    /// @brief desc
    /// @param param
    /// @returns 1 desc
    public function BTtest4($param) {
        $jsdata = json_decode($param, true);
        $adata = array("object_id" => $jsdata[0], "object_title" => $jsdata[1]);
        return $adata;
    }

    /// @brief desc
    /// @returns 1 desc
    public function BTtest5() {
        $adata = array();

        $adata[] = $_SERVER['PHP_SELF'];//Returns the filename of the currently executing script

        $adata[] = $_SERVER['QUERY_STRING'];//Returns the query string if the page is accessed via a query string

        $adata[] = $_SERVER['GATEWAY_INTERFACE'];//Returns the version of the Common Gateway Interface (CGI) the server is using

        $adata[] = $_SERVER['SERVER_ADDR'];//Returns the IP address of the host server
        $adata[] = $_SERVER['SERVER_NAME'];//Returns the name of the host server (such as www.w3schools.com)
        $adata[] = $_SERVER['SERVER_SOFTWARE'];//Returns the server identification string (such as Apache/2.2.24)
        $adata[] = $_SERVER['SERVER_ADMIN'];//Returns the value given to the SERVER_ADMIN directive in the web server configuration file (if your script runs on a virtual host, it will be the value defined for that virtual host) (such as someone@w3schools.com)
        $adata[] = $_SERVER['SERVER_PORT'];//Returns the port on the server machine being used by the web server for communication (such as 80)
        $adata[] = $_SERVER['SERVER_SIGNATURE'];//Returns the server version and virtual host name which are added to server-generated pages
        $adata[] = $_SERVER['SERVER_PROTOCOL'];//Returns the name and revision of the information protocol (such as HTTP/1.1)

        $adata[] = $_SERVER['REQUEST_METHOD'];//Returns the request method used to access the page (such as POST)
        $adata[] = $_SERVER['REQUEST_TIME'];//Returns the timestamp of the start of the request (such as 1377687496)

        $adata[] = $_SERVER['HTTP_ACCEPT'];//Returns the Accept header from the current request
        $adata[] = $_SERVER['HTTP_HOST'];//Returns the Host header from the current request
        $adata[] = $_SERVER['HTTP_REFERER'];//Returns the complete URL of the current page (not reliable because not all user-agents support it)

        $adata[] = $_SERVER['REMOTE_ADDR'];//Returns the IP address from where the user is viewing the current page
        $adata[] = $_SERVER['REMOTE_PORT'];//Returns the port being used on the user's machine to communicate with the web server

        $adata[] = $_SERVER['SCRIPT_FILENAME'];//Returns the absolute pathname of the currently executing script
        $adata[] = $_SERVER['SCRIPT_NAME'];//Returns the path of the current script

        //not available ?
//      $adata[] = $_SERVER['HTTP_ACCEPT_CHARSET'];//Returns the Accept_Charset header from the current request (such as utf-8,ISO-8859-1)
//      $adata[] = $_SERVER['HTTPS'];//Is the script queried through a secure HTTP protocol
//      $adata[] = $_SERVER['REMOTE_HOST'];//Returns the Host name from where the user is viewing the current page
//      $adata[] = $_SERVER['PATH_TRANSLATED'];//Returns the file system based path to the current script
//      $adata[] = $_SERVER['SCRIPT_URI'];//Returns the URI of the current page

        foreach ($adata as $item) {
            if ("" === $this->BLOGresult) {
                $this->BLOGresult = $item;
            }
            else {
                $this->BLOGresult .= " -- $item";
            }

            $this->BLOGresultA[] = $item;
        }

    }

}


