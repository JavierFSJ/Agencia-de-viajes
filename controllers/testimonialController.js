import {Testimonial} from '../model/Testimonial.js';

export const testimonialStore =  async function(req , res){
  const {nombre , email , mensaje} = req.body;
  const testimoniales = await Testimonial.findAll();
  const errores = [];
  if(nombre.trim() === ''){
    errores.push('El nombre es obligatorio');
  }
  if(email.trim() === ''){
    errores.push('El email es obligatorio');
  }
  if(mensaje.trim() === ''){
    errores.push('El mensaeje es obligatorio');
  }

  if(errores.length > 0) {
    //Vista
    res.render('testimoniales' , {
      titulo: 'Testimoniales',
      errores,
      nombre,
      email,
      mensaje,
      testimoniales,
    })
  } else {
    //Almacenar
    try {
      await Testimonial.create({
        nombre,
        correo: email,
        mensaje,
      });
      res.render('testimoniales' , {
        titulo: 'Testimoniales',
        'alerta': 'El testimonial se registro de manera correcta',
        testimoniales
      });
    } catch (error) {
      console.log(error);
    }
  }
}
