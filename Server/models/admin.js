const express = require("express");
const { Schema, model } = require("mongoose");

const AdminSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  role:{
    
    type: String ,
    required: true,
    enum :["admin"]
  }

});

module.exports = model("Admin", AdminSchema);
