export default function generatePassword(){
    let password:string = '';
    let characters:string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%¨&*()`´{}[];.,<>:АБВГДЕЖЅЗИІКЛМНОПҀРСТѸФХѠЦЧШЩЪꙐЬѢꙖѤЮѦѪѨѬѮѰѲѴ';
    let passwordlength = 16;

    for ( let index = 0; index < passwordlength; index++ ) {
        
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return password;
}