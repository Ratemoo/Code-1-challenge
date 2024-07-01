function calculateGrade(marks){
    if(marks > 79){
        return 'A'
    }
    else if(marks>=60){
        return 'B'
    }
    else if(marks>=50){
        return 'C'
    }
    else if( marks>=40){
        return 'D'
    }
    else{
        return 'E'
    }
}
function main(){
    const marks = prompt('Enter student marks (0-100):')
    if(marks===null || isNaN(marks) ){
        console.log('Invalid input. Enter a number between 0-100')
        return
    }
    const parsedMarks= parseInt(marks)
    if (parsedMarks <0 || parsedMarks >100){
        console.log('Marks should be between 0-100. Please input the correct value')
        return
    }
    const grade = calculateGrade(parsedMarks)
    console.log(`Grade: ${grade}`)
}
main()