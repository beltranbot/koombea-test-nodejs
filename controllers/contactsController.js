const Contact = require("../models/Contact")

exports.getContacts = async (req, res) => {
  const page = req.query.page ? +req.query.page : 0
  console.log('size', req.query.size);
  const limit = req.query.size ? +req.query.size : 10
  const contacts = await Contact.findAndCountAll({
    where: { user_id: req.auth.user.id },
    limit: limit,
    offset: +page * +limit
  })
  const response = getPagingData(contacts, page, limit)
  return res.status(200)
    .send(response)
}

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: contacts } = data
  const currentPage = page ? +page : 0
  const totalPages = Math.ceil(totalItems / limit)
  return { totalItems, contacts, totalPages, currentPage };
};
