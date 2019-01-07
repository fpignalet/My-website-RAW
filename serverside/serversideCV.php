<?php
/**
 * Created by PhpStorm.
 * User: franc
 * Date: 12.10.2018
 * Time: 17:25
 */

include 'data/CVdata.php';

class SRVSIDE_CV {

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

}
