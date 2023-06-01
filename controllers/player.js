module.exports = {
    new: newPlayer,
    index

}

function newPlayer(req, res ) {
    res.render ('Player/')
}

function index(req,res )
{
res.render('index')
}