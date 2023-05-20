import {forwardRef, Fragment, Ref} from "react";
import type {ComponentInjectPropsType} from "./type";

export function ComponentInject<Props>(params: ComponentInjectPropsType) {
    return forwardRef((props: Props, ref: Ref<any>) => {
        const { providers, template, app: App, services, containers } = params;
        let list: ComponentInjectPropsType["providers"] = [];

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

        return (
            <Fragment>
                {list.reduceRight((children, Provider) => {
                    return <Provider>{children}</Provider>;
                }, <App {...props} ref={ref} />)}
            </Fragment>
        );
    });
}
