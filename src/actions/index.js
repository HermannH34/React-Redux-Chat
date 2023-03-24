export function setMessages() {
  return fetch(`https://wagon-chat.herokuapp.com/general/messages`)
    .then(response => response.json())
    .then((data) => {
      return {
        type: 'SET_MESSAGES',
        payload: data.messages
      }
    });
}

export function createMessage(content, author) {
  const body = { "author": author, "content": content }

  let channel = 'general'

  return fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then((r) => {
    return {
      type: 'POST_MESSAGE',
      payload: r.json()
    }
  });
}

const channels = ['general', 'react', 'paris']

export function setChannels() {

  return {
    type: 'SET_CHANNELS',
    payload: channels
  }

}

export function selectChannel(channel) {

  return {
    type: 'SELECT_CHANNEL',
    payload: channel
  }

}
