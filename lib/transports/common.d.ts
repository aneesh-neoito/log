export interface IPrettylog {
    colors?: boolean;
}
export declare function prettylog(options: IPrettylog): (info: any) => string;
