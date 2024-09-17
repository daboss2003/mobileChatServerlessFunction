import axios from 'axios';


exports.handler = async (event, context) => {
  const { token, message, userName, messageId } = JSON.parse(event.body);

  const expoMessage = {
    to: token,
    sound: 'default',
    title: userName,
    body: message,
    data: { message, messageId, userName },
    _displayInForeground: true, 
  };
  

  const url = 'https://exp.host/--/api/v2/push/send';

  const headers = {
    Accept: 'application/json',
    'Accept-encoding': 'gzip, deflate',
    'Content-Type': 'application/json',
  };


  try {
    const response = await axios.post(url, expoMessage, {headers});
    return {
    statusCode: 200,
    body: JSON.stringify(response.data),
  };
  }
  catch (err) {
    console.log(err)
  }
 
};