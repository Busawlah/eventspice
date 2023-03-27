const Role = {
    ADMIN: 'admin',
    USER: 'basic'
}

module.exports = {
    ROLE: ROLE,
    user: [
        { id: req.params.id, name: req.body.name, role: ROLE.BASIC},
        { id:req.params.id, name:req.body.name, role: ROLE.ADMIN}
    ]
}