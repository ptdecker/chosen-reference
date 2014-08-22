chosen-reference
================

A reference implementation of the Harvest 'chosen' select box library within an Express Node.js environment with Bootstrap

Created to make sure I had somewhat of an understanding of the minimum requirements needed to implement the Harvest 'chosen' select box within another private project being developed. This is a minimum implementation of 'chosen' within that environment. The Express approach used is based upon the structure suggested in Marc Wandschneider's "Learning Node.js" book which I have mixed reviews on at this point--but, at least it got things started. Anyway, I post t here in case it can help someone else in their quest sometime.

* Repository Structure

```
    app/          application scripts directory
    launch        bash script to start LigoEngine
    README.md     this file
    static/        static front-end site content
```

* Installing (from the directory where your storing your projects):

```
    $ git clone https://github.com/ptdecker/chosen-reference.git
    $ cd chosen-reference/app
    $ npm update
    $ cd ..
```

* Running

```
    $ ./launch server.js
```

All this assumes Ubuntu 14.04.

Any and all suggestions are welcome. At this point, I know of one issue (see [issues](https://github.com/ptdecker/chosen-reference/issues).
