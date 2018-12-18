import React from "react";
import ReactDOMServer from 'react-dom/server';
import getComponentByID from '../../react-src/component-registry';
import { ServerStyleSheet } from 'styled-components';

const compileReactComponent = (id, data, type) => {

    const sheet = new ServerStyleSheet();
    const Component = getComponentByID(id);
    if(Component){
        var html = '';
        if(type === "static"){
            html =  ReactDOMServer.renderToStaticMarkup(sheet.collectStyles(<Component {...data}/>));
        } else if (type === "dynamic") {
            html =  ReactDOMServer.renderToString(sheet.collectStyles(<Component {...data}/>));
        }

        var style = sheet.getStyleTags();
        return html + style ;

    } else {
        console.error(`component ${id} not found`);
        return `component ${id} not found`;
    }
};

export default compileReactComponent;
