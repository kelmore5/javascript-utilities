class PromiseTools {

    public static logOnCatch<T extends Promise<any> | Promise<any>[]>(promises: T): T {
        if (Array.isArray(promises)) {
            return <any> promises.map(promise => promise.catch(console.log));
        } else {
            return (<any> promises).catch(console.log);
        }
    }

    public static resTrue(promise: Promise<any>, callback?: Function) {
        return promise.then(() => true)
            .catch(err => callback ? callback(err) : console.log(err));
    }
}

export declare type PromiseCheck = Promise<any> | Promise<any>[];

export {PromiseTools as promises}