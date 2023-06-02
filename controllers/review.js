module.exports = {
    new: newReview,
    index
}

function newReview(req, res ) {
    res.render('newReview/new', {errorMsg: ''});
}

function index(req, res) {
    res.render('review');
}