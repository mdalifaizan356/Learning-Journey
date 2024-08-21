const add = (a, b)=>{
    return a+b;
}

const mul = (a, b)=>{
    return a*b;
}

let name = "Faizan";

// module.exports.add = add;
// module.exports.mul = mul;
// module.exports.name = name;


module.exports = {add, mul};
module.exports.default=name;