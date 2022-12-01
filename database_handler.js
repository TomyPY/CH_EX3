const fs = require('fs')

class Contenedor{

    constructor(file){

        this.file = file
        this.fileReadeable = JSON.parse(fs.readFileSync(this.file,'utf8'))
    }


    async save(obj){

        obj._id =  this.fileReadeable.length + 1

        this.fileReadeable.push(obj)

        await fs.promises.writeFile(this.file, JSON.stringify(this.fileReadeable), err =>{
            if(err){
                console.log(err)
            }else{
                console.log("Object has been added!")
            }
        })
    
    }

    getById(_id){

        let obj=this.fileReadeable.find(x => {return x._id == parseInt(_id)})
        return obj

    }

    getAll(){
        return this.fileReadeable
    }


    async deleteById(_id){

        let index=this.fileReadeable.findIndex(x => {return x._id == parseInt(_id)})
        
        if(index!=-1){
            this.fileReadeable.splice(index,1)
        }else{
            console.log("That ID doesn't exist")
        }
        
        await fs.promises.writeFile(this.file, JSON.stringify(this.fileReadeable), err =>{
            if(err){
                console.log(err)
            }else{
                console.log("Object has been added!")
            }})
        
    }

    async deleteAll(){

        await fs.promises.writeFile(this.file, JSON.stringify([]), err =>{
            if(err){
                console.log(err)
            }else{
                console.log("Object has been added!")
            }})
    }

}

const Cdor = new Contenedor('MyFile.json')

module.exports = Cdor