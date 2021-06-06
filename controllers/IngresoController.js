import models from '../models/models'
export default {
    add:async (req,res,next) =>{
        try{
          const reg = await models.Ingreso.create(req.body)
          res.status(200).json(reg)  
        }catch(e){
            res.status(500).send({
                message:'Ocurrio un error'
            })
            next(e)
        }
    },
    query:async (req,res,next) =>{
        try {
            const reg = await models.Ingreso.findOne({_id:req.query._id})
            .populate('usuario', {nombre:1})
            .populate('persona', {nombre:1})
            if(!reg){
                res.status(404).send({
                    message: 'El registro no existe'
                })
            } else {
                res.status(200).json(reg)
            }
        } catch(e){
            res.status(500).send({
                message:'Ocurrio un error'
            })
            next(e)
        }
    },
    list:async (req,res,next) =>{
        try {
	    let valor=req.query.valor
            const reg=await models.Ingreso.find({$or:[{'num_comprobante':new RegExp(valor,'i')},{'serie_comporbante':new RegExp(valor, 'i')}]},{createdAt:0})
            .populate('usuario', {nombre:1})
            .populate('persona', {nombre:1})
            .sort({'createdAt':-1})
            res.status(200).json(reg)
        } catch(e){
            res.status(500).send({
                message:'Ocurrio un error'
            })
            next(e)
        }
    },/*
    update:async (req,res,next) =>{
        try {
            const reg = await models.Categoria.findByIdAndUpdate(
                {_id:req.body._id},{nombre:req.body.nombre,
                descripcion:req.body.descripcion}
                )
                res.status(200).json(reg)
        } catch(e){
            res.status(500).send({
                message:'Ocurrio un error'
            })
            next(e)
        }
    },
    remove:async (req,res,next) =>{
        try {
            const reg = await models.Categoria.findByIdAndDelete({_id:req.body._id})
            res.status(200).json(reg)
        } catch(e){
            res.status(500).send({
                message:'Ocurrio un error'
            })
            next(e)
        }
    },*/
    activate:async (req,res,next) =>{
        try {
            const reg = await models.Ingreso.findByIdAndUpdate({_id:req.body._id},{estado:1})
            req.status(200).json(reg)
        } catch(e){
            res.status(500).send({
                message:'Ocurrio un error'
            })
            next(e)
        }
    },
    deactivate:async (req,res,next) =>{
        try {
            const reg = await models.Ingreso.findByIdAndUpdate({_id:req.body._id},{estado:0})
            req.status(200).json(reg)
        } catch(e){
            res.status(500).send({
                message:'Ocurrio un error'
            })
            next(e)
        }
    }
}
