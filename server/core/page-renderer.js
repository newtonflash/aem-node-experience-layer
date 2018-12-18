import compileReactComponent from './ssr-engine';
import themesList from '../../react-src/themes';

const pageRenderer = data => {

   var componentsList = data[":items"];
   let componentsData = [];

   for (let componentKey in componentsList){
       if (!componentsList.hasOwnProperty(componentKey)) continue;
       var componentData = {
           id : componentKey,
           data : componentsList[componentKey],
           type: "static" // hard coded for now.
       };
       componentsData.push(componentData);
   }

    var componentsHTML = componentsData.map(item => compileReactComponent(item.id, item.data, item.type)).join();
    var cssTheme = themesList[data.cssTheme];

    return `<!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <title>data.cssTheme</title>
                    <link type="text/css" rel="stylesheet" href="/css/themes/${cssTheme}.css"></link>
                </head>
                <body>
                    <p> ${data.templateName}</p>
                    ${componentsHTML}
                </body>
            </html>`;
};
export default pageRenderer;