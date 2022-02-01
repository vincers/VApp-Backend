const passwordHash = require('password-hash');

exports.pass_hash = (password) => {
    const hashedPassword = passwordHash.generate(password);
    return hashedPassword;
}

exports.pass_verify = (password, hash)=> {
    return passwordHash.verify(password, hash);
}

exports.email_hash = (email) => {
    const hashedEmail = passwordHash.generate(email);
    return hashedEmail;
}

exports.email_verify = (email, hash)=> {
    return passwordHash.verify(email, hash);
}
