import { Container } from "inversify";
import TYPES  from "./types";
import { basics_inter } from "./interfaces/basics_inter";
import AllEntities from "./entities";

const container = new Container();

// Creating the mappings of Implementors with the TYPES.
container.bind<basics_inter.cal>(TYPES.Addition).to(AllEntities.AdditionImpl);
container.bind<basics_inter.cal>(TYPES.Substraction).to(AllEntities.SubstractionImpl);
container.bind<basics_inter.cal>(TYPES.Division).to(AllEntities.DivisionImpl);
container.bind<basics_inter.cal>(TYPES.Multiplication).to(AllEntities.MultiplicationImpl);

export default container;