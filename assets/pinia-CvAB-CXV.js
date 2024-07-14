import{f as r,r as l,m as f}from"./@vue-B20jni_b.js";var p=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const u=Symbol();var n;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(n||(n={}));function m(){const t=r(!0),i=t.run(()=>l({}));let c=[],s=[];const a=f({install(e){a._a=e,e.provide(u,a),e.config.globalProperties.$pinia=a,s.forEach(o=>c.push(o)),s=[]},use(e){return!this._a&&!p?s.push(e):c.push(e),this},_p:c,_a:null,_e:t,_s:new Map,state:i});return a}export{m as c};
