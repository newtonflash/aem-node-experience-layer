const router = require('express').Router();
import pageTemplateResolver from '../core/page-template-resolver';

router.get(/.html/, async function(req, res, next){
    await pageTemplateResolver(req, res, next);
});

module.exports = router;