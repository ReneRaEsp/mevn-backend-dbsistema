import mongoose,{Schema} from 'mongoose';


const categoriasSchema =  new Schema({
    nombre:{type:String, maxlength:50, unique:true, required:true},
    descripcion:{type:String,maxlength:255},
    estado:{type:Number,default:1},
    createdAt:{type:Date,default:Date.now}
})

const Categoria = mongoose.model('categoria', categoriasSchema);

export default Categoria;
