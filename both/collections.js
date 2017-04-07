import SimpleSchema from 'simpl-schema';

Schemas = {};

Teams = new Mongo.Collection('Volunteers.teams');

Schemas.Teams = new SimpleSchema({
  name: {
    type: String,
  },
  leads: {
    type: Array,
    optional: true,
  },
  "leads.$": {
    type: Object,
  },
  "leads.$.userId": {
    type: String,
  },
  "leads.$.role": {
    type: String,
  }
});

Teams.attachSchema(Schemas.Teams);
