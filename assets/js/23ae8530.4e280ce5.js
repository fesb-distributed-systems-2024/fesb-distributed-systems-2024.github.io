"use strict";(self.webpackChunkdistributed_systems=self.webpackChunkdistributed_systems||[]).push([[315],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},377:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={},l="Lesson",o={unversionedId:"labs/Lab 7 - Docker/Lesson",id:"labs/Lab 7 - Docker/Lesson",title:"Lesson",description:"Table of Contents",source:"@site/docs/labs/07.Lab 7 - Docker/Lesson.md",sourceDirName:"labs/07.Lab 7 - Docker",slug:"/labs/Lab 7 - Docker/Lesson",permalink:"/docs/labs/Lab 7 - Docker/Lesson",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lesson",permalink:"/docs/labs/Lab 6 - Web API Design/Lesson"},next:{title:"Lesson",permalink:"/docs/labs/Lab 8 - Web Sockets/Lesson"}},s={},u=[{value:"<strong>Table of Contents</strong>",id:"table-of-contents",level:2},{value:"<strong>Requirements</strong>",id:"requirements",level:3},{value:"<strong>Objectives</strong>",id:"objectives",level:3},{value:"<strong>Cloud Native</strong>",id:"cloud-native",level:3},{value:"<strong>Exercise 1: Creating Containers</strong>",id:"exercise-1-creating-containers",level:2},{value:"<strong>Cloud Containers</strong>",id:"cloud-containers",level:3},{value:"<strong>Create Solution and Project</strong>",id:"create-solution-and-project",level:3},{value:"<strong>Run and test container</strong>",id:"run-and-test-container",level:3},{value:"<strong>Clean Resources</strong>",id:"clean-resources",level:3},{value:"<strong>Exercise 2: Cloud Providers</strong>",id:"exercise-2-cloud-providers",level:2},{value:"Publishing image to container registry",id:"publishing-image-to-container-registry",level:3},{value:"Creating Azure Student Account",id:"creating-azure-student-account",level:3},{value:"Creating Azure Container Instance",id:"creating-azure-container-instance",level:3}],p={toc:u};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lesson"},"Lesson"),(0,r.kt)("h1",{id:"lab-7-cloud-native"},"Lab 7: Cloud Native"),(0,r.kt)("h2",{id:"table-of-contents"},(0,r.kt)("strong",{parentName:"h2"},"Table of Contents")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#lesson"},"Lesson")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#lab-7-cloud-native"},"Lab 7: Cloud Native"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#table-of-contents"},(0,r.kt)("strong",{parentName:"a"},"Table of Contents")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#requirements"},(0,r.kt)("strong",{parentName:"a"},"Requirements"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#objectives"},(0,r.kt)("strong",{parentName:"a"},"Objectives"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#cloud-native"},(0,r.kt)("strong",{parentName:"a"},"Cloud Native"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#exercise-1-creating-containers"},(0,r.kt)("strong",{parentName:"a"},"Exercise 1: Creating Containers")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#cloud-containers"},(0,r.kt)("strong",{parentName:"a"},"Cloud Containers"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#create-solution-and-project"},(0,r.kt)("strong",{parentName:"a"},"Create Solution and Project"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#run-and-test-container"},(0,r.kt)("strong",{parentName:"a"},"Run and test container"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#clean-resources"},(0,r.kt)("strong",{parentName:"a"},"Clean Resources"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#exercise-2-cloud-providers"},(0,r.kt)("strong",{parentName:"a"},"Exercise 2: Cloud Providers")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#publishing-image-to-container-registry"},"Publishing image to container registry")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#creating-azure-student-account"},"Creating Azure Student Account")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#creating-azure-container-instance"},"Creating Azure Container Instance"))))))),(0,r.kt)("h3",{id:"requirements"},(0,r.kt)("strong",{parentName:"h3"},"Requirements")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dotnet.microsoft.com/en-us/download"},".NET 7 SDK")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.docker.com/products/docker-desktop"},"Docker Desktop"))),(0,r.kt)("h3",{id:"objectives"},(0,r.kt)("strong",{parentName:"h3"},"Objectives")),(0,r.kt)("p",null,"In this LAB you will learn about creating and deploying cloud native applications."),(0,r.kt)("h3",{id:"cloud-native"},(0,r.kt)("strong",{parentName:"h3"},"Cloud Native")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Cloud native"),' computing is an approach in software development that utilizes cloud computing to\n"build and run scalable applications in modern, dynamic environments such as public, private, and hybrid clouds".\nThese technologies such as ',(0,r.kt)("strong",{parentName:"p"},"containers"),", microservices, serverless functions, cloud native processors and immutable infrastructure,\ndeployed via declarative code are common elements of this architectural style."),(0,r.kt)("h2",{id:"exercise-1-creating-containers"},(0,r.kt)("strong",{parentName:"h2"},"Exercise 1: Creating Containers")),(0,r.kt)("h3",{id:"cloud-containers"},(0,r.kt)("strong",{parentName:"h3"},"Cloud Containers")),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"container")," is a standard unit of software that packages up code and all its dependencies so the application runs quickly\nand reliably from one computing environment to another.\nA Docker container image is a lightweight, standalone, executable package of software that includes everything needed to run an application:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"code"),(0,r.kt)("li",{parentName:"ul"},"runtime"),(0,r.kt)("li",{parentName:"ul"},"system tools"),(0,r.kt)("li",{parentName:"ul"},"system libraries"),(0,r.kt)("li",{parentName:"ul"},"settings")),(0,r.kt)("h3",{id:"create-solution-and-project"},(0,r.kt)("strong",{parentName:"h3"},"Create Solution and Project")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create new solution ",(0,r.kt)("inlineCode",{parentName:"li"},"CloudNative")," and new webapi project ",(0,r.kt)("inlineCode",{parentName:"li"},"CloudNative.ContainerizedWebApi"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"dotnet new sln --name CloudNative\ndotnet new webapi --name CloudNative.ContainerizedWebApi\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add Project to solution")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"dotnet sln add CloudNative.ContainerizedWebApi/CloudNative.ContainerizedWebApi.csproj\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In project ",(0,r.kt)("inlineCode",{parentName:"li"},"CloudNative.ContainerizedWebApi")," edit ",(0,r.kt)("inlineCode",{parentName:"li"},"Program.cs")," to have following contents:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"var builder = WebApplication.CreateBuilder(args);\n\nbuilder.Services.AddControllers();\nbuilder.Services.AddEndpointsApiExplorer();\nbuilder.Services.AddSwaggerGen();\n\nvar app = builder.Build();\n\napp.UseSwagger();\napp.UseSwaggerUI();\n\napp.MapControllers();\n\napp.Run();\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In project ",(0,r.kt)("inlineCode",{parentName:"li"},"CloudNative.ContainerizedWebApi")," delete files ",(0,r.kt)("inlineCode",{parentName:"li"},"Controllers/WeatherForecastController.cs")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"WeatherForecast.cs"),":"),(0,r.kt)("li",{parentName:"ul"}),(0,r.kt)("li",{parentName:"ul"},"In project ",(0,r.kt)("inlineCode",{parentName:"li"},"CloudNative.ContainerizedWebApi")," add new controller ",(0,r.kt)("inlineCode",{parentName:"li"},"Controllers/HelloWorldController.cs")," with following implementation:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.AspNetCore.Mvc;\n\nnamespace CloudNative.ContainerizedWebApi.Controllers;\n\n[ApiController]\npublic class HelloWorldController : ControllerBase\n{\n    [HttpGet]\n    [Route("api/hello")]\n    public IActionResult HelloWorld()\n    {\n        return Ok("Hola Mundo!");\n    }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In project ",(0,r.kt)("inlineCode",{parentName:"li"},"CloudNative.ContainerizedWebApi")," add new file ",(0,r.kt)("inlineCode",{parentName:"li"},"Dockerfile")," with contents:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dockerfile"},'FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS dotnet-runtime\n\n# .NET App\nFROM mcr.microsoft.com/dotnet/sdk:7.0 AS dotnet-builder\nWORKDIR .\n\n# Restore .NET App\nCOPY ["CloudNative.ContainerizedWebApi/CloudNative.ContainerizedWebApi.csproj", "CloudNative.ContainerizedWebApi/"]\nRUN dotnet restore "CloudNative.ContainerizedWebApi/CloudNative.ContainerizedWebApi.csproj"\n\n# Build .NET App\nCOPY . .\nRUN dotnet build "CloudNative.ContainerizedWebApi/CloudNative.ContainerizedWebApi.csproj" -c Release -o /app/build --no-restore\n\n# Publish .NET App\nFROM dotnet-builder AS dotnet-publisher\nRUN dotnet publish "CloudNative.ContainerizedWebApi/CloudNative.ContainerizedWebApi.csproj" -c Release -o /app/publish\n\nFROM dotnet-runtime AS final\n\n# Sets working directory for dotnet entry point command\nWORKDIR /app/server\n\n# Copy .NET Application From dotnet-publisher Image Into final Image\nCOPY --from=dotnet-publisher /app/publish /app/server\nENTRYPOINT ["dotnet", "CloudNative.ContainerizedWebApi.dll"]\n')),(0,r.kt)("p",null,"Add new file ",(0,r.kt)("inlineCode",{parentName:"p"},".dockerignore")," with contents:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"**/.dockerignore\n**/.git\n**/.gitignore\n**/.vscode\n**/.github\n**/scripts\n**/bin\n**/obj\n**/Dockerfile*\n**/node_modules\nLICENSE\nREADME.md\n")),(0,r.kt)("p",null,"Build docker image from defined ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker build --file CloudNative.ContainerizedWebApi/Dockerfile --tag containerized-web-api:latest --platform linux/amd64 .\n")),(0,r.kt)("h3",{id:"run-and-test-container"},(0,r.kt)("strong",{parentName:"h3"},"Run and test container")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Verify if image was built properly by running")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker image ls\n")),(0,r.kt)("p",null,"You should see following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"REPOSITORY                                                             TAG       IMAGE ID       CREATED         SIZE\ncontainerized-web-api                                                  latest    48264471137b   4 minutes ago   217MB\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create and run container from image:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'docker run -p 8888:80 --rm --name "containerized-web-api" containerized-web-api:latest \n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Verify is docker container running:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker ps\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You should see following output")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'CONTAINER ID   IMAGE                          COMMAND                  CREATED              STATUS              PORTS                  NAMES\n2638953431d6   containerized-web-api:latest   "dotnet CloudNative.\u2026"   About a minute ago   Up About a minute   0.0.0.0:8888->80/tcp   containerized-web-api\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Finally open web browser on mapped port 8888 and check if you get response from server")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"docker-server-response",src:n(6802).Z,width:"582",height:"199"})),(0,r.kt)("h3",{id:"clean-resources"},(0,r.kt)("strong",{parentName:"h3"},"Clean Resources")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To stop container run:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker stop containerized-web-api\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Because flag --rm was used when container was created container is automatically deleted")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Delete image using"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker image rm containerized-web-api:latest\n")),(0,r.kt)("h2",{id:"exercise-2-cloud-providers"},(0,r.kt)("strong",{parentName:"h2"},"Exercise 2: Cloud Providers")),(0,r.kt)("p",null,"Once you have containerized your application deployment to any cloud is trivial since most of the cloud providers support containerized applications."),(0,r.kt)("p",null,"There are three big cloud providers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"AWS"),(0,r.kt)("li",{parentName:"ul"},"Azure"),(0,r.kt)("li",{parentName:"ul"},"Google Cloud")),(0,r.kt)("p",null,"In this exercise you will use Azure."),(0,r.kt)("h3",{id:"publishing-image-to-container-registry"},"Publishing image to container registry"),(0,r.kt)("p",null,"To run container we need to put built image somewhere accessible by azure services.\nYou can host it on any container registry, docker hub provides easy and free access."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create account on ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/"},"docker-hub"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create new public repository on docker hub:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In docker desktop login do dockerhub account"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"docker-hub-repo",src:n(1074).Z,width:"1888",height:"847"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tag local image (build it again if you have deleted it) to remote repository:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker image tag containerized-web-api:latest {Your Username}/containerized-web-app:latest\ndocker push {Your Username}/containerized-web-app:latest\n")),(0,r.kt)("p",null,"Here is an example with account username:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker image tag containerized-web-api:latest ipazanin/containerized-web-app:latest\ndocker push ipazanin/containerized-web-app:latest\n")),(0,r.kt)("p",null,"You should be able to see your docker image on docker hub if everything went accordingly:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"docker-hub-images",src:n(6297).Z,width:"1863",height:"726"})),(0,r.kt)("h3",{id:"creating-azure-student-account"},"Creating Azure Student Account"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("a",{parentName:"p",href:"https://portal.azure.com/#home"},"Portal")," and login using your fesb account.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When asked select Azure student benefits:"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"azure-free-trial",src:n(3555).Z,width:"1872",height:"763"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sign up for azure for students")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"azure-students-singup",src:n(2997).Z,width:"1879",height:"772"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Follow instructions to finished setting up a free account.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When all is finished you should have student account with 100$"))),(0,r.kt)("h3",{id:"creating-azure-container-instance"},"Creating Azure Container Instance"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"On Azure portal find Container Instances in search and start creating new Container Instance")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Setup basics page similar to this (change docker image path):"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"azure-container-instance-basics",src:n(469).Z,width:"1069",height:"975"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"On Networking tab set DNS name label:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"azure-container-instance-networking",src:n(578).Z,width:"886",height:"561"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Review and Create Page:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"azure-container-instance-review",src:n(7440).Z,width:"1066",height:"1723"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Press Create to deploy your container image to azure instance")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Wait for deployment to finish and then navigate to created resource:"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"azure-container-instance-deployed",src:n(3883).Z,width:"1075",height:"862"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Wait for few minutes and then try to access web page using DNS name assigned by azure (FQDN)")),(0,r.kt)("p",null,"For example: "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"http://containarized-web-app.fkejhxa8exe5fsec.eastus.azurecontainer.io/api/hello")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"containerized-web-app",src:n(6760).Z,width:"727",height:"244"})),(0,r.kt)("p",null,"When you are finished, delete azure container instance to save resources!"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"delete-azure-container-instance",src:n(7343).Z,width:"1069",height:"468"})))}c.isMDXComponent=!0},469:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/azure-container-instance-basics-b59e971793e6d4cfa0bfd05e14aaaf6f.jpg"},3883:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/azure-container-instance-deployed-3434f474f9beb3a85ecd517cf59f84ac.jpg"},578:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/azure-container-instance-networking-c897b963dd01d4546add0bedaf9033b5.jpg"},7440:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/azure-container-instance-review-26525d7985f3f484d26011224e8c2d02.jpg"},3555:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/azure-free-trial-8df117c9e55dff40965ba4a0ea5ff3e8.jpg"},2997:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/azure-students-singup-438b633796cb2ddebd8899c7560de26f.jpg"},6760:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/containerized-web-app-60403be297436ec935156f3304fc8aac.jpg"},7343:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/delete-azure-container-instance-ca19c35c1bcfd17fe6eae22a96332aee.jpg"},6297:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/docker-hub-images-de47884615f2d7517db02762bbe6aee3.jpg"},1074:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/docker-hub-repo-4eb5e3e6a082c9bbadbc2f063cf57768.jpg"},6802:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/docker-server-response-32a6ed135b59047fd0f9791f8bdd1413.jpg"}}]);