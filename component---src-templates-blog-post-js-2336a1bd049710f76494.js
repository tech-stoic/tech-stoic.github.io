(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{158:function(t,e,n){"use strict";n.r(e);n(58);var a=n(7),r=n.n(a),i=n(9),o=n(0),c=n.n(o),s=n(163),u=n.n(s),l=n(161),d=n(160),p=n.n(d),h=n(0),f=n(161).Link,b=n(160).scale,g=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.nextPost;return t&&t.children&&t.children[0]&&(t=t.children[0]),t?Object(i.a)("div",null,Object(i.a)("h6",{style:Object.assign({},b(-.5),{margin:0,letterSpacing:-.25})},"READ THIS NEXT:"),Object(i.a)("h3",{style:{margin:0}},Object(i.a)(f,{to:t.fields.slug},t.frontmatter.title)),Object(i.a)("p",null,t.excerpt),Object(i.a)("hr",null)):null},e}(h.Component),m=n(164),y=n(179),j=n.n(y);n.d(e,"pageQuery",function(){return k});var O=p.a.rhythm,v=p.a.scale,w=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e,n=this,a=this.props.data.markdownRemark;if(this.props.data.markdownRemark.fields.tagSlugs){var r=this.props.data.markdownRemark.fields.tagSlugs;t=r.map(function(t,e){var a=e<r.length-1&&Object(i.a)("span",null," | ");return Object(i.a)("span",{key:t},Object(i.a)(l.Link,{to:t},n.props.data.markdownRemark.frontmatter.tags[e]),a)}),e=Object(i.a)("em",{style:Object.assign({},v(-.2),{display:"block",marginBottom:O(1)})},"Tagged with ",t)}return Object(i.a)(m.a,{location:this.props.location},Object(i.a)(u.a,{title:""+a.frontmatter.title,meta:[{name:"description",content:a.excerpt}]}),Object(i.a)("h1",null,a.frontmatter.title),Object(i.a)("div",{dangerouslySetInnerHTML:{__html:a.html}}),e,Object(i.a)("p",{style:Object.assign({},v(-.2),{display:"block",marginBottom:O(1)})},"Posted ",a.frontmatter.date),Object(i.a)("hr",{style:{marginBottom:O(1)}}),Object(i.a)(g,{nextPost:a.frontmatter.readNext}),Object(i.a)("p",{style:{marginBottom:0}},Object(i.a)("img",{src:j.a,alt:"Kyle's profile pic",style:{borderRadius:"100%",float:"left",marginRight:O(.25),marginBottom:0,width:O(2),height:O(2)}}),Object(i.a)("a",{href:"https:tech-stoic.github.io"},"Back to homepage")))},e}(c.a.Component),k=(e.default=w,"3115313593")},159:function(t,e,n){var a;t.exports=(a=n(162))&&a.default||a},160:function(t,e,n){var a=new(n(165))({baseFontSize:"18px",headerFontFamily:["Cooper Hewitt","sans-serif"],bodyFontFamily:["Cooper Hewitt","sans-serif"],plugins:[new(0,n(166).default)],baseLineHeight:1.45,blockMarginBottom:.85,overrideThemeStyles:function(t){var e=t.rhythm;return{a:{color:"#3A69A8"},blockquote:{marginLeft:0,paddingLeft:e(5/8),borderLeft:e(3/8)+" solid #CDE7B0"},"blockquote > *":{fontStyle:"italic"},"blockquote > h1, blockquote > h2, blockquote > h3, blockquote > h4":{marginTop:0},"li > p":{marginBottom:e(.5)},"p code":{fontSize:"75%"},"tt,code":{fontSize:"85%"},pre:{lineHeight:1.22}}}});t.exports=a},161:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return b}),n.d(e,"StaticQueryContext",function(){return p}),n.d(e,"StaticQuery",function(){return h}),n.d(e,"useStaticQuery",function(){return f});var a=n(9),r=n(0),i=n.n(r),o=n(4),c=n.n(o),s=n(36),u=n.n(s);n.d(e,"Link",function(){return u.a}),n.d(e,"withPrefix",function(){return s.withPrefix}),n.d(e,"parsePath",function(){return s.parsePath}),n.d(e,"navigate",function(){return s.navigate}),n.d(e,"push",function(){return s.push}),n.d(e,"replace",function(){return s.replace}),n.d(e,"navigateTo",function(){return s.navigateTo});var l=n(159),d=n.n(l);n.d(e,"PageRenderer",function(){return d.a});var p=i.a.createContext({}),h=function(t){return Object(a.a)(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):Object(a.a)("div",null,"Loading (StaticQuery)")})},f=function(t){i.a.useContext;var e=i.a.useContext(p);if(e[t]&&e[t].data)return e[t].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function b(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},162:function(t,e,n){"use strict";n.r(e);n(58);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(59),s=n(2),u=function(t){var e=t.location,n=s.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=u},164:function(t,e,n){"use strict";var a=n(7),r=n.n(a),i=n(37),o=n.n(i),c=n(27),s=n(9),u=n(0),l=n.n(u),d=n(36),p=n.n(d),h=n(163),f=n.n(h),b=n(160),g=n.n(b),m=g.a.rhythm,y=g.a.scale,j=function(t){return Object(s.a)(p.a,o()({css:Object(c.a)({color:"inherit",textDecoration:"none"})},t))},O=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){return Object(s.a)("div",{css:Object(c.a)({minHeight:"100vh",borderTop:m(.75)+" solid #000000","@media (min-width: 420px)":{border:m(.75)+" solid #000000"}})},Object(s.a)("div",{css:Object(c.a)({minHeight:m(1)})},Object(s.a)("div",{css:Object(c.a)({float:"left",marginTop:m(.75),marginLeft:m(.75),fontSize:y(.4).fontSize,lineHeight:y(.4).lineHeight})},Object(s.a)(j,{to:"/"},"tech-stoic")),Object(s.a)("div",{css:Object(c.a)({float:"right",marginTop:m(.75),marginRight:m(.75),fontSize:y(.4).fontSize,lineHeight:y(.4).lineHeight})},Object(s.a)(j,{to:"/blog/"},"blog"),","," ",Object(s.a)(j,{to:"/about/"},"about"))),Object(s.a)("div",{css:Object(c.a)({padding:m(2)+" "+m(.75),"@media (min-width: 420px)":{padding:m(3)+" "+m(.75)},maxWidth:m(22),margin:"0 auto"})},Object(s.a)(f.a,{defaultTitle:"tech-stoic",titleTemplate:"tech-stoic | %s"}),this.props.children))},e}(l.a.Component);e.a=O},179:function(t,e,n){t.exports=n.p+"static/miguel-profile-pic-fb31e5e2db749f1b3c7f01491d02d238.jpg"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-2336a1bd049710f76494.js.map