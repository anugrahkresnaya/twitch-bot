require('dotenv').config()

const tmi = require('tmi.js')

const regexpCommand = new RegExp(/^!([a-zA-Z0-9]+)(?:\W+)?(.*)?/)

const client = new tmi.Client({
  options: { debug: true },
  connection: {
    reconnect: true,
  },
  channels: ['kazecrowz'],
  identity: {
    username: process.env.TWITCH_BOT_USERNAME,
    password: process.env.TWITCH_OAUTH_TOKEN,
  },
})

client.connect()

client.on('message', (channel, tags, message, self) => {
  if (self || !message.startsWith('!')) return

  const args = message.slice(1).split(' ')
  const command = args.shift().toLowerCase()

  if (command === 'echo') {
    client.say(channel, `@${tags.username}, you said: "${args.join(' ')}"`)
  }

  if (command === 'id') {
    client.say(channel, 'Valorant: KazeCrowz#1217')
  }

  if (command === 'raid') {
    client.say(
      channel,
      'kaze TombRaid kaze TombRaid kaze TombRaid kaze TombRaid kaze TombRaid kaze TombRaid kaze TombRaid kaze TombRaid kaze TombRaid kaze TombRaid kaze TombRaid kaze TombRaid kaze TombRaid'
    )
  }

  if (command === 'website') {
    client.say(channel, 'kazecrowz.dev')
  }
})
