let chai = require('chai')
let chaiHttp = require('chai-http');
const should = chai.should()
const server = require('../index')

chai.use(chaiHttp);
console.log(">>>>>>>",server)
describe("GET refdata",() => {
    describe("request to /refdata", () => {
        it("should return all ref data", (done) => {
            chai.request('http://localhost:3000').get('/refdata').end((err, res) => {
                res.should.have.status(200)
                res.body.should.have.property('locations')
                res.body.locations.forEach(loc => {
                    loc.should.have.keys(['desc','code'])
                })
                res.body.should.have.property('commodities')
                res.body.should.have.property('counterparties')
                done()
            })
        })
    })
})