(function(){"use strict";var e={4694:function(e,t,r){var o=r(5130),a=r(6768);const s={id:"main"},n=(0,a.Lk)("div",{class:"details-block"},[(0,a.Lk)("h2",null,"About Gadget Search"),(0,a.Lk)("p",null," Welcome to our product search application! Our goal is to help you find web pages that sell the product you're looking for, along with honest and positive user reviews, comments, or validations. We use advanced AI to sift through relevant web pages, ensuring that the products you see have been positively reviewed by other buyers. "),(0,a.Lk)("p",null," Each product is rated on a scale of 1 to 5 based on the positivity of the reviews or the sheer number of positive comments it has received. Keep in mind that the search process may take up to 5 minutes. That's because we use a powerful AI model that carefully analyzes each web page to find the best and most reliable feedback for you. "),(0,a.Lk)("p",null," We appreciate your patience and hope this application helps you make informed buying decisions! ")],-1);function i(e,t,r,o,i,c){const u=(0,a.g2)("AppHeader"),d=(0,a.g2)("SearchForm"),p=(0,a.g2)("LoadingState"),l=(0,a.g2)("ProductListing"),v=(0,a.g2)("AppFooter");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)(u),(0,a.Lk)("div",s,[n,(0,a.bF)(d,{productName:e.productName,countryCode:e.countryCode,"onUpdate:productName":t[0]||(t[0]=t=>e.productName=t),"onUpdate:countryCode":t[1]||(t[1]=t=>e.countryCode=t),onSearch:e.searchProducts},null,8,["productName","countryCode","onSearch"]),e.isLoading?((0,a.uX)(),(0,a.Wv)(p,{key:0,progress:e.progress},null,8,["progress"])):(0,a.Q3)("",!0),!e.isLoading&&e.products.length>0?((0,a.uX)(),(0,a.Wv)(l,{key:1,productName:e.productName,countryCode:e.countryCode,products:e.products},null,8,["productName","countryCode","products"])):(0,a.Q3)("",!0)]),(0,a.bF)(v)],64)}const c=e=>((0,a.Qi)("data-v-235fdb16"),e=e(),(0,a.jt)(),e),u=c((()=>(0,a.Lk)("h1",null,"Gadget Search",-1))),d=[u];function p(e,t,r,o,s,n){return(0,a.uX)(),(0,a.CE)("header",null,d)}var l={name:"AppHeader"},v=r(1241);const h=(0,v.A)(l,[["render",p],["__scopeId","data-v-235fdb16"]]);var m=h;const g=(0,a.Fv)('<p data-v-387aacb1>© 2023 Gadget Search</p><div class="footer-links" data-v-387aacb1><a href="#" data-v-387aacb1>Contact Us</a>| <a href="#" data-v-387aacb1>About Us</a>| <a href="#" data-v-387aacb1>Terms of Service</a>| <a href="#" data-v-387aacb1>Privacy Policy</a></div><div class="social-links" data-v-387aacb1><a href="#" data-v-387aacb1><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="24px" viewBox="0 0 256 256" data-v-387aacb1><path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" data-v-387aacb1></path></svg></a><a href="#" data-v-387aacb1><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="24px" viewBox="0 0 256 256" data-v-387aacb1><path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72,9.71,4.89,24.71,7.44,44.88,7.44a138.46,138.46,0,0,0,45.06-7.64c43.68-15.11,74.53-51.53,84.88-103.48C241.93,81.68,247.58,71.16,247.39,68.94ZM201.2,147.64c-9.19,47.64-35.27,79.69-75.6,94.39-16.14,5.57-61.42,16.72-94.69-6.56,10.46-5.75,25.93-15.36,36.92-28.65a7.85,7.85,0,0,0,.73-.94A88,88,0,0,0,139,144a8,8,0,0,0-8-8h-16c-20.78,0-39.14-10.72-55.77-31.84a164.4,164.4,0,0,1-18.15-26.27c32.39,16.49,72.89,19.8,73.59,19.86a8.29,8.29,0,0,0,6.33-2.08A8.09,8.09,0,0,0,124,96V88a32,32,0,0,1,9.54-23.21A30.91,30.91,0,0,1,168.1,56c20.67,0,33.39,11.7,34.42,12.73a8,8,0,0,0,5.65,2.34h25.3C230.08,85.88,223.81,103.8,201.2,147.64Z" data-v-387aacb1></path></svg></a></div>',3),f=[g];function y(e,t,r,o,s,n){return(0,a.uX)(),(0,a.CE)("footer",null,f)}var b={name:"AppFooter"};const k=(0,v.A)(b,[["render",y],["__scopeId","data-v-387aacb1"]]);var C=k,w=r(4232);const L=e=>((0,a.Qi)("data-v-d047bb9c"),e=e(),(0,a.jt)(),e),A={class:"custom-input"},S=L((()=>(0,a.Lk)("label",{for:"product-name"},"Product",-1))),N=["value"],P={class:"custom-input"},_=L((()=>(0,a.Lk)("label",{for:"country-code"},"Country",-1))),O=["value"],E=L((()=>(0,a.Lk)("option",{value:"",disabled:""},"Select a country",-1))),F=["value"],x=L((()=>(0,a.Lk)("button",{type:"submit",class:"search-button"},"Search",-1)));function I(e,t,r,s,n,i){const c=(0,a.gN)("tooltip");return(0,a.uX)(),(0,a.CE)("form",{onSubmit:t[2]||(t[2]=(0,o.D$)((t=>e.$emit("search")),["prevent"])),class:"search-form"},[(0,a.Lk)("div",A,[S,(0,a.bo)((0,a.Lk)("input",{id:"product-name",type:"text",value:r.productName,onInput:t[0]||(t[0]=e=>i.updateProductName(e.target.value)),placeholder:"Enter product name",required:""},null,40,N),[[c,"Enter the product you want to search for. The application will search for buyable products with positive reviews."]])]),(0,a.Lk)("div",P,[_,(0,a.Lk)("select",{id:"country-code",value:r.countryCode,onChange:t[1]||(t[1]=e=>i.updateCountryCode(e.target.value)),tooltip:"'Select the country where the product search will be performed. The results will be based on websites relevant to this country.'",required:""},[E,((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(n.countries,(e=>((0,a.uX)(),(0,a.CE)("option",{key:e.code,value:e.code},(0,w.v_)(e.name)+" ("+(0,w.v_)(e.code)+") ",9,F)))),128))],40,O)]),x],32)}var X=r(7726),j=r(792),B={props:{productName:{type:String,required:!0},countryCode:{type:String,required:!0}},data(){return{countries:[]}},directives:{tooltip:j.yw},created(){this.countries=X.getData().map((e=>({name:e.name,code:e.code})))},methods:{updateProductName(e){this.$emit("update:productName",e)},updateCountryCode(e){this.$emit("update:countryCode",e)}}};const $=(0,v.A)(B,[["render",I],["__scopeId","data-v-d047bb9c"]]);var H=$;const T=e=>((0,a.Qi)("data-v-7c1af692"),e=e(),(0,a.jt)(),e),q={class:"loading-state"},M=T((()=>(0,a.Lk)("p",null,"Searching products",-1))),Q={class:"progress-bar"};function Z(e,t,r,o,s,n){return(0,a.uX)(),(0,a.CE)("div",q,[M,(0,a.Lk)("div",Q,[(0,a.Lk)("div",{class:"progress",style:(0,w.Tr)({width:r.progress+"%"})},null,4)])])}var W={props:{progress:{type:Number,required:!0}}};const K=(0,v.A)(W,[["render",Z],["__scopeId","data-v-7c1af692"]]);var U=K;const V=e=>((0,a.Qi)("data-v-6f8ea8d6"),e=e(),(0,a.jt)(),e),R={class:"product-listing"},G={class:"title_sorting"},D={class:"sorting-options"},z=V((()=>(0,a.Lk)("option",{value:"relevance"},"Relevance",-1))),J=V((()=>(0,a.Lk)("option",{value:"price"},"Price",-1))),Y=V((()=>(0,a.Lk)("option",{value:"positiveness"},"Positiveness",-1))),ee=[z,J,Y],te=["src"],re={class:"product-details"},oe={class:"price"};function ae(e,t,r,s,n,i){const c=(0,a.g2)("HeartRating");return(0,a.uX)(),(0,a.CE)("div",R,[(0,a.Lk)("div",G,[(0,a.Lk)("h1",null,'Results for "'+(0,w.v_)(r.productName)+'" in '+(0,w.v_)(i.countryName),1),(0,a.Lk)("div",D,["price"===n.sortBy||"positiveness"===n.sortBy?((0,a.uX)(),(0,a.CE)("span",{key:0,class:"sort-icon",onClick:t[0]||(t[0]=(...e)=>i.toggleSortOrder&&i.toggleSortOrder(...e))},[(0,a.Lk)("i",{class:(0,w.C4)("asc"===n.sortOrder?"icon-down":"icon-up")},null,2)])):(0,a.Q3)("",!0),(0,a.bo)((0,a.Lk)("select",{"onUpdate:modelValue":t[1]||(t[1]=e=>n.sortBy=e),onChange:t[2]||(t[2]=(...t)=>e.sortProducts&&e.sortProducts(...t))},ee,544),[[o.u1,n.sortBy]])])]),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(i.sortedProducts,(e=>((0,a.uX)(),(0,a.CE)("div",{class:"product",key:e.name},[(0,a.Lk)("img",{src:e.image},null,8,te),(0,a.Lk)("div",re,[(0,a.Lk)("h2",null,(0,w.v_)(e.name),1),(0,a.Lk)("p",oe,(0,w.v_)(e.price),1)]),(0,a.bF)(c,{positiveness:e.positiveness},null,8,["positiveness"])])))),128))])}const se={class:"heart-rating"};function ne(e,t,r,o,s,n){return(0,a.uX)(),(0,a.CE)("div",se,[((0,a.uX)(),(0,a.CE)(a.FK,null,(0,a.pI)(5,(e=>(0,a.Lk)("span",{key:e,class:"heart"},[(0,a.Lk)("i",{class:(0,w.C4)(e<=r.positiveness?"filled-heart":"empty-heart")},null,2)]))),64))])}var ie={props:{positiveness:{type:Number,required:!0}}};const ce=(0,v.A)(ie,[["render",ne],["__scopeId","data-v-d797a1bc"]]);var ue=ce,de={components:{HeartRating:ue},props:{products:{type:Array,required:!0},productName:String,countryCode:String},data(){return{sortBy:"relevance",sortOrder:"asc"}},computed:{countryName(){return(0,X.getName)(this.countryCode)||this.countryCode},sortedProducts(){return"relevance"===this.sortBy?this.products:this.products.slice().sort(((e,t)=>{let r=0;return"price"===this.sortBy?r=parseFloat(e.price.replace(/[^0-9.-]+/g,""))-parseFloat(t.price.replace(/[^0-9.-]+/g,"")):"positiveness"===this.sortBy&&(r=e.positiveness-t.positiveness),"asc"===this.sortOrder?-r:r}))}},methods:{toggleSortOrder(){this.sortOrder="asc"===this.sortOrder?"desc":"asc"}}};const pe=(0,v.A)(de,[["render",ae],["__scopeId","data-v-6f8ea8d6"]]);var le=pe,ve={components:{AppHeader:m,AppFooter:C,SearchForm:H,LoadingState:U,ProductListing:le},data(){return{productName:"",countryCode:"",products:[],isLoading:!1,progress:0}},methods:{async searchProducts(){this.isLoading=!0,this.progress=0;const e=()=>{this.progress<90&&(this.progress+=10)},t=setInterval(e,200);await new Promise((e=>setTimeout(e,2e3))),clearInterval(t),this.progress=100,this.products=[{name:"iPhone 13 Pro Max",price:"$1,000",positiveness:1,image:"https://via.placeholder.com/50"},{name:"Apple Watch Series 7",price:"$500",positiveness:5,image:"https://via.placeholder.com/50"},{name:"AirPods Pro",price:"$200",positiveness:3,image:"https://via.placeholder.com/50"},{name:"Air Fryer",price:"$450",positiveness:3,image:"https://via.placeholder.com/50"},{name:"Jordan IV",price:"$700",positiveness:4,image:"https://via.placeholder.com/50"},{name:"Audi A1",price:"$18000",positiveness:2,image:"https://via.placeholder.com/50"}],this.isLoading=!1,this.progress=0}}};const he=(0,v.A)(ve,[["render",i]]);var me=he;(0,o.Ef)(me).mount("#app")}},t={};function r(o){var a=t[o];if(void 0!==a)return a.exports;var s=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(s.exports,s,s.exports,r),s.loaded=!0,s.exports}r.m=e,function(){var e=[];r.O=function(t,o,a,s){if(!o){var n=1/0;for(d=0;d<e.length;d++){o=e[d][0],a=e[d][1],s=e[d][2];for(var i=!0,c=0;c<o.length;c++)(!1&s||n>=s)&&Object.keys(r.O).every((function(e){return r.O[e](o[c])}))?o.splice(c--,1):(i=!1,s<n&&(n=s));if(i){e.splice(d--,1);var u=a();void 0!==u&&(t=u)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[o,a,s]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={524:0};r.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,s,n=o[0],i=o[1],c=o[2],u=0;if(n.some((function(t){return 0!==e[t]}))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(c)var d=c(r)}for(t&&t(o);u<n.length;u++)s=n[u],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(d)},o=self["webpackChunkapp"]=self["webpackChunkapp"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=r.O(void 0,[504],(function(){return r(4694)}));o=r.O(o)})();
//# sourceMappingURL=app.61fa11a0.js.map