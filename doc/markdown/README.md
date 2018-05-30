
Javascript Utilities
====================

This is a Typescript project I maintain to help out with basic functions I need while writing Javascript. I prefer not to rely on large libraries when I can help out (such as underscore), and as such end up writing a lot of common functions I need myself.

Whenever I need something like doing a multi-key replacement on a json dictionary or outputting data to Excel or transforming an array into a set, I put a function for it here.

There are 8 main categories within this project as of now: Arrays, Dictionaries, Files, Math, Promises, Spreadsheets, Strings, and Utilities. Each contains an array of functions to help expand each type of object.

To give a quick synopsis:

*   Arrays has things like splitting an array into subsets, filtering out null values, sorting date arrays, and removing items via an input function.
    
*   Dictionaries is the largest library and contains functions including transforming an array into a blank dictionary, doing name replacements on key
    

This has been checked and was working on **May 1, 2018**, but I have no plans to maintain the project.

Install
-------

### Dependencies

*   python 3.6
*   pyvirtualdisplay
*   xlrd
*   xlwt
*   [selenium](http://selenium-python.readthedocs.io/installation.html)
*   [Xvfb](https://www.x.org/archive/X11R7.6/doc/man/man1/Xvfb.1.xhtml) (May not be necessary - check install of pyvirtualdisplay)
*   [ChromeDriver](https://sites.google.com/a/chromium.org/chromedriver/)
*   [peewee](https://github.com/coleifer/peewee)

*pyvirtualdisplay and Xvfb are used to create the headless display, selenium and chromedriver are used for the actual browsing

### Run

First, download the repo

```
git clone --recurse-submodules -j8 https://github.com/kelmore5/ebay-keyword-crawler
```

Once downloaded and dependencies are installed, you can run it via

```
python3 lib/EbayParser.py
```

You can change the boards being parsed and the keywords to search for by modifying EbayParser.py (top of file, line 40)

```python
# Set keywords to search for here
keywords = [
    ["good deal", "great deal", "fair deal", "best deal", "good price", "great price", "fair price", "best price",
    "good customer", "great customer", "repeat customer", "fair", "honest", "reasonable"],
    ["scam", "scams", "scammed", "scamming", "scammer", "scammers", "fraud", "frauds", "defrauded", "fraudster",
    "fraudsters", "con", "cons", "conned", "conning", "con artist", "con artists", "trick", "tricks", "tricked",
    "tricking", "trickster", "tricksters", "swindle", "swindles", "swindled", "swindler", "swindlers"]
]

# Set board names and links to be downloaded here
board_names = ['Bidding and Buying', 'Selling']

board_urls = ["http://community.ebay.com/t5/Bidding-Buying/bd-p/bidding-buying-db",
                "http://community.ebay.com/t5/Selling/bd-p/selling-db"]
```

Extra Links
-----------

*   [Selenium](https://www.seleniumhq.org/)
*   [Selenium Python Docs](http://selenium-python.readthedocs.io/)
*   [Peewee Documentation](http://docs.peewee-orm.com/en/latest/)

Proof of Concept
----------------

You can see a demo from a slideshow I've created [here](https://docs.google.com/presentation/d/1VlSL0dZrbhQeY3bIFUGEmSkFARycCc31zmQlNqx_7BY/edit?usp=sharing) or you can look at the sample output from [this](https://github.com/kelmore5/ebay-keyword-crawler/raw/master/demo/output_demo.xlsx) Excel sheet, screenshotted below.

Either way here are some pictures to give a proof of concept, with even more residing in the [demo](https://github.com/kelmore5/ebay-keyword-crawler/tree/master/demo) folder above

Here's a pic of the forum from ebay before download

![Ebay Bidding and Buying Forum](/demo/pictures/ebay_bidding_and_buying.png "Ebay Bidding and Buying Forum")

and the resulting database in SQL

![Posts SQL Database](/demo/pictures/posts_database.png "Posts SQL Database")

Some examples of the messages being parsed from ebay

![Ebay Messages Example 1](/demo/pictures/ebay_messages_1.png "Ebay Messages Example")

![Ebay Messages Example 2](/demo/pictures/ebay_messages_2.png "Ebay Messages Example 2")

Both messages now in database, ready to be searched through for keywords

![Messages SQL Database](/demo/pictures/messages_database.png "Messages SQL Database")

The keywords database

![Keywords SQL Database](/demo/pictures/keywords_database.png "Keyboards SQL Database")

And finally the resulting output in Excel

![Excel Output - Main](/demo/pictures/excel_output_main.png "Excel Output - Main")

![Excel Output - Simple Stats](/demo/pictures/excel_output_keywords.png "Excel Output - Simple Stats")

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

