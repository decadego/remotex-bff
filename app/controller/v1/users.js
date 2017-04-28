/**
 * Method	Path	Route Name	Controller.Action
 GET	/users	users	app.controllers.users.index
 GET	/users/new	new_post	app.controllers.users.new
 GET	/users/:id	post	app.controllers.users.show
 GET	/users/:id/edit	edit_post	app.controllers.users.edit
 POST	/users	users	app.controllers.users.create
 PUT	/users/:id	post	app.controllers.users.update
 DELETE	/users/:id	post	app.controllers.users.destroy
 */


exports.index = function* (ctx) {
  ctx.body = "index"
};

exports.new = function* (ctx) {
  ctx.body = "new"
};

exports.create = function* (ctx) {
  ctx.body = "create"
};

exports.show = function* (ctx) {
  ctx.body = "show"
};

exports.edit = function* (ctx) {
  ctx.body = "edit"
};

exports.update = function* (ctx) {
  ctx.body = "update"
};

exports.destroy = function* (ctx) {
  ctx.body = "destroy"
};
