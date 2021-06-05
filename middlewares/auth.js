import tokenService from '../services/token'

export default {
	verifyUsuario:async(req,res,next) => {
		if(!req.headers.token){
			return res.status(404).send({
				message: 'no token'
			})
		} else {
			const response= await tokenService.decode(req.headers.token)
			if (response.rol === 'Administrador' || response.rol === 'Vendedor' || response.rol === 'Almacenero' ){
				next()
			} else {
				return res.status(403).send({
					message: 'No autorizado'
				})
			}

		}
	},
	verifyAdministrador:async(req,res,next) => {
		if(!req.headers.token){
			return res.status(404).send({
				message: 'no token'
			})
		} else {
			const response= await tokenService.decode(req.headers.token)
			if (response.rol === 'Administrador' ){
				next()
			} else {
				return res.status(403).send({
					message: 'No autorizado'
				})
			}

		}
	},
	verifyAlmacenero:async(req,res,next) => {
		if(!req.headers.token){
			return res.status(404).send({
				message: 'no token'
			})
		} else {
			const response= await tokenService.decode(req.headers.token)
			if (response.rol === 'Almacenero' || response.rol === 'Administrador'){
				next()
			} else {
				return res.status(403).send({
					message: 'No autorizado'
				})
			}

		}
	},
	verifyVendedor:async(req,res,next) => {
		if(!req.headers.token){
			return res.status(404).send({
				message: 'no token'
			})
		} else {
			const response= await tokenService.decode(req.headers.token)
			if (response.rol === 'Vendedor' || response.rol === 'Administrador'){
				next()
			} else {
				return res.status(403).send({
					message: 'No autorizado'
				})
			}

		}
	}

}
