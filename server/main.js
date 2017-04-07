import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Factory.define('fakeUser', Meteor.users, {
  'profile': {
    'firstName': function() { return faker.name.firstName(); },
    'lastName': function() { return faker.name.lastName(); },
    'role': function() { return 'user'; }
  },
  'emails': function() {
    return [
      {
        'address': faker.internet.email(),
        'verified': true
      }
    ];
  }
});

_.times(10, function() { return Factory.create('fakeUser'); });

Factory.define('fakeTeam', Teams, {
  'name': function() { return faker.company.companyName(); },
  // 'leads': [],
  'leads': function() {
    return [ {'userId': Factory.get('fakeUser'), 'role': 'lead'} ];
   }
});

_.times(10, function() { return Factory.create('fakeTeam'); });
