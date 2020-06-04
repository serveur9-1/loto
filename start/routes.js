'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

//Login
Route.on('/').render('auth/login')

//accueil
Route.get('index', 'HomeController.home')

//Inscription
Route.get('/signup', 'UserController.showRegister')
Route.post('/signup', 'UserController.create')


//Deconnexion
Route.get('/logout', async ({ auth, response }) => {
    await auth.logout();
    return response.redirect('/');
});


//Login
Route.get('/login', 'UserController.showLogin')
Route.post('/login', 'UserController.login').validator('LoginUser');


//Route Ivoirien
Route.get('listIvoirien', 'IvoirienController.ShowNuméros')
Route.get('AddIvoirien', 'IvoirienController.ShowAddNuméros')
Route.post('AddIvoirien', 'IvoirienController.create')
Route.get('/listIvoirien/delete/:id', 'IvoirienController.delete').as('Bonheur.delete')
Route.get('/listIvoirien/edit/:id', 'IvoirienController.edit').as('Bonheur.edit')
Route.post('/listIvoirien/update/:id', 'IvoirienController.update').as('Bonheur.update')

//Route Ghana
Route.get('listGhana', 'GhanaController.ShowNuméro')
Route.get('listGhana', 'GhanaController.store').as('Gagnant.ghaneen')
Route.get('AddGhana', 'GhanaController.ShowAddNuméro')
Route.post('AddGhana', 'GhanaController.create')

