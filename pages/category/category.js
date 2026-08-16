const { commands } = require('../../utils/data')
Page({ data:{ tabs:['全部','基础操作','分支管理','远程仓库','高级操作'], list:commands.filter(c=>c.type==='Git') }, onShow(){ this.getTabBar()?.setData({selected:1}) }, goDetail(e){ wx.navigateTo({url:'/pages/detail/detail?name='+encodeURIComponent(e.currentTarget.dataset.name)}) } })
