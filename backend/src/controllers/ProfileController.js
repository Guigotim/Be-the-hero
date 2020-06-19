const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const ond_id = request.headers.authorization;

        const incidents = await connection('incidents')
            .select('*')
            .where('ong_id', ond_id);

        return response.json(incidents);
    }
}