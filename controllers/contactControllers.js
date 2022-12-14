// @desc Get all contacts 
// @route GET //api/contacts
// @access public


const getContact = (req, res) => {
    res.status(200).json({ message: "Get all contacts" })
}



// @desc create all contacts 
// @route post //api/contacts
// @access public


const postContact = (req, res) => {
    console.log(req.body)
    const {name, age, phone} = req.body
    if(!name || !age || !phone){
        res.status(400).json({message:"required fileds are missing"})
        // throw new Error("All fileds are mandatory")
    }
    res.status(200).json({ message: `Create all contacts ${req.params.id}` });
}



// @desc update all contacts 
// @route PUt //api/contacts
// @access public


const updateContact = (req, res) => {
    res.status(200).json({ message: "Update all contacts" });
}



// @desc delete all contacts 
// @route delete //api/contacts
// @access public


const deleteContact = (req, res) => {
    res.status(200).json({ message: `delete all contacts ${req.params.id}` });
}

module.exports = { getContact, postContact, updateContact, deleteContact }