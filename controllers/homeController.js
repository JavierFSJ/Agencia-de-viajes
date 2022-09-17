import { Testimonial } from "../model/Testimonial.js";
import { Viaje } from "../model/Viaje.js";

const inicio = async function (req, res) {
  const titulo = "Inicio";
  
  try {
    const consultas = await Promise.all([ Viaje.findAll({limit: 3}) , Testimonial.findAll({limit: 3}) ]);
    res.render("inicio", {
      titulo,
      clase: 'home',
      viajes : consultas[0],
      testimoniales : consultas[1],
    });
  } catch (error) {
    console.log(error);
  }  
};

const nosotros = function (req, res) {
  const titulo = "Nosotros";
  res.render("nosotros", {
    titulo,
  });
};

const contacto = function (req, res) {
  const titulo = "Contacto";
  res.render("contacto", {
    titulo,
  });
};

const testimoniales = async function (req, res) {
  try {
    const titulo = "Testimoniales";
    const testimoniales = await Testimonial.findAll();
    res.render("testimoniales", {
      titulo,
      testimoniales,
    });
  } catch (error) {
    console.log(error);
  }
};

const viajes = async function (req, res) {
  const titulo = "Próximos viajes";

  //Consultar la base de datos
  const viajes = await Viaje.findAll();

  res.render("viajes", {
    titulo,
    viajes,
  });
};

const viajeDetalle = async function (req, res) {
  const { viaje } = req.params;
  const titulo = viaje;
  try {
    const resultado = await Viaje.findOne({ where: { slug: viaje } });
    res.render("viaje", {
      titulo,
      resultado,
    });
  } catch (error) {}
};

export { inicio, nosotros, contacto, testimoniales, viajes, viajeDetalle };
