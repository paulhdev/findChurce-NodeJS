const Churce = require('../models/Churce');
const Yup = require('yup');

class ChurceController {

  async index (req, res) {
    const { page } = req.query;

    const churces = await Churce.find().sort('-createdAt').limit(5).skip((page - 1) * 5);

    return res.status(200).json(churces);
  }

  async create (req, res) {
    const { name, locale, numberMembers } = req.body;

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      locale: Yup.string().required(),
      numberMembers: Yup.number().required()
    });

    if(!(await schema.isValid)) {
      return res.status(400).json({
        error: 'Validation fails!'
      });
    }

    const churce = await Churce.create({
      name,
      locale,
      numberMembers
    });

    return res.status(200).json(churce);
  }

  async show (req, res) {
    const { name } = req.params;

    const churce = await Churce.findOne({ name });

    if(!churce) {
      return res.status(404).json({
        error: 'Churce not found!'
      });
    }

    return res.status(200).json(churce)
  }

  async update (req, res) {
    const { id } = req.params;
    const { name, locale, numberMembers } = req.body;

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      locale: Yup.string().required(),
      numberMembers: Yup.number().required()
    });

    if(!(await schema.isValid)) {
      return res.status(400).json({
        error: 'Validation fails!'
      });
    }

    const data = {
      name,
      locale,
      numberMembers
    }

    const churce = await Churce.findByIdAndUpdate(id, data, {
      new: true
    })

    return res.status(200).json(churce);
  }

}

module.exports = new ChurceController();