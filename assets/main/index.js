System.register("chunks:///_virtual/Bird.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,i,n,o,r,l,s,a,p,c,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){r=e.cclegacy,l=e._decorator,s=e.SpriteFrame,a=e.Collider2D,p=e.Contact2DType,c=e.Sprite,u=e.Component}],execute:function(){var h,d,v,g,f,m,C;r._RF.push({},"ccdbesM1FpAr6dqxO1k9w1f","Bird",void 0);var y=l.ccclass,B=l.property;e("Bird",(h=y("Bird"),d=B({type:s}),v=B({type:s}),h((m=t((f=function(e){function t(){for(var t,i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return t=e.call.apply(e,[this].concat(r))||this,n(t,"spriteBirdKuning",m,o(t)),n(t,"spriteBirdMerah",C,o(t)),t.listToRemove=[],t.level=0,t}i(t,e);var r=t.prototype;return r.start=function(){var e=this.getComponent(a);e&&(e.on(p.BEGIN_CONTACT,this.onBeginContact,this),e.on(p.END_CONTACT,this.onEndContact,this))},r.onBeginContact=function(e,i,n){console.log("Saling bersentuhan"),e.group==i.group&&e.node.getComponent(t).level==i.node.getComponent(t).level&&(this.levelUp(),this.listToRemove.push(i.node))},r.onEndContact=function(e,t,i){console.log("onEndContact")},r.levelUp=function(){this.level++,1==this.level?this.getComponent(c).spriteFrame=this.spriteBirdKuning:2==this.level&&(this.getComponent(c).spriteFrame=this.spriteBirdMerah);var e=this.node.getScale();this.node.setScale(e.x+.2,e.y+.2,e.z),console.log("level: "+this.level)},r.update=function(e){for(var t=0;t<this.listToRemove.length;t++)this.listToRemove[t].active=!1;this.listToRemove=[]},t}(u)).prototype,"spriteBirdKuning",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=t(f.prototype,"spriteBirdMerah",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=f))||g));r._RF.pop()}}}));

System.register("chunks:///_virtual/GameController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,n,r,i,o,a,s,c,l,u,p,f;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,r=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){o=e.cclegacy,a=e._decorator,s=e.Prefab,c=e.input,l=e.Input,u=e.instantiate,p=e.Vec3,f=e.Component}],execute:function(){var d,h,y,b,v;o._RF.push({},"19721ezRxRIhK8YRDeJRyPG","GameController",void 0);var P=a.ccclass,w=a.property;e("SpawnBird",(d=P("SpawnBird"),h=w(s),d((v=t((b=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o))||this,r(t,"birdPrefab",v,i(t)),t}n(t,e);var o=t.prototype;return o.start=function(){c.on(l.EventType.MOUSE_DOWN,this.onMouseDown,this)},o.onMouseDown=function(e){var t=e.getUILocation(),n=u(this.birdPrefab);n.setPosition(new p(t.x,t.y,0)),this.node.addChild(n)},t}(f)).prototype,"birdPrefab",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=b))||y));o._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Bird.ts","./GameController.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});