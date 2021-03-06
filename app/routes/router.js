require('app/routes/todos_route');

/* 
  The route matching behavior of this
  application.
  
  The string argument will be upcased,
  and have 'Route' appended. A matching
  constant will be looked up on your
  application's namespace.

  So, for the routes below to work we
  have to define
    Todos.TodosRoute
    Todos.AllTodosRoute
    Todos.ActiveTodosRoute
    Todos.CompletedTodosRoute

  Loading the application with any of these
  urls will result in the correct data
  being fetched from the store and displayed.

  Entering into these states later will
  cause the correct data to be fetched and displayed.

  Child routes are entered by passing through
  their parents. This means parent routes can be used
  to fetch data and build parent view hierarchies
  and you can be sure this structure will occur whether
  you are starting the application directly at a particular
  route or entering that route at a later point.
*/
Todos.Router.map(function(match) {
  match("/").to("todos", function(match){
    match("/").to("allTodos");
    match("/active").to("activeTodos");
    match("/completed").to("completedTodos");
  });
});
