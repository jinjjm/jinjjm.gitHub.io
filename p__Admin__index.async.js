"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[732],{19855:function(v,s,t){t.r(s);var c=t(97857),a=t.n(c),h=t(5574),l=t.n(h),n=t(67294),o=t(46933),e=t(85893);s.default=function(){var m=(0,n.useState)([]),u=l()(m,2),j=u[0],E=u[1],f=(0,n.useState)(0),d=l()(f,2),D=d[0],P=d[1];function g(){return setInterval(function(){P(function(i){return i+1}),console.log(123)},5e3),null}var b=function(){fetch("https://gw.alipayobjects.com/os/bmw-prod/b21e7336-0b3e-486c-9070-612ede49284e.json").then(function(_){return _.json()}).then(function(_){return E(_)}).catch(function(_){console.log("fetch data failed",_)})};(0,n.useEffect)(function(){b()},[]);var r={data:j,xField:"date",yField:"value",seriesField:"country",slider:{start:.1,end:.9}};return(0,e.jsx)(e.Fragment,{children:D===1?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{children:"1"}),(0,e.jsx)("div",{style:{height:500},children:(0,e.jsx)(o.Z,a()({},r))})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{children:"2"}),(0,e.jsx)("div",{style:{height:500},children:(0,e.jsx)(o.Z,a()({},r))})]})})}}}]);
