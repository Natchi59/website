"use strict";(self.webpackChunksheweny_website=self.webpackChunksheweny_website||[]).push([[807],{9570:(e,n,o)=>{o.r(n),o.d(n,{data:()=>t});const t={key:"v-fffb8e28",path:"/guide/",title:"Installing Node.js and sheweny",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Installing Node.js",slug:"installing-node-js",children:[{level:3,title:"Installing on Windows",slug:"installing-on-windows",children:[]},{level:3,title:"Installing on macOS",slug:"installing-on-macos",children:[]},{level:3,title:"Installing on Linux",slug:"installing-on-linux",children:[]}]},{level:2,title:"Preparing the essentials",slug:"preparing-the-essentials",children:[{level:3,title:"Setting up a project folder",slug:"setting-up-a-project-folder",children:[]},{level:3,title:"Opening the command prompt",slug:"opening-the-command-prompt",children:[]},{level:3,title:"Using the command prompt",slug:"using-the-command-prompt",children:[]}]},{level:2,title:"Installing sheweny",slug:"installing-sheweny",children:[]},{level:2,title:"Installing a linter",slug:"installing-a-linter",children:[]}],filePathRelative:"guide/README.md",git:{contributors:[]}}},4818:(e,n,o)=>{o.r(n),o.d(n,{default:()=>D});var t=o(6252);const a=(0,t._)("h1",{id:"installing-node-js-and-sheweny",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#installing-node-js-and-sheweny","aria-hidden":"true"},"#"),(0,t.Uk)(" Installing Node.js and sheweny")],-1),i=(0,t._)("h2",{id:"installing-node-js",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#installing-node-js","aria-hidden":"true"},"#"),(0,t.Uk)(" Installing Node.js")],-1),l=(0,t.Uk)("To use sheweny, you'll need to install Node.js. You can do so by going to "),r={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},s=(0,t.Uk)("the Node.js website"),d=(0,t.Uk)("."),h=(0,t._)("div",{class:"custom-container warning"},[(0,t._)("p",{class:"custom-container-title"},"WARNING"),(0,t._)("p",null,[(0,t.Uk)("If you "),(0,t._)("em",null,"do"),(0,t.Uk)(" have Node installed, but it's an older version (i.e. anything below 16.6.0), then you must upgrade to the latest version. sheweny V1 requires Node v16.6.0 or higher.")])],-1),u=(0,t._)("h3",{id:"installing-on-windows",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#installing-on-windows","aria-hidden":"true"},"#"),(0,t.Uk)(" Installing on Windows")],-1),c=(0,t.Uk)("If you're developing on Windows, it's as simple as installing any other program. Go to "),p={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},g=(0,t.Uk)("the Node.js website"),m=(0,t.Uk)(", download the latest version, open up the downloaded file, and follow the steps from the installer."),y=(0,t._)("h3",{id:"installing-on-macos",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#installing-on-macos","aria-hidden":"true"},"#"),(0,t.Uk)(" Installing on macOS")],-1),f=(0,t.Uk)("If you're developing on macOS, you have a few options. You can go to "),w={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},k=(0,t.Uk)("the Node.js website"),b=(0,t.Uk)(", download the latest version, double click the package installer, and follow the instructions. You can also use a package manager like "),v={href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"},_=(0,t.Uk)("Homebrew"),U=(0,t.Uk)(" with the command "),j=(0,t._)("code",null,"brew install node",-1),I=(0,t.Uk)("."),x=(0,t._)("h3",{id:"installing-on-linux",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#installing-on-linux","aria-hidden":"true"},"#"),(0,t.Uk)(" Installing on Linux")],-1),N=(0,t.Uk)("If you're developing on Linux, you may consult "),W={href:"https://nodejs.org/en/download/package-manager/",target:"_blank",rel:"noopener noreferrer"},O=(0,t.Uk)("this page"),S=(0,t.Uk)(" to determine how you should install Node. On that note, there's a possibility that you may already have Node installed on your machine (e.g., if you're using a VPS). You can check the installed version by running the "),q=(0,t._)("code",null,"node -v",-1),T=(0,t.Uk)(" command. If it outputs something like "),L=(0,t._)("code",null,"v16.6.0",-1),C=(0,t.Uk)(" or higher, then you're good to go! Otherwise, take a look at "),Y={href:"https://nodejs.org/en/download/package-manager/",target:"_blank",rel:"noopener noreferrer"},P=(0,t.Uk)("this page"),A=(0,t.Uk)(" for instructions on installing Node on your OS."),H=(0,t.uE)('<hr><h2 id="preparing-the-essentials" tabindex="-1"><a class="header-anchor" href="#preparing-the-essentials" aria-hidden="true">#</a> Preparing the essentials</h2><p>To use sheweny, you&#39;ll need to install it via npm (Node&#39;s package manager). npm comes with every Node installation, so you don&#39;t have to worry about installing that. However, before you install anything, you should set up a new project folder.</p><h3 id="setting-up-a-project-folder" tabindex="-1"><a class="header-anchor" href="#setting-up-a-project-folder" aria-hidden="true">#</a> Setting up a project folder</h3><p>Like any other project, you should have a dedicated folder to keep it organized and manageable.</p><p>Navigate to a place on your machine that&#39;s easy to find and reopen in the future for convenience purposes. Create a new folder like you normally would (depending on your OS, you can use <code>mkdir project-name</code> inside your terminal). If you already have a name you want to use for your bot, you can use that as the folder name. Otherwise, you may name it something like <code>discord-bot</code> for the time being (or anything else you have in mind).</p><p>Once you&#39;re done making the folder, open it up (depending on your OS, you can use <code>cd project-name</code> inside your terminal).</p><h3 id="opening-the-command-prompt" tabindex="-1"><a class="header-anchor" href="#opening-the-command-prompt" aria-hidden="true">#</a> Opening the command prompt</h3><p>If you&#39;re on Linux, you can quickly open up the terminal with <code>Ctrl + Alt + T</code>.</p><p>If you&#39;re on Windows and aren&#39;t familiar with opening up the command prompt, do the following:</p><ol><li>Open your bot project folder.</li><li>Hold down the <code>Shift</code> key and right-click inside the folder.</li><li>Choose the &quot;Open command window here&quot; option.</li></ol><p>It should then open up a window with a black background. It&#39;s a bit unattractive, but we&#39;ll talk about using better, more powerful tools in a different part of the guide.</p><h3 id="using-the-command-prompt" tabindex="-1"><a class="header-anchor" href="#using-the-command-prompt" aria-hidden="true">#</a> Using the command prompt</h3><p>With the command prompt open, run the <code>node -v</code> command to make sure you&#39;ve successfully installed Node.js. If you see something like <code>v16.6</code> or higher, great! If not, go back and try installing again.</p><p>The next command you&#39;ll be running is <code>npm init</code>. This command creates a <code>package.json</code> file for you, which will keep track of the dependencies your bot uses and other info. If you&#39;re a bit confused by that, you can ignore it for the time being.</p><p>The <code>npm init</code> command will ask you a sequence of questions–you should fill them out as you see fit. If you&#39;re not sure of something or want to skip it as a whole, leave it blank and press enter.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Want to get started quickly? Use <code>npm init -y</code> to have it fill out everything for you!</p></div><p>Once you&#39;re done with that, you&#39;re ready to install sheweny!</p><hr><h2 id="installing-sheweny" tabindex="-1"><a class="header-anchor" href="#installing-sheweny" aria-hidden="true">#</a> Installing sheweny</h2><p>Now that you&#39;ve installed Node.js and know how to open up your console and run commands, you can finally install sheweny!</p><p>To install sheweny, run the <code>npm install sheweny</code>. This can take a bit of time but should finish fairly quickly.</p><p>And that&#39;s it! With all the necessities installed, you&#39;re almost ready to start coding your bot.</p><hr><h2 id="installing-a-linter" tabindex="-1"><a class="header-anchor" href="#installing-a-linter" aria-hidden="true">#</a> Installing a linter</h2>',25),R=(0,t.Uk)("While you are coding, you may find that you run into numerous syntax errors or code in an inconsistent style. You should install a linter to ease these troubles. While code editors generally can point out syntax errors, with a linter, you can coerce your coding to be in a specific style as you define in the configuration. While this is not required, it's advisable. "),E=(0,t.Uk)("Click here for the linter guide!"),D={render:function(e,n){const o=(0,t.up)("OutboundLink"),D=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[a,i,(0,t._)("p",null,[l,(0,t._)("a",r,[s,(0,t.Wm)(o)]),d]),h,u,(0,t._)("p",null,[c,(0,t._)("a",p,[g,(0,t.Wm)(o)]),m]),y,(0,t._)("p",null,[f,(0,t._)("a",w,[k,(0,t.Wm)(o)]),b,(0,t._)("a",v,[_,(0,t.Wm)(o)]),U,j,I]),x,(0,t._)("p",null,[N,(0,t._)("a",W,[O,(0,t.Wm)(o)]),S,q,T,L,C,(0,t._)("a",Y,[P,(0,t.Wm)(o)]),A]),H,(0,t._)("p",null,[R,(0,t.Wm)(D,{to:"/preparations/setting-up-a-linter.html"},{default:(0,t.w5)((()=>[E])),_:1})])],64)}}}}]);