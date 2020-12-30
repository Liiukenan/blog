export default{
    getQueryVariable (name) {
       var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)','i');
       var arr = window.location.href.split("?");
       if(arr[1]){
        var r = arr[1].match(reg);
        return unescape(r[2]);
       }
      //  var r = arr[1].match(reg);
      //  if (r != null) return unescape(r[2]);
       return null;
    },
    formentTime (data) {
       var s;
       data=new Date(data*1000);
       var hours = data.getHours();
       var minutes = data.getMinutes();
       var seconds = (data % (1000 * 60)) / 1000;
       s = (hours < 10 ? ('0' + hours) : hours) + ':' + (minutes < 10 ? ('0' + minutes) : minutes);
       return s;
   },
    getPlane() {
       var u = navigator.userAgent
       var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
       if (isiOS) {
         return true
       } else {
         return false
       }
     }
} 