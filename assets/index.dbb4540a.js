import{o as _,c as p,p as L,a as B,b as e,d as I,e as w,r as m,f as b,w as $,g as G,h as x,v as E,u as c,i as N,j as P,k as V,n as k,l as W,F as O,m as R,t as f,q as J,s as j,x as Q,y as X,R as S,z as Y}from"./vendor.83a7c893.js";const Z=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function l(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=l(a);fetch(a.href,i)}};Z();const ee="modulepreload",F={},se="/",te=function(s,l){return!l||l.length===0?s():Promise.all(l.map(n=>{if(n=`${se}${n}`,n in F)return;F[n]=!0;const a=n.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${i}`))return;const o=document.createElement("link");if(o.rel=a?"stylesheet":ee,a||(o.as="script",o.crossOrigin=""),o.href=n,document.head.appendChild(o),a)return new Promise((v,h)=>{o.addEventListener("load",v),o.addEventListener("error",h)})})).then(()=>s())};var T=(t,s)=>{const l=t.__vccOpts||t;for(const[n,a]of s)l[n]=a;return l};const ae={},ne=t=>(L("data-v-9f7b0090"),t=t(),B(),t),le={class:"container content"},oe=ne(()=>e("div",{class:"display-middle margin-top center"},[e("h1",{class:"xxlarge text-white"},[e("span",{class:"padding black opacity-min"},[e("b",null,"T")]),I(),e("span",{class:"hide-small text-light-grey"},"ASKER")])],-1)),ie=[oe];function de(t,s){return _(),p("div",le,ie)}var ce=T(ae,[["render",de],["__scopeId","data-v-9f7b0090"]]);const M=t=>(L("data-v-1f556b2a"),t=t(),B(),t),re={class:"box"},ue=M(()=>e("b",null,"LOGIN",-1)),_e={class:"columns"},pe={class:"column is-4 is-offset-4"},ve=["onSubmit"],he={class:"field"},me={class:"control has-icons-left has-icons-right"},be=M(()=>e("span",{class:"icon is-small is-left"},[e("i",{class:"fa fa-user"})],-1)),fe={class:"field"},ge={class:"control has-icons-left"},ye=M(()=>e("span",{class:"icon is-small is-left"},[e("i",{class:"fa fa-key"})],-1)),$e={class:"field"},ke={class:"control"},Ce=M(()=>e("button",{class:"button abc"}," Login ",-1)),Te=I("Got Problem?"),xe=w({setup(t){let s=m(""),l=m("");function n(){Ms(s.value,l.value)}return(a,i)=>{const o=P("center"),v=P("router-link");return _(),p("div",re,[b(o,null,{default:$(()=>[ue]),_:1}),e("div",_e,[e("div",pe,[e("form",{onSubmit:G(n,["prevent"])},[e("div",he,[e("p",me,[x(e("input",{class:"input",placeholder:"Username","onUpdate:modelValue":i[0]||(i[0]=h=>N(s)?s.value=h:s=h)},null,512),[[E,c(s)]]),be])]),e("div",fe,[e("p",ge,[x(e("input",{class:"input",type:"password",placeholder:"Password","onUpdate:modelValue":i[1]||(i[1]=h=>N(l)?l.value=h:l=h)},null,512),[[E,c(l)]]),ye])]),e("div",$e,[e("p",ke,[Ce,b(v,{to:"/contact"},{default:$(()=>[Te]),_:1})])])],40,ve)])])])}}});var we=T(xe,[["__scopeId","data-v-1f556b2a"]]);const D=[{id:1,handle:"dodge",firstName:"chandra",lastName:"marachu",password:"demon",email:"dodge@gmail.com",picture:"https://randomuser.me/api/portraits/men/1.jpg",userTasks:[{task:"tyres",dueDate:"2022-01-15",isCompleted:!0,assignedBy:"dodge"},{task:"Nos",dueDate:"2022-02-4",isCompleted:!1,assignedBy:"hellcat"},{task:"cylinder",dueDate:"2022-03-2",isCompleted:!0,assignedBy:"widebody"}]},{id:2,handle:"hellcat",firstName:"sekhar",lastName:"marachu",password:"demon",email:"hellcat@gmail.com",picture:"https://randomuser.me/api/portraits/men/2.jpg",userTasks:[{task:"tyres check",dueDate:"2022-01-21",isCompleted:!1,assignedBy:"dodge"},{task:"Gas Leak",dueDate:"2022-02-2",isCompleted:!1,assignedBy:"hellcat"}]},{id:3,handle:"widebody",firstName:"chandrasekhar",lastName:"marachu",password:"demon",email:"widebody@gmail.com",picture:"https://randomuser.me/api/portraits/men/3.jpg",userTasks:[{task:"Nos Engine check",dueDate:"2022-05-04",isCompleted:!1,assignedBy:"hellcat"},{task:"multi cylinder",dueDate:"2022-05-016",isCompleted:!1,assignedBy:"widebody"}]}];var Ae=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",list:D});const y=t=>(L("data-v-e2db7a9c"),t=t(),B(),t),Se={class:"section"},Ne={class:"container"},De={class:"columns"},Le={class:"column"},Be={class:"panel"},Ie={class:"tabs is-boxed"},Ue=y(()=>e("a",null,[e("span",{class:"icon"},[e("i",{class:"fas fa-clipboard-list","aria-hidden":"true"})]),e("span",null,"Current")],-1)),Ee=[Ue],Pe=y(()=>e("a",null,[e("span",{class:"icon"},[e("i",{class:"fas fa-calendar-times","aria-hidden":"true"})]),e("span",null,"Completed")],-1)),Ve=[Pe],Oe=y(()=>e("a",null,[e("span",{class:"icon"},[e("i",{class:"fas fa-calendar","aria-hidden":"true"})]),e("span",null,"All")],-1)),Re=[Oe],Me={class:"panel-block"},qe=["onSubmit"],He={class:"field has-addons"},ze={class:"control has-icons-left is-expanded"},Fe=y(()=>e("span",{class:"icon is-left"},[e("i",{class:"fas fa-circle","aria-hidden":"true"})],-1)),Ge=y(()=>e("br",null,null,-1)),je={class:"control has-icons-left is-expanded"},Ke=y(()=>e("span",{class:"icon is-left"},[e("i",{class:"fas fa-circle"})],-1)),We=y(()=>e("br",null,null,-1)),Je={class:"control has-icons-left is-expanded"},Qe=["value"],Xe=y(()=>e("span",{class:"icon is-left"},[e("i",{class:"fas fa-list","aria-hidden":"true"})],-1)),Ye=y(()=>e("br",null,null,-1)),Ze=y(()=>e("div",{class:"control"},[e("button",{class:"button abc"},"Add")],-1)),es={class:"table",style:{width:"100%"}},ss=y(()=>e("thead",null,[e("tr",null,[e("th",null,[e("abbr",{title:"title"},"Title")]),e("th",null,[e("abbr",{title:"dueDate"},"Due Date(yyyy/mm/dd)")]),e("th",null,[e("abbr",{title:"assignedTo"},"Assigned To")]),e("th",null,[e("abbr",{title:"assignedBy"},"Assigned by")]),e("th",null,[e("abbr",{title:"completed"},"Completed")])])],-1)),ts=["onUpdate:modelValue"],as=w({setup(t){var C;const s=m("All"),l=m(""),n=m(""),a=m("");(C=u.user)==null||C.userTasks;const i=V(u.user!=null?u.user.userTasks:null),o=m(u.user!=null?u.user.userTasks:null),v=m(null);console.log(D);function h(){var r,d;const g=D.find(U=>U.id+""==a.value);v.value=(r=u.user)==null?void 0:r.handle,console.log(v),console.log(g),g==null||g.userTasks.unshift({task:l.value,dueDate:n.value,isCompleted:!1,assignedBy:v}),console.log(g),((d=u.user)==null?void 0:d.id)+""==a.value&&(o.value=g==null?void 0:g.userTasks)}function A(g){s.value=g,s.value.includes("Current")?o.value=i.filter(r=>!r.isCompleted):s.value.includes("Completed")?o.value=i.filter(r=>r.isCompleted):o.value=i}return(g,r)=>(_(),p("div",Se,[e("div",Ne,[e("div",De,[e("div",Le,[e("div",Be,[e("div",Ie,[e("ul",null,[e("li",{class:k({"is-active":s.value=="Current"}),onClick:r[0]||(r[0]=d=>A("Current"))},Ee,2),e("li",{class:k({"is-active":s.value=="Completed"}),onClick:r[1]||(r[1]=d=>A("Completed"))},Ve,2),e("li",{class:k({"is-active":s.value=="All"}),onClick:r[2]||(r[2]=d=>A("All"))},Re,2)])]),e("div",Me,[e("form",{style:{width:"100%"},onSubmit:G(h,["prevent"])},[e("div",He,[e("div",ze,[x(e("input",{class:"input is-info",type:"text",placeholder:"New Task","onUpdate:modelValue":r[3]||(r[3]=d=>l.value=d)},null,512),[[E,l.value]]),Fe]),Ge,e("div",je,[x(e("input",{class:"input is-info",type:"date",placeholder:"Date","onUpdate:modelValue":r[4]||(r[4]=d=>n.value=d)},null,512),[[E,n.value]]),Ke]),We,e("div",Je,[x(e("select",{class:"input is-info",type:"text",placeholder:"Select User","onUpdate:modelValue":r[5]||(r[5]=d=>a.value=d)},[(_(!0),p(O,null,R(c(Ae).list,d=>(_(),p("option",{key:d.firstName,value:d.id},f(d.firstName),9,Qe))),128))],512),[[W,a.value]]),Xe]),Ye,Ze])],40,qe)]),e("table",es,[ss,(_(!0),p(O,null,R(o.value,d=>{var U;return _(),p("tbody",{key:d.title},[e("tr",null,[e("td",null,f(d.task),1),e("td",null,f(d.dueDate),1),e("td",null,f((U=c(u).user)==null?void 0:U.handle),1),e("td",null,f(d.assignedBy),1),e("td",null,[e("a",{class:k(["panel-block",{"is-completed":s.value!="Completed"&&d.isCompleted}])},[x(e("input",{type:"checkbox","onUpdate:modelValue":K=>d.isCompleted=K},null,8,ts),[[J,d.isCompleted]])],2)])])])}),128))])])])])])]))}});var ns=T(as,[["__scopeId","data-v-e2db7a9c"]]);const ls={class:"section"},os={class:"container"},is={class:"columns"},ds={class:"column"},cs={class:"panel"},rs={class:"tabs is-boxed"},us=e("a",null,[e("span",{class:"icon"},[e("i",{class:"fas fa-clipboard-list","aria-hidden":"true"})]),e("span",null,"Current")],-1),_s=[us],ps=e("a",null,[e("span",{class:"icon"},[e("i",{class:"fas fa-calendar-times","aria-hidden":"true"})]),e("span",null,"Completed")],-1),vs=[ps],hs=e("a",null,[e("span",{class:"icon"},[e("i",{class:"fas fa-calendar","aria-hidden":"true"})]),e("span",null,"All")],-1),ms=[hs],bs={class:"table",style:{width:"100%"}},fs=e("thead",null,[e("tr",null,[e("th",null,[e("abbr",{title:"title"},"Title")]),e("th",null,[e("abbr",{title:"dueDate"},"Due Date(yyyy/mm/dd)")]),e("th",null,[e("abbr",{title:"assignedTo"},"Assigned To")]),e("th",null,[e("abbr",{title:"assignedBy"},"Assigned by")])])],-1),gs=w({setup(t){var a;let s=m("All");m(""),m(""),m(""),(a=u.user)==null||a.userTasks,V(u.user!=null?u.user.userTasks:null),V(u.user!=null?u.user.userTasks:null);let l=D;function n(i){this.currentTab.includes("Current")?this.tasks=this.allTasks.filter(o=>!o.isCompleted):this.currentTab.includes("Completed")?this.tasks=this.allTasks.filter(o=>o.isCompleted):this.tasks=this.allTasks}return(i,o)=>(_(),p("div",ls,[e("div",os,[e("div",is,[e("div",ds,[e("div",cs,[e("div",rs,[e("ul",null,[e("li",{class:k({"is-active":c(s)=="Current"}),onClick:o[0]||(o[0]=v=>(N(s)?s.value="Current":s="Current",n()))},_s,2),e("li",{class:k({"is-active":c(s)=="Completed"}),onClick:o[1]||(o[1]=v=>(N(s)?s.value="Completed":s="Completed",n()))},vs,2),e("li",{class:k({"is-active":c(s)=="All"}),onClick:o[2]||(o[2]=v=>(N(s)?s.value="All":s="All",n()))},ms,2)])]),e("table",bs,[fs,(_(!0),p(O,null,R(c(l),(v,h)=>(_(),p("tbody",{key:v.userTasks[h]},[(_(!0),p(O,null,R(c(l)[h].userTasks,(A,C)=>(_(),p("tr",{key:A[C]},[e("td",null,f(v.userTasks[C].task),1),e("td",null,f(v.userTasks[C].dueDate),1),e("td",null,f(c(l)[h].handle),1),e("td",null,f(v.userTasks[C].assignedBy),1)]))),128))]))),128))])])])])])]))}});const ys={},$s=t=>(L("data-v-edb3fe86"),t=t(),B(),t),ks={class:"section"},Cs=$s(()=>e("form",null,[e("input",{name:"name",type:"text",class:"feedback-input",placeholder:"Name"}),e("input",{name:"email",type:"text",class:"feedback-input",placeholder:"Email"}),e("textarea",{name:"text",type:"text",class:"feedback-input",placeholder:"Comment"}),e("input",{type:"submit",value:"SUBMIT"})],-1)),Ts=[Cs];function xs(t,s){return _(),p("div",ks,Ts)}var ws=T(ys,[["render",xs],["__scopeId","data-v-edb3fe86"]]);const As={},Ss={class:"row"},Ns=j('<div class="column" data-v-05024809><div class="card" data-v-05024809><div class="container" data-v-05024809><h2 data-v-05024809>Chandra Sekhar</h2><p class="title" data-v-05024809>Admin</p><p data-v-05024809></p><p data-v-05024809>chandu@example.com</p><p data-v-05024809><button class="button" data-v-05024809>Contact</button></p></div></div></div><div class="column" data-v-05024809><div class="card" data-v-05024809><div class="container" data-v-05024809><h2 data-v-05024809>Chandra</h2><p class="title" data-v-05024809>User</p><p data-v-05024809></p><p data-v-05024809>sekhar@example.com</p><p data-v-05024809><button class="button" data-v-05024809>Contact</button></p></div></div></div><div class="column" data-v-05024809><div class="card" data-v-05024809><div class="container" data-v-05024809><h2 data-v-05024809>Sekhar</h2><p class="title" data-v-05024809>User</p><p data-v-05024809></p><p data-v-05024809>Marachu@example.com</p><p data-v-05024809><button class="button" data-v-05024809>Contact</button></p></div></div></div>',3),Ds=[Ns];function Ls(t,s){return _(),p("div",Ss,Ds)}var Bs=T(As,[["render",Ls],["__scopeId","data-v-05024809"]]);const Is={},Us={class:"container"},Es=j('<h1 data-v-775e3be5>Join us by filling the form.......</h1><p data-v-775e3be5>:)</p><hr data-v-775e3be5><label for="email" data-v-775e3be5><b data-v-775e3be5>Email</b></label><input type="text" placeholder="Enter Email" name="email" required data-v-775e3be5><label for="psw" data-v-775e3be5><b data-v-775e3be5>Password</b></label><input type="password" placeholder="Enter Password" name="psw" required data-v-775e3be5><label for="psw-repeat" data-v-775e3be5><b data-v-775e3be5>Repeat Password</b></label><input type="password" placeholder="Repeat Password" name="psw-repeat" required data-v-775e3be5><label data-v-775e3be5><input type="checkbox" name="remember" style="margin-bottom:15px;" data-v-775e3be5> Remember me </label><p data-v-775e3be5>By creating an account you agree to our <a href="#" style="color:dodgerblue;" data-v-775e3be5>Terms &amp; Privacy</a>.</p><div class="clearfix" data-v-775e3be5><button type="button" class="cancelbtn" data-v-775e3be5>Cancel</button><button type="submit" class="signupbtn" data-v-775e3be5>Sign Up</button></div>',12),Ps=[Es];function Vs(t,s){return _(),p("div",Us,Ps)}var Os=T(Is,[["render",Vs],["__scopeId","data-v-775e3be5"]]);const Rs=[{path:"/",component:ce},{path:"/login",component:we},{path:"/messages",component:()=>te(()=>import("./Wall.d6397e6f.js"),["assets/Wall.d6397e6f.js","assets/vendor.83a7c893.js"])},{path:"/signup",component:Os,props:{title:""}},{path:"/about",component:Bs,props:{title:""}},{path:"/contact",component:ws,props:{title:""}},{path:"/assignedtasks",component:ns},{path:"/viewAllTasks",component:gs}],q=Q({history:X(),routes:Rs,linkActiveClass:"is-active"});q.beforeEach((t,s)=>{if(["/messages","/wall","/assignedtasks","/viewAllTasks"].includes(t.path)&&!u.user)return"/login"});const z=V({user:null});async function Ms(t,s){const l=D.find(n=>n.handle===t);if(!l)throw{message:"User not found"};if(l.password!==s)throw{message:"Password Incorrect"};z.user=l,q.push("/AssignedTasks")}function qs(){z.user=null,q.push("/login")}var u=z;const H=t=>(L("data-v-95ad8940"),t=t(),B(),t),Hs={key:0,class:"buttons"},zs=H(()=>e("strong",null,"Sign up",-1)),Fs=H(()=>e("strong",null," Log in",-1)),Gs={key:1,class:"buttons"},js={class:"avatar"},Ks=["src"],Ws=I(),Js=H(()=>e("br",null,null,-1)),Qs=H(()=>e("strong",null,"Log out",-1)),Xs=[Qs],Ys=w({setup(t){return(s,l)=>{const n=P("router-link");return c(u).user?(_(),p("div",Gs,[e("div",js,[e("img",{src:c(u).user.picture},null,8,Ks),e("div",null,[e("strong",null,f(c(u).user.firstName)+" "+f(c(u).user.lastName),1),Ws,Js,e("i",null,f(c(u).user.email),1)])]),e("a",{class:"button abc",onClick:l[0]||(l[0]=a=>c(qs)())},Xs)])):(_(),p("div",Hs,[b(n,{class:"button",to:"/signup"},{default:$(()=>[zs]),_:1}),b(n,{class:"button is-light",to:"/login"},{default:$(()=>[Fs]),_:1})]))}}});var Zs=T(Ys,[["__scopeId","data-v-95ad8940"]]);const et={class:"navbar xyz",role:"navigation","aria-label":"main navigation"},st={class:"container"},tt={class:"navbar-brand"},at=e("div",{class:"img"},null,-1),nt=e("span",{"aria-hidden":"true"},null,-1),lt=e("span",{"aria-hidden":"true"},null,-1),ot=e("span",{"aria-hidden":"true"},null,-1),it=[nt,lt,ot],dt={class:"navbar-start"},ct=e("b",null,"Home",-1),rt={class:"navbar-item has-dropdown is-hoverable"},ut=e("a",{class:"navbar-link"},[e("b",null,"Tasks")],-1),_t={class:"navbar-dropdown"},pt=I("Tasks Assigned"),vt=I("All Tasks"),ht=e("b",null,"About",-1),mt=e("b",null,"Contact",-1),bt={class:"navbar-end"},ft={class:"navbar-item"},gt=w({setup(t){const s=m(!1);return(l,n)=>(_(),p("nav",et,[e("div",st,[e("div",tt,[at,e("a",{role:"button",class:k(["navbar-burger",{"is-active":s.value}]),"aria-label":"menu","aria-expanded":"false",onClick:n[0]||(n[0]=a=>s.value=!s.value)},it,2)]),e("div",{class:k(["navbar-menu",{"is-active":s.value}])},[e("div",dt,[b(c(S),{class:"navbar-item",to:"/"},{default:$(()=>[ct]),_:1}),e("div",rt,[ut,e("div",_t,[b(c(S),{class:"navbar-item",to:"/assignedtasks"},{default:$(()=>[pt]),_:1}),b(c(S),{class:"navbar-item",to:"/viewAllTasks"},{default:$(()=>[vt]),_:1})])]),b(c(S),{class:"navbar-item",to:"/about"},{default:$(()=>[ht]),_:1}),b(c(S),{class:"navbar-item",to:"/contact"},{default:$(()=>[mt]),_:1})])],2),e("div",bt,[e("div",ft,[b(Zs)])])])]))}}),yt={class:"container"},$t=w({setup(t){return(s,l)=>{const n=P("router-view");return _(),p("div",null,[b(gt),e("div",yt,[b(n)])])}}});Y($t).use(q).mount("#app");
