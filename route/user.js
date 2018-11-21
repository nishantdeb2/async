const joi = require('joi');
module.exports={
  validatebody:(schemas)=>{
    return(req,res,next)=>{
    const result=joi.validate(req.body,schemas);
    if(result.error)
    {
      return res.status(400).json(result.error);
    }
    if(!req.value)
    {
      req.value={};
    }
    req.value ['body']=result.value;
    next();
  }
  },

schemas:{
  authschema:joi.object().keys({
    name:joi.string(),
    email:joi.string().email(),
    password:joi.string(),
    auth:joi.string(),
    phone_number:joi.string(),
    address:joi.string()
  })
}
}
