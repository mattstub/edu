module.exports = {
    checkParameter: function(type) {
        const sounds = {
            pig: "'OINK!'",
            cow: "'MOO!'",
            dog: "'WOOF WOOF!'",
            cat: "'MEOW!'",
            fish: "'...'"
        }
        if(sounds[type] != undefined)
            return ` The ${type} says ${sounds[type]} `;
        else
            return ` The ${type} is not currently available! Please try again later`;
        
    },
    repeatResponse: function(type, count) {
        let c = parseInt(count);
        let temp = '';
        for(var i = 0; i < c; i++)
            temp += type + ' ';
        return temp;
    }
};