module.exports = {
    isAdmin: (req, res, next) =>{
        if(req.headers.user === "admin"){
            next();
        }else{
            res.status(403).json({ message: "You don´t have permission to do that, buddy!" });
        }
    }
}