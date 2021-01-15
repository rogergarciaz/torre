// for a full working demo of Netlify Identity + Functions, see https://netlify-gotrue-in-react.netlify.com/

const fetch = require('node-fetch');

const handler = async function (event, context) {
  if (!context.clientContext && !context.clientContext.identity) {
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: JSON.stringify({
        msg: 'No identity instance detected. Did you enable it?',
      }),
    };
  }
  const { identity, user } = context.clientContext;
  try {
    const location = event.queryStringParameters.search;
    const response = await fetch(`http://api.positionstack.com/v1/forward?access_key=7d07d8c52f4021484fe4d379d67c5082&query=${location}`,
      {
        method : 'GET'
      }
    );
    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText };
    }
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify({ identity, user, msg: data }),
    };
  } catch (error) {
    // output to netlify function log
    console.error(error);
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: JSON.stringify({ msg: error.message }),
    };
  }
};

module.exports = { handler };
