/*
 *  A Pattern is constructed with an array.
 *  It represents an infinite series
 *  of this pattern.
 */
(function(exports) {
     /* returns data from the next position */
     var length = function() {
          return this.data.length;
        },
        next = function() {
         if(this.position === this.data.length - 1) {
           this.position = -1;
         }
         return this.data[++this.position];
       },
       reset = function(){
         this.position = -1;
       },
       Pattern = function(values) {
         this.length = length;
         this.data = values;
         this.next = next;
         this.reset = reset;
         this.reset();
       };

 module.exports = Pattern;

})(exports);

//var s = new Pattern([5,4,35,66,64,8,13,74]);
// setInterval(function(){
//    console.log(s.next());
// }, 50);
