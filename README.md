**To install from npm:**
```npm install json-walker```

This module finds json properties by name.  The property can be on the top
level or nested.  You can look for Arrays, Objects, Numbers, or Strings with
a specified property name.

There are four functions
```javascript
var jw = require('json-walker');
var obj = {
    "top": {
        "funky": {
            "breath": true,
            "hair": false
        }
    },
    "mid": {
        "funky": {
            "bellybutton": true,
            "underwear": true
        }
    },
    "bottom": {
        "funky": {
            "feet": true
        }
    }
};

jw.findObjectsByKey('funky', obj, function(err, results){
    /**
     * returns the nested objects
     *  [
     *      { 
     *          "breath": true,
     *          "hair": false
     *      },
     *      {
     *          "bellybutton: true,
     *          "underwear": true
     *      {
     *          "feet": true,
     *      }
     *  ]
     */
    console.log(results);
});