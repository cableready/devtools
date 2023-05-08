var P=Object.defineProperty,q=Object.defineProperties,B=Object.getOwnPropertyDescriptors,$=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable,D=(e,t,o)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,a=(e,t)=>{for(var o in t||(t={}))N.call(t,o)&&D(e,o,t[o]);if($)for(var o of $(t))W.call(t,o)&&D(e,o,t[o]);return e},d=(e,t)=>q(e,B(t));function G(e){let t=document.createElement("template");return t.innerHTML=e,t}function x(e,t){t=t||document.body;let o=G(e).content.cloneNode(!0).querySelector("*");return t.appendChild(o)}function m(e,t={}){if(!e)return;E(e);let{outline:o,outlineOffset:i}=t;o=o||"dashed 3px red",i=i||"0px",e.originalStyles=e.originalStyles||{display:e.style.display,minHeight:e.style.minHeight,minWidth:e.style.minWidth,outline:e.style.outline,outlineOffset:e.style.outlineOffset},getComputedStyle(e).display.match(/^inline$/i)&&e.offsetWidth===0&&e.offsetHeight===0&&(e.style.display="inline-block",e.style.minHeight="2px",e.style.minWidth="2px"),e.style.outline=o,e.style.outlineOffset=i,e.dataset.turboBoostHighlight=!0}function E(e){if(e){if(e.originalStyles){for(let[t,o]of Object.entries(e.originalStyles))o?e.style[t]=o:e.style[t]="";delete e.originalStyles}delete e.dataset.turboBoostHighlight}}function v(e){if(!e)return{};let t=e.getBoundingClientRect(),o=e.offsetWidth,i=e.offsetHeight,r=t.top+window.scrollY,l=t.left+window.scrollX,s=l+o,b=r+i;return{top:r,left:l,right:s,bottom:b,width:o,height:i}}function h(e){try{e()}catch(t){}}var F=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=this.html,this.labelElement.addEventListener("click",e=>{e.preventDefault(),this.toggle()}),this.checkboxElement.addEventListener("change",e=>this.dispatchEvent(new CustomEvent("change",{bubbles:!0})))}toggle(){this.checked?this.uncheck():this.check()}check(){this.checkboxElement.checked=!0,this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}uncheck(){this.checkboxElement.checked=!1,this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}get name(){return this.getAttribute("name")}get checked(){return this.checkboxElement.checked}get checkboxElement(){return this.shadowRoot.querySelector("input")}get labelElement(){return this.shadowRoot.querySelector("label")}get html(){return`
      <style>${this.stylesheet}</style>
      <div>
        <input name="checkbox" type="checkbox">
        <label for="checkbox"><slot name="label"></slot></label>
      </div>
    `}get stylesheet(){return`
      :host, :host * {
        cursor: pointer;
      }

      div {
        display: flex;
        margin-right: 10px;
      }

      input:checked + label{
        font-weight: bold;
      }

      label {
        color: black;
      }
    `}},I=class extends HTMLElement{constructor(){super(),this.enabledDevtools={},this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=this.html,this.shadowRoot.querySelector("button").addEventListener("click",()=>this.dispatchEvent(new CustomEvent("turbo-boost:devtools-close",{bubbles:!0}))),this.addEventListener("change",e=>{let t=e.target,{checked:o,name:i}=t;o?this.enableDevtool(i):this.disableDevtool(i)})}enableDevtool(e){this.enabledDevtools[e]||(this.enabledDevtools[e]=!0,this.dispatchEvent(new CustomEvent("turbo-boost:devtool-enable",{bubbles:!0,detail:{name:e}})))}disableDevtool(e){this.enabledDevtools[e]&&(delete this.enabledDevtools[e],this.dispatchEvent(new CustomEvent("turbo-boost:devtool-disable",{bubbles:!0,detail:{name:e}})))}close(){this.devtoolElements.forEach(e=>{e.checked&&e.uncheck()}),this.remove()}get devtoolElements(){return this.querySelectorAll('[slot="devtool"]')}get closeElement(){return this.querySelector("button")}get html(){return`
      <style>${this.stylesheet}</style>
      <div>
        <img src="https://ik.imagekit.io/hopsoft/turbo-boost-logo_zHiiimlvT.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1671722004342">
        <slot name="devtool"></slot>
        <button>\u2715</button>
      </div>
    `}get stylesheet(){return`
      :host {
        background-color: gainsboro;
        border-radius: 5px;
        bottom: 20px;
        display: block;
        filter: drop-shadow(3px 3px 3px rgba(0,0,0,0.3));
        left: 50%;
        outline-offset: 1px;
        outline: solid 2px black;
        padding: 5px 10px;
        position: fixed;
        transform: translateX(-50%);
        z-index: 8999;
      }

      * {
        -webkit-user-select: none;
        font-family: helvetica, sans-serif;
        font-size: 1rem;
        user-select: none;
      }

      img {
        align-self: center;
        cursor: grab;
        height: 25px;
        margin-left: -5px;
        vertical-align: middle;
      }

      div {
        display: flex;
        gap: 0 5px;
        position: relative;
      }

      [slot="devtool"] {
        align-self: center;
      }

      button {
        align-self: center;
        background-color: darkgray;
        border-radius: 50%;
        border: none;
        color: black;
        cursor: pointer;
        font-size: 10px;
        height: 18px;
        line-height: 18px;
        margin-right: -5px;
        opacity: 0.5;
        outline: solid 1px black;
        padding: 0 2px;
        width: 18px;
      }

      button:hover {
        opacity: 1;
      }
    `}},K=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=this.html}get color(){return this.getAttribute("color")||"darkslategray"}get backgroundColor(){return this.getAttribute("background-color")||"gainsboro"}get position(){return this.getAttribute("position")||"top"}get html(){return`
      <style>${this.stylesheet}</style>
      <div role="container">
        <div role="title">
          <slot name="title"></slot>
          <img src="https://ik.imagekit.io/hopsoft/turbo-boost-logo_zHiiimlvT.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1671722004342">
        </div>
        <slot name="subtitle"></slot>
        <slot name="content-top"></slot>
        <slot name="content"></slot>
        <slot name="content-bottom"></slot>
      </div>
    `}get stylesheet(){return`
      :host {
        display: block;
        position: absolute;
        z-index: 8999;
      }

      * {
        color: ${this.color}
        font-size: 1rem;
      }

      [role="container"] {
        background-color: ${this.backgroundColor};
        border-radius: 15px;
        filter: drop-shadow(3px 3px 3px rgba(0,0,0,0.3));
        font-family: monospace;
        min-height: 30px;
        min-width: 100px;
        opacity: 0.9;
        outline-offset: 1px;
        outline: dashed 3px ${this.color};
        padding: 12px;
        position: relative;
        white-space: nowrap;
      }

      [role="title"] {
        display: flex;
      }

      [role="title"] slot[name="title"] {
        color: ${this.color};
        display: block;
        flex-grow: 1;
        font-weight: bold;
      }

      [role="title"] img {
        height: 25px;
        vertical-align: middle;
      }

      slot[name="subtitle"] {
        border-bottom: dotted 1px ${this.color};
        border-top: dotted 1px ${this.color};
        color: ${this.color};
        display: block;
        font-size: 0.8rem;
        font-weight: lighter;
        margin-bottom: 12px;
        margin-top: 8px;
        padding-bottom: 4px;
        padding-top: 4px;
        width: 100%;
      }

      slot[name="content-top"],
      slot[name="content"],
      slot[name="content-bottom"] {
        display: block;
        font-weight: normal;
      }

      slot[name="content-top"] {
        color: ${this.color};
        margin-bottom: 8px;
      }

      slot[name="content"],
      slot[name="content-bottom"] {
        opacity: 0.7;
        padding-left: 12px;
      }

      slot[name="content"] {
        color: ${this.color};
      }

      slot[name="content-bottom"] {
        color: red;
      }
    `}},c=[],_={LeaderLine:{src:"https://cdnjs.cloudflare.com/ajax/libs/leader-line/1.0.7/leader-line.min.js",integrity:"sha512-0dNdzMjpT6pJdFGF1DwybFCfm3K/lzHhxaMXC/92J9/DZujHlqYFqmhTOAoD0o+LkeEsVK2ar/ESs7/Q2B6wJg==",global:"LeaderLine"},PlainDraggable:{src:"https://cdn.jsdelivr.net/npm/plain-draggable@2.5.14/plain-draggable.min.js",global:"PlainDraggable"}};function J(e){return e.global&&self[e.global]||document.querySelector(`[src='${e.src}']`)?!0:c.includes(e)}function U(e){if(J(e))return;c.push(e);let{src:t,integrity:o}=e,i=document.createElement("script");i.setAttribute("src",t),i.setAttribute("crossorigin","anonymous"),i.setAttribute("referrerpolicy","no-referrer"),o&&i.setAttribute("integrity",o),document.head.appendChild(i)}function C(e){if(!c.includes(e))return;c.splice(c.indexOf(e),1);let{src:t}=e,o=document.querySelector(`script[src='${t}']`);o&&o.remove(),e.global&&self[e.global]&&(self[e.global]=null)}function X(){[...c].forEach(e=>C(e))}var g=d(a({},_),{add:U,remove:C,removeAll:X});customElements.define("turbo-boost-devtool",F);customElements.define("turbo-boost-devtool-supervisor",I);customElements.define("turbo-boost-devtool-tooltip",K);var n;function j(){if(n)try{new PlainDraggable(n)}catch(e){setTimeout(j,200)}}function k(){R()||(n.close(),n.dispatchEvent(new CustomEvent("turbo-boost:devtools-stop",{bubbles:!0})),n=null,g.removeAll())}function S(){p()||(g.add(g.LeaderLine),g.add(g.PlainDraggable),n=x("<turbo-boost-devtool-supervisor></turbo-boost-devtool-supervisor>"),setTimeout(j,200),n.dispatchEvent(new CustomEvent("turbo-boost:devtools-start",{bubbles:!0})))}function Y(){let e=n?Object.keys(n.enabledDevtools):[];k(),S(),n.devtoolElements.forEach(t=>{e.includes(t.name)&&t.check()})}function p(){return!!n}function R(){return!p()}var O;function A(){clearTimeout(O),O=setTimeout(Y,25)}function u(){p()&&A()}addEventListener("turbo:load",u);addEventListener("turbo-frame:load",u);addEventListener("turbo-boost:devtools-connect",u);addEventListener("turbo-boost:devtools-close",k);window.TurboBoost&&(addEventListener(TurboBoost.Commands.events.success,u),addEventListener(TurboBoost.Commands.events.finish,u));function Q(e,t){if(n)return x(`
      <turbo-boost-devtool name="${e}" slot="devtool">
        <span slot="label">${t}</span>
      </turbo-boost-devtool>
    `,n)}function V(e){return n?n.enabledDevtools[e]:!1}var w={enabled:V,register:Q,start:S,stop:k,restart:A,get started(){return p()},get stopped(){return R()}};function f(e,t,o,i={}){let{backgroundColor:r,color:l,position:s}=i;return l=l||"white",s=s||"top",x(`
    <turbo-boost-devtool-tooltip position="${s}" background-color="${r}" color="${l}">
      <div slot='title'>${e}</div>
      <div slot='subtitle'>${t}</div>
      ${o}
    </turbo-boost-devtool-tooltip>
  `)}var y,L=class{constructor(e){this.delegate=e;let t,o=()=>{clearTimeout(t),t=setTimeout(this.hide({active:!1}),25)};this.eventListeners["turbo-boost:devtool-enable"]=i=>{let{name:r}=i.detail;r===this.delegate.name&&(m(this.delegate.triggerElement,{outline:"3px dashed blueviolet",outlineOffset:"2px"}),this.hide({active:!1}),this.active&&this.show())},this.eventListeners["turbo-boost:devtool-disable"]=i=>{let{name:r}=i.detail;r===this.delegate.name&&E(this.delegate.triggerElement)},this.eventListeners.click=i=>{i.target.closest("turbo-boost-devtool-tooltip")||o()},this.eventListeners["turbo:load"]=o,this.eventListeners["turbo-frame:load"]=o,window.TurboBoost&&(this.eventListeners[TurboBoost.Commands.events.finish]=o),this.registerEventListeners()}registerEventListeners(){Object.entries(this.eventListeners).forEach(([e,t])=>{addEventListener(e,t)})}unregisterEventListeners(){Object.entries(this.eventListeners).forEach(([e,t])=>{removeEventListener(e,t)})}get eventListeners(){return this._eventListeners||(this._eventListeners={})}show(){if(!this.enabled||this.active)return;this.active=!0,this.hide({active:!0}),m(this.delegate.targetElement,{outline:"3px dashed darkcyan",outlineOffset:"-2px"}),m(this.delegate.morphElement,{outline:"3px dashed chocolate",outlineOffset:"3px"}),this.renderingTooltip=this.createRenderingTooltip(),this.targetTooltip=this.createTargetTooltip(),this.triggerTooltip=this.createTriggerTooltip(this.targetTooltip,this.renderingTooltip),document.querySelectorAll(".leader-line").forEach(t=>t.style.zIndex=1e5);let e={morph:{partial:this.delegate.triggerElement.renders,id:this.delegate.triggerElement.morphs,status:this.delegate.morphElement?"OK":"Not Found"},trigger:{partial:null,id:null,status:"Not Found"},target:{partial:null,id:null,status:"Not Found"}};this.delegate.triggerElement&&(e.trigger={partial:this.delegate.triggerElement.partial,id:this.delegate.triggerElement.id,status:"OK"},e.target.id=this.delegate.triggerElement.controls),this.delegate.targetElement&&(e.target={partial:this.delegate.targetElement.partial,dom_id:this.delegate.targetElement.id,status:"OK"}),console.table(e)}hide({active:e=!1}){document.querySelectorAll("turbo-boost-devtool-tooltip").forEach(t=>{h(()=>t.line.remove()),h(()=>t.drag.remove()),h(()=>t.lineToRendering.remove()),h(()=>t.lineToTarget.remove()),h(()=>t.remove())}),document.querySelectorAll("[data-turbo-boost-highlight]").forEach(t=>{t.tagName.match(/turbo-boost-toggle-trigger/i)||E(t)}),this.active=e}get active(){return y===this.delegate}set active(e){e?y=this.delegate:y=null}get enabled(){return w.enabled(this.delegate.name)}static register(e,t){w.register(e,t)}createRenderingTooltip(){if(!this.delegate.triggerElement.renders)return console.debug("Unable to create the rendering tooltip! The trigger element must set the 'renders' attribute.");if(!this.delegate.triggerElement.morphs)return console.debug(`Unable to create the rendering tooltip! The trigger element specified the 'morphs' attrbiute but no element matches the DOM id: '${this.triggerElement.morphs}'`);let e=`
      <svg xmlns="http://www.w3.org/2000/svg" style="display:inline-block;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
      RENDERING - &lt;${this.delegate.triggerElement.tagName.toLowerCase()}&gt;
    `,t=`
      <b>partial</b>: ${this.delegate.triggerElement.renders||"unknown"}<br>
      <b>morphs</b>: ${this.delegate.triggerElement.morphs||"unknown"}<br>
    `,o=f(e,t,`
      <div slot="content-top" style="font-size:85%; font-style:italic; font-weight:100;">
        The <b>TRIGGER</b> toggles the <b>TARGET</b> then renders the partial &amp; morphs the element.<br>
      </div>
    `,{backgroundColor:"lightyellow",color:"chocolate"}),i=v(this.delegate.morphElement),r=Math.ceil(i.top+i.height/2-o.offsetHeight/2),l=Math.ceil(i.left+i.width+100);return o.style.top=`${r}px`,o.style.left=`${l}px`,o.line=new LeaderLine(o,this.delegate.morphElement,d(a({},this.leaderLineOptions),{color:"chocolate"})),o.drag=new PlainDraggable(o),o}createTargetTooltip(){var e,t;if(!this.delegate.targetElement)return console.debug(`Unable to create the target tooltip! No element matches the DOM id: '${this.delegate.triggerElement.controls}'`);let o=`
      <svg xmlns="http://www.w3.org/2000/svg" style="display:inline-block;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
      TARGET - &lt;${this.delegate.targetElement.tagName.toLowerCase()}&gt;
    `,i=f(o,((e=this.delegate.targetTooltipData)==null?void 0:e.subtitle)||"",((t=this.delegate.targetTooltipData)==null?void 0:t.content)||"",{backgroundColor:"lightcyan",color:"darkcyan",position:"bottom"}),r=v(this.delegate.targetElement),l=Math.ceil(r.top+i.offsetHeight),s=Math.ceil(r.left+r.width+i.offsetWidth/3);return i.style.top=`${l}px`,i.style.left=`${s}px`,i.line=new LeaderLine(i,this.delegate.targetElement,d(a({},this.leaderLineOptions),{color:"darkcyan"})),i.drag=new PlainDraggable(i),i}createTriggerTooltip(e,t){var o,i;if(!this.delegate.triggerElement)return;let r=`
      <svg xmlns="http://www.w3.org/2000/svg" style="display:inline;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
      TRIGGER - &lt;${this.delegate.triggerElement.tagName.toLowerCase()}&gt;
    `,l=f(r,((o=this.delegate.triggerTooltipData)==null?void 0:o.subtitle)||"",((i=this.delegate.triggerTooltipData)==null?void 0:i.content)||"",{backgroundColor:"lavender",color:"blueviolet"}),s=v(this.delegate.triggerElement),b=Math.ceil(s.top-l.offsetHeight*2),H=Math.ceil(s.left+s.width+l.offsetWidth/3);return l.style.top=`${b}px`,l.style.left=`${H}px`,l.line=new LeaderLine(this.delegate.triggerElement,l,d(a({},this.leaderLineOptions),{color:"blueviolet"})),e&&(l.lineToTarget=new LeaderLine(l,e,d(a({},this.leaderLineOptions),{color:"blueviolet",middleLabel:this.delegate.targetLineLabel,size:2.1})),e.drag.onMove=()=>{e.line.position(),l.lineToTarget.position(),l.lineToRendering.position()}),t&&(l.lineToRendering=new LeaderLine(l,t,d(a({},this.leaderLineOptions),{color:"blueviolet",middleLabel:this.delegate.renderingLineLabel,size:2.1})),t.drag.onMove=()=>{t.line.position(),l.lineToTarget&&l.lineToTarget.position(),l.lineToRendering.position()}),l.drag=new PlainDraggable(l),l.drag.onMove=()=>{l.line.position(),l.lineToTarget&&l.lineToTarget.position(),l.lineToRendering&&l.lineToRendering.position()},l}get leaderLineOptions(){return{dash:{animation:!0},dropShadow:{opacity:.3},endPlug:"arrow3",endPlugSize:1.7,size:3,startPlug:"disc",startPlugSize:1}}},{restart:Z,start:ee,stop:te}=w;function T(e,t,o){Object.assign(e,{initializeDevtool(){let i=()=>this.devtool.show();addEventListener("turbo-boost:devtools-start",()=>{this.devtool=new L(this),this.addEventListener("mouseenter",i)}),addEventListener("turbo-boost:devtools-stop",()=>{this.removeEventListener("mouseenter",i),this.removeDevtool()}),this.dispatchEvent(new CustomEvent("turbo-boost:devtools-connect",{bubbles:!0}))},hideDevtool(){var i;(i=this.devtool)==null||i.hide({active:!1})},removeDevtool(){this.devtool.hide({active:!1}),this.devtool.unregisterEventListeners(),delete this.devtool},name:t,targetLineLabel:o}),Object.defineProperties(e,{triggerElement:{get(){return e}},morphElement:{get(){return e}},targetElement:{get(){return e}}})}var z={restart:Z,start:ee,stop:te};function M(e){Object.defineProperties(e,{targetTooltipData:{get(){return{subtitle:`
            <b>identifier</b>: ${e.identifier}<br>
            <b>query</b>: ${e.query}
          `,content:`
            <div slot="content-top">
              <svg xmlns="http://www.w3.org/2000/svg" style="display:inline-block;" width="16" height="16" viewbox="0 0 24 24" fill="none" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              <b>element log</b>
            </div>
            ${e.targetElementLog.slice(-10).map(t=>`<div slot="content">${t}</div>`).join("")}
          `}}},triggerTooltipData:{get(){return{subtitle:`
            <b>identifier</b>: ${this.identifier}<br>
            <b>only</b>: ${this.getAttribute("only")||""}<br>
            <b>url</b>: ${this.getAttribute("url")||location.href}<br>
            <b>debounce (client-side)</b>: ${this.debounce}<br>
            <b>ignore-inner-updates</b>: ${this.hasAttribute("ignore-inner-updates")}
          `,content:`
            <div slot="content-top">
              <svg xmlns="http://www.w3.org/2000/svg" style="display:inline-block;" width="16" height="16" viewbox="0 0 24 24" fill="none" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              <b>element log</b>
            </div>
            ${e.triggerElementLog.slice(-10).map(t=>`<div slot="content">${t}</div>`).join("")}
          `}}}})}function oe(){document.addEventListener("turbo-boost:devtools-start",()=>L.register("updates-for","updates-for")),window.CableReady.devtools=z,document.addEventListener("turbo:load",()=>{document.querySelectorAll("updates-for").forEach(e=>{T(e,"updates-for","updates"),M(e),e.initializeDevtool()}),document.querySelectorAll("cable-ready-updates-for").forEach(e=>{T(e,"updates-for","updates"),M(e),e.initializeDevtool()}),CableReady.devtools.start()})}var ce={initialize:oe};export{ce as default};
//# sourceMappingURL=devtools.js.map
