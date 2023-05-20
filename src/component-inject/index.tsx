import { forwardRef, Fragment, Ref } from "react";
import type { ComponentInjectPropsType, FunctionHasChildrenType } from "./type";

export function ComponentInject<Props>(params: ComponentInjectPropsType) {
    const { providers, template, app: App, services, containers } = params;
    let list: Array<FunctionHasChildrenType> = [];

    if (containers) {
        list = list.concat(containers);
    }
    if (services) {
        list = list.concat(services);
    }
    if (providers) {
        list = list.concat(providers);
    }
    if (template) {
        list = list.concat(template);
    }

    return forwardRef((props: Props, ref?: Ref<any>) => {
        return (
            <Fragment>
                {list.reduceRight((children, Provider) => {
                    return <Provider>{children}</Provider>;
                }, <App {...props} ref={ref} />)}
            </Fragment>
        );
    });
}
