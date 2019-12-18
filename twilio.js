const axios = require('axios')
// You have been hired to build a small contact center that sends out SMS messages.
// The receiver of the message then replies and the inbound message would have to go through a chatbot.
// var twiml = new Twilio.twiml.MessagingResponse()
//
// console.log(twiml);

// const MessagingResponse =
//   require("twilio").twiml.MessagingResponse;
//
//   app.post("/sms", (req, res) => {
//     const twiml = new MessagingResponse();
//     twiml.message("Thanks for signing up!");
//     res.end(twiml.toString());
//   });

  // const test = async () => {
  //   const here = await axios('https://api.twilio.com/2010-04-01/Accounts/AC18d9aa2a27cae73e7b15d8e17f64bc44/Messages.json')
  //   console.log(here);
  // }

const accountSid = 'AC18d9aa2a27cae73e7b15d8e17f64bc44';
const authToken = 'a64742bc7aaa35b75987ec3777b45056';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Muna my app is cool',
     from: '+14843783093',
     to: '+14439686068'
   })
  .then(message => console.log(message.sid));

  const test = async () => {
      let res = await axios.get("https://api.twilio.com/2010-04-01/Accounts/AC18d9aa2a27cae73e7b15d8e17f64bc44/Messages.json");
      console.log(res)
      // let { data } = res.data;
  };
  test()
