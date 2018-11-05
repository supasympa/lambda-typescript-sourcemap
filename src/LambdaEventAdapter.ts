require('source-map-support').install();

export abstract class LambdaEventAdapter{
    public static convert(awsEvent: any){
        return awsEvent; // doesn't need any conversion when invoked directly!
    }
}
