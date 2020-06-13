console.log('Ready')

let a = [1,2,3,4,5,6,7,3]
let p = []
var d 
var b
var v
while(p.length !== a.length){	
for(e in a){
    b = Math.floor(Math.random()*(a.length))
    p.push(a[b])
    v = a[b]
    for(c in p){
	if(c < p.length-1){
	       while(v == p[c]){
 	       console.log( v,c, ' repeat itself')
	       p.pop()     
    }
  }
 }
}
}
a.push(p)
console.log(a)
