const x = 4;
const y = 10;

if (x < 5 && y > 7) {
    console.log(`${x} is more then 5 or ${y} is more then 10.`);
}

const a = 30 
const q = a < 30 ? 'true' : 'false';

console.log(q);

switch(q){
    case 'true':
        console.log('it is true');
        break;
    
    case 'false':
        console.log('it is false');
        break;
    
    default:
        console.log('none');
            break;

}
