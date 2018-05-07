export abstract class TemplateBaseDTO {

    /**
     * Evaluate
     */
    public abstract Evaluate(data: any): boolean;

    /**
     * IsValid
     */
    public abstract IsValid(): boolean;

}

