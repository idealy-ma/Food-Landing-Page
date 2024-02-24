function getHomeData(req, res){
    const data1 = [
        {
            "image":"sary",
            "description":"service 1"
        },
        {
            "image":"sary",
            "description":"service 2"
        },
        {
            "image":"sary",
            "description":"service 3"
        },
        {
            "image":"sary",
            "description":"service 5"
        }
    ]

    const data2 = [
        {
            "image":"sary",
            "description":"Jean 2023"
        },
        {
            "image":"sary",
            "description":"Jean 2"
        },
        {
            "image":"sary",
            "description":"Jean 3"
        },
        {
            "image":"sary",
            "description":"Jean 4"
        }
    ]

    const value  = {"team":data2, "services":data1}

    return res.json(value);
}

function receiveData(req, res) {
    console.log(req.body);
    return res.json("Ok");
}

module.exports =  {
    getHomeData,
    receiveData
};