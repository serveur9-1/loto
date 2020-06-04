'use strict'

const Helpers = use ('Helpers')
const Database = use('Database')
const Gagnant = use('App/Models/Gagnant')
class GhanaController {
    async ShowNuméro({view}) {
        const ghaneens = await  Gagnant.all();

        //console.log(ghaneens)
        return view.render('listGhana', { ghaneens: ghaneens.rows})
        

    }
    async ShowAddNuméro({view}) {

        // Fetch all user's thematiques
        return view.render('AddGhana')
    }
    create({ request, response, session, auth, view}) {

        const ghaneen = new Gagnant;

        ghaneen.num_machine = request.input('num_machine');
        ghaneen.num_gagnant = request.input('num_gagnant');
        ghaneen.heure = request.input('Heure');
        ghaneen.date = request.input('Date');

        ghaneen.save();

        // Fetch a job
        //const ivoiriens = await Gagnant.all();

        //console.log(ivoiriens)

        //return view.render('listGhana', { ivoiriens: ivoiriens.rows })
        return response.route('Gagnant.ghaneen')

    }
    async store({request, response, session, auth, view}) {

        // Create a job
        const ghaneen = new Gagnant;
        ghaneen.num_machine = request.input('num_machine');
        ghaneen.num_gagnant = request.input('num_gagnant');
        ghaneen.heure = request.input('Heure');
        ghaneen.date = request.input('Date');

        await ghaneen.save();

        // Fetch a job
        //const ghaneens = await Gagnant.all();

        //return view.render('listGhana')
        return response.route('Gagnant.ghaneen')

    }
    
    async delete({ response, session, params}) {
        const id = params.id;
        const ghanéen = await Gagnant.find(id);
        await ghanéen.delete();
    
        session.flash({ notification: 'Successfully delete!' });
        response.redirect('/listGhana')
    }
}

module.exports = GhanaController
