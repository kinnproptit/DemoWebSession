(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{882:function(e,a,n){"use strict";n.r(a),n.d(a,"RenderTable",(function(){return i}));var t=n(1),l=n.n(t),r=n(37),c=n.n(r),o=n(869),s=n(117);function u(){var e=function(e,a){a||(a=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(a)}}))}(["\n  cursor: pointer;\n"]);return u=function(){return e},e}var i=function(e){var a=e.history,n=Object(t.useContext)(s.PreloaderContext).sessions,r=function(e){var n=e.id;a.push({pathname:"/session/".concat(n)})};return l.a.createElement(o.Table,{cards:!0,striped:!0,responsive:!0,className:"table-vcenter"},l.a.createElement(o.Table.Header,null,l.a.createElement(o.Table.Row,null,l.a.createElement(o.Table.ColHeader,null,"STT"),l.a.createElement(o.Table.ColHeader,{colSpan:2},"Tên kỳ họp"),l.a.createElement(o.Table.ColHeader,null,"Trạng thái"),l.a.createElement(o.Table.ColHeader,null))),l.a.createElement(o.Table.Body,null,n.map((function(e,a){var n=e.id,t=e.name,c=e.status,s=void 0===c?Math.random():c;return l.a.createElement(o.Table.Row,{key:n},l.a.createElement(o.Table.Col,{className:"w-1"},l.a.createElement(o.Avatar,null,a+1)),l.a.createElement(o.Table.Col,null,l.a.createElement(m,{onClick:function(){return r({id:n})}},t)),l.a.createElement(o.Table.Col,null),l.a.createElement(o.Table.Col,{className:"text-nowrap"},s>.5?l.a.createElement("div",null,l.a.createElement("span",{className:"status-icon bg-success"})," ",l.a.createElement("span",null,"active")):l.a.createElement("div",null,l.a.createElement("span",{className:"status-icon bg-danger"})," ",l.a.createElement("span",null,"inactive"))),l.a.createElement(o.Table.Col,{className:"w-1"},l.a.createElement(o.Icon,{link:!0,name:"chevron-right",onClick:function(){return r({id:n})}})))}))))},m=c.a.b(u())}}]);