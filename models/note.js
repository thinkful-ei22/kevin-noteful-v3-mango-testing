'use strict';

const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: String,
  $Date: {createdAt: {$type: Date}},
  $currentDate: {updateddAt: {$type: Date}},
  folderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Folder' }
});

// Add `createdAt` and `updatedAt` fields
noteSchema.set('timestamps', true);

// Customize output for `res.json(data)`, `console.log(data)` etc.
noteSchema.set('toObject', {
  virtuals: true,     // include built-in virtual `id`
  versionKey: false,  // remove `__v` version key
  transform: (doc, ret) => {
    delete ret._id; // delete `_id`
  }
});

module.exports = mongoose.model('Note', noteSchema);
