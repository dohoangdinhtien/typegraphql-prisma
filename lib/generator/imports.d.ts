import { SourceFile } from "ts-morph";
import { GenerateMappingData } from "./types";
import { GenerateCodeOptions } from "./options";
export declare function generateTypeGraphQLImport(sourceFile: SourceFile): void;
export declare function generateGraphQLFieldsImport(sourceFile: SourceFile): void;
export declare function generateGraphQLScalarsImport(sourceFile: SourceFile): void;
export declare function generateGraphQLScalarTypeImport(sourceFile: SourceFile): void;
export declare function generateCustomScalarsImport(sourceFile: SourceFile, level?: number): void;
export declare function generateHelpersFileImport(sourceFile: SourceFile, level?: number): void;
export declare function generatePrismaNamespaceImport(sourceFile: SourceFile, options: GenerateCodeOptions, level?: number): void;
export declare function generateArgsBarrelFile(sourceFile: SourceFile, argsTypeNames: string[]): void;
export declare function generateArgsIndexFile(sourceFile: SourceFile, typeNames: string[]): void;
export declare function generateModelsBarrelFile(sourceFile: SourceFile, modelNames: string[]): void;
export declare function generateEnumsBarrelFile(sourceFile: SourceFile, enumTypeNames: string[]): void;
export declare function generateInputsBarrelFile(sourceFile: SourceFile, inputTypeNames: string[]): void;
export declare function generateOutputsBarrelFile(sourceFile: SourceFile, outputTypeNames: string[], hasSomeArgs: boolean): void;
export declare function generateIndexFile(sourceFile: SourceFile, hasSomeRelations: boolean): void;
export declare function generateResolversBarrelFile(type: "crud" | "relations", sourceFile: SourceFile, resolversData: GenerateMappingData[]): void;
export declare function generateResolversActionsBarrelFile(sourceFile: SourceFile, resolversData: GenerateMappingData[]): void;
export declare function generateResolversIndexFile(sourceFile: SourceFile, type: "crud" | "relations", hasSomeArgs: boolean): void;
export declare const generateModelsImports: (sourceFile: SourceFile, elementsNames: string[], level?: number) => void;
export declare const generateEnumsImports: (sourceFile: SourceFile, elementsNames: string[], level?: number) => void;
export declare const generateInputsImports: (sourceFile: SourceFile, elementsNames: string[], level?: number) => void;
export declare const generateOutputsImports: (sourceFile: SourceFile, elementsNames: string[], level?: number) => void;
export declare const generateResolversOutputsImports: (sourceFile: SourceFile, elementsNames: string[], level?: number) => void;
export declare const generateArgsImports: (sourceFile: SourceFile, elementsNames: string[], level?: number) => void;