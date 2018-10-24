var add = (a,b) => a + b;

module.exports.add = add;
module.exports.square = (x) => x*x;
module.exports.setName = (user,fullname) => {
    var names = fullname.split(' ');
    user.firstname = names[0];
    user.lastname = names[1];
    return user;
}

module.exports.asyncAdd((a,b,callback) => {
    setTimeout(() => {
        callback(a+b);
    },1000);
});