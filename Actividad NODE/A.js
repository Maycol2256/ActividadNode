let fs=require('fs')

if(fs.existsSync('Ejercicio')){
    console.log('La carpeta ya existe')
}
else{
    fs.mkdirSync("Ejercicio",(err)=>{
        if(err){
            console.log(err)
        }
        console.log('Carpeta actualizado')
    })
}

if(fs.existsSync('Texto.txt')){
    console.log('El archivo ya existe')
}
else{

    fs.writeFileSync('./Texto.txt','Hola bro')
    fs.renameSync('./Texto.txt','./Ejercicio/Texto.txt')
    console.log('Archivo Movido')
    }
    if(fs.existsSync('./Ejercicio/Texto.txt')){
        let archivo='./Ejercicio/Texto.txt'
        let lineaNueva=`Nueva linea de texto\n`
        fs.writeFile(archivo,lineaNueva,(err)=>{
            if(err){
                console.log(err)
            }
            console.log('Archivo actualizado')
        })
    }
    else{
        console.log('No existe un archivo que editar')
    }

    if(fs.existsSync('./Ejercicio/Texto.txt')){
        fs.unlinkSync('./Ejercicio/Texto.txt',(err)=>{
            if(err){
                console.log(err)
            }
            console.log('Archivo Eliminado') 
        })
    }
    else{
        console.log('No exciste el archivo a eliminar')
    }