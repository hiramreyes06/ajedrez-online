(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"3JTg":function(t,e,i){"use strict";i.d(e,"a",function(){return l});var a=i("ofXK"),s=i("Wp6s"),n=i("Dxy4"),o=i("tyNb"),r=i("fXoL");let l=(()=>{class t{}return t.\u0275mod=r.Jb({type:t}),t.\u0275inj=r.Ib({factory:function(e){return new(e||t)},imports:[[a.b,s.c,n.b,o.e]]}),t})()},"5YT4":function(t,e,i){"use strict";i.d(e,"a",function(){return p});var a=i("iELJ"),s=i("AytR"),n=i("fXoL"),o=i("IheW"),r=i("ofXK"),l=i("Dxy4");function c(t,e){if(1&t){const t=n.Sb();n.Rb(0,"div",1),n.Rb(1,"p",2),n.yc(2),n.Qb(),n.Rb(3,"p"),n.yc(4),n.Qb(),n.Rb(5,"p"),n.yc(6),n.Qb(),n.Rb(7,"p"),n.yc(8),n.Qb(),n.Rb(9,"p"),n.yc(10),n.Qb(),n.Rb(11,"p"),n.yc(12),n.Qb(),n.Rb(13,"button",3),n.Yb("click",function(){return n.oc(t),n.cc().matDialogRef.close()}),n.yc(14," CERRAR "),n.Qb(),n.Qb()}if(2&t){const t=n.cc();n.Ab(2),n.zc(t.username),n.Ab(2),n.Ac("Total de partidas jugadas: ",null==t.usuarioEstadistica?null:t.usuarioEstadistica.totalPartidas," "),n.Ab(2),n.Bc("Partidas ganadas: ",null==t.usuarioEstadistica?null:t.usuarioEstadistica.partidasGanadas," -> ",t.porcentaje(null==t.usuarioEstadistica?null:t.usuarioEstadistica.partidasGanadas),"%"),n.Ab(2),n.Bc("Partidas perdidas: ",null==t.usuarioEstadistica?null:t.usuarioEstadistica.partidasPerdidas," -> ",t.porcentaje(null==t.usuarioEstadistica?null:t.usuarioEstadistica.partidasPerdidas),"%"),n.Ab(2),n.Bc("Partidas en tablas: ",null==t.usuarioEstadistica?null:t.usuarioEstadistica.partidasTablas," -> ",t.porcentaje(null==t.usuarioEstadistica?null:t.usuarioEstadistica.partidasTablas),"%"),n.Ab(2),n.Bc("Partidas inconclusas: ",null==t.usuarioEstadistica?null:t.usuarioEstadistica.partidasInconclusas," -> ",t.porcentaje(null==t.usuarioEstadistica?null:t.usuarioEstadistica.partidasInconclusas),"%")}}let d=(()=>{class t{constructor(t,e,i){this.http=t,this.matDialogRef=e,this.username=i,this.cargarEstadistica()}ngOnInit(){}porcentaje(t){return(t/this.usuarioEstadistica.totalPartidas*100+"").substring(0,4)}cargarEstadistica(){this.http.get(`${s.a}/user/estadisticas/${this.username}`).subscribe(t=>{this.usuarioEstadistica=t},t=>{console.log("Error al cargar estadistica ",t)})}}return t.\u0275fac=function(e){return new(e||t)(n.Lb(o.a),n.Lb(a.e),n.Lb(a.a))},t.\u0275cmp=n.Fb({type:t,selectors:[["app-usuario-estadistica"]],decls:1,vars:1,consts:[["style","text-align: center;",4,"ngIf"],[2,"text-align","center"],[2,"font-weight","bold"],["mat-raised-button","",1,"btns",3,"click"]],template:function(t,e){1&t&&n.xc(0,c,15,10,"div",0),2&t&&n.ic("ngIf",e.usuarioEstadistica)},directives:[r.l,l.a],styles:[".mat-dialog-container{padding:8px!important;background-color:#8ab9b5!important}[_nghost-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fffaf0;border-radius:18px}"]}),t})();var u=i("Wp6s"),g=i("tyNb");function b(t,e){if(1&t){const t=n.Sb();n.Rb(0,"mat-card",3),n.Rb(1,"mat-card-content"),n.Rb(2,"p",4),n.Yb("click",function(){n.oc(t);const i=e.$implicit;return n.cc().consultarEstadisticas(i.usernameBlancas)}),n.yc(3),n.Qb(),n.Rb(4,"p",4),n.Yb("click",function(){n.oc(t);const i=e.$implicit;return n.cc().consultarEstadisticas(i.usernameNegras)}),n.yc(5),n.Qb(),n.Rb(6,"p"),n.yc(7),n.Qb(),n.Qb(),n.Rb(8,"button",5),n.yc(9," Ver partida "),n.Qb(),n.Qb()}if(2&t){const t=e.$implicit,i=e.index,a=n.cc();n.Ab(3),n.Ac(" Blancas : ",t.usernameBlancas,""),n.Ab(2),n.Ac(" Negras : ",t.usernameNegras,""),n.Ab(2),n.Ac("Tiempo: ",t.tiempo,""),n.Ab(1),n.ic("routerLink",a.espectadorLink(i))("state",t)}}let p=(()=>{class t{constructor(t,e){this.http=t,this.matDialog=e}ngOnInit(){this.cargado||this.cargarPartidas()}consultarEstadisticas(t){this.matDialog.open(d,{data:t,closeOnNavigation:!0})}cargarPartidas(){this.http.get(s.a+"/socketio/partidas").subscribe(t=>{this.partidas=t.partidas})}espectadorLink(t){return"/espectador/"+this.partidas[t].roomId}}return t.\u0275fac=function(e){return new(e||t)(n.Lb(o.a),n.Lb(a.b))},t.\u0275cmp=n.Fb({type:t,selectors:[["app-partidas-online"]],inputs:{cargado:"cargado"},decls:4,vars:2,consts:[[2,"text-align","center"],[1,"contenedor"],["class","partidaCard",4,"ngFor","ngForOf"],[1,"partidaCard"],[2,"cursor","pointer","color","#0b57d0",3,"click"],["mat-raised-button","","color","primary",1,"btnAzul",3,"routerLink","state"]],template:function(t,e){1&t&&(n.Rb(0,"h2",0),n.yc(1),n.Qb(),n.Rb(2,"div",1),n.xc(3,b,10,5,"mat-card",2),n.Qb()),2&t&&(n.Ab(1),n.Ac(" Partidas en vivo ",e.partidas?e.partidas.length:"0",""),n.Ab(2),n.ic("ngForOf",e.partidas))},directives:[r.k,u.a,u.b,l.a,g.d],styles:[".partidaCard[_ngcontent-%COMP%]{display:inline-block;width:125px;text-align:center;background:#284b63;color:#f5f5f5}.contenedor[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:16px;justify-items:center}"]}),t})()},ffzF:function(t,e,i){"use strict";i.d(e,"a",function(){return a});var a=function(t){return t[t.MOVIMENTO=1]="MOVIMENTO",t[t.CORONADO=2]="CORONADO",t[t.ENROQUE_CORTO=3]="ENROQUE_CORTO",t[t.ENROQUE_LARGO=4]="ENROQUE_LARGO",t[t.PEON_AL_PASO=5]="PEON_AL_PASO",t[t.JAQUE=6]="JAQUE",t[t.JAQUE_MATE=7]="JAQUE_MATE",t[t.TABLAS=8]="TABLAS",t[t.DESCONECCION=9]="DESCONECCION",t[t.RENDICION=10]="RENDICION",t[t.TIEMPO=11]="TIEMPO",t[t.ROOM_CERRADO=12]="ROOM_CERRADO",t[t.REVANCHA=13]="REVANCHA",t}({})},jMqV:function(t,e,i){"use strict";i.d(e,"a",function(){return x}),i.d(e,"b",function(){return _});var a=i("GU7r"),s=i("fXoL"),n=i("FKr1"),o=i("8LU1"),r=i("3Pt+"),l=i("R1ws"),c=i("u47x");const d=["thumbContainer"],u=["toggleBar"],g=["input"],b=function(){return{enterDuration:150}},p=["*"],h=new s.r("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1})});let m=0;const f={provide:r.i,useExisting:Object(s.U)(()=>x),multi:!0};class E{constructor(t,e){this.source=t,this.checked=e}}class k{constructor(t){this._elementRef=t}}const R=Object(n.t)(Object(n.o)(Object(n.p)(Object(n.q)(k)),"accent"));let x=(()=>{class t extends R{constructor(t,e,i,a,n,o){super(t),this._focusMonitor=e,this._changeDetectorRef=i,this.defaults=n,this._animationMode=o,this._onChange=t=>{},this._onTouched=()=>{},this._uniqueId="mat-slide-toggle-"+ ++m,this._required=!1,this._checked=!1,this.name=null,this.id=this._uniqueId,this.labelPosition="after",this.ariaLabel=null,this.ariaLabelledby=null,this.change=new s.o,this.toggleChange=new s.o,this.tabIndex=parseInt(a)||0}get required(){return this._required}set required(t){this._required=Object(o.c)(t)}get checked(){return this._checked}set checked(t){this._checked=Object(o.c)(t),this._changeDetectorRef.markForCheck()}get inputId(){return(this.id||this._uniqueId)+"-input"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{"keyboard"===t||"program"===t?this._inputElement.nativeElement.focus():t||Promise.resolve().then(()=>this._onTouched())})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}_onChangeEvent(t){t.stopPropagation(),this.toggleChange.emit(),this.defaults.disableToggleValue?this._inputElement.nativeElement.checked=this.checked:(this.checked=this._inputElement.nativeElement.checked,this._emitChangeEvent())}_onInputClick(t){t.stopPropagation()}writeValue(t){this.checked=!!t}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t,this._changeDetectorRef.markForCheck()}focus(t,e){e?this._focusMonitor.focusVia(this._inputElement,e,t):this._inputElement.nativeElement.focus(t)}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(new E(this,this.checked))}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}}return t.\u0275fac=function(e){return new(e||t)(s.Lb(s.l),s.Lb(c.e),s.Lb(s.h),s.Wb("tabindex"),s.Lb(h),s.Lb(l.a,8))},t.\u0275cmp=s.Fb({type:t,selectors:[["mat-slide-toggle"]],viewQuery:function(t,e){if(1&t&&(s.Dc(d,!0),s.Dc(u,!0),s.Dc(g,!0)),2&t){let t;s.mc(t=s.Zb())&&(e._thumbEl=t.first),s.mc(t=s.Zb())&&(e._thumbBarEl=t.first),s.mc(t=s.Zb())&&(e._inputElement=t.first)}},hostAttrs:[1,"mat-slide-toggle"],hostVars:12,hostBindings:function(t,e){2&t&&(s.Ub("id",e.id),s.Bb("tabindex",e.disabled?null:-1)("aria-label",null)("aria-labelledby",null),s.Db("mat-checked",e.checked)("mat-disabled",e.disabled)("mat-slide-toggle-label-before","before"==e.labelPosition)("_mat-animation-noopable","NoopAnimations"===e._animationMode))},inputs:{disabled:"disabled",disableRipple:"disableRipple",color:"color",tabIndex:"tabIndex",name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],required:"required",checked:"checked"},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[s.zb([f]),s.xb],ngContentSelectors:p,decls:16,vars:18,consts:[[1,"mat-slide-toggle-label"],["label",""],[1,"mat-slide-toggle-bar"],["toggleBar",""],["type","checkbox","role","switch",1,"mat-slide-toggle-input","cdk-visually-hidden",3,"id","required","tabIndex","checked","disabled","change","click"],["input",""],[1,"mat-slide-toggle-thumb-container"],["thumbContainer",""],[1,"mat-slide-toggle-thumb"],["mat-ripple","",1,"mat-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered","matRippleRadius","matRippleAnimation"],[1,"mat-ripple-element","mat-slide-toggle-persistent-ripple"],[1,"mat-slide-toggle-content",3,"cdkObserveContent"],["labelContent",""],[2,"display","none"]],template:function(t,e){if(1&t&&(s.hc(),s.Rb(0,"label",0,1),s.Rb(2,"div",2,3),s.Rb(4,"input",4,5),s.Yb("change",function(t){return e._onChangeEvent(t)})("click",function(t){return e._onInputClick(t)}),s.Qb(),s.Rb(6,"div",6,7),s.Mb(8,"div",8),s.Rb(9,"div",9),s.Mb(10,"div",10),s.Qb(),s.Qb(),s.Qb(),s.Rb(11,"span",11,12),s.Yb("cdkObserveContent",function(){return e._onLabelTextChange()}),s.Rb(13,"span",13),s.yc(14,"\xa0"),s.Qb(),s.gc(15),s.Qb(),s.Qb()),2&t){const t=s.nc(1),i=s.nc(12);s.Bb("for",e.inputId),s.Ab(2),s.Db("mat-slide-toggle-bar-no-side-margin",!i.textContent||!i.textContent.trim()),s.Ab(2),s.ic("id",e.inputId)("required",e.required)("tabIndex",e.tabIndex)("checked",e.checked)("disabled",e.disabled),s.Bb("name",e.name)("aria-checked",e.checked.toString())("aria-label",e.ariaLabel)("aria-labelledby",e.ariaLabelledby),s.Ab(5),s.ic("matRippleTrigger",t)("matRippleDisabled",e.disableRipple||e.disabled)("matRippleCentered",!0)("matRippleRadius",20)("matRippleAnimation",s.jc(17,b))}},directives:[n.j,a.a],styles:[".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"],encapsulation:2,changeDetection:0}),t})(),O=(()=>{class t{}return t.\u0275mod=s.Jb({type:t}),t.\u0275inj=s.Ib({factory:function(e){return new(e||t)}}),t})(),_=(()=>{class t{}return t.\u0275mod=s.Jb({type:t}),t.\u0275inj=s.Ib({factory:function(e){return new(e||t)},imports:[[O,n.k,n.g,a.c],O,n.g]}),t})()},jU0p:function(t,e,i){"use strict";i.d(e,"a",function(){return n});var a=i("fXoL"),s=i("7JkF");let n=(()=>{class t{constructor(t){this.socket=t,this.roomConectado=!1,this.socket.on("connect",()=>{this.socketId=this.socket.ioSocket.id}),this.socket.on("disconnect",()=>{this.socketId=null})}conectarSocket(){this.socket.connect()}desconectarSocket(){this.socket.disconnect()}dejarDeEscucharEvento(t){return this.socket.removeListener(t)}numeroDeUsuarios(){return this.escucharEvento("usuarios")}getIdClient(){return this.socketId}emitirEventoRoom(t){this.socket.emit("evento-room",t)}emitirEvento(t,e){this.socket.emit(t,e)}escucharEvento(t){return this.socket.fromEvent(t)}callarEvento(t){return this.socket.removeListener(t)}prueba(){this.socket.emit("privado")}}return t.\u0275fac=function(e){return new(e||t)(a.Vb(s.a))},t.\u0275prov=a.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},wOSr:function(t,e,i){"use strict";i.d(e,"a",function(){return a});var a=function(t){return t[t.PEON=1]="PEON",t[t.CABALLO=2]="CABALLO",t[t.ALFIL=3]="ALFIL",t[t.TORRE=4]="TORRE",t[t.REY=5]="REY",t[t.REINA=6]="REINA",t}({})}}]);