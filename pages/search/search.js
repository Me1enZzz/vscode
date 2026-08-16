const { commands } = require('../../utils/data')
Page({ data:{ q:'撤销提交', list:[] }, onLoad(){ this.setData({ list: commands.filter(c=>['git reset','git revert','git restore','git reset --soft','git stash'].includes(c.name)) }) }, goDetail(e){ wx.navigateTo({url:'/pages/detail/detail?name='+encodeURIComponent(e.currentTarget.dataset.name)}) } })
