function checkSpeed(speed){
    const speedLimit =70
    const kmPerDemeriitPoint=5
    const maxDemeritPoints=12
    if (speed<=speedLimit){
        console.log('Ok')
    }
    else{
        const demeritPoints =Math.floor((speed-speedLimit)/kmPerDemeriitPoint)
        if(demeritPoints>maxDemeritPoints){
            console.log('License suspended')
        }
        else{
            console.log(`Points: ${demeritPoints}`)
        }
    }
}
function main(){
    const speed = prompt('Enter car speed:')
    if (speed ===null || isNaN(speed)){
        console.log('Please type in a number that is greater than 0')
        return
    }
    const parsedSpeed=parseInt(speed)
    if (parsedSpeed<0){
        console.log('Speed must be greater than 0')
        return
    }
    checkSpeed(parsedSpeed)
}
main()