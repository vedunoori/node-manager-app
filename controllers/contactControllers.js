const asyncHandler = require("express-async-handler") // don't  want to use try catch black insted we can use this 

// @desc Get all contacts 
// @route GET //api/contacts
// @access public


const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get all contacts" })
})



// @desc create all contacts 
// @route post //api/contacts
// @access public


const postContact = asyncHandler(async (req, res) => {
    console.log(req.body)
    const { name, age, phone } = req.body
    if (!name || !age || !phone) {
        res.status(400)
        throw new Error("All fileds are mandatory")
    }
    res.status(200).json({ message: `Create all contacts ${req.params.id}` });
})



// @desc update all contacts 
// @route PUt //api/contacts
// @access public


const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Update all contacts" });
})



// @desc delete all contacts 
// @route delete //api/contacts
// @access public


const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `delete all contacts ${req.params.id}` });
})

module.exports = { getContact, postContact, updateContact, deleteContact }