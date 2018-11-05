
interface TypeScriptSourceMapCheckRequest {
    throwError: boolean
}

export abstract class Service {
    public static invoke(req: TypeScriptSourceMapCheckRequest){
        if(!! req.throwError){
            throw new Error('TypeScript Error: ~Service.ts~ line 9.')
        }else{
            console.log('No TypeScript Error: ~Service.ts~ line 11');
            console.trace();
        }
    }
}
