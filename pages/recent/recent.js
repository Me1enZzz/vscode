const { commands } = require('../../utils/data')
Page({ data:{ list:[] }, onShow(){ this.getTabBar()?.setData({selected:3}); const times=['2分钟前','10分钟前','30分钟前','1小时前','2小时前','昨天','昨天']; this.setData({list:['git merge','git reset','npm init','git clone','ls -la','docker run','grep -r'].map((n,i)=>({...commands.find(c=>c.name===n),time:times[i]}))}) } })
