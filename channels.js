var ssbClient = require('ssb-client')
var ssb_backlinks = require('ssb-backlinks')

var pull = require('pull-stream')

ssbClient(function (err, sbot) {

  sbot.use(ssb_backlinks)

  // Get all channels
  pull(
    sbot.backlinks({
      query: [
        {$filter: {
          dest: {$prefix: '#'}
        }}
      ]
    }),
    pull.drain(msg => {
      console.log(msg)
    })
  )
})

