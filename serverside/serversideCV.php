<?php
/**
 * Created by PhpStorm.
 * User: franc
 * Date: 12.10.2018
 * Time: 17:25
 */

include 'data/CVdataEN.php';
include 'data/CVdataDE.php';

class SRVSIDE_CV {

    public $cvdatafile = "CVdata.json";

    /// @brief ctor
    public function __construct() {
        //...
    }

    /// @brief sends back CV data
    /// @param param
    /// @param debug
    /// @returns 1 desc
    public function CVsend($param, $lang, $debug) {
        global $data_CVmapEN, $data_CVmapDE, $data_CVloadsleep;

        if(true == $debug) {
            usleep($data_CVloadsleep);
        }

        switch($lang) {
            default:
            case "EN":
                return $data_CVmapEN[$param];
            case "DE":
                return $data_CVmapDE[$param];
        }
    }

    /// @brief sends back CV data
    /// @param param
    /// @param debug
    /// @returns 1 desc
    public function CVconvert($param, $debug){
        global $data_CVmapEN;

        if(true == file_exists($this->cvdatafile)){
            return;
        }

        $test = "{";
        foreach (array_keys($data_CVmapEN) as $item) {
            $debug = false;

            $data = $this->CVsend($data_CVmapEN[$item], "EN", $debug);
            $test = $test . json_encode($data, JSON_PRETTY_PRINT);
        }

        $test = $test . "}";

        $fp = fopen($this->cvdatafile, 'a+');
        fwrite($fp, $test);
        fclose($fp);

        return $test;
    }

}
