(function(g){var window=this;'use strict';var Tnb=function(a){g.U.call(this,{I:"div",T:"ytp-inline-preview-ui"});this.rg=!1;this.player=a;this.V(a,"onStateChange",this.eR);this.V(a,"videodatachange",this.ex);this.V(a,"onInlinePreviewModeChange",this.Q5);this.Af=new g.Tt(this.qw,null,this);g.L(this,this.Af)},J6=function(a){g.MV.call(this,a);
this.j=new Tnb(this.player);g.L(this,this.j);this.j.hide();g.MU(this.player,this.j.element,4);a.isInline()&&(this.load(),a=a.getRootNode(),g.du(a,["ytp-inline-preview-mode","ytp-no-contextmenu"]))};
g.v(Tnb,g.U);g.k=Tnb.prototype;
g.k.SN=function(){this.tooltip=new g.kY(this.player,this);g.L(this,this.tooltip);g.MU(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.fd=new g.sW(this.player);g.L(this,this.fd);this.nk=new g.U({I:"div",Na:["ytp-inline-preview-scrim"]});g.L(this,this.nk);this.nk.Ga(this.element);this.V(this.nk.element,"click",this.GI);this.Fj=new g.dY(this.player,this,300);g.L(this,this.Fj);this.Fj.Ga(this.nk.element);this.controls=new g.U({I:"div",T:"ytp-inline-preview-controls"});g.L(this,this.controls);
this.controls.Ga(this.element);var a=new g.vX(this.player,this,!1);g.L(this,a);a.Ga(this.controls.element);a=new g.bY(this.player,this);g.L(this,a);a.Ga(this.controls.element);this.Tc=new g.CX(this.player,this);g.L(this,this.Tc);g.MU(this.player,this.Tc.element,4);this.V(this.player,"appresize",this.Nb);this.V(this.player,"fullscreentoggled",this.Nb);this.Nb()};
g.k.show=function(){g.Ut(this.Af);this.rg||(this.SN(),this.rg=!0);0!==this.player.getPlayerState()&&g.U.prototype.show.call(this);this.Tc.show();this.player.Ua("onInlinePreviewUiReady")};
g.k.hide=function(){this.Af.stop();g.U.prototype.hide.call(this);this.player.isInline()||this.rg&&this.Tc.hide()};
g.k.Ba=function(){g.U.prototype.Ba.call(this)};
g.k.GI=function(a){a.target===this.nk.element&&this.player.Ua("onExpandInlinePreview",a)};
g.k.Q5=function(){g.gu(this.player.getRootNode(),"ytp-inline-preview-mode",this.player.isInline())};
g.k.cf=function(){this.Tc.Ic();this.Fj.Ic()};
g.k.qw=function(){this.cf();g.Ut(this.Af)};
g.k.Nb=function(){g.OX(this.Tc,0,this.player.qb().getPlayerSize().width,!1);g.DX(this.Tc)};
g.k.eR=function(a){this.player.isInline()&&(0===a?this.hide():this.show())};
g.k.ex=function(a,b){if(this.player.isInline()){g.gu(this.player.getRootNode(),"ytp-show-inline-preview-audio-controls",b.hL);var c,d,e;a=!(null==(e=null==(c=b.getPlayerResponse())?void 0:null==(d=c.playerConfig)?void 0:d.inlinePlaybackConfig)||!e.showScrubbingControls);g.gu(this.player.getRootNode(),"ytp-hide-inline-preview-progress-bar",!a)}};
g.k.Ec=function(){return this.tooltip};
g.k.Mg=function(){return!1};
g.k.xg=function(){return!1};
g.k.wm=function(){return!1};
g.k.GJ=function(){};
g.k.qq=function(){};
g.k.Qy=function(){};
g.k.dn=function(){return null};
g.k.bH=function(){return null};
g.k.kN=function(){return new g.ve(0,0)};
g.k.Mk=function(){return new g.pr(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Ew=function(a,b,c,d,e){var f=d=0,h=0,l=g.Dr(a);if(b){c=g.bu(b,"ytp-mute-button");var m=g.bu(b,"ytp-subtitles-button"),n=g.Br(b,this.element);b=g.Dr(b);d=n.y+40;if(m||c)h=n.x-l.width+b.width}else h=c-l.width/2,f=35;b=this.player.qb().getPlayerSize().width;h=g.me(h,0,b-l.width);d?(a.style.top=d+(e||0)+"px",a.style.bottom=""):(a.style.top="",a.style.bottom=f+"px");a.style.left=h+"px"};
g.k.showControls=function(){};
g.k.Vp=function(){};
g.k.lm=function(){return!1};
g.k.ZE=function(){};
g.k.PA=function(){};
g.k.Gr=function(){};
g.k.Fr=function(){};
g.k.oy=function(){};
g.k.Ps=function(){};
g.k.JE=function(){};g.v(J6,g.MV);J6.prototype.wl=function(){return!1};
J6.prototype.load=function(){this.player.hideControls();this.j.show()};
J6.prototype.unload=function(){this.player.showControls();this.j.hide()};g.LV("inline_preview",J6);})(_yt_player);
