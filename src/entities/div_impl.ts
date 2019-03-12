
import { injectable } from "inversify";
import { basics_inter } from "../interfaces/basics_inter" 

// annotation to tell inversify that this is going to be injectable and we can ask the container for the object.
@injectable()
export default class Division implements basics_inter.cal {
    process(a: number, b: number): number {
        return a/b;
    }
}
