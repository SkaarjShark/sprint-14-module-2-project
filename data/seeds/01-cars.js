// STRETCH
exports.seed = function (knex) {
    return knex('cars').truncate()
        .then(function() {
            return knex('cars').insert([
                { model: 'Civic', make: 'Honda', mileage: 10000, vin: 'JNKCV51E03M018631' },
                { model: 'Escape', make: 'Ford', mileage: 15000, vin: 'CRSOK97L67O123456' },
                { model: 'Jetta', make: 'Volkswagen', mileage: 25000, vin: 'WXYZQ42R10B286430' }
            ])
        })
}