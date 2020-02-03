import { Schema, model, Model, Document, HookNextFunction, SchemaDefinition} from 'mongoose'
import slugify from 'slugify'
import {geocoder} from '../utils/v1/geocoder'
import { Entry } from 'node-geocoder'
import {UserDocument} from '../index'
import { number } from 'prop-types'


const userSchema: Schema = new Schema({
    userId:{
        required:[true,'UserId not passed'],
        type:String
    },
    userName: {
        required:[true,'Username not passed'],
        type:String
    },
    imagesTagged: {
        type: [String],
        default: []
    },
    numberOfImagesTagged: {
        type: Number,
        default: 0
    },
    roles:{
        type:[String],
        enum: ['defaultRole', 'taggerRole'],
        default:'defaultRole'
    }
})



export const UserModel: Model<UserDocument> =  model('User', userSchema);