const mydata = require('@playwright/test')
exports.customTest = mydata.test.extend({
    testdataForContactUs: {
        fstName: "koshika",
        lstName: "koka",
        email: "koshika.koka@gmail.com",
        msg: "i am learning playwright using js",
        SuccessMsg: "Thank You for your Message!"

    }
})