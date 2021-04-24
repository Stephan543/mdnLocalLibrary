
var BookInstance = require('../models/bookinstance');

// Display list of all BookInstances
exports.bookinstance_list = function(req, res){
    res.send('NOT IMPLEMENTED: BookInstance list');
};

// Display detail for a specific BookInstance
exports.bookinstance_detail = function(req, res){
    res.send('NOT IMPLEMENTED: BookInstance create GET' + req.params.id);
};

// Display BookInstance create form on GET
exports.bookinstance_create_get = function(req, res){
    res.send('NOT IMPLEMENTED: BookInstance create GET');
};

// Handle BookInstance create on POST
exports.bookinstance_create_post = function(req, res){
    res.send('NOT IMPLEMENTED: BookInstance create POST');
};

// Handle BookInstance delete on GET
exports.bookinstance_delete_GET = function(req, res){
    res.send('NOT IMPLEMENTED: BookInstance delete GET');
};

// Handle BookInstance delete on POST
exports.bookinstance_delete_post = function(req, res){
    res.send('NOT IMPLEMENTED: BookInstance delete POST');
};

// Display BookInstance update form on GET
exports.bookinstance_update_get = function(req, res){
    res.send('NOT IMPLEMENTED: BookInstance update GET');
};

// Handle bookinstance update on POST
exports.bookinstance_update_post = function(req, res){
    res.send('NOT IMPLEMENTED: BookInstace update POST');
};
