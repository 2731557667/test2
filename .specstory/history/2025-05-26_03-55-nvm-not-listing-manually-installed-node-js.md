<!-- Generated by SpecStory -->

# nvm not listing manually installed Node.js (2025-05-26 11:55:29)

_**User**_

win 安装了node-v22.16.0-x64，为什么nvm list没有显示


C:\Users\q2731557667>nvm list

    18.12.1
    16.14.2
  * 14.19.3 (Currently using 64-bit executable)

C:\Users\q2731557667>

---

_**Assistant**_

你在 Windows 上安装了 node-v22.16.0-x64，但在运�?nvm list 时没有显�?22.16.0，原因可能有以下几种�?
### 1. 你是手动安装�?node-v22.16.0-x64
如果你是直接�?Node.js 官网下载安装包安装的（比�?MSI �?zip），而不是通过 nvm 安装的，那么 nvm 是不会识别和管理这个版本的。nvm 只会显示通过 nvm install 安装�?Node.js 版本�?
### 2. nvm �?node 版本目录没有 22.16.0
nvm for Windows 的默�?node 版本目录在：
```
C:\Users\你的用户名\AppData\Roaming\nvm
```
你可以去这个目录下看看有没有 nodejs\22.16.0 �?22.16.0 这样的文件夹。如果没有，说明 nvm 没有管理这个版本�?
### 3. 解决办法
如果你想�?nvm 管理 22.16.0 版本，请�?nvm 安装�?
```powershell
nvm install 22.16.0
nvm use 22.16.0
```

安装后再运行 nvm list 就会显示出来�?
### 4. 检�?node 版本
你可以用以下命令查看当前 node 版本�?```powershell
node -v
```
如果显示的是 v22.16.0，说明你当前用的是系统全局 node，而不�?nvm 管理�?node�?
---

**总结�?*
- nvm 只管理用 nvm install 安装�?node 版本�?- 手动安装�?node 不会出现�?nvm list 里�?- 建议卸载手动安装�?node，然后用 nvm install 22.16.0 安装�?
如需详细操作指导请告知！

---

