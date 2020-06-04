'use strict'

class LogoutController {
    async logout ({ auth,response }){
        await auth.logout()

        return response.route('/')
    }
}

module.exports = LogoutController
