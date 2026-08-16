Component({
  data:{ selected:0, tabs:[
    { path:'/pages/index/index', text:'首页', icon:'◆' },
    { path:'/pages/category/category', text:'分类', icon:'▦' },
    { path:'/pages/favorites/favorites', text:'收藏', icon:'★' },
    { path:'/pages/recent/recent', text:'最近', icon:'◷' }
  ]},
  methods:{ switchTab(e){ wx.switchTab({ url:e.currentTarget.dataset.path }) } }
})
