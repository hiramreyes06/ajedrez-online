(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"cfW+":function(t,n,r){"use strict";r.r(n),r.d(n,"InicioModule",function(){return L});var e=r("ofXK"),o=r("tyNb"),i=r("3Pt+"),a=r("AytR"),s=r("fXoL"),c=r("iELJ"),l=r("IheW"),u=r("wUqA"),p=r("jDhr"),b=r("Q2Ze"),m=r("e6WT"),d=r("Dxy4");let g=(()=>{class t{constructor(t,n,r,e,o,i){this.matDialogRef=t,this.matDialog=n,this.router=r,this.http=e,this.auth=o,this.componentService=i}ngOnInit(){this.cargarFormulario()}inicarSesion(){this.http.post(a.a+"/auth/signin",{username:this.loginForm.value.username,password:this.loginForm.value.password}).subscribe(t=>{this.auth.cargarUsuario(t),this.matDialog.getDialogById("login").close(),this.router.navigateByUrl("jugar-partida")},t=>{401===t.status||404===t.status?this.componentService.mostrarMensaje("Datos incorrectos",!1):this.componentService.mostrarMensaje(t.statusText),console.log("Error al logearce",t)})}cargarFormulario(){this.loginForm=new i.f({username:new i.c(null,[i.o.required,i.o.minLength(5),i.o.maxLength(30)]),password:new i.c(null,[i.o.required,i.o.minLength(5),i.o.maxLength(30)])})}}return t.\u0275fac=function(n){return new(n||t)(s.Lb(c.e),s.Lb(c.b),s.Lb(o.c),s.Lb(l.a),s.Lb(u.a),s.Lb(p.a))},t.\u0275cmp=s.Fb({type:t,selectors:[["app-signin"]],decls:14,vars:2,consts:[[3,"formGroup"],["appearance","fill",1,"inputs"],["matInput","","formControlName","username","type","text"],["matInput","","formControlName","password","type","password"],[2,"text-align","right"],["mat-raised-button","",1,"btns",3,"click"],["mat-raised-button","",1,"btns","btnAzul",3,"disabled","click"]],template:function(t,n){1&t&&(s.Rb(0,"form",0),s.Rb(1,"mat-form-field",1),s.Rb(2,"mat-label"),s.yc(3,"Nombre de usuaro"),s.Qb(),s.Mb(4,"input",2),s.Qb(),s.Rb(5,"mat-form-field",1),s.Rb(6,"mat-label"),s.yc(7,"Contrase\xf1a"),s.Qb(),s.Mb(8,"input",3),s.Qb(),s.Qb(),s.Rb(9,"div",4),s.Rb(10,"button",5),s.Yb("click",function(){return n.matDialogRef.close()}),s.yc(11," Cancelar "),s.Qb(),s.Rb(12,"button",6),s.Yb("click",function(){return n.inicarSesion()}),s.yc(13," Iniciar sesion "),s.Qb(),s.Qb()),2&t&&(s.ic("formGroup",n.loginForm),s.Ab(12),s.ic("disabled",n.loginForm.invalid))},directives:[i.p,i.l,i.g,b.b,b.e,m.a,i.b,i.k,i.e,d.a],styles:[".inputs[_ngcontent-%COMP%]{display:block;width:80%;margin-left:auto;margin-right:auto}.btns[_ngcontent-%COMP%]{margin-left:5px;margin-right:5px}  .mat-dialog-container{padding:8px!important;background-color:#8ab9b5!important}[_nghost-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fffaf0;border-radius:18px}[_nghost-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-underline{display:none}"]}),t})();var h=r("mrSG"),f=r("Kj3r"),x=r("quSY");function w(t,n){if(1&t&&(s.Rb(0,"p",11),s.yc(1),s.Qb()),2&t){const t=s.cc();s.Ab(1),s.Ac(" ",t.mostrarMensajeError(t.signupForm.controls.email)," ")}}function y(t,n){if(1&t&&(s.Rb(0,"p",11),s.yc(1),s.Qb()),2&t){const t=s.cc();s.Ab(1),s.Ac(" ",t.mostrarMensajeError(t.signupForm.controls.username)," ")}}function C(t,n){1&t&&(s.Rb(0,"p",12),s.yc(1," No coinciden "),s.Qb())}let v=(()=>{class t{constructor(t,n,r,e){this.http=t,this.matDialogRef=n,this.matDialog=r,this.componentes=e,this.emailInput=new i.c(null,[i.o.required,i.o.pattern(/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/)]),this.usernameInput=new i.c(null,[i.o.required,i.o.minLength(5),i.o.maxLength(20)]),this.subscripciones$=new x.a}ngOnInit(){this.cargarFormulario(),this.debouncesInput()}ngOnDestroy(){this.subscripciones$.unsubscribe()}debouncesInput(){const t=this.emailInput.valueChanges.pipe(Object(f.a)(1e3)).subscribe(t=>Object(h.a)(this,void 0,void 0,function*(){if(this.signupForm.controls.email.setValue(t),this.signupForm.controls.email.valid){const t=yield this.correoUnico(this.emailInput);this.signupForm.controls.email.setErrors(t.existente?{existe:!0}:null)}})),n=this.subscripciones$.add(t);this.usernameInput.valueChanges.pipe(Object(f.a)(1e3)).subscribe(t=>Object(h.a)(this,void 0,void 0,function*(){if(this.signupForm.controls.username.setValue(t),this.signupForm.controls.username.valid){const t=yield this.usernameUnico(this.usernameInput);this.signupForm.controls.username.setErrors(t.existente?{existe:!0}:null)}})),this.subscripciones$.add(n)}mostrarMensajeError(t){return t.hasError("pattern")?"Correo invalido*":t.hasError("existe")||t.hasError("minlength")?"No disponible*":void 0}registarme(){const t=this.componentes.mostrarCargando("Realizando registro...");this.http.post(a.a+"/auth/signup",{email:this.signupForm.value.email,password:this.signupForm.value.password,username:this.signupForm.value.username}).subscribe(n=>{this.matDialogRef.close(!0),t.close()},n=>{console.log("Error al registrar el usuario",n),this.componentes.mostrarMensaje(n.statusText),t.close()})}usernameError(){return this.signupForm.controls.username.errors&&(this.signupForm.controls.username.dirty||this.signupForm.controls.username.touched)}correoError(){return this.signupForm.controls.email.errors&&(this.signupForm.controls.email.dirty||this.signupForm.controls.email.touched)}passwordsError(){var t;return(null===(t=this.signupForm.errors)||void 0===t?void 0:t.mismatch)&&(this.signupForm.controls.password2.dirty||this.signupForm.controls.password2.touched)}compararContras(t){return t.controls.password2.value===t.controls.password.value?null:{mismatch:!0}}correoUnico(t){return this.http.get(`${a.a}/user/email/${t.value}`).toPromise()}usernameUnico(t){return this.http.get(`${a.a}/user/username/${t.value}`).toPromise()}correoUnicoDocumentacion(t){return new Promise((n,r)=>{this.http.get(`${a.a}/user/email/${t.value}`).subscribe(t=>n(t.existente?{existe:!0}:null),t=>{n({existe:!0})})})}formValido(){return this.emailInput.valid&&!this.emailInput.pending&&this.usernameInput.valid&&!this.usernameInput.pending&&this.signupForm.valid&&!this.signupForm.pending}cargarFormulario(){this.signupForm=new i.f({email:new i.c(null,{validators:[i.o.required,i.o.pattern(/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/),i.o.maxLength(45)]}),username:new i.c(null,[i.o.required,i.o.minLength(5),i.o.maxLength(20)]),password:new i.c(null,[i.o.required,i.o.minLength(5),i.o.maxLength(15)]),password2:new i.c(null,[i.o.required,i.o.minLength(5),i.o.maxLength(30)])},{validators:this.compararContras})}}return t.\u0275fac=function(n){return new(n||t)(s.Lb(l.a),s.Lb(c.e),s.Lb(c.b),s.Lb(p.a))},t.\u0275cmp=s.Fb({type:t,selectors:[["app-signup"]],decls:25,vars:7,consts:[[3,"formGroup"],["style","color: red; text-align: right;",4,"ngIf"],["appearance","fill",1,"inputs"],["matInput","","type","email",3,"formControl"],["matInput","",3,"formControl"],["matInput","","formControlName","password","type","password"],["matInput","","formControlName","password2","type","password"],["style","color: red;",4,"ngIf"],[2,"text-align","right"],["mat-raised-button","",1,"btns",3,"click"],["mat-raised-button","",1,"btns","btnAzul",3,"disabled","click"],[2,"color","red","text-align","right"],[2,"color","red"]],template:function(t,n){1&t&&(s.Rb(0,"form",0),s.xc(1,w,2,1,"p",1),s.Rb(2,"mat-form-field",2),s.Rb(3,"mat-label"),s.yc(4,"Correo"),s.Qb(),s.Mb(5,"input",3),s.Qb(),s.xc(6,y,2,1,"p",1),s.Rb(7,"mat-form-field",2),s.Rb(8,"mat-label"),s.yc(9,"Nombre de usuario"),s.Qb(),s.Mb(10,"input",4),s.Qb(),s.Rb(11,"mat-form-field",2),s.Rb(12,"mat-label"),s.yc(13,"Contrase\xf1a"),s.Qb(),s.Mb(14,"input",5),s.Qb(),s.Rb(15,"mat-form-field",2),s.Rb(16,"mat-label"),s.yc(17,"Repite la contrase\xf1a"),s.Qb(),s.Mb(18,"input",6),s.xc(19,C,2,0,"p",7),s.Qb(),s.Qb(),s.Rb(20,"div",8),s.Rb(21,"button",9),s.Yb("click",function(){return n.matDialogRef.close()}),s.yc(22," Cancelar "),s.Qb(),s.Rb(23,"button",10),s.Yb("click",function(){return n.registarme()}),s.yc(24," Registrarme "),s.Qb(),s.Qb()),2&t&&(s.ic("formGroup",n.signupForm),s.Ab(1),s.ic("ngIf",n.signupForm.controls.email.invalid),s.Ab(4),s.ic("formControl",n.emailInput),s.Ab(1),s.ic("ngIf",n.signupForm.controls.username.invalid),s.Ab(4),s.ic("formControl",n.usernameInput),s.Ab(9),s.ic("ngIf",n.passwordsError()),s.Ab(4),s.ic("disabled",n.signupForm.invalid))},directives:[i.p,i.l,i.g,e.l,b.b,b.e,m.a,i.b,i.k,i.d,i.e,d.a],styles:[".inputs[_ngcontent-%COMP%]{display:block;width:80%;margin-left:auto;margin-right:auto}.btns[_ngcontent-%COMP%]{margin-left:5px;margin-right:5px}  .mat-dialog-container{padding:8px!important;background-color:#8ab9b5!important}[_nghost-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fffaf0;border-radius:18px}[_nghost-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-underline{display:none}"]}),t})();var M=r("5YT4"),R=r("zHaW");function O(t,n){if(1&t&&(s.Rb(0,"p"),s.yc(1),s.dc(2,"json"),s.Qb()),2&t){const t=s.cc();s.Ab(1),s.zc(s.ec(2,1,t.error))}}let P=(()=>{class t{constructor(t,n,r,e,o,a,s){this.matDialog=t,this.matSnack=n,this.http=r,this.auth=e,this.router=o,this.componentsService=a,this.route=s,this.texto=new i.c(null)}ngOnInit(){this.cargarPartidas()}windowSize(){return window.innerWidth}iniciarHiram(){this.auth.inicarSesion("prueba1","123456").then(()=>{this.router.navigateByUrl("online")}).catch(t=>{console.log("Error al logearse ",t)})}iniciarPrueba(){this.auth.inicarSesion("prueba2","123456").then(()=>{this.router.navigateByUrl("online")}).catch(t=>{console.log("Error al logearse ",t)})}cargarPartidas(){const t=this.route.snapshot.queryParamMap.get("fecha")?"partida/inicio?fecha="+this.route.snapshot.queryParamMap.get("fecha"):"partida/inicio";this.http.get(`${a.a}/${t}`).subscribe(t=>{this.inicioDatos=t},t=>{console.log("Error al cargar visitas ",t)}),this.http.get(a.a+"/socketio/partidas").subscribe(t=>{this.partidasEnVivo=t,this.partidasOnline.partidas=t.partidas},t=>{this.componentsService.mostrarMensaje(a.a,!1),this.error=t})}mostrarSnack(t,n){this.matSnack.open(t,null,{duration:3e3,panelClass:n})}loginDialog(){this.matDialog.open(g,{disableClose:!0,hasBackdrop:!0,id:"login"}).afterClosed().subscribe(t=>{})}signupDialog(){this.matDialog.open(v,{disableClose:!0,hasBackdrop:!0,autoFocus:!1,width:window.innerWidth>=500?"400px":"auto",panelClass:"app-full-bleed-dialog"}).afterClosed().subscribe(t=>{t&&this.mostrarSnack("Se registro correctamente","snackVerde")})}}return t.\u0275fac=function(n){return new(n||t)(s.Lb(c.b),s.Lb(R.a),s.Lb(l.a),s.Lb(u.a),s.Lb(o.c),s.Lb(p.a),s.Lb(o.a))},t.\u0275cmp=s.Fb({type:t,selectors:[["app-inicio"]],viewQuery:function(t,n){if(1&t&&s.tc(M.a,!0),2&t){let t;s.mc(t=s.Zb())&&(n.partidasOnline=t.first)}},decls:27,vars:5,consts:[[1,"custom-toolbar",2,"background","#353535"],[1,"nav-buttons"],["mat-raised-button","","routerLink","/jugar-partida",1,"btnVerde","botones"],["mat-raised-button","","routerLink","/analizar-partidas",1,"btnVerde","botones"],[1,"title-group"],[2,"text-align","center","color","azure"],[2,"text-align","right","color","azure"],[1,"inicioCard"],[2,"text-align","center"],[4,"ngIf"],["mat-raised-button","",1,"card-buttons","btnAzul",3,"click"],[1,"partidasOnline"],[3,"cargado"]],template:function(t,n){1&t&&(s.Rb(0,"mat-toolbar"),s.Rb(1,"mat-toolbar-row",0),s.Rb(2,"div",1),s.Rb(3,"button",2),s.yc(4," Jugar "),s.Qb(),s.Rb(5,"button",3),s.yc(6," Analizar partidas "),s.Qb(),s.Qb(),s.Rb(7,"div",4),s.Rb(8,"span",5),s.yc(9,"Ajedrez online"),s.Qb(),s.Rb(10,"span",6),s.yc(11),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Rb(12,"mat-card",7),s.Rb(13,"mat-card-content",8),s.Rb(14,"h2"),s.yc(15,"Para jugar es necesario estar registrado"),s.Qb(),s.Qb(),s.Rb(16,"p",8),s.yc(17),s.Qb(),s.Rb(18,"p",8),s.yc(19),s.Qb(),s.xc(20,O,3,3,"p",9),s.Rb(21,"button",10),s.Yb("click",function(){return n.loginDialog()}),s.yc(22," Iniciar sesion "),s.Qb(),s.Rb(23,"button",10),s.Yb("click",function(){return n.signupDialog()}),s.yc(24," Registrarme "),s.Qb(),s.Qb(),s.Rb(25,"mat-card",11),s.Mb(26,"app-partidas-online",12),s.Qb()),2&t&&(s.Ab(11),s.Ac("Usuarios: ",null==n.partidasEnVivo?null:n.partidasEnVivo.jugadores,""),s.Ab(6),s.Ac("Total de partidas en este dia: ",null==n.inicioDatos?null:n.inicioDatos.totalPartidasJugadas,""),s.Ab(2),s.Ac("Total de visitas de hoy: ",null==n.inicioDatos?null:n.inicioDatos.totalVisitas,""),s.Ab(1),s.ic("ngIf",n.error),s.Ab(6),s.ic("cargado",!0))},styles:['.card-buttons[_ngcontent-%COMP%]{display:block;width:40%;margin-top:10px;margin-left:auto;margin-right:auto}.inicioCard[_ngcontent-%COMP%]{background:#8ab9b5}@media screen and (min-width:480px){.inicioCard[_ngcontent-%COMP%]{width:450px}.inicioCard[_ngcontent-%COMP%], .partidasOnline[_ngcontent-%COMP%]{margin-top:10px;margin-left:auto;margin-right:auto}.partidasOnline[_ngcontent-%COMP%]{width:90%;background:#8ab9b5}.custom-toolbar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{flex:1}.nav-buttons[_ngcontent-%COMP%]{flex:0}}.botones[_ngcontent-%COMP%]{margin-left:2px;margin-right:2px}.custom-toolbar[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center}.nav-buttons[_ngcontent-%COMP%]{display:flex;order:1}.title-group[_ngcontent-%COMP%]{display:flex;flex-direction:row;order:2;flex:1}@media screen and (max-width:650px){.custom-toolbar[_ngcontent-%COMP%]{flex-direction:column;display:grid;align-content:center;justify-content:center;height:auto}.nav-buttons[_ngcontent-%COMP%]{order:2;width:100%;justify-content:flex-start}.title-group[_ngcontent-%COMP%]{order:1;width:100%;justify-content:space-between}.title-group[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:2px;margin-right:2px}}@media screen and (max-width:480px){.inicioCard[_ngcontent-%COMP%]{width:88%;margin-top:10px;margin-left:5px;margin-right:5px}.partidasOnline[_ngcontent-%COMP%]{margin-top:10px;width:88%;margin-left:auto;margin-right:auto;background:#8ab9b5}}.contenedor[_ngcontent-%COMP%]{background-color:hsla(0,0%,100%,.8);padding:20px;border-radius:10px;box-shadow:0 0 10px rgba(0,0,0,.5)}[_nghost-%COMP%]{background:#81b0c3;overflow-x:auto}[_nghost-%COMP%], [_nghost-%COMP%]:before{display:block;height:100%}[_nghost-%COMP%]:before{content:"\u2654 \u2655 \u2656 \u2657 \u2658 \u2659 \u2654 \u2655 \u2656 \u2657 \u2658 \u2659 \u2654 \u2655 \u2656 \u2657 \u2658 \u2659 \u2654 \u2655 \u2656 \u2657 \u2658 \u2659 \u2654 \u2655 \u2656 \u2657 \u2658 \u2659 \u2654 \u2655 \u2656 \u2657 \u2658 \u2659 \u2654 \u2655 \u2656 \u2657 \u2658 \u2659 \u2654 \u2655 \u2656 \u2657 \u2658 \u2659 \u2654 \u2655 \u2656 \u2657 \u2658 \u2659";color:rgba(0,0,0,.1);font-size:100px;position:absolute;top:0;left:0;width:100%;opacity:1;overflow:hidden}.app-full-bleed-dialog[_ngcontent-%COMP%]   .mat-dialog-container[_ngcontent-%COMP%]{padding:8px!important}']}),t})();var Q=r("Wp6s"),F=r("M9ds"),k=r("l0rg"),_=r("3JTg");const I=[{path:"",component:P}];let L=(()=>{class t{}return t.\u0275mod=s.Jb({type:t}),t.\u0275inj=s.Ib({factory:function(n){return new(n||t)},imports:[[e.b,o.e.forChild(I),Q.c,i.n,F.c,m.b,b.d,d.b,c.d,k.b,_.a]]}),t})();s.qc(P,[k.a,k.c,d.a,o.d,Q.a,Q.b,e.l,M.a],[e.f])}}]);