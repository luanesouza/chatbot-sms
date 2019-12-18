const axios = require('axios')
const accountSid = 'account-sid';
const authToken = 'autho-token';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: '',
     from: 'twilio-number',
     to: 'my-phone-number'
   })
  .then(message => console.log(message.sid));

  const messageInfo = async () => {
      let res = await axios.get("https://api.twilio.com/2010-04-01/Accounts/AC18d9aa2a27cae73e7b15d8e17f64bc44/Messages.json");
      console.log(res)
      // let { data } = res.data;
  };
  messageInfo()
