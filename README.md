# Node Experience Layer for AEM
This package creates an experience layer where node and react compiles all page configurations by intercepting aem dispachter requests.
The request flow for a page would look like this:
browser => caching / load balancer layer => AEM dispacher => Node => AEM => Node => AEM dispatcher => caching layer =>  browser

## How to run this:

```js
npm install
npm start
```
And then put the below url in the browser

http://localhost:6001/pages/<theme>.html

Note, for the POC purpose, it reads page name as <theme>.html so passing themes will change the styles of the page.