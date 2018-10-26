module.exports ={
    //sync version
    syncSum: function(a, b){
        console.log( a + b );
    },
    //async verison
    asyncSum: function(a, b){
        setTimeout(() => {
            console.log( a + b);
        }, 5000);
    }
}