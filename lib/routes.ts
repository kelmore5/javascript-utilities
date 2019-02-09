export class RouteGenerator {
    public static admin: (route: string) => string = route => '/admin/' + route;
    public static api: (api_url: string, route: string) => string = (api_url, route) => api_url + '/' + route;

    public static createRoute: (params: string[], addSlash: boolean) => string =
        (params, addSlash) => (addSlash ? '/' : '') + params.join('/');

    public api_url: string;
    public routes: any;

    public api: (route: string) => string = route => RouteGenerator.api(this.api_url, route);

    constructor(api_url: string, routes: any) {
        this.api_url = api_url;
        this.routes = routes;
    }

    public static removeRoute(route: string, idx = 1): string {
        for (let i = 0; i < idx; i++) {
            const index = route.indexOf('/');
            if (index >= 0) {
                route = route.substring(index + 1);
            } else {
                return route;
            }
        }
        return route;
    }
}
