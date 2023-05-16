function mustBeInteger(req, res, next){
    const id = req.params.id;
    if(!Number.isInteger(parseInt(id))){
        res.status(400).json({message: 'ID must be in integer' });
    }else{
        next();
    }
}

function checkFieldsPost(req,res, next){

    const {title, content, tags } = req.body
    if(title && content && tags){
next()
    }else{
        res.status(400).json({message: 'Fields should not be empty'});
    }
}
    module.exports = {
        mustBeInteger,
        checkFieldsPost
    }