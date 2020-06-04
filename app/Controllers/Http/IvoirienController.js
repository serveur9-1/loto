'use strict'

const Helpers = use ('Helpers')
const Database = use('Database')
const Bonheur = use('App/Models/Bonheur')
class IvoirienController {
    async ShowNuméros({view}) {

        const ivoiriens = await Bonheur.all();
      
        //Fetch all user's thematiques
        return view.render('listIvoirien', { ivoiriens: ivoiriens.rows})

    }
    async ShowAddNuméros({view}) {

        // Fetch all user's thematiques
        return view.render('AddIvoirien')
    }
    async create({ request, response, session, auth, view}) {

        const ivoirien = new Bonheur;
        ivoirien.num_machine = request.input('num_machine');
        ivoirien.num_gagnant = request.input('num_gagnant');
        ivoirien.heure = request.input('Heure');
        ivoirien.date = request.input('Date');

        await ivoirien.save();

        // Fetch a job
        const ivoiriens = await Bonheur.all();

        return view.render('listIvoirien', { ivoiriens: ivoiriens.rows })

    }
    async delete({ response, session, params}) {
        const id = params.id;
        const ivoirien = await Bonheur.find(id);
        await ivoirien.delete();
    
        session.flash({ notification: 'Successfully delete!' });
        response.redirect('/listIvoirien')
    }
    async edit({ params, view }) {
        const ivoirien = await Bonheur.find(params.id);
        return view.render('modif', { ivoirien: ivoirien });
    }
    async update ({ response, request, session, params }) {
        const ivoirien = await Bonheur.find(params.id);

        ivoirien.num_machine = request.all().num_machine;
        ivoirien.num_gagnant = request.all().num_gagnant;
        ivoirien.heure = request.all().heure;
        ivoirien.date = request.all().date;

        await ivoirien.save();

        session.flash({ message: 'Your job has been updated. '});
        return response.redirect('/listIvoirien');
    }
    
}

module.exports = IvoirienController
