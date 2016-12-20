**To install from npm:**
```npm install --save json-walker```

This module does two things.

1. Finds json properties by name.  The property can be on the top
level or nested.  You can look for Arrays, Objects, Numbers, Booleans, or Strings with
a specified property name.

2. Sets json properties by name. The property can be on the top
level or nested.  You can set Arrays, Objects, Numbers, Booleans, or Strings with
a specified property name.

\* If their are multiple properties of the same name and type, `json-walker` will find/set all of them.

Finding functions
-----------------

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

_Returns an error object, and a results array containing all matching arrays._

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

_Returns an error object, and a results array containing all matching strings._

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

jw.findStringsByKey('funky', obj, function(err, results){
    /**
    *   returns the nested strings
    *   [
    *       "breath", "bellybutton", "feet"
    *   ]
    */
    console.log(results);
});
```
    
### findNumbersByKey(propertyName, jsonObject, function(err, results))

Takes three arguments. The first is the property name that your'e looking 
for.  The second is the json object you are looking in. The third is a callback
function.

_Returns an error object, and a results array containing all matching numbers._

```javascript
var jw = require('json-walker');
var obj = {
    "top": {
        "funky": 1
    },
    "mid": {
        "funky": 2
        
    },
    "bottom": {
        "funky": 3
    }
};

jw.findNumbersByKey('funky', obj, function(err, results){
    /**
    *   returns the nested numbers
    *   [
    *       1, 2, 3
    *   ]
    */
    console.log(results);
});
```

### findBooleansByKey(propertyName, jsonObject, function(err, result))

Takes three arguments. The first is the property name that your'e looking 
for.  The second is the json object you are looking in. The third is a callback
function.

_Returns an error object, and a results array containing all booleans._

```javascript
var jw = require('json-walker');
var obj = {
    "top": {
        "funky": false
    },
    "mid": {
        "funky": true
        
    },
    "bottom": {
        "funky": false
    }
};
jw.findBooleansByKey('funky', obj, function(err, results){
    /**
    *   returns all properties of the same name
    *   [
    *       false,true,false
    *   ]
    */
    console.log(results);
});
```

### findAllByKey(propertyName, jsonObject, function(err, result))

Takes three arguments. The first is the property name that your'e looking 
for.  The second is the json object you are looking in. The third is a callback
function.

_Returns an error object, and a results array containing all matching properties._

```javascript
var jw = require('json-walker');
var obj = {
    "obj": {
        "funky": {
            passed: true
        },
        "level2": {
            "funky": {
                "passed": true
            }
        }
    },
    "arry": {
        "funky": [],
        "level2": {
            "funky": []
        }
    },
    "str": {
        "funky": "js",
        "level2": {
            "funky": "js",
            "level3": {
                "funky": "js"
            }
        }
    },
    "num": {
        "funky": 15,
        "level2": {
            "funky": 15,
            "level3": {
                "funky": 15
            }
        }
    }
};

jw.findAllByKey('funky', obj, function(err, results){
    /**
    *   returns all properties of the same name
    *   [
    *       {"passed":true},{"passed":true},[],[],"js","js","js",15,15,15
    *   ]
    */
    console.log(results);
});
```

Setting functions
-----------------

### setObjectsByKey(propertyName, jsonObject, newValue, function(err, modifiedJsonObject))

Takes four arguments. The first is the property name that your'e looking 
for.  The second is the json object you are looking in. The third is the new value. (The new value must be of the same type)
The fourth is a callback function.

_Returns an error object, and the modified object._

```javascript
var jw = require('json-walker');

var obj = { 
    funky: {
        modified: false
    }
};

jw.setObjectsByKey('funky', obj, { modified: true }, function(err, modified){
    /**
    *   returns modified object
    *   {
    *       funky: {
    *           modified: true
    *       }
    *   }
    */
    console.log(modified);
});
```

### setArraysByKey(propertyName, jsonObject, newValue, function(err, modified))

Takes four arguments. The first is the property name that your'e looking 
for.  The second is the json object you are looking in. The third is the new value. (The new value must be of the same type)
The fourth is a callback function.

_Returns an error object, and the modified object._

```javascript
var jw = require('json-walker');

var obj = { 
    funky: [
        1,2,3,4
    ]
};

jw.setObjectsByKey('funky', obj, [4,3,2,1], function(err, modified){
    /**
    *   returns modified object
    *   {
    *       funky: [
    *           4,3,2,1
    *       ]
    *   }
    */
    console.log(modified);
});
```

### setStringsByKey(propertyName, jsonObject, newValue, function(err, modified))

Takes four arguments. The first is the property name that your'e looking 
for.  The second is the json object you are looking in. The third is the new value. (The new value must be of the same type)
The fourth is a callback function.

_Returns an error object, and the modified object._

```javascript
var jw = require('json-walker');

var obj = { 
    funky: 'one'
};

jw.setObjectsByKey('funky', obj, 'two', function(err, modified){
    /**
    *   returns modified object
    *   {
    *       funky: 'two'
    *   }
    */
    console.log(modified);
});
```

### setNumbersByKey(propertyName, jsonObject, newValue, function(err, modified))

Takes four arguments. The first is the property name that your'e looking 
for.  The second is the json object you are looking in. The third is the new value. (The new value must be of the same type)
The fourth is a callback function.

_Returns an error object, and the modified object._

```javascript
var jw = require('json-walker');

var obj = { 
    funky: 15
};

jw.setObjectsByKey('funky', obj, 42, function(err, modified){
    /**
    *   returns modified object
    *   {
    *       funky: 42
    *   }
    */
    console.log(modified);
});
```

### setBooleansByKey(propertyName, jsonObject, newValue, function(err, modified))

Takes four arguments. The first is the property name that your'e looking 
for.  The second is the json object you are looking in. The third is the new value. (The new value must be of the same type)
The fourth is a callback function.

_Returns an error object, and the modified object._

```javascript
var jw = require('json-walker');

var obj = { 
    funky: false
};

jw.setObjectsByKey('funky', obj, true, function(err, modified){
    /**
    *   returns modified object
    *   {
    *       funky: true
    *   }
    */
    console.log(modified);
});
```