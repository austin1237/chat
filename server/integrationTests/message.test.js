const request = require("supertest");
const server = require("../server.js");
const expect = require("chai").expect;

describe("GET /messages", () => {
    it("return valid messages", function(done) {
        request(server)
        .get("/messages")
        .set("Accept", "application/json")
        .expect(200)
        .end(function(err, res) {
            if (err) return done(err);
            res.body.forEach(message => {
                expect(message.name).to.be.a("string");
                expect(message.text).to.be.a("string");
            });
            done();
        });
    });
});
