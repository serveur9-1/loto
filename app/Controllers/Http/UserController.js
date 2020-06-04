'use strict'

const User = use('App/Models/User');
const Helpers = use('Helpers')
class UserController {
    showLogin({view}){
        return view.render('auth.login')
    }
    showRegister({view}){
        return view.render('auth.signup')
    }
    async create({ request, response, auth}) {
        const user = new User
        user.username = request.input('username')
        user.email = request.input('email')
        user.password = request.input('password')

        user.save()
        return response.redirect('/');
    }
    async login({ request, auth, response, session }) {
        const { email, password } = request.all();

        try {
            await auth.attempt(email, password);
            return response.redirect('index');
        } catch (error) {
            session.flash({loginError: 'These credentials do not work.'})
            return response.redirect('/login');
        }
    }
}


module.exports = UserController
