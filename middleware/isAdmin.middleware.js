module.exports = {
    isAdmin: (req, res, next) =>{
        if(req.user.admin){
            next();
        }else{
            res.status(403).send();
        }
    }
}