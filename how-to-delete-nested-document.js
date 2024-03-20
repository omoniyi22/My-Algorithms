//This is the raw code
function R() {
    let b = [] // the new array will processed and it will result to our data after deleting what we intend to delete
    let c = [1, 2, 3, 4] //this is the data
    const z = c[1] //this is the item that need to be deleted
    for (a in c) { //looping through the data
        b.push(c[a]) // insert into the new array
        if (a == z){ // if the z is found
            b.pop() // pop it out in the of the new array
        console.log(a) // show me the position
        }
        console.log(b) // show me my new array
        
    }
    console(b + "is the final result") // show me my result of the new array and it won't have what i popped out
}
R()

//Using it with a mongo database

router.post('/comment/entertainment/:id', (req, resp) => {
    entertainmentDB.findById(req.params.id).then((member) => {
            c = member.comments
            let z = member.comments[req.body.comment]
            function R() {
                b = []
                let c = member.comments
                for (a in c) {
                    b.push(c[a])
                    if (a == req.body.comment) {
                        b.pop()
                        console.log(a)
                    }
                }
                console.log(b)
                member.comments = b
            }
            R()
            member.save().then(res => {
                resp.json({
                    "politic": member, mg: "Comment deleted !"
                })
            })
    })
})


