import chai from 'chai'
import chaiHttp from 'chai-http'
import server from '../server.js'
import Appliance from '../models/Appliance.js'
const should = chai.should()
const expect = chai.expect

chai.use(chaiHttp)

describe('CRUD /api/appliances', () => {
  let apiAppliances
  beforeEach(() => (apiAppliances = '/api/appliances'))

  describe('GET', () => {
    it('should get all appliances', (done) => {
      chai
        .request(server)
        .get(apiAppliances)
        .end((err, res) => {
          expect(res).to.have.status(200)
          expect(res).to.be.an('object')
          done()
        })
    })
  })

  describe('POST', () => {
    it('should not post with empty body', (done) => {
      let data = {
        applianceType: 'washingMachine',
        room: 'kitchen',
        model: '',
        connection: true,
        task: false,
      }

      chai
        .request(server)
        .post(apiAppliances)
        .send(data)
        .end((err, res) => {
          expect(res).to.have.status(500)
          expect(res.body).to.be.a('object')
          expect(res.body).to.have.property('message')
          expect(res.body.message).eql('Something went wrong')

          done()
        })
    })

    it('should post a new appliance', (done) => {
      let data = {
        applianceType: 'washingMachine',
        room: 'kitchen',
        model: 'EFLS527UIW',
        connection: true,
        task: false,
      }

      chai
        .request(server)
        .post(apiAppliances)
        .send(data)
        .end((err, res) => {
          expect(res).to.have.status(201)
          expect(res.status).eql(201)
          expect(res.body).to.be.a('object')
          expect(res.body).to.have.property('appliance')
          expect(res.body.appliance).to.have.property('room')
          expect(res.body.appliance).to.have.property('model').eql('EFLS527UIW')
          expect(res.body.appliance).to.include({
            connection: true,
            task: false,
          })
          expect(res.body.appliance).to.include.all.keys(
            '_id',
            'applianceType',
            'model',
            'room',
            'connection',
            'task'
          )
          done()
        })
    })
  })

  describe('PUT', () => {
    it('should update an appliance', (done) => {
      let data = {
        id: "5fcd27436808ab31d733398f",
        applianceType: 'washingMachine',
        room: 'kitchen',
        model: 'EFLS527UIС',
        connection: true,
        task: false
      }

      chai
        .request(server)
        .put(apiAppliances)
        .send(data)
        .end((err, res) => {
          expect(res).to.have.status(200)
          expect(res.body).to.be.a('array')
          done()
        })
    })
  })
})
