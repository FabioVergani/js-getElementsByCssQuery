void((function(w){'use strict';

 function getElementsByCssQuery(e,s){return e.querySelectorAll(remCSSPseudo(s));};

 const $=w,
 $O=$.Object,
 Seal=$O.seal,
 Freeze=$O.freeze,
 Call=Freeze((function(o){const e=o.prototype;return e.call.bind(e.bind);})($.Function)),
 FreezedCall=function(){return Freeze(Call.apply(null,arguments));},
 //..
 aRawObj=Freeze((function(Create){const s=Seal,f=Freeze,c=Create,r=Call(c,null,null),e=r(),o=r();o.value=o.writable=o.enumerable=true;o.configurable=false;for(let p in s(o)){e[p]=c(o);};(r.o=s(e)).value.value=void(r.set=f(function(k){const o=k,r=this,x=r(),t=r.o;for(let p in o){let e=o[p],i=x[p]=r(t);for(let p in e){i[p]=e[p];};};return r(x);}));return f(r);})($O.create)),
 $Obj=FreezedCall(aRawObj.set,aRawObj),
 //..
 ConcatenateRegExpSource=Freeze(function(...o){return '('+o.map(function(e){return e.source;}).join(')|(')+')';}),
 //..
 RegularExpressions=(function(exp){
	const e=exp,f=Freeze;
	let o=e.CSS.Pseudo;
	o.All=new RegExp(ConcatenateRegExpSource(o.Elements,o.Classes,o.Page),'gi');
	//..
	return f(e);
 })($Obj({
	CSS:{value:$Obj({
		Pseudo:{value:$Obj({
			Page:{value:/left|right/i},
			Classes:{value:/:(hover|focus|active|visited|link|empty|scope|target|root|fullscreen|default|optional|valid|(in(determinate|valid))|((in|out\-of)\-range)|((requir|check|((dis|en)abl))ed)|((first|only|last)\-(child|of\-type))|((not|lang|any|dir|(nth(\-last)?)\-(child|of\-type))\(.*\))|((\-.+\-)?(read\-(write|only))))/gi},
			Elements:{value:/([:]{1,2}(before|after|first\-(letter|line)))|(::(marker|backdrop|(spelling|grammar)\-error|((\-.+\-)?((selection|placeholder|fill(\-(lower|upper))?)|(progress\-(bar|value))|(thumb|track)|(range\-(progress|thumb|track))))))/gi},
		 })
		}
	 })
	}//,..
 })),
 //,..
 remCSSPseudo=FreezedCall(function(s){const t=s.trim();return (t.length>3 && t.includes(':'))?t.replace(this,''):t;},RegularExpressions.CSS.Pseudo.All),
 //,..
 $d=$.document,
 $Query=FreezedCall(getElementsByCssQuery,null,$d),
 //,..
 last='end';
//#
//console.dir(RegularExpressions);
//console.log(remCSSPseudo('a:hover,b,a:link:focus,p:not(:active)'));
console.dir($Query('body:not(:hover)'));
//done.
})(window));
