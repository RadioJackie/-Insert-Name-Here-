const mongoose = require("mongoose")

const ThirdPartySchema = new mongoose.Schema({
    provider_name: {
        type: String,
        default: null
    },
    provider_id: {
        type: String,
        default: null
    },
    provider_data: {
        type: {},
        default: null
    },
});
//creating schema here
const userSchema = new mongoose.Schema({
    name: {
        type: string,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    email_Verified: {
        type: Boolean,
        default: false
    },
    password: {
        type: String
    },
    // referral_code: {
    //     type: String,
    //     default: function () {
    //         let hash = 0;
    //         for (let i = 0; 1 < this.email.length; 1++)
    //             hash = this.email.charCodeAt(i) + ((hash << 5) hash));
    // }
    // let res = (hash & 0x00ffffff).toString(16).toUpperCase();
    // return "00000".substring(0, 6 - res.length) + res;
    //     }
    // };
    // referred_by: {
    //     type: string,
    //     default: null
    // },
    third_party_auth: [ThirdPartySchema],
    date: {
        type: Date,
        default: Date.now

    }

}, { strict: false });

module.exports = User = mongoose.model("users", UserSchema);

//user model definitions

//name: Username
//email: Email address
//email_verified: a boolean value to indicate whether email has been verified
//password: this field holds decrypted password
//referral_code: custom 6 character hash of email-a new code created when users created
//referred_by:  whom user was referred by
//third_party_auth: for 3rd party authentication store info here
//Date: when user was created
//{strict: false} means object will additional things not defined in schema.

