require('dotenv').config()

const tmi = require('tmi.js')

const regexpCommand = new RegExp(/^!([a-zA-Z0-9]+)(?:\W+)?(.*)?/)

// const commands = {
//   upvote: {
//     response: (argument) => `Successfully upvoted ${argument}`,
//   },
//   id: {
//     response: 'Valorant: KazeCrowz#1217',
//   },
// }

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

// client.on('message', async (channel, context, message) => {
//   const isNotBot =
//     context.username.toLowerCase() !==
//     process.env.TWITCH_BOT_USERNAME.toLowerCase()
//
//   if (!isNotBot) return
//
//   const [raw, command, argument] = message.match(regexpCommand)
//
//   const { response } = commands[command] || {}
//
//   if (typeof response === 'function') {
//     client.say(channel, response(argument))
//   } else if (typeof response === 'string') {
//     client.say(channel, response)
//   }
//   console.log(`${context['display-name']}: ${message}`)
// })

client.on('message', (channel, tags, message, self) => {
  // if (self) return
  //
  // if (message.toLowerCase() === '!id') {
  //   client.say(channel, 'valorant: KazeCrowz#1217')
  // }
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
})
