const ContactService = require("../services/contact.service");
const MongoDB = require("../utils/mongodb.util");
const ApiError = require("../api-error");

//Create and Save a new Contact
exports.create = async (req, res, next) => {
    if(!req.body?.name)
        return next(new ApiError(400, "Name can not be empty"));
    try {
        const contactService = new ContactService(MongoDB.client)
        const doc = await contactService.create(req.body)
        res.json(doc)
    } catch (err) {
        return next(new ApiError(500, "An error occurred while creating the contact"));
    }
};