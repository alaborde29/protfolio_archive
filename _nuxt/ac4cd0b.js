(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{299:function(i,o,n){i.exports={}},417:function(i,o,n){"use strict";var r=n(299),l=n.n(r)},452:function(i,o,n){"use strict";n.r(o);var r=function(){var _=this,e=_.$createElement,t=_._self._c||e;return t("div",{ref:"menu",staticClass:"menu",attrs:{role:"menu","data-scroll-sticky":""}},[t("div",{staticClass:"menu__back-item",attrs:{"aria-hidden":"true"}}),_._v(" "),_._l(_.navigationalLinks,function(s,a){return t("div",{key:a,staticClass:"menu__back-item",attrs:{role:"menuitem"}},[t("div",{class:{"menu__back-item__content":!0,"menu__back-item__content--active":a===_.currentSection},attrs:{role:"button",tabindex:"0","aria-label":"scroll to "+s.label},on:{click:function(v){s.action(),_.$nuxt.$emit("toggle-menu")}}},[t("p",{staticClass:"menu__back-item__content__title"},[t("span",[_._v(_._s(s.label))])])]),_._v(" "),t("span",{staticClass:"menu__back-item__line"})])}),_._v(" "),t("div",{staticClass:"menu__back-item"},[t("div",{staticClass:"menu__back-item__content menu__back-item__content--no-anim"},[t("ul",{staticClass:"menu__back-item__content__links"},_._l(_.socialLinks,function(s,a){return t("li",{key:a,staticClass:"menu__back-item__content__links__item"},[t("a",{attrs:{href:s.href,target:"_blank",rel:"noopener noreferrer"}},[_._v(`
                        `+_._s(s.label)+`
                    `)])])}),0)])])],2)},l=[],f=n(207),u={props:{currentSection:{type:Number,required:!0,default:0}},data:function(){var e=this;return{prefersReducedMotion:!1,isShowingMenu:!1,prevAnimation:null,navigationalLinks:[{label:"Home",action:function(){return e.$scrollTo(0)}},{label:"Works",action:function(){return e.$scrollTo(".works")}},{label:"About",action:function(){return e.$scrollTo(".about")}},{label:"Contact",action:function(){return e.$scrollTo(".contact")}}],socialLinks:[{label:"linktree",href:"https://linktr.ee/alaborde29"},{label:"github",href:"https://github.com/alaborde29"},{label:"email",href:"mailto:laborde.a@live.fr"}]}},mounted:function(){var e=this;this.prefersReducedMotion=this.$prefersReducedMotion(),this.$nuxt.$on("toggle-menu",function(t){typeof t=="boolean"&&e.isShowingMenu===t||(e.isShowingMenu?(e.$enableScrollY(),e.hideMenu()):(e.$disableScrollY(),e.showMenu()),e.isShowingMenu=!e.isShowingMenu)})},methods:{showMenu:function(){if(this.prevAnimation&&this.prevAnimation.kill(),this.prefersReducedMotion)return this.prevAnimation=this.$gsap.fromTo(this.$refs.menu,{autoAlpha:0},{autoAlpha:1});var e=this.$gsap.timeline();this.prevAnimation=e,e.set(this.$refs.menu,{autoAlpha:1}),e.fromTo(".menu__back-item",{yPercent:100,rotateX:-90,opacity:0,transformOrigin:"center top",transformStyle:"preserve-3d"},{yPercent:0,rotateX:0,opacity:1,stagger:.05}),e.fromTo(this.$refs.menu,{backgroundColor:"transparent"},{backgroundColor:"#030303"}),e.fromTo(".menu__back-item__line",{transform:"scaleX(0)",transformOrigin:"left bottom"},{transform:"scaleX(1)",stagger:.05},"<"),e.fromTo(".menu__back-item__content__title, .menu__back-item__content__links__item",{opacity:0,yPercent:100},{opacity:1,yPercent:0,duration:1,ease:"power4.out",stagger:.075},"<-0.125")},hideMenu:function(){if(this.prevAnimation&&this.prevAnimation.kill(),this.prefersReducedMotion)return this.prevAnimation=this.$gsap.to(this.$refs.menu,{autoAlpha:0});this.prevAnimation=this.$gsap.to(this.$refs.menu,{autoAlpha:0})}}},c=u,p=n(417),d=n(36),m=Object(d.a)(c,r,l,!1,null,null,null),h=o.default=m.exports}}]);
