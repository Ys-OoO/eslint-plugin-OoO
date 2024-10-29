# eslint-plugin-sen

personal eslint plugin

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-sen`:

```sh
npm install eslint-plugin-sen --save-dev
```

## Usage

In your [configuration file](https://eslint.org/docs/latest/use/configure/configuration-files#configuration-file), import the plugin `eslint-plugin-sen` and add `sen` to the `plugins` key:

```js
import sen from "eslint-plugin-sen";

export default [
    {
        plugins: {
            sen
        }
    }
];
```


Then configure the rules you want to use under the `rules` key.

```js
import sen from "eslint-plugin-sen";

export default [
    {
        plugins: {
            sen
        },
        rules: {
            "sen/template-literals": "error"
        }
    }
];
```

