import axios from 'axios';
import pageRenderer from './page-renderer';

const getAEMTemplate = async url => {
    return await axios({
        method: 'get',
        url: url,
        timeout: 2000
    }).then( response => response)
        .catch( error => error);
};

const pageTemplateResolver = async (req, res, next) => {
    const requestURL = req.params;
    var theme = req.url.split("/").pop().replace(".html", "");

    const pageTemplateURL = "http://localhost:6001/test-data/page-template.json";

    const urlObj = await getAEMTemplate(pageTemplateURL);

    if (urlObj.err) {
        next(urlObj.err);
    } else {
        let data;
        try {
            data = urlObj.data;

        } catch (err) {
            next(err);
            return;
        }
        if(data !== undefined){
            data.cssTheme = theme;
            const outputTemplate = await pageRenderer(data);
            res.send(outputTemplate);
        } else {
            res.send("something wrong with data received from server.")
        }
    }
};

export default pageTemplateResolver;