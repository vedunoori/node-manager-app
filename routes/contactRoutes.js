const express = require("express");
const router = express.Router()
const {getContact, postContact, updateContact, deleteContact} = require("../controllers/contactControllers")


router.route("/").get(getContact).post(postContact)
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact)


// router.route("/:id").put(updateContact)


// router.route("/").post(postContact);


// router.route("/:id").delete()

module.exports = router; 