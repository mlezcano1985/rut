# RUT FORMATTER

![GitHub](https://img.shields.io/github/license/mlezcano1985/rut)
![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/mlezcano1985/rut?include_prereleases)

Format and validate rut (Chile) number between 2 and 10 digits for browser and NodeJS.

# How to install?

```
npm install --save @mlezcano1985/rut-formatter
```

# Example

On example folder, you find out Web and NodeJS examples. Install dependencies using: `npm install`.

## Web

After install dependencies, run using a web server.

## NodeJS

If you are test on NodeJS, you can run NodeJS example using this task: `npm start`.

# How to use in NodeJS?

```
const rut = require('@mlezcano1985/rut-formatter');
const value = "111111";
console.log(rut.format(value));
```

Terminal should show _11.111-1_. Valid rut.

```
const rut = require('@mlezcano1985/rut-formatter');
const value = "1";
console.log(rut.format(value));
```

Terminal should show _null_. Invalid rut.

# Support

If you are having general issues with this package, feel free to contact me on [Twitter](https://twitter.com/mlezcano1985).

If you believe you have found an issue, please report it using the [GitHub issue tracker](https://github.com/mlezcano1985/rut/issues), or better yet, fork the repository and submit a pull request.

If you're using this package, I'd love to hear your thoughts. Thanks!
