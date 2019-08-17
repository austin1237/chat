expect = require('chai').expect;
validator = require('../validator');

describe("validator", () =>{
    describe("validateMessage", () =>{

        it("if name is not included the proper error is thrown", ()=>{
            mockMessage ={
                name: "",
                text: "this is a test"
            }
            expect(()=>{validator.validateMessage(mockMessage)}).to.throw(validator.invalidName);
        })


        it("if text is not included the proper error is thrown", ()=>{
            mockMessage ={
                name: "testName",
                text: ""
            }
            expect(()=>{validator.validateMessage(mockMessage)}).to.throw(validator.invalidTest);
        })

        it("properly formatted message shouldn't throw an error", () =>{
            mockMessage ={
                name: "testName",
                text: "this is a test"
            }
            expect(()=>{validator.validateMessage(mockMessage)}).to.not.throw();
        })

    })
})