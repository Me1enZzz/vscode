const { commands } = require('../../utils/data')
Page({ data:{ cmd:{} }, onLoad(q){ this.setData({cmd:commands.find(c=>c.name===decodeURIComponent(q.name||'git merge')) || commands[7]}) } })
