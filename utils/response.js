"use strict"

/**
 * @author David Moreno <demoreno@gmail.com>
 * @type {*|createApplication}
 */

let express = require('express');

let response = {
    send : function(res,code,data,errors){
        res.send({
            code : code,
            message : 'ok',
            error : errors,
            data : {
                rows : data
            }
        });
    }
};

module.exports = response;