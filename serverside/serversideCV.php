<?php
/**
 * Created by PhpStorm.
 * User: franc
 * Date: 12.10.2018
 * Time: 17:25
 */

include 'data/CVdata.php';

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
    public function CVsend($param, $debug) {
        global $data_CVmap, $data_CVloadsleep;

        if(true == $debug) {
            usleep($data_CVloadsleep);
        }

        return $data_CVmap[$param];
    }

    /// @brief sends back CV data
    /// @param param
    /// @param debug
    /// @returns 1 desc
    public function CVconvert($param, $debug){
        global $data_CVmap;

        if(true == file_exists($this->cvdatafile)){
            return;
        }

        $test = "{";
        foreach (array_keys($data_CVmap) as $item) {
            $debug = false;

            $data = $this->CVsend($data_CVmap[$item], $debug);
            $test = $test . json_encode($data, JSON_PRETTY_PRINT);
        }

        $test = $test . "}";

        $fp = fopen($this->cvdatafile, 'a+');
        fwrite($fp, $test);
        fclose($fp);

        return $test;
    }

}
