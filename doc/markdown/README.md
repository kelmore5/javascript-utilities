
Javascript Utilities
====================

This is a Typescript project I maintain to help out with basic functions I need while writing Javascript. I prefer not to rely on large libraries when I can help out (such as underscore), and as such end up writing a lot of common functions I need myself.

Whenever I need something like doing a multi-key replacement on a json dictionary or outputting data to Excel or transforming an array into a set, I put a function for it here.

There are 8 main categories within this project as of now: Arrays, Dictionaries, Files, Math, Promises, Spreadsheets, Strings, and Utilities. Each contains an array of functions to help expand each type of object.

To give a quick synopsis:

*   Arrays has things like splitting an array into subsets, filtering out null values, sorting date arrays, and removing items via an input function.
    
*   Dictionaries is the largest library and contains functions including transforming an array into a blank dictionary, doing name replacements on keys in the dictionary, grabbing all data with specified keys from a json array, and removing a list of json keys.
    
*   Files only has one (at the moment) function to create a file if one does not exist and return the full path.
    
*   Math also has one function to find the closest divosor between a number and a specific divisor.
    
*   Promises has two functions: One to append a catch function to an array of promises and one to append a next function to an array of promises to resolve true on complete.
    
*   Spreadsheets includes functions to split a CSV file into a smaller amount of rows, output JSON data to Excel, and converting spreadsheet files to JSON.
    
*   Strings has things like fuzzy searches within a string array and transforming strings from keys to titles.
    
*   Utilities has a variety of functions, including removing HTML tags from an HTML page or element, creating a Levenshtein comparison, and initiating an HTTP request.
    

This has been checked and was working on **May 1, 2018**, but I have no plans to maintain the project.

Install
-------

First, download the repo

```
git clone --recurse-submodules -j8 https://github.com/kelmore5/javascript-utilities
```

Then run install to download all npm modules

```
npm install
```

Use
---

Once downloaded and dependencies are installed, you can import tools like so

```
import {arrays} from 'lib/arrays';
import {files} from 'lib/files';
...
```

You can also generate documentation for the node module via

```
npm run doc
```

Extra Links
-----------

*   [Bookshelf.js](http://bookshelfjs.org/)
*   [ExcelJS](https://github.com/guyonroche/exceljs)

## Index

### External modules

* ["arrays"](modules/_arrays_.md)
* ["dictionaries"](modules/_dictionaries_.md)
* ["files"](modules/_files_.md)
* ["index"](modules/_index_.md)
* ["maths"](modules/_maths_.md)
* ["promises"](modules/_promises_.md)
* ["spreadsheets"](modules/_spreadsheets_.md)
* ["strings"](modules/_strings_.md)
* ["temp/temp"](modules/_temp_temp_.md)
* ["utilities"](modules/_utilities_.md)

---

