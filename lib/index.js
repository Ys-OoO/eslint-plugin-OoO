/**
 * @fileoverview personal eslint plugin
 * @author Sen_OoO
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");
const rules = requireIndex(__dirname + "/rules");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------
const plugin = {
    meta:{
        name:'eslint-plugin-sen',
        version:'1.0.0',
    },
    configs:{
        recommended: {
            plugins:['eslint-plugin-sen'],
            rules:{
                "sen/template-literals":"error"
            }
        }
    },
    rules:rules
}


module.exports = plugin;

