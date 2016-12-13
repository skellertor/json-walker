**To install from npm:**
```npm install json-walker```

This module finds json properties by name.  The property can be on the top
level or nested.  You can look for Arrays, Objects, Numbers, or Strings with
a specified property name.

There are four functions
------------------------

### findObjectsByKey(propertyName, jsonObject, function(err, results))

Takes three arguments. The first is the property name that your'e looking 
for.  The second is the json object you are looking in. The third is a callback
function.

_Returns an error object, and a results array that contains all matching objects._

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
```

### findArraysByKey(propertyName, jsonObject, function(err, results))

Takes three arguments. The first is the property name that your'e looking 
for.  The second is the json object you are looking in. The third is a callback
function.

_Returns an error object, and a results array containg all matching arrays._

```javascript
var jw = require('json-walker');
var obj = {
    "top": {
        "funky": ["breath", "hair"]
    },
    "mid": {
        "funky": ["bellybutton","underwear"]
        
    },
    "bottom": {
        "funky": ["feet"]
    }
};

jw.findArraysByKey('funky', obj, function(err, results){
    /**
    *   returns the nested arrays
    *   [
    *       ["breath", "hair"],
    *       ["bellybutton","underwear"],
    *       ["feet"]
    *   ]
    */
    console.log(results);
});
```

### findStringsByKey(propertyName, jsonObject, function(err, results))

Takes three arguments. The first is the property name that your'e looking 
for.  The second is the json object you are looking in. The third is a callback
function.

_Returns an error object, and a results array containg all matching strings._

```javascript
var jw = require('json-walker');
var obj = {
    "top": {
        "funky": "breath"
    },
    "mid": {
        "funky": "bellybutton"
        
    },
    "bottom": {
        "funky": "feet"
    }
};

jw.findArraysByKey('funky', obj, function(err, results){
    /**
    *   returns the nested arrays
    *   [
    *       "breath", "bellybutton", "feet"
    *   ]
    */
    console.log(results);
});
```
    