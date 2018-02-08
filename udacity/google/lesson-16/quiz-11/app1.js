/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
let facebookProfile = {
  name: 'Matt Stubenhofer',
  friends: 300,
  messages: ['Cool Man', 'Taking in the Rays'],
  postMessage: function(message) {
    this.messages.push(message);
  },
  deleteMessage: function(index) {
    this.messages.splice(index, 1);
  },
  addFriend: function() {
    this.friends++;
  },
  removeFriend: function() {
    this.friends--;
  }
}
