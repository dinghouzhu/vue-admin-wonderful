var num=0;var str='vue-admin-wonderful';var arr=str.split('');var bodys=document.body;var div=document.createElement('div');div.setAttribute('class','index-loading');for(var i=0;i<arr.length;i++){var span=document.createElement('span');span.innerHTML=arr[i];div.appendChild(span)}bodys.insertBefore(div,bodys.childNodes[0]);var spanArr=document.querySelectorAll('.index-loading span');for(var j=0;j<spanArr.length;j++){num+=1000/spanArr.length;spanArr[j].setAttribute('style','animation-delay:'+num+'ms')}window.onload=function(){var delEl=document.querySelector('.index-loading');delEl.remove()};var _hmt=_hmt||[];(function(){var hm=document.createElement('script');hm.src='https://hm.baidu.com/hm.js?4cd84d7913cb13e280479e49045e3876';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(hm,s)})();