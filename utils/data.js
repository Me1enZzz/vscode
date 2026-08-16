const commands = [
  { name:'git add', desc:'暂存文件到索引', type:'Git', icon:'git', cat:'基础操作', group:'A' },
  { name:'git commit', desc:'提交暂存区文件', type:'Git', icon:'git', cat:'基础操作', group:'A' },
  { name:'git branch', desc:'查看、创建或删除分支', type:'Git', icon:'git', cat:'分支管理', group:'B' },
  { name:'git bisect', desc:'通过二分查找定位问题', type:'Git', icon:'git', cat:'基础操作', group:'B' },
  { name:'git clone', desc:'克隆远程仓库到本地', type:'Git', icon:'git', cat:'远程仓库', group:'C' },
  { name:'git checkout', desc:'切换分支或恢复工作区文件', type:'Git', icon:'git', cat:'分支管理', group:'C' },
  { name:'git cherry-pick', desc:'选择特定提交应用到当前分支', type:'Git', icon:'git', cat:'分支管理', group:'C' },
  { name:'git merge', desc:'合并指定分支到当前分支', type:'Git', icon:'git', cat:'分支管理', group:'M', detail:'合并指定分支到当前分支。将目标分支的修改合并到当前分支。', usage:'git merge <branch-name>', example:'git merge main' },
  { name:'git reset', desc:'撤销提交历史，回滚到指定状态', type:'Git', icon:'git', cat:'高级操作', group:'R' },
  { name:'git revert', desc:'安全撤销提交，通过新提交来撤销', type:'Git', icon:'git', cat:'高级操作', group:'R' },
  { name:'git restore', desc:'恢复工作区文件或索引中的文件', type:'Git', icon:'git', cat:'基础操作', group:'R' },
  { name:'git reset --soft', desc:'保留修改和暂存，撤销提交', type:'Git', icon:'git', cat:'高级操作', group:'R' },
  { name:'git stash', desc:'临时保存工作区修改', type:'Git', icon:'git', cat:'基础操作', group:'S' },
  { name:'npm install', desc:'安装项目依赖', type:'npm', icon:'npm', cat:'包管理器', group:'N' },
  { name:'npm init', desc:'初始化一个新的 npm 项目', type:'npm', icon:'npm', cat:'包管理器', group:'N' },
  { name:'ls -la', desc:'列出所有文件（包含隐藏）', type:'Linux', icon:'linux', cat:'基础命令', group:'L' },
  { name:'tar -czf', desc:'创建 gzip 压缩包', type:'Linux', icon:'shell', cat:'压缩归档', group:'T' },
  { name:'docker run', desc:'运行 Docker 容器', type:'Docker', icon:'shell', cat:'容器', group:'D' },
  { name:'grep -r', desc:'递归搜索文件内容', type:'Linux', icon:'shell', cat:'文本处理', group:'G' }
]
module.exports = { commands }
