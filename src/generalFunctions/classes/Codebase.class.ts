import { ReSiCodebaseSettingsType } from "../../types/codebase";
import { scriptInfo } from "../scriptInfo";

export class ReSiCodebase {
    version: string;
    settings: ReSiCodebaseSettingsType;
    isProduction: boolean;
    constructor(s:ReSiCodebaseSettingsType) {
        this.version = scriptInfo.version
        this.settings = s;
        this.isProduction = scriptInfo.isProduktion;
    }
    getSettings() {
        return this.settings;
    }
    getVersion() {
        return this.version;
    }
    getProduction() {
        return this.isProduction;
    }
}