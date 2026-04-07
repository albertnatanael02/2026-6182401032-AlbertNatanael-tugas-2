System.register("chunks:///_virtual/Bird.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,i,n,o,r,l,s,a,p,c,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){r=e.cclegacy,l=e._decorator,s=e.SpriteFrame,a=e.Collider2D,p=e.Contact2DType,c=e.Sprite,u=e.Component}],execute:function(){var h,d,v,g,f,m,C;r._RF.push({},"ccdbesM1FpAr6dqxO1k9w1f","Bird",void 0);var y=l.ccclass,B=l.property;e("Bird",(h=y("Bird"),d=B({type:s}),v=B({type:s}),h((m=t((f=function(e){function t(){for(var t,i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return t=e.call.apply(e,[this].concat(r))||this,n(t,"spriteBirdKuning",m,o(t)),n(t,"spriteBirdMerah",C,o(t)),t.listToRemove=[],t.level=0,t}i(t,e);var r=t.prototype;return r.start=function(){var e=this.getComponent(a);e&&(e.on(p.BEGIN_CONTACT,this.onBeginContact,this),e.on(p.END_CONTACT,this.onEndContact,this))},r.onBeginContact=function(e,i,n){console.log("Saling bersentuhan"),e.group==i.group&&e.node.getComponent(t).level==i.node.getComponent(t).level&&(this.levelUp(),this.listToRemove.push(i.node))},r.onEndContact=function(e,t,i){console.log("onEndContact")},r.levelUp=function(){this.level++,1==this.level?this.getComponent(c).spriteFrame=this.spriteBirdKuning:2==this.level&&(this.getComponent(c).spriteFrame=this.spriteBirdMerah);var e=this.node.getScale();this.node.setScale(e.x+.5,e.y+.5,e.z),console.log("level: "+this.level)},r.update=function(e){for(var t=0;t<this.listToRemove.length;t++)this.listToRemove[t].active=!1;this.listToRemove=[]},t}(u)).prototype,"spriteBirdKuning",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=t(f.prototype,"spriteBirdMerah",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=f))||g));r._RF.pop()}}}));

System.register("chunks:///_virtual/GameController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,r,o,n,i,a,c,l,s,p,u,d,f,h,y;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,o=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){i=e.cclegacy,a=e._decorator,c=e.Prefab,l=e.input,s=e.Input,p=e.UITransform,u=e.Vec3,d=e.instantiate,f=e.RigidBody2D,h=e.ERigidBody2DType,y=e.Component}],execute:function(){var b,m,g,v,P;i._RF.push({},"19721ezRxRIhK8YRDeJRyPG","GameController",void 0);var R=a.ccclass,T=a.property;e("GameController",(b=R("GameController"),m=T(c),b((P=t((v=function(e){function t(){for(var t,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return t=e.call.apply(e,[this].concat(i))||this,o(t,"birdPrefab",P,n(t)),t}r(t,e);var i=t.prototype;return i.start=function(){l.on(s.EventType.TOUCH_START,this.onTouchStart,this)},i.onTouchStart=function(e){if(this.birdPrefab){var t=e.getUILocation(),r=this.node.getComponent(p).convertToNodeSpaceAR(new u(t.x,t.y,0)),o=d(this.birdPrefab);this.node.addChild(o),o.setPosition(r);var n=o.getComponent(f);n&&(n.type=h.Dynamic,n.wakeUp())}else console.log("Prefab belum diisi!")},t}(y)).prototype,"birdPrefab",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=v))||g));i._RF.pop()}}}));

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