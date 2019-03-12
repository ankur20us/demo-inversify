import "reflect-metadata";

import container from "./container"
import TYPES from "./types"
import { basics_inter } from "./interfaces/basics_inter"

let AdditionFn = container.get<basics_inter.cal>(TYPES.Addition);
console.log(AdditionFn.process(1, 3));