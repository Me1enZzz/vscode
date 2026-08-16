const { commands } = require('../../utils/data')
Page({ data:{ hot:commands.slice(4,7), recent:[commands[7]] }, onShow(){ this.getTabBar()?.setData({selected:0}) }, goSearch(){ wx.navigateTo({url:'/pages/search/search?q=撤销提交'}) }, goDetail(e){ wx.navigateTo({url:'/pages/detail/detail?name='+encodeURIComponent(e.currentTarget.dataset.name)}) } })
