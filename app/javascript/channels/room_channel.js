import consumer from "./consumer"

consumer.subscriptions.create("RoomChannel", {
  connected() {
    console.log('Checking connection from the room_channel.js file.')
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    $('#message_holder').append('<div class="message">' + data.content + '</div>')
    console.log(data.content)
    console.log(data)
    // Called when there's incoming data on the websocket for this channel
  }
});

// To clear text box after subitting messages
var submit_messages;

$(document).on('turbolinks:load', function () {
  submit_messages()
})

submit_messages = function () {

  $('#message_content').on('keydown', function (event) {

    if(event.keyCode === 13) {

      $('input').click()
      event.target.value = ''
      event.preventDefault()
      console.log('yes we hit enter!')

    }
  })
}