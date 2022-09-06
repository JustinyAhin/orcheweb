import { sdk } from "./client";

const {
    data: {
        SettingsItem: { content: settings },
    },
} = await sdk.SiteSettings();

const {
    data: {
        CasestudyItems: { items: caseStudies }
    }
} = await sdk.CaseStudies();

export { settings, caseStudies };
