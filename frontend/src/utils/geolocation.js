export function geoLocation(){
    //check if navigator supports geolocation
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position.coords.latitude)
            console.log(position.coords.longitude)
        })
        return {
            navigator : navigator,

        }
    }


    return {
        navigator : '',
    };
}

