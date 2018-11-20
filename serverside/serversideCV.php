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

    /// @brief desc
    /// @param name desc
    /// @returns 1 desc
    public function CVsend($param, $debug) {
        global $data_CVdatamap, $data_CVloadsleep;

        if(true == $debug) {
            usleep($data_CVloadsleep);
        }

        return $data_CVdatamap[$param];
    }

}
?>
