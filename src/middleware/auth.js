const Auth=(req,res,next)=>{
    console.log('Checking authentication for :',req.path);
    if(req.headers.token===undefined)
    {
        res.send(401);
    }
    else if(req.headers.token==='890sdf8sdf0987sdf7a0sdf67s6df4sd3fs3df36s46df')
    {
        next();
    }
    else
    {
        res.send(401);
    }
}

module.exports=Auth;