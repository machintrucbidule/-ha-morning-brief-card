function t(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),r=new WeakMap;let o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new o(i,t,s)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:c,defineProperty:h,getOwnPropertyDescriptor:l,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,_=globalThis,g=_.trustedTypes,f=g?g.emptyScript:"",v=_.reactiveElementPolyfillSupport,m=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},$=(t,e)=>!c(t,e),b={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&h(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const o=s?.call(this);r?.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),r=e.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=s;const o=r.fromAttribute(e,t.type);this[s]=o??this._$Ej?.get(s)??o,this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(void 0!==t){const o=this.constructor;if(!1===s&&(r=this[t]),i??=o.getPropertyOptions(t),!((i.hasChanged??$)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==r||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[m("elementProperties")]=new Map,w[m("finalized")]=new Map,v?.({ReactiveElement:w}),(_.reactiveElementVersions??=[]).push("2.1.2");const A=globalThis,x=t=>t,S=A.trustedTypes,E=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+k,R=`<${P}>`,N=document,M=()=>N.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,T="[ \t\n\f\r]",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,j=/>/g,B=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,z=/"/g,L=/^(?:script|style|textarea|title)$/i,q=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),V=q(1),W=q(2),F=Symbol.for("lit-noChange"),G=Symbol.for("lit-nothing"),J=new WeakMap,K=N.createTreeWalker(N,129);function Z(t,e){if(!U(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const Q=(t,e)=>{const i=t.length-1,s=[];let r,o=2===e?"<svg>":3===e?"<math>":"",n=I;for(let e=0;e<i;e++){const i=t[e];let a,c,h=-1,l=0;for(;l<i.length&&(n.lastIndex=l,c=n.exec(i),null!==c);)l=n.lastIndex,n===I?"!--"===c[1]?n=H:void 0!==c[1]?n=j:void 0!==c[2]?(L.test(c[2])&&(r=RegExp("</"+c[2],"g")),n=B):void 0!==c[3]&&(n=B):n===B?">"===c[0]?(n=r??I,h=-1):void 0===c[1]?h=-2:(h=n.lastIndex-c[2].length,a=c[1],n=void 0===c[3]?B:'"'===c[3]?z:D):n===z||n===D?n=B:n===H||n===j?n=I:(n=B,r=void 0);const d=n===B&&t[e+1].startsWith("/>")?" ":"";o+=n===I?i+R:h>=0?(s.push(a),i.slice(0,h)+C+i.slice(h)+k+d):i+k+(-2===h?e:d)}return[Z(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class X{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const n=t.length-1,a=this.parts,[c,h]=Q(t,e);if(this.el=X.createElement(c,i),K.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=K.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(C)){const e=h[o++],i=s.getAttribute(t).split(k),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:n[2],strings:i,ctor:"."===n[1]?st:"?"===n[1]?rt:"@"===n[1]?ot:it}),s.removeAttribute(t)}else t.startsWith(k)&&(a.push({type:6,index:r}),s.removeAttribute(t));if(L.test(s.tagName)){const t=s.textContent.split(k),e=t.length-1;if(e>0){s.textContent=S?S.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],M()),K.nextNode(),a.push({type:2,index:++r});s.append(t[e],M())}}}else if(8===s.nodeType)if(s.data===P)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(k,t+1));)a.push({type:7,index:r}),t+=k.length-1}r++}}static createElement(t,e){const i=N.createElement("template");return i.innerHTML=t,i}}function Y(t,e,i=t,s){if(e===F)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const o=O(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=Y(t,r._$AS(t,e.values),r,s)),e}class tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??N).importNode(e,!0);K.currentNode=s;let r=K.nextNode(),o=0,n=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new et(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new nt(r,this,t)),this._$AV.push(e),a=i[++n]}o!==a?.index&&(r=K.nextNode(),o++)}return K.currentNode=N,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class et{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),O(t)?t===G||null==t||""===t?(this._$AH!==G&&this._$AR(),this._$AH=G):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>U(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==G&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(N.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=X.createElement(Z(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new tt(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=J.get(t.strings);return void 0===e&&J.set(t.strings,e=new X(t)),e}k(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new et(this.O(M()),this.O(M()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=x(t).nextSibling;x(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class it{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=G,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=G}_$AI(t,e=this,i,s){const r=this.strings;let o=!1;if(void 0===r)t=Y(this,t,e,0),o=!O(t)||t!==this._$AH&&t!==F,o&&(this._$AH=t);else{const s=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=Y(this,s[i+n],e,n),a===F&&(a=this._$AH[n]),o||=!O(a)||a!==this._$AH[n],a===G?t=G:t!==G&&(t+=(a??"")+r[n+1]),this._$AH[n]=a}o&&!s&&this.j(t)}j(t){t===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class st extends it{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===G?void 0:t}}class rt extends it{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==G)}}class ot extends it{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=Y(this,t,e,0)??G)===F)return;const i=this._$AH,s=t===G&&i!==G||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==G&&(i===G||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const at=A.litHtmlPolyfillSupport;at?.(X,et),(A.litHtmlVersions??=[]).push("3.3.3");const ct=globalThis;class ht extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new et(e.insertBefore(M(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}}ht._$litElement$=!0,ht.finalized=!0,ct.litElementHydrateSupport?.({LitElement:ht});const lt=ct.litElementPolyfillSupport;lt?.({LitElement:ht}),(ct.litElementVersions??=[]).push("4.2.2");const dt=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},pt={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:$},ut=(t=pt,e,i)=>{const{kind:s,metadata:r}=i;let o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),o.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const r=this[s];e.call(this,i),this.requestUpdate(s,r,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};function _t(t){return(e,i)=>"object"==typeof i?ut(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function gt(t){return _t({...t,state:!0,attribute:!1})}const ft="morning-brief-card",vt="en",mt=n`
  :host {
    --mbc-spacing: 0.75rem;
    --mbc-radius: 0.5rem;
  }
  ha-card {
    padding: var(--mbc-spacing);
    color: var(--primary-text-color);
    background: var(--card-background-color);
  }
  .header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: var(--mbc-spacing);
  }
  .header .title {
    flex: 1;
    font-size: 1.1rem;
    font-weight: 600;
  }
  .header .subtitle {
    font-size: 0.8rem;
    color: var(--secondary-text-color);
  }
  .header button {
    background: transparent;
    border: 0;
    cursor: pointer;
    color: var(--primary-text-color);
    padding: 0.25rem;
  }
  .header button[disabled] {
    opacity: 0.4;
    cursor: default;
  }
  .alerts {
    background: var(--warning-color, #f39c12);
    color: var(--text-on-warning-color, #fff);
    border-radius: var(--mbc-radius);
    padding: var(--mbc-spacing);
    margin-bottom: var(--mbc-spacing);
  }
  .alerts.critical {
    background: var(--error-color, #e74c3c);
  }
  .alerts ul {
    margin: 0;
    padding-left: 1.25rem;
  }
  .category {
    border: 1px solid var(--divider-color);
    border-radius: var(--mbc-radius);
    margin-bottom: var(--mbc-spacing);
    overflow: hidden;
  }
  .category-header {
    background: var(--secondary-background-color);
    padding: 0.5rem var(--mbc-spacing);
    font-weight: 600;
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
  .category-body {
    padding: var(--mbc-spacing);
  }
  .field {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.4rem 0;
    border-bottom: 1px solid var(--divider-color);
  }
  .field:last-child {
    border-bottom: 0;
  }
  .field .icon {
    font-size: 1.1rem;
  }
  .field .body {
    flex: 1;
  }
  .field .label {
    font-weight: 500;
  }
  .field .comparisons {
    font-size: 0.78rem;
    color: var(--secondary-text-color);
    margin-top: 0.15rem;
  }
  .field .value {
    font-size: 1.2rem;
    font-weight: 600;
    min-width: 4rem;
    text-align: right;
  }
  .field .stale {
    color: var(--secondary-text-color);
    font-style: italic;
  }
  .insight {
    margin-top: 0.5rem;
    padding: 0.4rem var(--mbc-spacing);
    background: var(--primary-color);
    color: var(--text-primary-color, #fff);
    border-radius: var(--mbc-radius);
    font-style: italic;
    opacity: 0.85;
  }
  .verdict {
    padding: var(--mbc-spacing);
    border-left: 4px solid var(--primary-color);
    background: var(--secondary-background-color);
    border-radius: var(--mbc-radius);
    margin-bottom: var(--mbc-spacing);
  }
  .weather {
    margin-bottom: var(--mbc-spacing);
  }
  .footer {
    font-size: 0.75rem;
    color: var(--secondary-text-color);
    border-top: 1px solid var(--divider-color);
    padding-top: 0.5rem;
    margin-top: 0.5rem;
  }
  .sparkline {
    display: inline-block;
    vertical-align: middle;
    margin-left: 0.5rem;
  }
`;const yt={en:{card:{loading:"Loading…",no_data:"No brief available yet.",error_prefix:"Couldn't load the brief: ",no_alerts:"No alerts.",verdict:"Verdict",alerts:"Alerts",weather:"Weather",navigate_prev:"Previous brief",navigate_next:"Next brief",refresh:"Refresh",settings:"Settings",logical_date:"Logical date",ai_status_disabled:"AI off",ai_status_degraded:"AI degraded",ai_status_ok:"AI ok",stale_no_data:"No data",stale_no_event_today:"No event today",stale_awaiting_availability:"Awaiting availability",stale_gate_sensor_unavailable:"Gate sensor unavailable",stale_no_data_for_date:"No data for this date",severity_critical:"Critical",severity_warning:"Warning",severity_info:"Info"},editor:{entity:"Entity",entity_help:"A sensor.morning_brief_* entity created by the integration.",compact_mode:"Compact mode",show_history_nav:"Show history navigation",show_ai_sections:"Show AI sections (insights, verdict)",show_alerts:"Show alerts",show_weather:"Show weather",show_footer:"Show footer",theme_override:"Theme accent override (CSS color)"}},fr:{card:{loading:"Chargement…",no_data:"Aucun brief disponible pour l'instant.",error_prefix:"Impossible de charger le brief : ",no_alerts:"Aucune alerte.",verdict:"Verdict",alerts:"Alertes",weather:"Météo",navigate_prev:"Brief précédent",navigate_next:"Brief suivant",refresh:"Rafraîchir",settings:"Paramètres",logical_date:"Date logique",ai_status_disabled:"IA désactivée",ai_status_degraded:"IA dégradée",ai_status_ok:"IA ok",stale_no_data:"Pas de donnée",stale_no_event_today:"Pas d'événement aujourd'hui",stale_awaiting_availability:"En attente",stale_gate_sensor_unavailable:"Capteur de gate indisponible",stale_no_data_for_date:"Pas de donnée pour cette date",severity_critical:"Critique",severity_warning:"Avertissement",severity_info:"Info"},editor:{entity:"Entité",entity_help:"Une entité sensor.morning_brief_* créée par l'intégration.",compact_mode:"Mode compact",show_history_nav:"Afficher la navigation d'historique",show_ai_sections:"Afficher les sections IA (insights, verdict)",show_alerts:"Afficher les alertes",show_weather:"Afficher la météo",show_footer:"Afficher le pied de page",theme_override:"Override d'accent CSS"}}};function $t(t){if(!t)return vt;const e=t.slice(0,2).toLowerCase();return e in yt?e:vt}function bt(t,e){const i=wt(yt[t],e);if(void 0!==i)return i;return wt(yt[vt],e)??e}function wt(t,e){let i=t;for(const t of e.split(".")){if(!i||"object"!=typeof i||!(t in i))return;i=i[t]}return"string"==typeof i?i:void 0}async function At(t,e,i){try{const s=await t.connection.sendMessagePromise({type:"call_service",domain:"morning_brief",service:e,service_data:i,return_response:!0});return s?.response?.brief?.canonical_json??null}catch{return null}}function xt(t,e){const i=Math.max(0,Math.min(e,Math.max(0,t.length-1)));return{index:i,canGoPrev:i<t.length-1,canGoNext:i>0,currentRef:t[i]??null}}async function St(t,e,i,s){const r=xt(i,s);return null===r.currentRef?null:async function(t,e,i){return At(t,"get_brief_by_uuid",{instance_id:e,uuid:i})}(t,e,r.currentRef)}let Et=class extends ht{constructor(){super(...arguments),this.lang="en",this.showNav=!0,this.canPrev=!1,this.canNext=!1}createRenderRoot(){return this}render(){const t=this.brief.meta;return V`
      <div class="header">
        ${this.showNav?V`<button
              ?disabled=${!this.canPrev}
              @click=${()=>this.dispatchEvent(new CustomEvent("mbc-prev"))}
              aria-label=${bt(this.lang,"card.navigate_prev")}
              title=${bt(this.lang,"card.navigate_prev")}
            >
              ‹
            </button>`:""}
        <div class="title">${t.instance_name}</div>
        <div class="subtitle">
          ${function(t,e){if(!t)return"";const i=new Date(t);return isNaN(i.getTime())?t:i.toLocaleDateString(e,{weekday:"short",day:"numeric",month:"short"})}(t.logical_date,this.lang)} ${function(t,e){if(!t)return"";const i=new Date(t);return isNaN(i.getTime())?t:i.toLocaleTimeString(e,{hour:"2-digit",minute:"2-digit"})}(t.generated_at,this.lang)}
        </div>
        ${this.showNav?V`<button
              ?disabled=${!this.canNext}
              @click=${()=>this.dispatchEvent(new CustomEvent("mbc-next"))}
              aria-label=${bt(this.lang,"card.navigate_next")}
              title=${bt(this.lang,"card.navigate_next")}
            >
              ›
            </button>`:""}
        <button
          @click=${()=>this.dispatchEvent(new CustomEvent("mbc-refresh"))}
          aria-label=${bt(this.lang,"card.refresh")}
          title=${bt(this.lang,"card.refresh")}
        >
          ↻
        </button>
      </div>
    `}};t([_t({attribute:!1})],Et.prototype,"brief",void 0),t([_t({type:String})],Et.prototype,"lang",void 0),t([_t({type:Boolean,attribute:"show-nav"})],Et.prototype,"showNav",void 0),t([_t({type:Boolean,attribute:"can-prev"})],Et.prototype,"canPrev",void 0),t([_t({type:Boolean,attribute:"can-next"})],Et.prototype,"canNext",void 0),Et=t([dt("mbc-header")],Et);let Ct=class extends ht{constructor(){super(...arguments),this.alerts=[],this.lang="en"}createRenderRoot(){return this}render(){if(!this.alerts.length)return V``;const t=this.alerts.some(t=>"critical"===t.severity);return V`
      <div class="alerts ${t?"critical":""}">
        <strong>${bt(this.lang,"card.alerts")}</strong>
        <ul>
          ${this.alerts.map(t=>V`<li>[${this._severityLabel(t.severity)}] ${t.message}</li>`)}
        </ul>
      </div>
    `}_severityLabel(t){return bt(this.lang,`card.severity_${t}`)}};t([_t({attribute:!1})],Ct.prototype,"alerts",void 0),t([_t({type:String})],Ct.prototype,"lang",void 0),Ct=t([dt("mbc-alerts")],Ct);const kt={improvement:"var(--success-color, #4caf50)",worsening:"var(--error-color, #e74c3c)",neutral:"var(--secondary-text-color, #999)"};let Pt=class extends ht{constructor(){super(...arguments),this.data=[],this.width=80,this.height=20}render(){if(this.data.length<2)return V`<span></span>`;const t=Math.min(...this.data),e=Math.max(...this.data)-t||1,i=this.width/(this.data.length-1),s=this.data.map((s,r)=>{const o=r*i,n=this.height-(s-t)/e*this.height;return`${o.toFixed(1)},${n.toFixed(1)}`}).join(" ");return V`${W`
      <svg width="${this.width}" height="${this.height}" viewBox="0 0 ${this.width} ${this.height}">
        <polyline
          fill="none"
          stroke="var(--primary-color)"
          stroke-width="1.5"
          points="${s}"
        />
      </svg>
    `}`}};Pt.styles=n`
    :host {
      display: inline-block;
      line-height: 0;
    }
  `,t([_t({type:Array})],Pt.prototype,"data",void 0),t([_t({type:Number})],Pt.prototype,"width",void 0),t([_t({type:Number})],Pt.prototype,"height",void 0),Pt=t([dt("mbc-sparkline")],Pt);let Rt=class extends ht{constructor(){super(...arguments),this.lang="en",this.compact=!1,this.showSparkline=!1}createRenderRoot(){return this}render(){const t=this.field,e=t.value.stale,i=t.value.stale_reason?`card.stale_${t.value.stale_reason}`:"card.stale_no_data";return V`
      <div class="field">
        ${t.icon?V`<span class="icon">${t.icon}</span>`:""}
        <div class="body">
          <div class="label">
            ${t.label}
            ${this.showSparkline&&t.sparkline_data.length>1?V`<mbc-sparkline class="sparkline" .data=${t.sparkline_data}></mbc-sparkline>`:""}
          </div>
          ${!this.compact&&t.comparisons.length?this._renderComparisons(t.comparisons):""}
        </div>
        <div class="value ${e?"stale":""}">
          ${e&&null===t.value.raw?bt(this.lang,i):t.value.formatted}
        </div>
      </div>
    `}_renderComparisons(t){return V`
      <div class="comparisons">
        ${t.filter(t=>"not_applicable"!==t.status&&t.delta_formatted).map(t=>{return V`
              <span style="color: ${e=t.interpretation,kt[e]??kt.neutral}">
                ${t.type}: ${t.delta_formatted}
              </span>
              &nbsp;
            `;var e})}
      </div>
    `}};t([_t({attribute:!1})],Rt.prototype,"field",void 0),t([_t({type:String})],Rt.prototype,"lang",void 0),t([_t({type:Boolean})],Rt.prototype,"compact",void 0),t([_t({type:Boolean,attribute:"show-sparkline"})],Rt.prototype,"showSparkline",void 0),Rt=t([dt("mbc-field")],Rt);let Nt=class extends ht{constructor(){super(...arguments),this.lang="en",this.compact=!1,this.showSparkline=!1,this.insight=""}createRenderRoot(){return this}render(){const t=this.category;return V`
      <div class="category">
        <div class="category-header">
          ${t.icon?V`<span>${t.icon}</span>`:""}
          <span>${t.label}</span>
          <span style="margin-left:auto; opacity:.7">${t.fields.length}</span>
        </div>
        <div class="category-body">
          ${t.fields.map(t=>V`<mbc-field
              .field=${t}
              .lang=${this.lang}
              ?compact=${this.compact}
              ?show-sparkline=${this.showSparkline}
            ></mbc-field>`)}
          ${!this.compact&&this.insight?V`<div class="insight">${this.insight}</div>`:""}
        </div>
      </div>
    `}};t([_t({attribute:!1})],Nt.prototype,"category",void 0),t([_t({type:String})],Nt.prototype,"lang",void 0),t([_t({type:Boolean})],Nt.prototype,"compact",void 0),t([_t({type:Boolean,attribute:"show-sparkline"})],Nt.prototype,"showSparkline",void 0),t([_t({type:String})],Nt.prototype,"insight",void 0),Nt=t([dt("mbc-category")],Nt);let Mt=class extends ht{constructor(){super(...arguments),this.synthesis="",this.lang="en"}createRenderRoot(){return this}render(){return this.synthesis.trim()?V`
      <div class="weather">
        <strong>${bt(this.lang,"card.weather")}</strong> — ${this.synthesis}
      </div>
    `:V``}};t([_t({type:String})],Mt.prototype,"synthesis",void 0),t([_t({type:String})],Mt.prototype,"lang",void 0),Mt=t([dt("mbc-weather")],Mt);let Ot=class extends ht{constructor(){super(...arguments),this.verdict="",this.lang="en"}createRenderRoot(){return this}render(){return this.verdict.trim()?V`
      <div class="verdict">
        <strong>${bt(this.lang,"card.verdict")}</strong> — ${this.verdict}
      </div>
    `:V``}};t([_t({type:String})],Ot.prototype,"verdict",void 0),t([_t({type:String})],Ot.prototype,"lang",void 0),Ot=t([dt("mbc-verdict")],Ot);let Ut=class extends ht{constructor(){super(...arguments),this.lang="en"}createRenderRoot(){return this}render(){const t=this.brief.meta,e=`card.ai_status_${t.ai_status}`;return V`
      <div class="footer">
        ${bt(this.lang,e)} ·
        ${bt(this.lang,"card.logical_date")} ${t.logical_date}
      </div>
    `}};t([_t({attribute:!1})],Ut.prototype,"brief",void 0),t([_t({type:String})],Ut.prototype,"lang",void 0),Ut=t([dt("mbc-footer")],Ut);let Tt=class extends ht{constructor(){super(...arguments),this._brief=null,this._historyIndex=0,this._loading=!1,this._error=null}setConfig(t){if(!t?.entity)throw new Error("morning-brief-card: `entity` is required.");this._config={...t}}static async getConfigElement(){return await Promise.resolve().then(function(){return jt}),document.createElement(`${ft}-editor`)}static getStubConfig(){return{type:`custom:${ft}`,entity:"",compact_mode:!1,show_history_nav:!0,show_ai_sections:!0,show_alerts:!0,show_weather:!0,show_footer:!0}}updated(t){(t.has("hass")||t.has("_config"))&&this._loadCurrent()}render(){return this._loading?V`<ha-card><div>${bt(this._lang,"card.loading")}</div></ha-card>`:this._error?V`<ha-card>
        <div>${bt(this._lang,"card.error_prefix")}${this._error}</div>
      </ha-card>`:this._brief?this._renderFull(this._brief):V`<ha-card>
        <mbc-header
          .brief=${this._stubBrief()}
          .lang=${this._lang}
          ?show-nav=${!1}
          @mbc-refresh=${this._refresh}
        ></mbc-header>
        <div>${bt(this._lang,"card.no_data")}</div>
      </ha-card>`}_renderFull(t){const e=this._config,i=xt(t.previous_briefs_refs??[],this._historyIndex),s="weekly"===t.meta.report_type,r=t.ai_output?.category_insights??{},o=(t.categories??[]).filter(t=>!e.show_categories?.length||e.show_categories.includes(t.id));return V`
      <ha-card>
        <mbc-header
          .brief=${t}
          .lang=${this._lang}
          ?show-nav=${!1!==e.show_history_nav}
          ?can-prev=${i.canGoPrev}
          ?can-next=${i.canGoNext}
          @mbc-prev=${this._navigatePrev}
          @mbc-next=${this._navigateNext}
          @mbc-refresh=${this._refresh}
        ></mbc-header>
        ${!1!==e.show_alerts&&(t.alerts??[]).length?V`<mbc-alerts .alerts=${t.alerts} .lang=${this._lang}></mbc-alerts>`:""}
        ${o.map(t=>V`<mbc-category
            .category=${t}
            .lang=${this._lang}
            ?compact=${!!e.compact_mode}
            ?show-sparkline=${s}
            .insight=${!1===e.show_ai_sections?"":r[t.id]??""}
          ></mbc-category>`)}
        ${!1!==e.show_weather&&t.ai_output?.weather_synthesis?V`<mbc-weather
              .synthesis=${t.ai_output.weather_synthesis}
              .lang=${this._lang}
            ></mbc-weather>`:""}
        ${!1!==e.show_ai_sections&&t.ai_output?.verdict?V`<mbc-verdict
              .verdict=${t.ai_output.verdict}
              .lang=${this._lang}
            ></mbc-verdict>`:""}
        ${!1===e.show_footer||e.compact_mode?"":V`<mbc-footer .brief=${t} .lang=${this._lang}></mbc-footer>`}
      </ha-card>
    `}async _loadCurrent(){if(this.hass&&this._config){this._loading=!0,this._error=null;try{this._historyIndex=0,this._brief=await async function(t,e){const i=t.states[e];if(!i)return null;const s=i.attributes??{};if(!0!==s._truncated)return s;const r=s.meta;return r?.instance_id?At(t,"get_last_brief",{instance_id:r.instance_id}):null}(this.hass,this._config.entity)}catch(t){this._error=t.message??String(t)}finally{this._loading=!1}}}async _navigatePrev(){if(!this._brief)return;const t=this._historyIndex+1;await this._jumpTo(t)}async _navigateNext(){if(!this._brief)return;const t=this._historyIndex-1;t<0?await this._loadCurrent():await this._jumpTo(t)}async _jumpTo(t){if(!this._brief)return;const e=this._brief.previous_briefs_refs??[],i=this._brief.meta.instance_id;this._loading=!0;try{const s=await St(this.hass,i,e,t);s&&(this._brief=s,this._historyIndex=t)}catch(t){this._error=t.message??String(t)}finally{this._loading=!1}}async _refresh(){this._brief&&(await this.hass.callService("morning_brief","generate",{instance_id:this._brief.meta.instance_id,force:!0}),await this._loadCurrent())}get _lang(){return $t(this.hass?.language)}_stubBrief(){return{schema_version:1,meta:{instance_id:"",instance_name:"Morning Brief",report_type:"morning",language:"en",generated_at:"",calendar_date:"",logical_date:"",logical_day_strategy:"",logical_day_offset:0,ai_status:"disabled",ai_provider:null,ai_error:null,duration_ms:0},alerts:[],categories:[],ai_output:{category_insights:{},weather_synthesis:"",verdict:""},ha_health:{status:"ok",alerts:[],data:{}},previous_briefs_refs:[]}}};Tt.styles=mt,t([_t({attribute:!1})],Tt.prototype,"hass",void 0),t([gt()],Tt.prototype,"_config",void 0),t([gt()],Tt.prototype,"_brief",void 0),t([gt()],Tt.prototype,"_historyIndex",void 0),t([gt()],Tt.prototype,"_loading",void 0),t([gt()],Tt.prototype,"_error",void 0),Tt=t([dt(ft)],Tt);const It=window;It.customCards=It.customCards??[],It.customCards.some(t=>t.type===ft)||It.customCards.push({type:ft,name:"Morning Brief Card",description:"Renders the canonical JSON produced by home-assistant-morning-brief.",preview:!0}),console.info("%c MORNING-BRIEF-CARD %c v0.1.0 ","color:white; background:#3478e8; font-weight:700","color:#3478e8; background:white; font-weight:700");let Ht=class extends ht{setConfig(t){this._config={...t}}createRenderRoot(){return this}render(){if(!this._config)return V``;const t=$t(this.hass?.language);return V`
      <div style="display:flex; flex-direction:column; gap:0.5rem;">
        <label>
          ${bt(t,"editor.entity")}
          <input
            type="text"
            data-config-value="entity"
            .value=${this._config.entity??""}
            @input=${this._onTextInput}
          />
        </label>
        <small>${bt(t,"editor.entity_help")}</small>
        ${this._checkbox(t,"compact_mode","editor.compact_mode")}
        ${this._checkbox(t,"show_history_nav","editor.show_history_nav",!0)}
        ${this._checkbox(t,"show_ai_sections","editor.show_ai_sections",!0)}
        ${this._checkbox(t,"show_alerts","editor.show_alerts",!0)}
        ${this._checkbox(t,"show_weather","editor.show_weather",!0)}
        ${this._checkbox(t,"show_footer","editor.show_footer",!0)}
        <label>
          ${bt(t,"editor.theme_override")}
          <input
            type="text"
            data-config-value="theme_override"
            .value=${this._config.theme_override??""}
            @input=${this._onTextInput}
          />
        </label>
      </div>
    `}_checkbox(t,e,i,s=!1){const r=this._config[e]??s;return V`
      <label>
        <input
          type="checkbox"
          data-config-value="${e}"
          .checked=${r}
          @change=${this._onCheckboxInput}
        />
        ${bt(t,i)}
      </label>
    `}_onTextInput(t){const e=t.target,i=e.dataset.configValue;i&&this._emit({...this._config,[i]:e.value})}_onCheckboxInput(t){const e=t.target,i=e.dataset.configValue;i&&this._emit({...this._config,[i]:e.checked})}_emit(t){this._config=t,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0}))}};t([_t({attribute:!1})],Ht.prototype,"hass",void 0),t([gt()],Ht.prototype,"_config",void 0),Ht=t([dt(`${ft}-editor`)],Ht),_valueChangedReserved;var jt=Object.freeze({__proto__:null,get MorningBriefCardEditor(){return Ht}});
//# sourceMappingURL=morning-brief-card.js.map
