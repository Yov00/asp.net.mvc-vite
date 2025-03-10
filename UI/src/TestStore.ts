import { makeObservable, runInAction} from "mobx"

export class TestStore{
    parts:any[] = []
    constructor(){
        makeObservable(this)
    }

    addParts=(data:any)=>{
        runInAction(()=>{
            this.parts = [...this.parts,data]
        })
    }
}