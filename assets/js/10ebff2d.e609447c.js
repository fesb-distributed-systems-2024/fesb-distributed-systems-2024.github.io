"use strict";(self.webpackChunkdistributed_systems=self.webpackChunkdistributed_systems||[]).push([[797],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=p(n),u=i,d=g["".concat(l,".").concat(u)]||g[u]||m[u]||r;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6451:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={},o="Lesson",s={unversionedId:"labs/Lab 1 - Git Basics/Lesson",id:"labs/Lab 1 - Git Basics/Lesson",title:"Lesson",description:"Table of Contents",source:"@site/docs/labs/01.Lab 1 - Git Basics/Lesson.md",sourceDirName:"labs/01.Lab 1 - Git Basics",slug:"/labs/Lab 1 - Git Basics/Lesson",permalink:"/docs/labs/Lab 1 - Git Basics/Lesson",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Homework",permalink:"/docs/labs/Lab 1 - Git Basics/Homework"},next:{title:"Lesson",permalink:"/docs/labs/Lab 2 - Threads/Lesson"}},l={},p=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"<strong>Exercise 1: Creating GitHub Repository</strong>",id:"exercise-1-creating-github-repository",level:2},{value:"<strong>Exercise 2: Cloning Remote Git Repository</strong>",id:"exercise-2-cloning-remote-git-repository",level:2},{value:"<strong>Exercise 3: Adding, Committing and Pushing Code to Remote Repository</strong>",id:"exercise-3-adding-committing-and-pushing-code-to-remote-repository",level:2},{value:"<strong>Step 1 - Stage Changes</strong>",id:"step-1---stage-changes",level:3},{value:"<strong>Step 2 - Commit All Changes</strong>",id:"step-2---commit-all-changes",level:3},{value:"<strong>Step 3 - Push Changes to the Remote Repository</strong>",id:"step-3---push-changes-to-the-remote-repository",level:3},{value:"<strong>Exercise 4: Branching and Merging</strong>",id:"exercise-4-branching-and-merging",level:2},{value:"<strong>Visualize Branches</strong>",id:"visualize-branches",level:3},{value:"<strong>Creating a New Branch</strong>",id:"creating-a-new-branch",level:3},{value:"<strong>Creating Pull Request</strong>",id:"creating-pull-request",level:3},{value:"<strong>Exercise 5: Tags</strong>",id:"exercise-5-tags",level:2},{value:"References",id:"references",level:2}],c={toc:p};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lesson"},"Lesson"),(0,i.kt)("h1",{id:"lab-1-git-basics"},"Lab 1: Git Basics"),(0,i.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#lesson"},"Lesson")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#lab-1-git-basics"},"Lab 1: Git Basics"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#table-of-contents"},"Table of Contents")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#exercise-1-creating-github-repository"},(0,i.kt)("strong",{parentName:"a"},"Exercise 1: Creating GitHub Repository"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#exercise-2-cloning-remote-git-repository"},(0,i.kt)("strong",{parentName:"a"},"Exercise 2: Cloning Remote Git Repository"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#exercise-3-adding-committing-and-pushing-code-to-remote-repository"},(0,i.kt)("strong",{parentName:"a"},"Exercise 3: Adding, Committing and Pushing Code to Remote Repository")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#step-1---stage-changes"},(0,i.kt)("strong",{parentName:"a"},"Step 1 - Stage Changes"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#step-2---commit-all-changes"},(0,i.kt)("strong",{parentName:"a"},"Step 2 - Commit All Changes"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#step-3---push-changes-to-the-remote-repository"},(0,i.kt)("strong",{parentName:"a"},"Step 3 - Push Changes to the Remote Repository"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#exercise-4-branching-and-merging"},(0,i.kt)("strong",{parentName:"a"},"Exercise 4: Branching and Merging")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#visualize-branches"},(0,i.kt)("strong",{parentName:"a"},"Visualize Branches"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#creating-a-new-branch"},(0,i.kt)("strong",{parentName:"a"},"Creating a New Branch"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#creating-pull-request"},(0,i.kt)("strong",{parentName:"a"},"Creating Pull Request"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#exercise-5-tags"},(0,i.kt)("strong",{parentName:"a"},"Exercise 5: Tags"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#references"},"References"))))),(0,i.kt)("h2",{id:"exercise-1-creating-github-repository"},(0,i.kt)("strong",{parentName:"h2"},"Exercise 1: Creating GitHub Repository")),(0,i.kt)("p",null,"To create remote repository on github first go to your account or organization (ex: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fesb-distributed-systems-2024"},"https://github.com/fesb-distributed-systems-2024")," )\nand press Create a new repository button (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/organizations/fesb-distributed-systems-2024/repositories/new"},"https://github.com/organizations/fesb-distributed-systems-2024/repositories/new")," )"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"github-organization",src:n(7446).Z,width:"472",height:"314"})),(0,i.kt)("p",null,"Repository name should follow pattern: ",(0,i.kt)("inlineCode",{parentName:"p"},"{your-username}-lab-{lab-number}")," (ex: ",(0,i.kt)("inlineCode",{parentName:"p"},"ipazanin-lab-01"),") for lab exercises and ",(0,i.kt)("inlineCode",{parentName:"p"},"{your-username}-hw-{hw-number}")," (ex: ",(0,i.kt)("inlineCode",{parentName:"p"},"ipazanin-hw-01"),") for homework assignments."),(0,i.kt)("p",null,"If the repository is not a part of lab practice: ",(0,i.kt)("inlineCode",{parentName:"p"},"{your-username}-{project-name}")," (ex: ",(0,i.kt)("inlineCode",{parentName:"p"},"nknezovic-mothers-project"),")"),(0,i.kt)("p",null,"Description is optional, ",(0,i.kt)("strong",{parentName:"p"},"repository must be PRIVATE"),", and finally initialize repository by adding README file, adding .gitignore (VisualStudio)."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"github-create-new-repository",src:n(8820).Z,width:"301",height:"289"})),(0,i.kt)("h2",{id:"exercise-2-cloning-remote-git-repository"},(0,i.kt)("strong",{parentName:"h2"},"Exercise 2: Cloning Remote Git Repository")),(0,i.kt)("p",null,"To clone remote repository go to created repository on github and press Code > SSH and copy contents."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"github-clone-ssh",src:n(3437).Z,width:"475",height:"247"})),(0,i.kt)("p",null,"Open terminal on desired file system location and use command:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"git-clone {your-repository}")," (ex: ",(0,i.kt)("inlineCode",{parentName:"p"},"git-clone git@github.com:fesb-distributed-systems-2021/ipazanin-lab-01.git"),")"),(0,i.kt)("p",null,"and now you can open cloned repository with Visual Studio Code using:\n",(0,i.kt)("inlineCode",{parentName:"p"},"code {your-repository-name}")," (ex: ",(0,i.kt)("inlineCode",{parentName:"p"},"code ipazanin-lab-01"),")"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"vscode-project",src:n(8162).Z,width:"472",height:"239"})),(0,i.kt)("p",null,"You can learn more about .gitignore file on link ",(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/gitignore"},"https://git-scm.com/docs/gitignore")),(0,i.kt)("h2",{id:"exercise-3-adding-committing-and-pushing-code-to-remote-repository"},(0,i.kt)("strong",{parentName:"h2"},"Exercise 3: Adding, Committing and Pushing Code to Remote Repository")),(0,i.kt)("p",null,"If you have previously created a project, you can copy and paste it to the repository folder or you can start creating a new project in the git folder."),(0,i.kt)("p",null,"To check status of your project, open terminal in repository folder and use commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git status\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"git-status",src:n(9845).Z,width:"554",height:"176"})),(0,i.kt)("p",null,"Tells me I have one un-staged file changed (README.md)"),(0,i.kt)("p",null,"Once you are satisfied with your code changes, you must commit them."),(0,i.kt)("p",null,'The process of permanently "saving" changes is divided into 3 steps:'),(0,i.kt)("h3",{id:"step-1---stage-changes"},(0,i.kt)("strong",{parentName:"h3"},"Step 1 - Stage Changes")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This step groups selected changes and prepares them for ",(0,i.kt)("em",{parentName:"li"},"commiting"),' i.e. "saving"'),(0,i.kt)("li",{parentName:"ul"},"Staging can be repeated many times")),(0,i.kt)("p",null,"To stage changes, use command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git add {file1} {file2} ... {fileN}\n")),(0,i.kt)("p",null,"To ",(0,i.kt)("em",{parentName:"p"},"stage")," files: ",(0,i.kt)("em",{parentName:"p"},"file1, file2, ..., fileN"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"mdxAdmonitionTitle"},"NOTE")),(0,i.kt)("p",{parentName:"admonition"},"The staging is not limited to files, you can stage folders also.")),(0,i.kt)("p",null,"Or more concisely:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git add .\n")),(0,i.kt)("p",null,"To stage all files (",(0,i.kt)("inlineCode",{parentName:"p"},".")," means ",(0,i.kt)("em",{parentName:"p"},"this")," directory i.e. the whole project)."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"git-stage-files",src:n(4800).Z,width:"554",height:"124"})),(0,i.kt)("h3",{id:"step-2---commit-all-changes"},(0,i.kt)("strong",{parentName:"h3"},"Step 2 - Commit All Changes")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Commits groups ",(0,i.kt)("strong",{parentName:"li"},"staged")," files into a unit")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"mdxAdmonitionTitle"},"IMPORTANT")),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Commits are the basic unit of change in Git")," i.e. you can undo or redo code changes by undoing or redoing specific ",(0,i.kt)("em",{parentName:"p"},"commits"),".")),(0,i.kt)("p",null,"To commit ",(0,i.kt)("em",{parentName:"p"},"staged")," changes, use command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'git commit -m "{your-commit-message}"\n')),(0,i.kt)("p",null,"Where ",(0,i.kt)("inlineCode",{parentName:"p"},"{your-commit-message}")," is a short message describing changes you made to the code in this ",(0,i.kt)("em",{parentName:"p"},"commit")," e.g."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'git commit -m "Added a new button to print the report as PDF."\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"git-commit",src:n(9728).Z,width:"554",height:"81"})),(0,i.kt)("h3",{id:"step-3---push-changes-to-the-remote-repository"},(0,i.kt)("strong",{parentName:"h3"},"Step 3 - Push Changes to the Remote Repository")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Git (specifically ",(0,i.kt)("inlineCode",{parentName:"li"},"git clone <repo-url>"),") works by creating a ",(0,i.kt)("strong",{parentName:"li"},"copy")," of a remote repository located at ",(0,i.kt)("inlineCode",{parentName:"li"},"<repo-url>")," e.g. on GitHub."),(0,i.kt)("li",{parentName:"ul"},"All changes ",(0,i.kt)("em",{parentName:"li"},"stashed")," and ",(0,i.kt)("em",{parentName:"li"},"commited")," are only visible ",(0,i.kt)("strong",{parentName:"li"},"only")," on the copy (called the local repository) of the remote repository.")),(0,i.kt)("p",null,"To apply changes from the local repository (located on the PC) to the remote repository (located on the GitHub) use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git push\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"git-push",src:n(8272).Z,width:"554",height:"97"})),(0,i.kt)("p",null,"Message notifies we don\u2019t have branch named development on remote repository (GitHub) so we must use to create it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git push --set-upstream origin development\n")),(0,i.kt)("p",null,"Now, all chages will be visible on the remote repository on GitHub."),(0,i.kt)("h2",{id:"exercise-4-branching-and-merging"},(0,i.kt)("strong",{parentName:"h2"},"Exercise 4: Branching and Merging")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"git-branch",src:n(3625).Z,width:"1693",height:"579"})),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"branch")," is a line of ",(0,i.kt)("em",{parentName:"p"},"commits")," i.e. a line of changes to the code. A ",(0,i.kt)("em",{parentName:"p"},"branch")," can point to any ",(0,i.kt)("em",{parentName:"p"},"commit")," meaning all ",(0,i.kt)("em",{parentName:"p"},"commits")," from the beginning up to selected ",(0,i.kt)("em",{parentName:"p"},"commit")," will be applied which means that we can effectively undo changes (",(0,i.kt)("em",{parentName:"p"},"commits"),") in code and/or apply changes (",(0,i.kt)("em",{parentName:"p"},"commits"),") by changing to which ",(0,i.kt)("em",{parentName:"p"},"commit")," the ",(0,i.kt)("em",{parentName:"p"},"branch")," points."),(0,i.kt)("h3",{id:"visualize-branches"},(0,i.kt)("strong",{parentName:"h3"},"Visualize Branches")),(0,i.kt)("p",null,"To visualize branches, use command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"gitk --all\n")),(0,i.kt)("p",null,"which opens the following window:\n",(0,i.kt)("img",{alt:"gitk-all",src:n(1118).Z,width:"1119",height:"939"})),(0,i.kt)("p",null,"The window contains a lot of information which is divided into 3 sections:\n",(0,i.kt)("img",{alt:"gitk-all-annotated",src:n(1575).Z,width:"1119",height:"939"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1 - Branches and Commits",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"1a - Green rectangles = commits"),(0,i.kt)("li",{parentName:"ul"},"1b - A list of commits"))),(0,i.kt)("li",{parentName:"ul"},"2 - A list of files changed since the last commit"),(0,i.kt)("li",{parentName:"ul"},"3 - A line-by-line list of changes for the selected file in panel 2")),(0,i.kt)("p",null,"To change the commit to which the branch points, right-click on the target commit and select ",(0,i.kt)("inlineCode",{parentName:"p"},"Reset <branch> to here")," which will effectively revert all the changes made after the selected commit."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"gitk-revert-commit",src:n(268).Z,width:"529",height:"375"})),(0,i.kt)("h3",{id:"creating-a-new-branch"},(0,i.kt)("strong",{parentName:"h3"},"Creating a New Branch")),(0,i.kt)("p",null,"Code development is never done on the main branch (you can checkout to the new branch while having changes).\nTo create new branch and change git to that branch use:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"git checkout -b {your-branch-name}"),"\n(ex: ",(0,i.kt)("inlineCode",{parentName:"p"},"git checkout -b development"),")"),(0,i.kt)("p",null,"Until you know what you are doing, I recommend doing development on branch ",(0,i.kt)("inlineCode",{parentName:"p"},"development"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git status\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"git-checkout-branch",src:n(136).Z,width:"554",height:"170"})),(0,i.kt)("p",null,"After making changes on the ",(0,i.kt)("inlineCode",{parentName:"p"},"development")," branch, ",(0,i.kt)("em",{parentName:"p"},"stash, commit")," and ",(0,i.kt)("em",{parentName:"p"},"push")," the changes from the ",(0,i.kt)("inlineCode",{parentName:"p"},"development")," branch to the remote repository, as described in  ",(0,i.kt)("a",{parentName:"p",href:"#exercise-3-adding-committing-and-pushing-code-to-remote-repository"},"Exercise 3: Adding, Committing and Pushing Code to Remote Repository")),(0,i.kt)("h3",{id:"creating-pull-request"},(0,i.kt)("strong",{parentName:"h3"},"Creating Pull Request")),(0,i.kt)("p",null,"Once you are satisfied with code on your ",(0,i.kt)("inlineCode",{parentName:"p"},"development")," branch, you can create ",(0,i.kt)("strong",{parentName:"p"},"pull request")," (PR) on the ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," branch."),(0,i.kt)("p",null,"Pull requests will merge changes to the main branch to sync their code."),(0,i.kt)("p",null,"On GitHub navigate to page Pull request in your repository."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"github-pull-request-page",src:n(878).Z,width:"554",height:"170"})),(0,i.kt)("p",null,"And create new pull request by pressing new pull request."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"github-create-pull-request",src:n(8640).Z,width:"554",height:"203"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"github-pull-request-changes",src:n(3138).Z,width:"554",height:"228"})),(0,i.kt)("p",null,"Before you finish creating pull requests, add ",(0,i.kt)("strong",{parentName:"p"},"pkaselj")," as reviewer. (",(0,i.kt)("strong",{parentName:"p"},"NOT nknezovic")," as in picture below)"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"github-pull-request-reviewer",src:n(6643).Z,width:"554",height:"244"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"AFTER pkaselj")," has approved your pull request, you can merge it using button."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"github-pull-request-approve",src:n(9586).Z,width:"554",height:"268"})),(0,i.kt)("p",null,"Merge pull request."),(0,i.kt)("p",null,"To fetch changes on main branch locally, checkout to main branch in your terminal and:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout main\ngit pull\ngit status\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"git-pull-changes",src:n(5917).Z,width:"554",height:"318"})),(0,i.kt)("p",null,"And you will see changes done on development branch now on main branch."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"mdxAdmonitionTitle"},"NOTES")),(0,i.kt)("p",{parentName:"admonition"},"When you get a comment on your pull request, you should correct your code accordingly and push a new commit to the remote branch using the same commands as described before.")),(0,i.kt)("h2",{id:"exercise-5-tags"},(0,i.kt)("strong",{parentName:"h2"},"Exercise 5: Tags")),(0,i.kt)("p",null,"At some point in time, the project i.e. the code is stable. By implementing changes, the project changes - may become unstable, may not work on some platform etc."),(0,i.kt)("p",null,"We want to mark some ",(0,i.kt)("em",{parentName:"p"},"commits")," so we can easily find them when we need the code from project from a specific point in time. To mark a commmit we ",(0,i.kt)("strong",{parentName:"p"},"tag")," it in git."),(0,i.kt)("p",null,"When we want to tag the current commit, we use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git tag {tag-name}\n")),(0,i.kt)("p",null,"e.g."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git tag 2024-0.0.0\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"gitk-tag",src:n(1682).Z,width:"527",height:"112"})),(0,i.kt)("p",null,"We can ",(0,i.kt)("em",{parentName:"p"},"checkout")," ",(0,i.kt)("em",{parentName:"p"},"tags")," in the same way as we checkout ",(0,i.kt)("em",{parentName:"p"},"branches"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout 2024-0.0.0\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"mdxAdmonitionTitle"},"NOTE")),(0,i.kt)("p",{parentName:"admonition"},"The general convention i.e. best practice is to name tags in the form of ",(0,i.kt)("inlineCode",{parentName:"p"},"Maj.Min.Pch"),"\nwhere:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Maj")," - ",(0,i.kt)("em",{parentName:"li"},"Version major number")," for major changes which break compatibility with older versions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Min")," - ",(0,i.kt)("em",{parentName:"li"},"Version minor number")," for minor changes that (generally) do not break compatibility with older versions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Pch")," - ",(0,i.kt)("em",{parentName:"li"},"Version patch number")," for bug fixes\ne.g.")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git tag 2.1.0\n"))),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://the-turing-way.netlify.app/reproducible-research/vcs/vcs-git-branches.html"},"Git Branch Figure"))))}m.isMDXComponent=!0},3625:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/git-branch-8e8f6bb522b28e4d05b2801ab6689708.png"},136:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/git-checkout-branch-cac8afddf4a162941f4eed230a756cac.png"},9728:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/git-commit-4543a37b226a96aca708c1a647d5d73a.png"},5917:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/git-pull-changes-8afb02780853cedcaef540458c082325.png"},8272:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/git-push-f0cd7f91ebcaa3cd5c4b96f4c1ecff48.png"},4800:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/git-stage-files-ad2d2cdc2d69ad7f3f38f79bf9adbd47.png"},9845:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/git-status-c63c219c156b8b486eaa1f51e17c1fb0.png"},3437:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/github-clone-ssh-f6429e36761c9ccf0120454df72b20f6.png"},8820:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/github-create-new-repository-27eb92dd7c4d5077addb90ba97569fad.png"},8640:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/github-create-pull-request-1b9c2fdcf2c697634378fd89bda083ee.png"},7446:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/github-organization-742d5b44feaa7fb3b0335523552b1eae.png"},9586:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/github-pull-request-approve-9b658eb2af2f10fbac83512dccaa415d.png"},3138:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/github-pull-request-changes-50995018a84bfab658c47365866e3f1a.png"},878:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/github-pull-request-page-ffb57308dde96eb23a0d33d5c643daed.png"},6643:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/github-pull-request-reviewer-5200e0a829f8fa7d20fb6da9bc3df96f.png"},1575:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gitk-all-annotated-a1a614d0606016c0151dbb3531612734.PNG"},1118:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gitk-all-b4b33e45ffab47876c4a5b1be8f8054a.PNG"},268:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gitk-revert-commit-f71a3afc1dcef0dbf5e848cdfc13412d.png"},1682:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},8162:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vscode-project-4fd169385aa2e0a57949b1e7645357c9.png"}}]);