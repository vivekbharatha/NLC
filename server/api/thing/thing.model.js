'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './thing.events';

var ThingSchema = new mongoose.Schema({
  barId: String,
  goingIds: Array
});

registerEvents(ThingSchema);
export default mongoose.model('Thing', ThingSchema);
