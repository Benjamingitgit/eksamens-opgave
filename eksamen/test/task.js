const chai = require('chai');
const chaiHttp = require('chai-http');
const { response } = require('express');
const should = require('should')
const mocha = require('mocha');

let server = require('./../index.js');
chai.should()

chai.use(chaiHttp)

describe('test',()=>{
    //test get route
    describe("GET ./index", () =>{
        it("it outa GET the front page", (done)=>{
            chai.request('server')
            .get('./index')
            .end((err, response)=>{
                server.response.should.be.a('array');
                done();
            })
        })
    })
    //test krav 1, at lave en bruger!
});