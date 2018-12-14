# Node Experience Layer for AEM
This package creates an experience layer where node and react compiles all page configurations by intercepting aem dispachter requests.
The request flow for a page would look like this:
browser => caching / load balancer layer => AEM dispacher => Node => AEM => Node => AEM dispatcher => caching layer =>  browser
