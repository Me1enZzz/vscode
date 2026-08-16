const { commands } = require('../../utils/data')
Page({ data:{ list:[] }, onShow(){ this.getTabBar()?.setData({selected:2}); this.setData({list:['git commit','npm install','tar -czf','git push','ls -la'].map(n=>commands.find(c=>c.name===n)||{name:n,desc:'推送本地分支到远程仓库',icon:'git'})}) } })
