/**
 * "namespace" means grouping of the interfaces
 */
namespace basics_inter {
    /**
     * You have to export the interface as well
     */
    export interface cal {
        // One function to give the definition to for the implementations
        process(a: number, b: number): number;
    }
}

export { basics_inter };