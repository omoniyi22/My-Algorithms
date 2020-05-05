
// This is the DB
{
    "_id": "5eb0237be1c2962668b1bdf9",
    "id": 1,
    "type": "entertainment",
    "title": "Entertainment",
    "description": "Story of a scamed school in the very news of the the daily life",
    "picture": "res",
    "content": "Story of a scamed school in the very news of the the daily life",
    "comments": [
        {
            "users": "",
            "value": "vbn",
            "date": "Tue May 05 2020 04:01:20 GMT+0100 (West Africa Standard Time)"
        },
        {
            "users": "",
            "value": "vbn",
            "date": "Tue May 05 2020 04:01:19 GMT+0100 (West Africa Standard Time)"
        },
        {
            "users": "",
            "value": "vbn",
            "date": "Tue May 05 2020 04:01:19 GMT+0100 (West Africa Standard Time)"
        },
        {
            "users": "",
            "value": "vbn",
            "date": "Tue May 05 2020 04:01:18 GMT+0100 (West Africa Standard Time)"
        },
        {
            "users": "",
            "value": "vbn",
            "date": "Tue May 05 2020 04:01:12 GMT+0100 (West Africa Standard Time)"
        }
    ],
    "views": null,
    "date": "Mon May 04 2020 15:15:23 GMT+0100 (West Africa Standard Time)",
    "__v": 5
}


router.post('/update/comment/entertainment/:id', (req, resp) => {
    entertainmentDB.findById(req.params.id).then((member) => {
            c = member.comments
            let z = member.comments[req.body.comment]
            function r() {
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
            r()
            member.save().then(res => {
                resp.json({
                    "politic": member, mg: "Comment deleted !"
                })
            })
        
    })
})
