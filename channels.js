var pull = require('pull-stream')
var repl = require('repl')
var ssbClient = require('ssb-client')
ssbClient(function (err, sbot) {
  // open the repl session
  var replServer = repl.start({})
  replServer.context.sbot = sbot

  // stream all messages for all keypairs.
  pull(
    sbot.createFeedStream({ limit: 10 }),
    pull.collect(function (err, ary) {
      replServer.context.allMessages = ary
    })
  )

  // Get All channels
  var filter = {
    dest: `#${channel}`,
    value: {
      timestamp: typeof lt === 'number' ? {$lt: lt, $gt: 0} : {$gt: 0}
    }
  }


  pull(
    sbot.createFeedStream({ limit: 10 }),
    pull.collect(function (err, ary) {
      replServer.context.allMessages = ary
    })
  )



  // TODO: How do you get this to return and not hang forever?
})
